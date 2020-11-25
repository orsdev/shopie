import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import toggleCart from '../redux/actions/toggleCart.action';

const CartMenu = () => {
  const { displayCart } = useSelector((state) => state.toggleCart);
  const { cartItems } = useSelector((state) => state.cart);
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
            <i
              onClick={hideCart}
              className="fa fa-times"
              aria-hidden="true"
            />
          </div>
          <div className="cart-menu-container-show-body mt-4">
            {cartItems.length ? (
              cartItems.map((item) => {
                return (
                  <div className="cart-menu-card" key={item.key + item.title}>
                    <img
                      src={item.image}
                      height="auto"
                      alt={item.title}
                    />
                    <div className="cart-menu-card-details ml-3">
                      <h3 className="cart-menu-card-name">
                        {item.title}
                      </h3>
                      <p className="cart-menu-card-price-and-quantity">
                        ${item.price} x {item.quantityInCart}
                      </p>
                    </div>
                  </div>
                );
              })
            ) : (
                <h2 className="w-100 text-center py-5">Cart is empty.</h2>
              )}
          </div>
          {cartItems.length ? (
            <button
              className="d-block my-5 w-75 mx-auto btn-dark btn-lg btn rounded-0 font-weight-bold py-3"
              type="button">
              Checkout
            </button>
          ) : null}
        </div>
      </div>
    </aside>
  );
};

export default CartMenu;
