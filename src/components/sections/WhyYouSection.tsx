"use client";
import { Fingerprint, MessageCircle, Telescope } from "lucide-react";
import { content } from "@/config/content";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { useExperience } from "@/hooks/useExperience";
const icons = [MessageCircle, Fingerprint, Telescope];
export function WhyYouSection() {
 const { still } = useExperience();
 return <section id="why" className="section why-section" aria-labelledby="why-title"><SectionHeading number="03" label={content.why.label} title={content.why.title} id="why-title" /><div className="reason-grid">{content.whyYou.map((reason, i) => { const Icon = icons[i % icons.length]; return <Reveal key={reason.title} delay={i*0.12}><article className="reason-card" onPointerMove={e => { if (still || e.pointerType !== "mouse") return; const r = e.currentTarget.getBoundingClientRect(); e.currentTarget.style.transform = `perspective(900px) rotateX(${-(e.clientY-r.top-r.height/2)/85}deg) rotateY(${(e.clientX-r.left-r.width/2)/85}deg)`; }} onPointerLeave={e => { e.currentTarget.style.transform = ""; }}><Icon size={24} strokeWidth={1.2} aria-hidden="true" /><h3>{reason.title}</h3><p>{reason.description}</p></article></Reveal>; })}</div></section>;
}

