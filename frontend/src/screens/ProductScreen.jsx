import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { detailsProduct } from '../redux/actions/productActions';

function ProductScreen(props) {
  const { slug } = props.match.params;

  const dispatch = useDispatch();
  const productDetails = useSelector((state) => state.productDetails);
  const { product, loading, error } = productDetails;

  useEffect(() => {
    dispatch(detailsProduct(slug));
  }, [dispatch, slug]);

  return <div></div>;
}

export default ProductScreen;
