import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Footer from './components/Layout/Footer/Footer';
import Header from './components/Layout/Header/Header';
import Product from './components/Product/Product';
import ProductSkeleton from './components/Skeleton/ProductSkeleton';
import { listProducts } from './redux/actions/productActions';

function App() {
  const dispatch = useDispatch();
  const productList = useSelector((state) => state.productList);
  const { loading, error, products } = productList;

  useEffect(() => {
    dispatch(listProducts({}));
  }, [dispatch]);

  return (
    <>
      <Header />
      <div className="container mt-4 mb-4">
        <div className="row">
          {loading ? (
            [1, 2, 3, 4, 5, 6, 7, 8].map((index) => (
              <div key={index} className="col-lg-3 col-md-4 col-xs-6">
                <ProductSkeleton />
              </div>
            ))
          ) : error ? (
            <div>{error}</div>
          ) : (
            products.map((product, index) => (
              <div key={product._id} className="col-lg-3 col-md-4 col-xs-6">
                <Product product={product} />
              </div>
            ))
          )}
        </div>
      </div>
      <Footer />
    </>
  );
}

export default App;
