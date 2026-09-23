import { ArrowDown, ArrowUpRight, Gift } from "lucide-react";
import { content } from "@/config/content";
import { SceneLoader } from "@/components/three/SceneLoader";
import { BirthdayDecor } from "@/components/ui/BirthdayDecor";
export function OpeningSection() {
 return <section id="opening" className="opening" aria-labelledby="opening-title"><div className="opening-glow" /><BirthdayDecor /><div className="hero-content"><p className="hero-label"><Gift size={15} aria-hidden="true" />{content.opening.label}</p><h1 id="opening-title">{content.opening.title}</h1><p className="hero-subtitle">{content.opening.subtitle}</p><p className="hero-note">{content.opening.note}</p><a href={content.birthdayTitle.enabled ? "#birthday" : "#about"} className="continue-button">{content.ui.continue}<ArrowUpRight size={18} aria-hidden="true" /></a></div><SceneLoader /><div className="hero-bottom"><span><ArrowDown size={15} aria-hidden="true" />{content.ui.scroll}</span><span className="recipient-signature">{content.recipient.name}</span></div></section>;
}
