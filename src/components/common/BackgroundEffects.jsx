import React, { useEffect, useRef } from "react";
import styled from "styled-components";

const BackgroundGrid = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  /* background-image: linear-gradient(rgba(255, 140, 0, 0.1) 1px, transparent 1px),
    linear-gradient(90deg, rgba(255, 140, 0, 0.1) 1px, transparent 1px); */
  background-size: 50px 50px;
  animation: gridMove 10s linear infinite;
  z-index: -2;
`;

const ParticlesContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  pointer-events: none;
  z-index: -1;
`;

const Particle = styled.div`
  position: absolute;
  width: 2px;
  height: 2px;
  background: #ff8c00;
  border-radius: 50%;
  opacity: 0.7;
  animation: float 6s ease-in-out infinite;
`;

const BackgroundEffects = () => {
  const particlesRef = useRef(null);

  useEffect(() => {
    const createParticles = () => {
      const particlesContainer = particlesRef.current;
      if (!particlesContainer) return;

      const particleCount = 50;

      for (let i = 0; i < particleCount; i++) {
        const particle = document.createElement("div");
        particle.className = "particle";

        // مواقع عشوائية
        const posX = Math.random() * 100;
        const posY = Math.random() * 100;

        // تأخير عشوائي للأنيميشن
        const delay = Math.random() * 6;

        particle.style.left = `${posX}%`;
        particle.style.top = `${posY}%`;
        particle.style.animationDelay = `${delay}s`;

        particlesContainer.appendChild(particle);
      }
    };

    createParticles();
  }, []);

  return (
    <>
      <BackgroundGrid />
      <ParticlesContainer ref={particlesRef} />
    </>
  );
};

export default BackgroundEffects;
