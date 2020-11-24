import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import Logo from '../assets/images/shopie.gif';

const LoadingScreen = () => {
  const logoRef = useRef(null);
  const containerRef = useRef(null);
  const tl = gsap.timeline({ paused: true });

  useEffect(() => {
    tl.play();

    tl.to(logoRef.current, {
      duration: 2,
      opacity: 0,
    });

    tl.to(containerRef.current, {
      duration: 1,
      opacity: 0,
    });
  }, []);

  return (
    <section
      className="loading-screen container-fluid"
      ref={containerRef}>
      <img src={Logo} alt="Shopie" />
    </section>
  );
};

export default LoadingScreen;
