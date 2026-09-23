import { content } from "@/config/content";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
export function WhatISeeSection() {
 return <section id="what-i-see" className="section see-section" aria-labelledby="see-title"><SectionHeading number="04" label={content.whatISee.label} title={content.whatISee.title} id="see-title" /><p className="section-intro">{content.whatISee.intro}</p><div className="floating-words">{content.whatISee.words.map((word, i) => <Reveal key={word} className={`floating-word word-${i}`} delay={i*0.08}><p>{word}</p></Reveal>)}</div><p className="see-closing">{content.whatISee.closing}</p></section>;
}

