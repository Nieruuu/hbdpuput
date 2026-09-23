import { Sun, Sprout, Sparkles } from "lucide-react";
import { content } from "@/config/content";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
const icons=[Sun,Sprout,Sparkles];
export function BirthdaySection() {
 if (!content.birthdayTitle.enabled) return null;
 return <section id="birthday" className="section birthday-section" aria-labelledby="birthday-title"><div className="birthday-light" aria-hidden="true" /><Reveal><SectionHeading number="01" label={content.birthdayTitle.label} title={content.birthdayTitle.title} id="birthday-title" /><p className="birthday-intro">{content.birthdayTitle.subtitle}</p><div className="birthday-copy">{content.birthday.map((text,i)=>{const Icon=icons[i%icons.length];return <div className="wish-card" key={text}><Icon size={30} strokeWidth={1.3} aria-hidden="true" /><p>{text}</p></div>;})}</div><p className="birthday-signoff">{content.birthdayTitle.closing}</p></Reveal></section>;
}
