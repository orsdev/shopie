import React from 'react';
import PropTypes from 'prop-types';
import Skeleton from 'react-loading-skeleton';

function CardSkeleton({ counts }) {
  return (
    <>
      {
        new Array(counts).fill('cards').map((card, index) => {
          return (
            <div
              key={index + card}
              className="col-sm-6 col-md-6 col-lg-6 mb-md-5">
              <div className="card" style={{ height: '300px' }}>
                <Skeleton count={1} duration={2} height={270} />
                <Skeleton count={1} duration={2} height={30} />
              </div>
            </div>
          )
        })
      }
    </>
  )
};

CardSkeleton.defaultProps = {
  counts: 4
};


CardSkeleton.propTypes = {
  counts: PropTypes.number.isRequired
};




export default CardSkeleton;
