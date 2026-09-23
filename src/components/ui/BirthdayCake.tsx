export function BirthdayCake({ blown = false }: { blown?: boolean }) {
 return <div className={`cake-fallback ${blown ? "blown" : ""}`} aria-hidden="true"><div className="cake-plate" /><div className="cake-layer cake-bottom"><span className="cake-icing" /></div><div className="cake-layer cake-top"><span className="cake-icing" /></div><div className="cake-candles">{[0,1,2].map(i=><span className="cake-candle" key={i}><i className="candle-flame" /></span>)}</div></div>;
}
