import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';

function Banner() {
  const bannerRef = useRef(null);
  const pRef = useRef(null);
  const buttonRef = useRef(null);

  useEffect(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: bannerRef.current,
        start: '40% 90%',
        end: 'bottom top',
      },
    });

    tl.from(pRef.current, {
      duration: 1,
      autoAlpha: 0,
      ease: 'back',
    });

    tl.from(
      buttonRef.current,
      {
        duration: 1,
        autoAlpha: 0,
        ease: 'back',
      },
      0.3,
    );
  }, []);

  return (
    <section className="banner w-100" ref={bannerRef}>
      <p className="banner--text text-light" ref={pRef}>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ea
        blanditiis autem amet quidem voluptatem voluptatibus fugit
        quos suscipit veritatis corrupti!
      </p>
      <button
        ref={buttonRef}
        className="banner--btn btn btn-danger btn-lg text-light py-3 px-4"
        type="button">
        SHOP NOW
      </button>
    </section>
  );
}

export default Banner;
