import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";



const HomeBanner = () => {

  var settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
    autoplay:true 

  };


  return (
    <div className="homeBannerSection">
      <Slider {...settings}>
        <div className="item">
            <img src="https://mobilecdn.6thstreet.com/AllBanners/bmt/image_management_tool/2026/Kids/March/12-3-26/LCW%20brand%20day%20kids/LCW%20brand%20day%20kids/UNDER%2039/LCW%20UNDER-web-en_.jpg" alt="banner 1"   />
        </div>
       
       <div className="item">
            <img src="https://mobilecdn.6thstreet.com/AllBanners/bmt/image_management_tool/2026/Kids/March/12-3-26/skechers%20brand%20day%20kids%20hero/skechers%20brand%20day%20kids%20hero/UNDER%20149/web-en_.jpg" alt="banner 2" />
        </div>

        <div className="item">
            <img src="https://mobilecdn.6thstreet.com/AllBanners/bmt/image_management_tool/2026/Kids/March/11-3-26/great%20online%20sale_hero/great%20online%20sale_hero_/web-en_.jpg" alt="banner 3" />
        </div>

        <div className="item">
            <img src="https://mobilecdn.6thstreet.com/AllBanners/bmt/image_management_tool/2026/Women/March/13-3-26/tommy%20hilfiger/web-en_.jpg" alt="banner 4" />
        </div>

     </Slider>

    </div>
  );
};

export default HomeBanner;