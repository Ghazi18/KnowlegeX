// import React, { useEffect, useRef } from "react";
// import { Canvas, useFrame, useThree } from "@react-three/fiber";
// import { OrbitControls, Sphere } from "@react-three/drei";
// import { pointsInner, pointsOuter } from "../utils";

// const MIN_DISTANCE = 10;
// const MAX_DISTANCE = 20;
// const EPS = 0.08;

// // اضبطها true إذا لاحظت أن اتجاهات العجلة معكوسة على جهازك
// const INVERT_SCROLL_DIRECTION = true;

// export default function ParticleRing({
//   nextSectionId = "next-section",
//   prevSectionId = "prev-section",
// }) {
//   return (
//     <div className="relative">
//       <Canvas
//         camera={{ position: [10, -7.5, -5] }}
//         style={{ height: "100vh" }}
//         className="bg-slate-900"
//       >
//         <Scene
//           nextSectionId={nextSectionId}
//           prevSectionId={prevSectionId}
//         />
//       </Canvas>

//       <h1 className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-slate-200 font-medium text-2xl md:text-5xl pointer-events-none">
//         Drag &amp; Zoom
//       </h1>
//     </div>
//   );
// }

// function Scene({ nextSectionId, prevSectionId }) {
//   const controlsRef = useRef(null);
//   const { camera, gl } = useThree();

//   const goTo = (id) => {
//     const el = document.getElementById(id);
//     if (!el) return;
//     if (controlsRef.current) {
//       controlsRef.current.enabled = false;
//       setTimeout(() => {
//         if (controlsRef.current) controlsRef.current.enabled = true;
//       }, 800);
//     }
//     el.scrollIntoView({ behavior: "smooth", block: "start" });
//   };

//   const goNext = () => nextSectionId && goTo(nextSectionId);
//   const goPrev = () => prevSectionId && goTo(prevSectionId);

//   // عند انتهاء التفاعل: لو على أقل مسافة، استخدم آخر اتجاه للعجلة لتقرير الوجهة
//   const lastDirRef = useRef(0);
//   const handleEnd = () => {
//     const c = controlsRef.current;
//     if (!c) return;
//     const dist = camera.position.distanceTo(c.target);
//     if (dist <= MIN_DISTANCE + EPS) {
//       if (lastDirRef.current > 0) goNext();
//       else if (lastDirRef.current < 0) goPrev();
//     }
//   };

//   // استمع لـ wheel على الـ canvas مباشرة
//   useEffect(() => {
//     const dom = gl.domElement;
//     if (!dom) return;

//     const onWheel = (e) => {
//       const c = controlsRef.current;
//       if (!c) return;

//       // اتجاه العجلة: موجب = نزول، سالب = طلوع (عادةً)
//       let dy = e.deltaY;
//       if (INVERT_SCROLL_DIRECTION) dy = -dy;
//       lastDirRef.current = dy;

//       const dist = camera.position.distanceTo(c.target);

//       // إذا وصلنا أقل مسافة: بدال ما نكمل زوم، نحرّك الصفحة
//       if (dist <= MIN_DISTANCE + EPS) {
//         e.preventDefault();
//         if (dy > 0) goNext(); // نزول -> سيكشن التالي
//         else if (dy < 0) goPrev(); // طلوع -> سيكشن السابق
//       }
//     };

//     dom.addEventListener("wheel", onWheel, { passive: false });
//     return () => dom.removeEventListener("wheel", onWheel);
//   }, [gl, camera, nextSectionId, prevSectionId]);

//   return (
//     <>
//       <OrbitControls
//         ref={controlsRef}
//         enablePan={false}
//         minDistance={MIN_DISTANCE}
//         maxDistance={MAX_DISTANCE}
//         onEnd={handleEnd}
//       />
//       <directionalLight />
//       <pointLight position={[-30, 0, -30]} power={10.0} />
//       <PointCircle />
//     </>
//   );
// }

// function PointCircle() {
//   const ref = useRef(null);
//   useFrame(({ clock }) => {
//     if (ref.current?.rotation) {
//       ref.current.rotation.z = clock.getElapsedTime() * 0.05;
//     }
//   });
//   return (
//     <group ref={ref}>
//       {pointsInner.map((p) => (
//         <Point key={`in-${p.idx}`} position={p.position} color={p.color} />
//       ))}
//       {pointsOuter.map((p) => (
//         <Point key={`out-${p.idx}`} position={p.position} color={p.color} />
//       ))}
//     </group>
//   );
// }

// function Point({ position, color }) {
//   return (
//     <Sphere position={position} args={[0.1, 10, 10]}>
//       <meshStandardMaterial
//         emissive={color}
//         emissiveIntensity={0.5}
//         roughness={0.5}
//         color={color}
//       />
//     </Sphere>
//   );
// }
