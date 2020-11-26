import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import StripeCheckoutBtn from '../components/stripeButton';
import { clearItem, addItemToCart, reduceItemQty } from '../redux/actions/cart.action';

const getTotalPrice = (item) => {
  if (item.length) {
    const getPrice = item.map((itm) => {
      return itm.price * itm.quantityInCart;
    }).reduce((a, b) => a + b);
    return Math.floor(getPrice);
  }
}

function Checkout() {

  const { cartItems } = useSelector((state) => state.cart);
  const { httpError } = useSelector((state) => state.error);
  const dispatch = useDispatch();

  function clearItemFromCart(id) {
    dispatch(clearItem(id));
  }

  function increaseItemQty(id) {
    const findProduct = cartItems.find((item) => item.id === id);
    dispatch(addItemToCart(findProduct))
  }

  function reduceQty(id) {
    dispatch(reduceItemQty(id))
  }

  return (
    <section className="checkout container-fluid ">
      {httpError ?
        (
          <div className="alert alert-danger w-75 mx-auto text-center" role="alert">
            <strong className="h3">{httpError}</strong>
          </div>
        )
        : null}
      <h2 className="checkout--header display-3 text-center">Checkout</h2>
      <div className="checkout--title-heading">
        <div><span>Image</span></div>
        <div><span>Quantity</span></div>
        <div><span>Price</span></div>
        <div><span>Remove</span></div>
      </div>
      {
        cartItems.length ? (
          cartItems.map((item) => {
            return (
              <div className='checkout--item-row' key={item.key + item.title}>
                <img
                  src={item.image}
                  height="auto"
                  alt={item.title}
                />
                <span className='checkout--item-qty-indicator'>
                  <div
                    onClick={() => reduceQty(item.id)}
                    style={{ cursor: 'pointer' }}>❮</div>
                  <span style={{ margin: '0px 5px' }}>{item.quantityInCart}</span>
                  <div
                    onClick={() => increaseItemQty(item.id)}
                    style={{ cursor: 'pointer' }}>❯</div>
                </span>
                <span className='checkout--item-price'>${item.price * item.quantityInCart} </span>
                <div
                  className='checkout--item-remove-button'
                  onClick={() => clearItemFromCart(item.id)} >✕</div>
              </div>
            )
          })) : (
            <h2 className="w-100 text-center py-5">Checkout is empty.</h2>
          )
      }
      {cartItems.length ?

        <StripeCheckoutBtn
          price={getTotalPrice(cartItems)} /> : null}
    </section>
  )
}

export default Checkout;
