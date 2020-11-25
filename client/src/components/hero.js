import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import gsap from 'gsap';

function Hero() {
  const h2Ref = useRef(null);
  const pRef = useRef(null);
  const btnRef = useRef(null);

  // Animation effect
  useEffect(() => {
    const tl = gsap.timeline();
    tl.from(h2Ref.current, {
      duration: 1.5,
      scale: 1.1,
      ease: 'power3.easeOut',
    })
      .from(pRef.current, {
        duration: 1,
        opacity: 0,
        yPercent: 40,
        ease: 'power3.easeOut',
      })
      .from(btnRef.current, { duration: 0.2, autoAlpha: 0 });
  }, []);

  return (
    <section className="hero">
      <div className="hero--body">
        <h2 className="text-light display-3" ref={h2Ref}>
          Style is a way to say who you are without having to speak.
        </h2>
        <p className="text-light" ref={pRef}>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit.
          Nihil placeat atque libero itaque architecto soluta ut
          doloremque nobis delectus aliquam.
        </p>
        <Link
          to="/shop"
          className="btn btn-outline-light btn-lg mt-2"
          type="button"
          ref={btnRef}>
          Shop Now
        </Link>

      </div>
    </section>
  );
}

export default Hero;
