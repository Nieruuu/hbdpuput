import { content } from "@/config/content";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
export function FutureSection() {
 return <section id="future" className="section future-section" aria-labelledby="future-title"><div><SectionHeading number="06" label={content.futureTitle.label} title={content.futureTitle.title} id="future-title" /><p className="section-intro">{content.futureTitle.subtitle}</p><p className="future-note">{content.futureTitle.note}</p></div><ul className="future-list">{content.future.map(text => <li key={text}><Reveal><span className="timeline-dot" />{text}</Reveal></li>)}</ul></section>;
}

