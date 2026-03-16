import HomeBanner from "../../Components/HomeBanner";
import Button from "@mui/material/Button";
import { GoArrowRight } from "react-icons/go";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
 
// icons
import { FaHeart, FaCartPlus, FaStar, FaStarHalfAlt, FaRegStar } from "react-icons/fa";
import { MdZoomOutMap } from "react-icons/md";
 
const Home = () => {
 
  /* ── Featured Categories ── */
  const categories = [
    {
      id: 1,
      name: "Women's Fashion",
      subtitle: "2,400+ styles",
      accent: "#e91e63",
      img: "https://images.unsplash.com/photo-1483985988355-763728e1935b?w=400&h=500&fit=crop&q=80",
    },
    {
      id: 2,
      name: "Men's Wear",
      subtitle: "1,800+ styles",
      accent: "#1565c0",
      img: "https://images.unsplash.com/photo-1617137968427-85924c800a22?w=400&h=500&fit=crop&q=80",
    },
    {
      id: 3,
      name: "Footwear",
      subtitle: "950+ pairs",
      accent: "#f57f17",
      img: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=400&h=500&fit=crop&q=80",
    },
    {
      id: 4,
      name: "Accessories",
      subtitle: "3,100+ items",
      accent: "#7b1fa2",
      img: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=400&h=500&fit=crop&q=80",
    },
    {
      id: 5,
      name: "Bags & Purses",
      subtitle: "670+ bags",
      accent: "#2e7d32",
      img: "https://images.unsplash.com/photo-1548036328-c9fa89d128fa?w=400&h=500&fit=crop&q=80",
    },
    {
      id: 6,
      name: "Sunglasses",
      subtitle: "480+ frames",
      accent: "#e65100",
      img: "https://images.unsplash.com/photo-1572635196237-14b3f281503f?w=400&h=500&fit=crop&q=80",
    },
    {
      id: 7,
      name: "Watches",
      subtitle: "320+ styles",
      accent: "#006064",
      img: "https://images.unsplash.com/photo-1587836374828-4dbafa94cf0e?w=400&h=500&fit=crop&q=80",
    },
    {
      id: 8,
      name: "Sportswear",
      subtitle: "1,200+ items",
      accent: "#c62828",
      img: "https://images.unsplash.com/photo-1571902943202-507ec2618e8f?w=400&h=500&fit=crop&q=80",
    },
  ];
 
  /* ── Best Sellers ── */
  const bestSellers = [
    { id: 1, name: "Brown Watch", price: 49.99, oldPrice: 69.99, badge: "Sale", inStock: true, rating: 4.5, reviews: 128, img: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=300&h=350&fit=crop" },
    { id: 2, name: "Women Dress", price: 39.99, oldPrice: 59.99, badge: "New", inStock: true, rating: 4.0, reviews: 94, img: "https://images.unsplash.com/photo-1515372039744-b8f02a3ae446?w=300&h=350&fit=crop" },
    { id: 3, name: "Handbag", price: 59.99, oldPrice: 89.99, badge: "Hot", inStock: false, rating: 3.5, reviews: 57, img: "https://images.unsplash.com/photo-1548036328-c9fa89d128fa?w=300&h=350&fit=crop" },
    { id: 4, name: "Sneakers", price: 79.99, oldPrice: 99.99, badge: "Sale", inStock: true, rating: 5.0, reviews: 213, img: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=300&h=350&fit=crop" },
    { id: 5, name: "Sunglasses", price: 29.99, oldPrice: 45.99, badge: "New", inStock: true, rating: 4.0, reviews: 76, img: "https://images.unsplash.com/photo-1572635196237-14b3f281503f?w=300&h=350&fit=crop" },
    { id: 6, name: "Leather Jacket", price: 129.99, oldPrice: 179.99, badge: "Hot", inStock: false, rating: 4.5, reviews: 189, img: "https://images.unsplash.com/photo-1551028719-00167b16eac5?w=300&h=350&fit=crop" },
  ];
 
  /* ── New Products ── */
  const newProducts = [
    { id: 101, name: "Silk Blouse", price: 55.99, oldPrice: 75.99, badge: "New", inStock: true, rating: 4.5, reviews: 42, img: "https://images.unsplash.com/photo-1564257631407-4deb1f99d992?w=300&h=350&fit=crop" },
    { id: 102, name: "Canvas Tote", price: 24.99, oldPrice: 34.99, badge: "New", inStock: true, rating: 4.0, reviews: 31, img: "https://images.unsplash.com/photo-1544816155-12df9643f363?w=300&h=350&fit=crop" },
    { id: 103, name: "Denim Jacket", price: 89.99, oldPrice: 119.99, badge: "New", inStock: true, rating: 5.0, reviews: 18, img: "https://images.unsplash.com/photo-1576995853123-5a10305d93c0?w=300&h=350&fit=crop" },
    { id: 104, name: "Running Shoes", price: 95.99, oldPrice: 129.99, badge: "New", inStock: false, rating: 4.5, reviews: 64, img: "https://images.unsplash.com/photo-1491553895911-0055eca6402d?w=300&h=350&fit=crop" },
    { id: 105, name: "Pearl Earrings", price: 19.99, oldPrice: 29.99, badge: "New", inStock: true, rating: 3.5, reviews: 27, img: "https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?w=300&h=350&fit=crop" },
    { id: 106, name: "Wool Scarf", price: 34.99, oldPrice: 49.99, badge: "New", inStock: true, rating: 4.0, reviews: 53, img: "https://images.unsplash.com/photo-1520903920243-00d872a2d1c9?w=300&h=350&fit=crop" },
  ];
 
  /* ── Helpers ── */
  const getDiscount = (price, oldPrice) => Math.round(((oldPrice - price) / oldPrice) * 100);
 
  const renderStars = (rating) => {
    const stars = [];
    for (let i = 1; i <= 5; i++) {
      if (rating >= i) stars.push(<FaStar key={i} />);
      else if (rating >= i - 0.5) stars.push(<FaStarHalfAlt key={i} />);
      else stars.push(<FaRegStar key={i} />);
    }
    return stars;
  };
 
  /* ── Product Card ── */
  const ProductCard = ({ product }) => (
    <div className={`productItem cursor ${!product.inStock ? "outOfStock" : ""}`}>
      <div className="actions">
        <button className="actionBtn wishlistBtn" title="Add to Wishlist"><FaHeart /></button>
        <button className="actionBtn zoomBtn" title="Quick View"><MdZoomOutMap /></button>
      </div>
      {product.badge && (
        <span className={`badge badge-${product.badge.toLowerCase()}`}>{product.badge}</span>
      )}
      <div className="imgWrapper">
        <img src={product.img} alt={product.name} />
        {!product.inStock && <div className="outOfStockOverlay"><span>Out of Stock</span></div>}
      </div>
      <div className="productInfo">
        <p className={`stockStatus ${product.inStock ? "inStock" : "noStock"}`}>
          {product.inStock ? "● In Stock" : "● Out of Stock"}
        </p>
        <h4>{product.name}</h4>
        <div className="ratingRow">
          <span className="stars">{renderStars(product.rating)}</span>
          <span className="ratingScore">{product.rating.toFixed(1)}</span>
          <span className="ratingCount">({product.reviews})</span>
        </div>
        <div className="priceRow">
          <span className="price">${product.price.toFixed(2)}</span>
          <span className="oldPrice">${product.oldPrice.toFixed(2)}</span>
          <span className="discount">-{getDiscount(product.price, product.oldPrice)}%</span>
        </div>
        <Button
          className={`addToCartBtn w-100 ${!product.inStock ? "disabled" : ""}`}
          disabled={!product.inStock}
        >
          <FaCartPlus />
          {product.inStock ? "Add to Cart" : "Unavailable"}
        </Button>
      </div>
    </div>
  );
 
  const swiperBreakpoints = {
    320:  { slidesPerView: 1,  spaceBetween: 10 },
    576:  { slidesPerView: 2,  spaceBetween: 12 },
    768:  { slidesPerView: 3,  spaceBetween: 14 },
    1024: { slidesPerView: 4,  spaceBetween: 16 },
  };
 
  const catBreakpoints = {
    320:  { slidesPerView: 2,  spaceBetween: 10 },
    480:  { slidesPerView: 3,  spaceBetween: 12 },
    768:  { slidesPerView: 4,  spaceBetween: 14 },
    1024: { slidesPerView: 5,  spaceBetween: 16 },
    1280: { slidesPerView: 6,  spaceBetween: 16 },
  };
 
  return (
    <>
      <HomeBanner />
 
      {/* ══════════════════════════════════════
          FEATURED CATEGORIES
      ══════════════════════════════════════ */}
      <section className="featuredCats">
        <div className="container">
 
          <div className="featCatsHeader">
            <div className="featCatsHeaderLeft">
              <span className="featCatsEyebrow">Browse by Category</span>
              <h2 className="featCatsTitle">Featured Categories</h2>
            </div>
            <Button className="viewAllBtn featCatsViewAll">
              All Categories <GoArrowRight />
            </Button>
          </div>
 
          <div className="featCatsSwiper">
            <Swiper
              modules={[Navigation, Autoplay]}
              spaceBetween={16}
              slidesPerView={6}
              navigation={true}
              loop={true}
              autoplay={{ delay: 3000, disableOnInteraction: false, pauseOnMouseEnter: true }}
              breakpoints={catBreakpoints}
            >
              {categories.map((cat) => (
                <SwiperSlide key={cat.id}>
                  <div
                    className="catCard cursor"
                    style={{ "--cat-accent": cat.accent }}
                  >
                    <div className="catImgWrap">
                      <img src={cat.img} alt={cat.name} className="catImg" />
                      <div className="catGradient" />
                      <span className="catShopNow">
                        Shop Now <GoArrowRight />
                      </span>
                    </div>
                    <div className="catInfo">
                      <h4 className="catName">{cat.name}</h4>
                      <span className="catSub">{cat.subtitle}</span>
                    </div>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
 
        </div>
      </section>
 
      {/* ══════════════════════════════════════
          BEST SELLERS
      ══════════════════════════════════════ */}
      <section className="homeProducts">
        <div className="container">
          <div className="row">
            <div className="col-md-3">
              <div className="banner">
                <img
                  src="https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?w=500&h=650&fit=crop&q=90"
                  className="cursor img-fluid"
                  alt="Best Sellers Banner"
                />
              </div>
            </div>
            <div className="col-md-9">
              <div className="d-flex align-items-center mb-3 sectionHeader">
                <div className="info">
                  <h3 className="mb-0 hd">BEST SELLERS</h3>
                  <p className="text text-sml mb-0">Do not miss the current offers until the end of March.</p>
                </div>
                <Button className="viewAllBtn ml-auto">View All <GoArrowRight /></Button>
              </div>
              <div className="product_row">
                <Swiper
                  modules={[Navigation, Pagination]}
                  spaceBetween={16}
                  slidesPerView={4}
                  navigation={true}
                  pagination={{ clickable: true }}
                  breakpoints={swiperBreakpoints}
                >
                  {bestSellers.map((product) => (
                    <SwiperSlide key={product.id}>
                      <ProductCard product={product} />
                    </SwiperSlide>
                  ))}
                </Swiper>
              </div>
            </div>
          </div>
        </div>
      </section>
 
      {/* ══════════════════════════════════════
          NEW PRODUCTS
      ══════════════════════════════════════ */}
      <section className="homeProducts newProductsSection">
        <div className="container">
          <div className="row">
            <div className="col-md-3">
              <div className="banner newBanner">
                <div className="newBannerContent">
                  <span className="newBannerTag">Just Arrived</span>
                  <h2 className="newBannerTitle">Fresh<br />Styles<br />2025</h2>
                  <p className="newBannerSub">
                    Handpicked new arrivals with updated stock — discover what's trending now.
                  </p>
                  <button className="newBannerBtn">Shop New <GoArrowRight /></button>
                </div>
                <img
                  src="https://images.unsplash.com/photo-1483985988355-763728e1935b?w=500&h=650&fit=crop&q=90"
                  className="newBannerImg"
                  alt="New Products Banner"
                />
              </div>
            </div>
            <div className="col-md-9">
              <div className="d-flex align-items-center mb-3 sectionHeader">
                <div className="info">
                  <h3 className="mb-0 hd newHd">NEW PRODUCTS</h3>
                  <p className="text text-sml mb-0">New products with updated stocks — fresh arrivals every week.</p>
                </div>
                <Button className="viewAllBtn viewAllBtnNew ml-auto">View All <GoArrowRight /></Button>
              </div>
              <div className="product_row">
                <Swiper
                  modules={[Navigation, Pagination]}
                  spaceBetween={16}
                  slidesPerView={4}
                  navigation={true}
                  pagination={{ clickable: true }}
                  breakpoints={swiperBreakpoints}
                >
                  {newProducts.map((product) => (
                    <SwiperSlide key={product.id}>
                      <ProductCard product={product} />
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