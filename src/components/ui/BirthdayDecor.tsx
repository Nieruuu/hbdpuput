import { Sparkle } from "lucide-react";
export function BirthdayDecor() { return <div className="birthday-decor" aria-hidden="true">{Array.from({length:7},(_,i)=><Sparkle key={i} className={`party-star star-${i}`} strokeWidth={1.3} />)}<span className="ribbon ribbon-one" /><span className="ribbon ribbon-two" /><span className="party-dot dot-one" /><span className="party-dot dot-two" /></div>; }

