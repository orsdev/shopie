import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { useDispatch, useSelector } from 'react-redux';
import getProducts from '../redux/actions/product.action';

function Shop() {
  /*
 destructure & rename allProducts to products
 */
  const { allProducts: products } = useSelector(
    (state) => state.products,
  );
  const dispatch = useDispatch();
  const sectionRef = useRef(null);

  useEffect(() => {
    dispatch(getProducts());
    // eslint-disable-next-line
  }, []);

  // Animation Effect
  useEffect(() => {
    const tl = gsap.timeline();
    tl.from(sectionRef.current, {
      duration: 1.5,
      opacity: 0,
      ease: 'power3.easeOut',
    })
  }, []);

  return (
    <section className="shop container-fluid px-4" ref={sectionRef}>
      <h2 className="shop--header display-3 text-center">Shop</h2>
      <div className="product--grid text-center">
        {
          products && products.map((prod) => {
            return (
              <div className="product--grid-item" key={prod.id + prod.title}>
                <img src={prod.image} alt={prod.title} />
                <p className="product--name">{prod.title.substring(0, 40) + '..'}</p>
                <p className="product--price">${prod.price}</p>
                <p className="product--description">{prod.description.substring(0, 80) + '..'}</p>
                <button type="button" className="btn product--cart-btn">
                  ADD TO CART
                  </button>
              </div>
            )
          })
        }
      </div>
    </section>
  );
}

export default Shop;
