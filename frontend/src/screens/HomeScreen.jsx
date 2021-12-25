import React, { useEffect } from 'react';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import { useDispatch, useSelector } from 'react-redux';
import Reveal from 'react-awesome-reveal';
import Product from '../components/Product/Product';
import ProductSkeleton from '../components/Skeleton/ProductSkeleton';
import { listProducts } from '../redux/actions/productActions';
import SlickCarousel from '../components/Common/SlickCarousel';
import { fadeInUpShorter } from '../utils/keyFrames';

function HomeScreen(props) {
  const dispatch = useDispatch();
  const productList = useSelector((state) => state.productList);
  const { loading, error, products } = productList;

  const settings = {
    dots: false,
    autoplay: true,
    arrows: false,
    autoplaySpeed: 8000,
  };

  useEffect(() => {
    dispatch(listProducts({}));
  }, [dispatch]);
  return (
    <div className="main">
      <div className="intro pt-5 pb-4" style={{ backgroundImage: 'url(images/intro-bg.jpg)' }}>
        <div className="container">
          <div className="row">
            <div className="col-lg-8">
              <div className="intro__slide-wrapper">
                <SlickCarousel options={settings}>
                  <div className="intro__slide" id="intro__slide-first">
                    <figure className="intro__slide-image mb-0">
                      <picture>
                        <img src="images/sliders/slide-1.png" alt="Banner" />
                      </picture>
                    </figure>
                    <div className="intro__content">
                      <Reveal keyframes={fadeInUpShorter} delay={100} duration={1000}>
                        <>
                          <h3 className="intro__subtitle">Topsale Collection</h3>

                          <h1 className="intro__title">
                            Best Lighting
                            <br />
                            Collection
                          </h1>

                          <a href="/" className="btn btn-outline-white">
                            <span>SHOP NOW</span>
                            <i className="las la-arrow-right"></i>
                          </a>
                        </>
                      </Reveal>
                    </div>
                  </div>

                  <div className="intro__slide" id="intro__slide-second">
                    <figure className="intro__slide-image mb-0">
                      <picture>
                        <img src="images/sliders/slide-2.png" alt="Banner" />
                      </picture>
                    </figure>
                    <div className="intro__content">
                      <Reveal keyframes={fadeInUpShorter} delay={100} duration={1000}>
                        <>
                          <h3 className="intro__subtitle">Topsale Collection</h3>

                          <h1 className="intro__title">
                            Best Lighting
                            <br />
                            Collection
                          </h1>

                          <a href="/" className="btn btn-outline-white">
                            <span>SHOP NOW</span>
                            <i className="las la-arrow-right"></i>
                          </a>
                        </>
                      </Reveal>
                    </div>
                  </div>
                </SlickCarousel>
              </div>
            </div>

            <div className="col-lg-4">
              <div className="intro__banner-wrapper">
                <div className="row">
                  <div className="col-md-6 col-lg-12">
                    <div className="intro__banner">
                      <LazyLoadImage
                        alt="banner"
                        src="images/banners/intro-banner-1.jpg"
                        threshold={200}
                        width="370"
                        height="auto"
                        effect="blur"
                        wrapperClassName="intro__banner-image"
                      />

                      <div className="intro__banner-content">
                        <h4 className="intro__banner-subtitle">Clearence</h4>

                        <h3 className="intro__banner-title">
                          <a href="/">
                            Chairs & Chaises
                            <br />
                            Up to 40% off
                          </a>
                        </h3>

                        <a href="/" className="intro__banner-link">
                          Shop Now
                        </a>
                      </div>
                    </div>
                  </div>

                  <div className="col-md-6 col-lg-12">
                    <div className="intro__banner">
                      <LazyLoadImage
                        alt="banner"
                        src="images/banners/intro-banner-2.jpg"
                        threshold={200}
                        width="370"
                        height="auto"
                        effect="blur"
                        wrapperClassName="intro__banner-image"
                      />

                      <div className="intro__banner-content">
                        <h4 className="intro__banner-subtitle">New in</h4>

                        <h3 className="intro__banner-title">
                          <a href="/">
                            Kitchen & Dinning
                            <br />
                            Collection
                          </a>
                        </h3>

                        <a href="/" className="intro__banner-link">
                          Shop Now
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

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
    </div>
  );
}

export default HomeScreen;
