import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Breadcrumb from '../components/Common/Breadcrumb';
import ProductDetail from '../components/Product/ProductDetail';
import ProductGallery from '../components/Product/ProductGallery';
import { detailsProduct } from '../redux/actions/productActions';

function ProductScreen(props) {
  const { slug } = props.match.params;

  const dispatch = useDispatch();
  const productDetails = useSelector((state) => state.productDetails);
  const { product, loading, error } = productDetails;

  useEffect(() => {
    dispatch(detailsProduct(slug));
  }, [dispatch, slug]);

  return (
    <div className="main">
      <Breadcrumb />
      <div className="container">
        {loading ? (
          <div>Loading...</div>
        ) : error ? (
          <div>{error}</div>
        ) : (
          <div className="product__details-wrapper">
            <div className="product__details-top">
              <div className="row">
                <div className="col-md-6">
                  <ProductGallery product={product} />
                </div>
                <div className="col-md-6">
                  <ProductDetail product={product} />
                </div>
              </div>
            </div>
            <div className="product__details-bottom">
              ProductInfo
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default ProductScreen;
