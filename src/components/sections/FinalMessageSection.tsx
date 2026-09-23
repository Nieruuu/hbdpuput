import { ChevronDown, Mail } from "lucide-react";
import { content } from "@/config/content";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
export function FinalMessageSection() {
 return <section id="final" className="final-section" aria-labelledby="final-title"><div className="final-letter"><div className="letter-icon"><Mail size={27} strokeWidth={1.3} aria-hidden="true" /></div><SectionHeading number="07" label={content.finalTitle.label} title={content.finalTitle.title} id="final-title" /><p className="letter-intro">{content.finalTitle.intro}</p><details className="personal-letter"><summary>{content.finalTitle.read}<ChevronDown size={18} aria-hidden="true" /></summary><div className="letter-copy">{content.finalMessage.map(text => <p key={text}>{text}</p>)}</div></details><Reveal className="final-promise"><p>{content.finalPromise}</p></Reveal></div><div className="quote-scene"><span className="quiet-light" aria-hidden="true" /><Reveal delay={0.45}><blockquote>{content.finalQuote}</blockquote></Reveal><Reveal delay={0.65}><p className="signature">{content.ui.signature}<span>{content.sender.name}</span></p></Reveal></div><footer><span>{content.ui.ending}</span><span>{content.ui.brand}</span></footer></section>;
}
