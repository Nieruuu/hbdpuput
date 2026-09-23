import { content } from "@/config/content";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
export function AcceptanceSection() {
 return <section id="acceptance" className="section acceptance-section" aria-labelledby="acceptance-title"><SectionHeading number="05" label={content.acceptanceTitle.label} title={content.acceptanceTitle.title} id="acceptance-title" /><div className="acceptance-copy">{content.acceptance.map((text, i) => <Reveal key={text}><p className={i===1 || i===content.acceptance.length-1 ? "emphasis" : ""}>{text}</p></Reveal>)}</div></section>;
}

