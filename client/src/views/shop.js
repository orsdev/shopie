import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { useDispatch, useSelector } from 'react-redux';
import getProducts from '../redux/actions/product.action';
import { addItemToCart } from '../redux/actions/cart.action';
import CardSkeleton from '../components/cardSkeleton';

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
    if (!products) {
      dispatch(getProducts());
    }
    // eslint-disable-next-line
  }, []);

  // Animation Effect
  useEffect(() => {
    const tl = gsap.timeline();
    tl.from(sectionRef.current, {
      duration: 1.5,
      opacity: 0,
      ease: 'power3.easeOut',
    });
  }, []);

  function addToCart(itemId) {
    const findProduct = products.find((item) => item.id === itemId);
    dispatch(addItemToCart(findProduct))
  }

  return (
    <section className="shop container-fluid px-4" ref={sectionRef}>
      <h2 className="shop--header display-3 text-center">Shop</h2>
      {!products ? (
        <>
          <div className="container w-75 mx-auto">
            <div className="row">
              <CardSkeleton counts={6} />
            </div>
          </div>
        </>
      ) : null}
      <div className="product--grid text-center">
        {
          products && products.map((prod) => {
            return (
              <div className="product--grid-item" key={prod.id + prod.title}>
                <img src={prod.image} alt={prod.title} />
                <p className="product--name">{prod.title.substring(0, 40) + '..'}</p>
                <p className="product--price">${prod.price}</p>
                <p className="product--description">{prod.description.substring(0, 80) + '..'}</p>
                <button
                  onClick={() => addToCart(prod.id)}
                  type="button"
                  className="btn product--cart-btn">
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
