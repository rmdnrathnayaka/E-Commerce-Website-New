import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay, EffectFade } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/effect-fade";

const HomeBanner = () => {

  const banners = [
    {
      id: 1,
      img: "https://images.unsplash.com/photo-1483985988355-763728e1935b?w=1400&h=600&fit=crop&q=90",
      tag: "New Arrivals",
      title: "Spring\nCollection",
      subtitle: "Discover the latest trends in women's fashion",
      btn: "Shop Women",
      align: "left"
    },
    {
      id: 2,
      img: "https://images.unsplash.com/photo-1441984904996-e0b6ba687e04?w=1400&h=600&fit=crop&q=90",
      tag: "Up to 50% Off",
      title: "Season\nSale",
      subtitle: "Don't miss the biggest deals of the year",
      btn: "Shop Sale",
      align: "right"
    },
    {
      id: 3,
      img: "https://images.unsplash.com/photo-1490481651871-ab68de25d43d?w=1400&h=600&fit=crop&q=90",
      tag: "Men's Edit",
      title: "Premium\nStyle",
      subtitle: "Elevate your wardrobe with our curated picks",
      btn: "Shop Men",
      align: "left"
    },
    {
      id: 4,
      img: "https://images.unsplash.com/photo-1469334031218-e382a71b716b?w=1400&h=600&fit=crop&q=90",
      tag: "Kids Collection",
      title: "Fun &\nComfort",
      subtitle: "Stylish clothing designed for active kids",
      btn: "Shop Kids",
      align: "right"
    },
  ];

  return (
    <div className="homeBannerSection">
      <Swiper
        modules={[Navigation, Autoplay, EffectFade]}
        effect="fade"
        navigation={true}
        autoplay={{ delay: 4000, disableOnInteraction: false }}
        loop={true}
        speed={800}
      >
        {banners.map((banner) => (
          <SwiperSlide key={banner.id}>
            <div className="item">
              <img src={banner.img} alt={banner.title} />

              {/* overlay text */}
              <div className={`bannerContent align-${banner.align}`}>
                <span className="bannerTag">{banner.tag}</span>
                <h2 className="bannerTitle">
                  {banner.title.split('\n').map((line, i) => (
                    <span key={i}>{line}<br /></span>
                  ))}
                </h2>
                <p className="bannerSubtitle">{banner.subtitle}</p>
                <button className="bannerBtn">{banner.btn} →</button>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default HomeBanner;