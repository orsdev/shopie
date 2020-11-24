import React from 'react';
import Black from '../assets/images/black-widow.png';
import Blue from '../assets/images/blue-gown.png';
import Purse from '../assets/images/blue-purse.png';
import Bag from '../assets/images/leather-brown.png';

function CategoriesCard() {
  return (
    <>
      <section className="categories-card px-2 my-0">
        <div className="row my-0">
          <div className="col-sm-6 col-md-6 col-lg-6 mb-md-5">
            <div className="card">
              <img src={Black} className="card-img-top" alt="" />
              <div className="card-body">
                <h3 className="card-text text-danger">
                  Men Clothing
                </h3>
              </div>
            </div>
          </div>
          <div className="col-sm-6 col-md-6 col-lg-6 mb-md-5">
            <div className="card">
              <img src={Blue} className="card-img-top" alt="" />
              <div className="card-body">
                <h3 className="card-text text-danger">Jeweries</h3>
              </div>
            </div>
          </div>
          <div className="col-sm-6 col-md-6 col-lg-6">
            <div className="card">
              <img src={Purse} className="card-img-top" alt="" />
              <div className="card-body">
                <h3 className="card-text text-danger">
                  Women Clothing
                </h3>
              </div>
            </div>
          </div>
          <div className="col-sm-6 col-md-6 col-lg-6">
            <div className="card">
              <img src={Bag} className="card-img-top" alt="" />
              <div className="card-body">
                <h3 className="card-text text-danger">Electronics</h3>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default CategoriesCard;
