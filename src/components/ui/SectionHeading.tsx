import { content } from "@/config/content";
export function SectionHeading({ number, label, title, id }: { number: string; label: string; title: string; id: string }) {
 return <><div className="chapter"><span>{content.ui.chapter} {number}</span><span className="chapter-line" /><span>{label}</span></div><h2 id={id} className="section-title">{title}</h2></>;
}
