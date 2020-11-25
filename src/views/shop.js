import React from 'react';
import Black from '../assets/images/black-widow.png';
import Blue from '../assets/images/blue-gown.png';
import Purse from '../assets/images/blue-purse.png';
import Bag from '../assets/images/leather-brown.png';

function Shop() {
  return (
    <section className="shop container-fluid px-4">
      <h2 className="shop--header display-3 text-center">Shop</h2>
      <div className="product--grid text-center">
        <div className="product--grid-item">
          <img src={Black} alt="" />
          <p className="product--name">Fila</p>
          <p className="product--price">$120</p>
          <p className="product--description">
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Dolorum, ea.
          </p>
          <a href="/shop/ssdfdfdfj" className="product--cart-link">
            ADD TO CART
          </a>
        </div>
        <div className="product--grid-item">
          <img src={Blue} alt="" />
          <p className="product--name">Fila</p>
          <p className="product--price">$120</p>
          <p className="product--description">
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Dolorum, ea.
          </p>
          <a href="/shop/ssdfdfdfj" className="product--cart-link">
            ADD TO CART
          </a>
        </div>
        <div className="product--grid-item">
          <img src={Purse} alt="" />
          <p className="product--name">Fila</p>
          <p className="product--price">$120</p>
          <p className="product--description">
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Dolorum, ea.
          </p>
          <a href="/shop/ssdfdfdfj" className="product--cart-link">
            ADD TO CART
          </a>
        </div>
        <div className="product--grid-item">
          <img src={Bag} alt="" />
          <p className="product--name">Fila</p>
          <p className="product--price">$120</p>
          <p className="product--description">
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Dolorum, ea.
          </p>
          <a href="/shop/ssdfdfdfj" className="product--cart-link">
            ADD TO CART
          </a>
        </div>
      </div>
    </section>
  );
}

export default Shop;
