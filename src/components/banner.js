import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';

function Banner() {
  const bannerRef = useRef(null);

  useEffect(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: bannerRef.current,
        start: '40% 90%',
        end: 'bottom top',
      },
    });

    tl.from(bannerRef.current, {
      duration: 1,
      scale: 1.2,
    });
  }, []);

  return (
    <section className="banner w-100" ref={bannerRef}>
      <p className="banner--text text-light">
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ea
        blanditiis autem amet quidem voluptatem voluptatibus fugit
        quos suscipit veritatis corrupti!
      </p>
      <button
        className="banner--btn btn btn-danger btn-lg text-light py-3 px-4"
        type="button">
        SHOP NOW
      </button>
    </section>
  );
}

export default Banner;
