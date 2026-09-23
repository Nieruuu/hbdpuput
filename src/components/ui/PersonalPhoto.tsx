"use client";
import Image from "next/image";
import { useState } from "react";
import { content } from "@/config/content";
export function PersonalPhoto() {
 const [failed, setFailed] = useState(false);
 return <div className="personal-photo">{content.photo.src && !failed ? <Image src={content.photo.src} alt={content.photo.alt} fill sizes="(max-width: 768px) 85vw, 420px" className="object-cover" onError={() => setFailed(true)} /> : <div className="photo-abstract" aria-hidden="true"><div className="abstract-orbit" /><div className="abstract-orbit second" /><span className="abstract-light" /></div>}</div>;
}
