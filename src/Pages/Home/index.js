import HomeBanner from "../../Components/HomeBanner";
import Button from "@mui/material/Button";
import { GoArrowRight } from "react-icons/go";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

// icons
import { FaHeart, FaCartPlus } from "react-icons/fa";
import { MdZoomOutMap } from "react-icons/md";

const Home = () => {

  const products = [
    {
      id: 1,
      name: "Brown Watch",
      price: 49.99,
      oldPrice: 69.99,
      badge: "Sale",
      inStock: true,
      img: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=300&h=350&fit=crop"
    },
    {
      id: 2,
      name: "Women Dress",
      price: 39.99,
      oldPrice: 59.99,
      badge: "New",
      inStock: true,
      img: "https://images.unsplash.com/photo-1515372039744-b8f02a3ae446?w=300&h=350&fit=crop"
    },
    {
      id: 3,
      name: "Handbag",
      price: 59.99,
      oldPrice: 89.99,
      badge: "Hot",
      inStock: false,
      img: "https://images.unsplash.com/photo-1548036328-c9fa89d128fa?w=300&h=350&fit=crop"
    },
    {
      id: 4,
      name: "Sneakers",
      price: 79.99,
      oldPrice: 99.99,
      badge: "Sale",
      inStock: true,
      img: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=300&h=350&fit=crop"
    },
    {
      id: 5,
      name: "Sunglasses",
      price: 29.99,
      oldPrice: 45.99,
      badge: "New",
      inStock: true,
      img: "https://images.unsplash.com/photo-1572635196237-14b3f281503f?w=300&h=350&fit=crop"
    },
    {
      id: 6,
      name: "Leather Jacket",
      price: 129.99,
      oldPrice: 179.99,
      badge: "Hot",
      inStock: false,
      img: "https://images.unsplash.com/photo-1551028719-00167b16eac5?w=300&h=350&fit=crop"
    },
  ];

  // calculate discount %
  const getDiscount = (price, oldPrice) => {
    return Math.round(((oldPrice - price) / oldPrice) * 100);
  };

  return (
    <>
      <HomeBanner />

      <section className="homeProducts">
        <div className="container">
          <div className="row">

            {/* LEFT — tall banner */}
            <div className="col-md-3">
              <div className="banner">
                <img
                  src="https://cdna.lystit.com/cms2/images/SECONDARY_3_3.2e16d0ba.fill-490x632.jpegquality-90.jpg"
                  className="cursor img-fluid"
                  alt="banner"
                />
              </div>
            </div>

            {/* RIGHT — title + swiper */}
            <div className="col-md-9">

              {/* Title row */}
              <div className="d-flex align-items-center mb-3 sectionHeader">
                <div className="info">
                  <h3 className="mb-0 hd">BEST SELLERS</h3>
                  <p className="text text-sml mb-0">
                    Do not miss the current offers until the end of March.
                  </p>
                </div>
                <Button className="viewAllBtn ml-auto">
                  View All <GoArrowRight />
                </Button>
              </div>

              {/* Swiper */}
              <div className="product_row">
                <Swiper
                  modules={[Navigation, Pagination]}
                  spaceBetween={16}
                  slidesPerView={4}
                  navigation={true}
                  pagination={{ clickable: true }}
                  breakpoints={{
                    320:  { slidesPerView: 1, spaceBetween: 10 },
                    576:  { slidesPerView: 2, spaceBetween: 12 },
                    768:  { slidesPerView: 3, spaceBetween: 14 },
                    1024: { slidesPerView: 4, spaceBetween: 16 },
                  }}
                >
                  {products.map((product) => (
                    <SwiperSlide key={product.id}>
                      <div className={`productItem cursor ${!product.inStock ? 'outOfStock' : ''}`}>

                        {/* ── Top action buttons (heart + zoom) ── */}
                        <div className="actions">
                          <button className="actionBtn wishlistBtn" title="Add to Wishlist">
                            <FaHeart />
                          </button>
                          <button className="actionBtn zoomBtn" title="Quick View">
                            <MdZoomOutMap />
                          </button>
                        </div>

                        {/* ── Badge ── */}
                        {product.badge && (
                          <span className={`badge badge-${product.badge.toLowerCase()}`}>
                            {product.badge}
                          </span>
                        )}

                        {/* ── Image ── */}
                        <div className="imgWrapper">
                          <img src={product.img} alt={product.name} />
                          {/* out of stock overlay */}
                          {!product.inStock && (
                            <div className="outOfStockOverlay">
                              <span>Out of Stock</span>
                            </div>
                          )}
                        </div>

                        {/* ── Info ── */}
                        <div className="productInfo">

                          {/* stock status */}
                          <p className={`stockStatus ${product.inStock ? 'inStock' : 'noStock'}`}>
                            {product.inStock ? '● In Stock' : '● Out of Stock'}
                          </p>

                          <h4>{product.name}</h4>

                          {/* price row */}
                          <div className="priceRow">
                            <span className="price">${product.price.toFixed(2)}</span>
                            <span className="oldPrice">${product.oldPrice.toFixed(2)}</span>
                            <span className="discount">
                              -{getDiscount(product.price, product.oldPrice)}%
                            </span>
                          </div>

                          {/* Add to cart button */}
                          <Button
                            className={`addToCartBtn w-100 ${!product.inStock ? 'disabled' : ''}`}
                            disabled={!product.inStock}
                          >
                            <FaCartPlus />
                            {product.inStock ? 'Add to Cart' : 'Unavailable'}
                          </Button>

                        </div>
                      </div>
                    </SwiperSlide>
                  ))}
                </Swiper>
              </div>

            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;