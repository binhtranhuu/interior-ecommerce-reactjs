import React from 'react';
import { Link } from 'react-router-dom';
import Qty from '../Common/Qty';
import Share from '../Common/Share';
import ProductRating from './ProductRating';

function ProductDetail(props) {
  const { product } = props;

  return (
    <div className="product__detail">
      <h1 className="product__title">
        <Link to={`/product/${product.slug}`}>{product.name}</Link>
      </h1>
      <div className="product__rating">
        <ProductRating rating={product.rating} numReviews={product.numReviews} />
      </div>
      {product.countInStock === 0 ? (
        <div className="product__price">
          <span className="product__price-out">${product.price.toFixed(2)}</span>
        </div>
      ) : product.salePrice && product.salePrice >= 0 ? (
        <div className="product__price">
          <span className="product__price-new">${product.salePrice.toFixed(2)}</span>
          <span className="product__price-old">${product.price.toFixed(2)}</span>
        </div>
      ) : (
        <div className="product__price">${product.price.toFixed(2)}</div>
      )}
      <div className="product__desc">
        <p>{product.description.substring(0, 200)}...</p>
      </div>
      <div className="product__quantity-wrapper">
        <span>Qty:</span>
        <Qty />
      </div>
      <div className="product__detail-action">
        <a href="/" className="btn-product btn-cart">
          <span>add to cart</span>
        </a>

        <a href="/" className="btn-product btn-wishlist">
          <span>Add to Wishlist</span>
        </a>
      </div>

      <div className="product__detail-footer">
        <div className="product__category w-100">
          <span>Category: </span>
          {product.categories.map((category, index) => (
            <React.Fragment key={index}>
              <Link to={`/category/${category.slug}`}>{category.name}</Link>
              {index < product.categories.length - 1 ? ', ' : ''}
            </React.Fragment>
          ))}
        </div>
      </div>

      <Share url={window.location.href} facebook twitter linkedin />
    </div>
  );
}

export default ProductDetail;