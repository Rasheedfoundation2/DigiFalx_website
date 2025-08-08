
'use client';

import { useState, useEffect, useRef } from 'react';
import FOG from 'vanta/dist/vanta.fog.min';
import * as THREE from 'three';

const HeroWebGL = () => {
  const [vantaEffect, setVantaEffect] = useState<any>(null);
  const vantaRef = useRef(null);

  useEffect(() => {
    if (!vantaEffect) {
      setVantaEffect(
        FOG({
          el: vantaRef.current,
          THREE: THREE,
          mouseControls: true,
          touchControls: true,
          gyroControls: false,
          minHeight: 200.0,
          minWidth: 200.0,
          highlightColor: 0x220055, // A subtle purple/magenta hint
          midtoneColor: 0x8a00ff,   // Hyper Magenta
          lowlightColor: 0x0,      // Dark
          baseColor: 0x0D0D18,     // Your background color
          blurFactor: 0.6,
          speed: 1.2,
          zoom: 0.8
        })
      );
    }
    // Cleanup function to destroy the Vanta effect when the component unmounts
    return () => {
      if (vantaEffect) vantaEffect.destroy();
    };
  }, [vantaEffect]);

  return (
    <div
      ref={vantaRef}
      className="absolute inset-0 z-0 h-full w-full"
    />
  );
};

export default HeroWebGL;

