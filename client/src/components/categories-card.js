import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import CardSkeleton from './cardSkeleton';
import getCategories from '../redux/actions/categories.action';

function CategoriesCard() {
  /*
   destructure & rename allCategories to categories
   */
  const { allCategories: categories } = useSelector(
    (state) => state.categories,
  );
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getCategories());
    // eslint-disable-next-line
  }, []);

  return (
    <section className="categories-card px-2 my-0">
      <div className="row my-0">
        {!categories ? <CardSkeleton /> : null}
        {categories && categories.map((ctg) => (
          <div
            className="col-sm-6 col-md-6 col-lg-6 mb-md-5"
            key={ctg.id}>
            <div className="card">
              <img
                src={ctg.image}
                className="card-img-top"
                alt={ctg.category}
              />
              <div className="card-body">
                <h3 className="card-text text-danger">
                  {ctg.category}
                </h3>
              </div>
            </div>
          </div>
        ))}

      </div>
    </section>
  );
}

export default CategoriesCard;
