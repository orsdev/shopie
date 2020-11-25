import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import toggleCart from '../redux/actions/toggleCart.action';

const CartMenu = () => {
  const { displayCart } = useSelector((state) => state.toggleCart);
  const dispatch = useDispatch();

  function hideCart() {
    dispatch(toggleCart('hide'));
  }

  return (
    <aside className="cart-menu" display={displayCart}>
      <div className="cart-menu-container">
        <div className="cart-menu-container-hide"> &nbsp;</div>
        <div className="cart-menu-container-show">
          <div className="cart-menu-container-show-header">
            <h2>Cart</h2>
            <i onClick={hideCart} className="fa fa-times" aria-hidden="true" />
          </div>
          <div className="cart-menu-container-show-body mt-4">
            <div className="cart-menu-card">
              <img
                src="https://ae01.alicdn.com/kf/HTB13yaiacvrK1Rjy0Feq6ATmVXaO/Retro-Genuine-Leather-Men-s-Backpack-Large-Capacity-Laptop-Bag-School-Backpack-Male-Shoulder-Bags-Brown.jpg"
                height="auto"
                alt="productImage"
              />
              <div className="cart-menu-card-details ml-3">
                <h3 className="cart-menu-card-name">
                  Go backpack with brown straps and buckles.
              </h3>
                <p className="cart-menu-card-price-and-quantity">
                  25 x 3
              </p>
              </div>
            </div>
            <div className="cart-menu-card">
              <img
                src="https://ae01.alicdn.com/kf/HTB13yaiacvrK1Rjy0Feq6ATmVXaO/Retro-Genuine-Leather-Men-s-Backpack-Large-Capacity-Laptop-Bag-School-Backpack-Male-Shoulder-Bags-Brown.jpg"
                height="auto"
                alt="productImage"
              />
              <div className="cart-menu-card-details ml-3">
                <h3 className="cart-menu-card-name">
                  Go backpack with brown straps and buckles.
              </h3>
                <p className="cart-menu-card-price-and-quantity">
                  25 x 3
              </p>
              </div>
            </div>
            <div className="cart-menu-card">
              <img
                src="https://ae01.alicdn.com/kf/HTB13yaiacvrK1Rjy0Feq6ATmVXaO/Retro-Genuine-Leather-Men-s-Backpack-Large-Capacity-Laptop-Bag-School-Backpack-Male-Shoulder-Bags-Brown.jpg"
                height="auto"
                alt="productImage"
              />
              <div className="cart-menu-card-details ml-3">
                <h3 className="cart-menu-card-name">
                  Go backpack with brown straps and buckles.
              </h3>
                <p className="cart-menu-card-price-and-quantity">
                  25 x 3
              </p>
              </div>
            </div>
            <div className="cart-menu-card">
              <img
                src="https://ae01.alicdn.com/kf/HTB13yaiacvrK1Rjy0Feq6ATmVXaO/Retro-Genuine-Leather-Men-s-Backpack-Large-Capacity-Laptop-Bag-School-Backpack-Male-Shoulder-Bags-Brown.jpg"
                height="auto"
                alt="productImage"
              />
              <div className="cart-menu-card-details ml-3">
                <h3 className="cart-menu-card-name">
                  Go backpack with brown straps and buckles.
              </h3>
                <p className="cart-menu-card-price-and-quantity">
                  25 x 3
              </p>
              </div>
            </div>
            <div className="cart-menu-card">
              <img
                src="https://ae01.alicdn.com/kf/HTB13yaiacvrK1Rjy0Feq6ATmVXaO/Retro-Genuine-Leather-Men-s-Backpack-Large-Capacity-Laptop-Bag-School-Backpack-Male-Shoulder-Bags-Brown.jpg"
                height="auto"
                alt="productImage"
              />
              <div className="cart-menu-card-details ml-3">
                <h3 className="cart-menu-card-name">
                  Go backpack with brown straps and buckles.
              </h3>
                <p className="cart-menu-card-price-and-quantity">
                  25 x 3
              </p>
              </div>
            </div>
          </div>
          <button
            className="d-block my-5 w-75 mx-auto btn-dark btn-lg btn rounded-0 font-weight-bold py-3"
            type="button">
            Checkout
        </button>
        </div>
      </div>
    </aside>
  )
};

export default CartMenu;
