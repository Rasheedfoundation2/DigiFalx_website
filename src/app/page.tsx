
'use client'; // This component requires client-side interactivity for animations

import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { useGSAP } from '@gsap/react';
import { Analytics } from "@vercel/analytics/next"

// You would get this from your project setup, e.g., in a layout file.
// For now, it's here for demonstration.
const Section = ({ children, className }: { children: React.ReactNode, className?: string }) => (
  <section className={`relative overflow-hidden ${className}`}>
    <div className="container mx-auto px-4">
      {children}
    </div>
  </section>
);


export default function CinematicHomePage() {
  const container = useRef(null);

  useGSAP(() => {
    const tl = gsap.timeline();
    tl.from(".reveal-line-1", { y: 100, opacity: 0, skewY: 7, duration: 1.5, ease: "power4.out" })
      .from(".reveal-line-2", { y: 100, opacity: 0, skewY: 7, duration: 1.5, ease: "power4.out" }, "-=1.3")
      .from("#cta-button", { opacity: 0, scale: 0.8, duration: 1, ease: "elastic.out(1, 0.5)" }, "-=0.75");
  }, { scope: container });

  return (
    <div ref={container} className="relative h-full w-full">
      <section className="relative flex h-[calc(100vh-4rem)] w-full items-center justify-center text-center">
        <video
          autoPlay loop muted playsInline
          className="absolute left-0 top-0 z-0 h-full w-full object-cover brightness-[0.6]"
          src="/videos/sora-hero-loop.mp4"
        />
        <div className="relative z-10 flex flex-col items-center">
          <div className="font-heading text-4xl font-bold text-white md:text-6xl lg:text-7xl">
            <div className="overflow-hidden py-2"><h1 className="reveal-line-1">Stop Predicting The Future.</h1></div>
            <div className="overflow-hidden py-2"><h1 className="reveal-line-2 text-neon-cyan">Start Architecting It.</h1></div>
          </div>
          <button id="cta-button" className="group relative mt-12 overflow-hidden rounded-md border-2 border-neon-cyan px-8 py-4 font-heading text-lg font-bold text-white">
            <span className="absolute bottom-0 left-0 h-0 w-full bg-neon-cyan transition-all duration-500 ease-in-out group-hover:h-full"></span>
            <span className="relative transition-colors duration-500 group-hover:text-background">Initiate Protocol</span>
          </button>
        </div>
      </section>
    </div>
  );
}