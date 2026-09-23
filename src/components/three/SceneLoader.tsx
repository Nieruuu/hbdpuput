"use client";
import dynamic from "next/dynamic";
import { Component, useEffect, useRef, useState, type ReactNode } from "react";
import { BirthdayCake } from "@/components/ui/BirthdayCake";
import { content } from "@/config/content";
import { Sparkles, RotateCcw } from "lucide-react";
const Scene = dynamic(() => import("./OpeningScene"), { ssr: false, loading: () => null });
class SceneBoundary extends Component<{ children: ReactNode }, { failed: boolean }> {
 state = { failed: false };
 static getDerivedStateFromError() { return { failed: true }; }
 render() { return this.state.failed ? null : this.props.children; }
}
export function SceneLoader() {
 const ref = useRef<HTMLDivElement>(null);
 const [ready, setReady] = useState(false);
 const [blown, setBlown] = useState(false);
 const [visible, setVisible] = useState(true);
 useEffect(() => {
   const activate = () => {
     try { const canvas = document.createElement("canvas"); const gl = canvas.getContext("webgl2"); if (gl) { gl.getExtension("WEBGL_lose_context")?.loseContext(); setReady(true); } } catch {}
   };
   activate();
   const observer = new IntersectionObserver(([entry]) => setVisible(entry.isIntersecting), { rootMargin: "100px" });
   if (ref.current) observer.observe(ref.current);
   return () => { observer.disconnect(); };
 }, []);
 return <div className="hero-scene" ref={ref}><div className="cake-art" aria-hidden="true"><BirthdayCake blown={blown} /><SceneBoundary>{ready && <Scene visible={visible} blown={blown} />}</SceneBoundary></div><div className="cake-interaction"><p className="cake-note">{content.opening.cakeNote}</p><button className="wish-button" onClick={() => setBlown(v => !v)}>{blown ? <RotateCcw size={15} aria-hidden="true" /> : <Sparkles size={16} aria-hidden="true" />}{blown ? content.opening.relight : content.opening.wish}</button><p className="wish-status" role="status">{blown ? content.opening.wishMade : ""}</p></div></div>;
}


