import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import toggleCart from '../redux/actions/toggleCart.action';

function CartIcon() {
  const { cartItems } = useSelector((state) => state.cart);
  const dispatch = useDispatch();

  function showCart() {
    dispatch(toggleCart('show'));
  }

  return (
    <>
      <svg onClick={showCart}
        className="cart"
        width="40"
        height="30"
        viewBox="0 0 40 30"
        fill="none"
        xmlns="http://www.w3.org/2000/svg">
        <path
          d="M37.7674 26.9689C37.68 27.0756 37.4845 27.2534 37.163 27.2534H34.203L37.4311 23.6682L37.9334 26.323C37.9926 26.6386 37.8548 26.8623 37.7674 26.9689ZM2.52892 26.9689C2.44151 26.8623 2.30225 26.6386 2.36151 26.323L2.86521 23.6682L6.09336 27.2534H3.13188C2.81188 27.2534 2.61633 27.0756 2.52892 26.9689ZM7.15558 8.243H33.1408C33.9334 8.243 34.6163 8.80893 34.7645 9.58819L35.1526 11.6341H5.14521L5.53188 9.58819C5.68003 8.80893 6.36151 8.243 7.15558 8.243ZM18.9748 27.2534H9.25484L3.41484 20.7674L4.69929 13.9823H18.9748V27.2534ZM36.8815 20.7674L31.043 27.2534H21.323V13.9823H35.5971L36.8815 20.7674ZM16.9348 2.74671H23.36L25.6297 5.86374H14.6667L16.9348 2.74671ZM37.0711 9.14967C36.7141 7.26374 35.0593 5.89486 33.1408 5.89486H28.5571L24.5556 0.39856H15.7393L11.7393 5.89486H7.15558C5.23558 5.89486 3.58373 7.26374 3.22521 9.14967L0.0548438 25.886C-0.11849 26.8045 0.122992 27.7452 0.720029 28.4667C1.31707 29.1882 2.19558 29.6015 3.13188 29.6015H37.163C38.0993 29.6015 38.9793 29.1882 39.5763 28.4667C40.1734 27.7452 40.4148 26.8045 40.2415 25.886L37.0711 9.14967Z"
          fill="white"
        />
      </svg>
      <span
        className="badge badge-danger cart-badge">
        {cartItems.length ? cartItems.length : ''}
      </span>
    </>
  )
}

export default CartIcon;
