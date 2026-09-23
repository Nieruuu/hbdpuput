"use client";
import { useEffect, useRef, useState } from "react";
import { ArrowUp, AudioLines, Pause, Play } from "lucide-react";
import { content } from "@/config/content";
import { useExperience } from "@/hooks/useExperience";
export function StoryChrome() {
 const { still, toggle } = useExperience();
 const audio = useRef<HTMLAudioElement>(null);
 const musicControlled = useRef(false);
 const [playing, setPlaying] = useState(false);
 const [available, setAvailable] = useState(false);
 const [busy, setBusy] = useState(false);
 const [error, setError] = useState(false);
 const [progress, setProgress] = useState(0);
 useEffect(() => {
   const controller = new AbortController();
   fetch(content.music.src, { method: "HEAD", signal: controller.signal }).then(r => setAvailable(r.ok && !r.headers.get("content-type")?.includes("text/html"))).catch(() => {});
   const update = () => { const height = document.documentElement.scrollHeight - innerHeight; setProgress(height > 0 ? scrollY / height : 0); };
   addEventListener("scroll", update, { passive: true }); addEventListener("resize", update); update();
   return () => { controller.abort(); removeEventListener("scroll", update); removeEventListener("resize", update); };
 }, []);
 useEffect(() => {
   const element = audio.current;
   if (!available || !element) return;
   let cancelled = false;
   element.volume = content.music.volume;
   const removeListeners = () => {
     document.removeEventListener("click", startOnInteraction);
     document.removeEventListener("pointerdown", startOnInteraction);
     document.removeEventListener("touchstart", startOnInteraction);
     document.removeEventListener("keydown", startOnInteraction);
     document.removeEventListener("scroll", startOnInteraction);
   };
   const attemptPlay = async () => {
     if (cancelled || musicControlled.current) return;
     try {
       await element.play();
       if (!cancelled) removeListeners();
     } catch (cause) {
       // A browser autoplay denial is expected: retry on a user gesture.
       if (!cancelled && cause instanceof DOMException && cause.name !== "NotAllowedError" && cause.name !== "AbortError") setError(true);
     }
   };
   function startOnInteraction(event: Event) {
     if (event.target instanceof Element && event.target.closest(".music-toggle")) return;
     if (event instanceof KeyboardEvent && (event.repeat || event.ctrlKey || event.metaKey || event.altKey)) return;
     void attemptPlay();
   }
   document.addEventListener("click", startOnInteraction);
   document.addEventListener("pointerdown", startOnInteraction, { passive: true });
   document.addEventListener("touchstart", startOnInteraction, { passive: true });
   document.addEventListener("keydown", startOnInteraction);
   document.addEventListener("scroll", startOnInteraction, { passive: true });
   void attemptPlay();
   return () => { cancelled = true; removeListeners(); };
 }, [available]);
 async function toggleMusic() {
   if (!audio.current || busy) return;
   musicControlled.current = true;
   if (!audio.current.paused) { audio.current.pause(); return; }
   setBusy(true); setError(false); audio.current.volume = content.music.volume;
   try { await audio.current.play(); } catch { setError(true); } finally { setBusy(false); }
 }
 const musicLabel = error ? content.ui.musicError : busy ? content.ui.musicLoading : !available ? content.ui.musicMissing : playing ? content.ui.pause : content.ui.play;
 return <>
   <div className="reading-progress" style={{ transform: `scaleX(${progress})` }} />
   <header className="site-header"><a href="#opening" className="wordmark">{content.ui.brand}<span className="brand-dot" /></a>
   <nav aria-label={content.ui.navigation}>{content.ui.nav.map(item => <a key={item.href} href={item.href}>{item.label}</a>)}</nav>
   <span className="header-note">{content.ui.dedication}</span></header>
   <div className="experience-controls">
     <button className="motion-toggle" onClick={toggle} aria-label={still ? content.ui.motionPlay : content.ui.motionPause} title={still ? content.ui.motionPlay : content.ui.motionPause} aria-pressed={still}>{still ? <Play size={14} /> : <Pause size={14} />}</button>
     <button className="music-toggle" onClick={toggleMusic} disabled={!available || busy} aria-pressed={playing} title={musicLabel}><AudioLines size={16} aria-hidden="true" /><span>{musicLabel}</span>{playing && <span className="playing-dot" />}</button>
     {progress > 0.1 && <a className="top-link" href="#opening" aria-label={content.ui.back}><ArrowUp size={16} /></a>}
   </div>
   <span className="sr-only" role="status">{error ? content.ui.musicError : ""}</span>
   {available && <audio ref={audio} src={content.music.src} preload="auto" loop onPlay={() => setPlaying(true)} onPause={() => setPlaying(false)} onError={() => { setError(true); setPlaying(false); }} />}
 </>;
}
