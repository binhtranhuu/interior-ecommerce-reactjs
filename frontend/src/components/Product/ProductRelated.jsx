import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Product from './Product';

function ProductRelated(props) {
  const [products, setProducts] = useState(props.products);
  const [hasMore, setHasMore] = useState(props.hasMore);

  const loadMoreProducts = async (e) => {};

  return (
    <div className="product__related">
      <div className="heading mb-2 mt-5">
        <h2 className="title">You May Also Like</h2>
      </div>
      <div className="row">
        {products.map((product, index) => (
          <div key={index} className="col-6 col-md-4 col-lg-3">
            <Product product={product} />
          </div>
        ))}
      </div>

      {hasMore ? (
        <div className="container text-center mt-2 mb-7">
          <a href="/" className="btn btn-outline-darker btn-load-more" onClick={loadMoreProducts}>
            <span className="mr-3">Load more products</span>
            <i className="las la-sync"></i>
          </a>
        </div>
      ) : (
        ''
      )}
    </div>
  );
}

export default ProductRelated;
