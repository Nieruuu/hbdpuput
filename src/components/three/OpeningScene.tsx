"use client";
import { Canvas, useFrame } from "@react-three/fiber";
import { Suspense, useEffect, useRef, useState } from "react";
import * as THREE from "three";
import { useExperience } from "@/hooks/useExperience";
function Cake({ still, blown }: { still: boolean; blown: boolean }) {
 const group = useRef<THREE.Group>(null);
 useFrame(({ clock }, delta) => {
   if (!group.current || still) return;
   group.current.position.y = Math.sin(clock.elapsedTime*0.65)*0.045;
   // One full turn every 24 seconds; clamp elapsed time after tab/viewport pauses.
   group.current.rotation.y = (group.current.rotation.y + Math.min(delta, 0.05) * Math.PI / 12) % (Math.PI * 2);
 });
 return <>
   <ambientLight intensity={2.2} />
   <directionalLight position={[-3,5,4]} intensity={3.5} color="#fff5df" />
   <directionalLight position={[3,2,-2]} intensity={2} color="#d8bfff" />
   <group ref={group} rotation={[0,-0.16,0]} position={[0,-0.1,0]}>
     <mesh position={[0,-0.9,0]}><cylinderGeometry args={[1.8,1.73,0.12,64]} /><meshStandardMaterial color="#a788d8" roughness={0.4} /></mesh>
     <mesh position={[0,-0.82,0]}><cylinderGeometry args={[1.62,1.62,0.06,64]} /><meshStandardMaterial color="#fff5ed" /></mesh>
     <mesh position={[0,-0.36,0]}><cylinderGeometry args={[1.36,1.36,0.86,64]} /><meshStandardMaterial color="#e88fab" roughness={0.55} /></mesh>
     <mesh position={[0,0.095,0]}><cylinderGeometry args={[1.38,1.38,0.13,64]} /><meshStandardMaterial color="#fff0dc" roughness={0.55} /></mesh>
     <mesh position={[0,0.43,0]}><cylinderGeometry args={[0.94,0.94,0.62,64]} /><meshStandardMaterial color="#b397de" roughness={0.6} /></mesh>
     <mesh position={[0,0.77,0]}><cylinderGeometry args={[0.97,0.97,0.13,64]} /><meshStandardMaterial color="#fff0df" roughness={0.5} /></mesh>
     {[0,1].map(tier=>Array.from({length:tier?16:22},(_,i)=>{const a=i/(tier?16:22)*Math.PI*2;const radius=tier?0.9:1.32;return <mesh key={`${tier}-${i}`} position={[Math.sin(a)*radius,tier?0.73:0.055,Math.cos(a)*radius]} scale={[0.115,i%2?0.15:0.22,0.115]}><sphereGeometry args={[1,12,10]} /><meshStandardMaterial color="#fff0df" /></mesh>;}))}
     {Array.from({length:24},(_,i)=>{const a=i/24*Math.PI*2;return <mesh key={i} position={[Math.sin(a)*1.34,-0.71,Math.cos(a)*1.34]}><sphereGeometry args={[0.065,10,8]} /><meshStandardMaterial color="#ffe8d6" /></mesh>;})}
     {[-0.45,0,0.45].map((x,i)=><group key={i} position={[x,0.83,i===1?-0.16:0.15]}><mesh position={[0,0.24,0]}><cylinderGeometry args={[0.055,0.055,0.48,16]} /><meshStandardMaterial color={i===1?'#f2adbe':'#ffdaa2'} /></mesh><mesh position={[0,0.5,0]}><cylinderGeometry args={[0.008,0.008,0.05,6]} /><meshBasicMaterial color="#795150" /></mesh>{!blown&&<mesh position={[0,0.6,0]} scale={[0.065,0.14,0.065]}><sphereGeometry args={[1,12,12]} /><meshBasicMaterial color="#ffb957" /></mesh>}</group>)}
   </group>
 </>;
}
export default function OpeningScene({ visible, blown }: { visible: boolean; blown: boolean }) {
 const { still } = useExperience();
 const [mobile, setMobile] = useState(true);
 const [hidden, setHidden] = useState(false);
 useEffect(() => {
   const media=matchMedia('(max-width:767px)');const update=()=>setMobile(media.matches);update();
   const visibility=()=>setHidden(document.hidden);media.addEventListener('change',update);document.addEventListener('visibilitychange',visibility);
   return ()=>{media.removeEventListener('change',update);document.removeEventListener('visibilitychange',visibility);};
 }, []);
 return <Canvas dpr={mobile?1:[1,1.5]} camera={{position:[0,2.4,6.8],fov:36}} gl={{antialias:!mobile,alpha:true,powerPreference:'low-power'}} frameloop={still||hidden||!visible?'demand':'always'}><Suspense fallback={null}><Cake still={still||hidden||!visible} blown={blown} /></Suspense></Canvas>;
}
