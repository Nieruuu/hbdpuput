import { content } from "@/config/content";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { PersonalPhoto } from "@/components/ui/PersonalPhoto";
export function AboutSection() {
 return <section id="about" className="section about-section" aria-labelledby="about-title"><div className="about-grid"><div><SectionHeading number="02" label={content.about.label} title={content.about.title} id="about-title" /><div className="body-copy">{content.about.paragraphs.map(text => <Reveal key={text}><p>{text}</p></Reveal>)}</div></div><Reveal className="photo-wrap"><PersonalPhoto /><span className="photo-caption">{content.recipient.name}</span></Reveal></div></section>;
}

