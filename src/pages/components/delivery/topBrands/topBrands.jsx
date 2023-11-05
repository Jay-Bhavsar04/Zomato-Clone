import React from "react";
import "./topBrands.css";
import NextArrow from "../../common/carousel/nextArrow";
import PrevArrow from "../../common/carousel/prevArrow";
import Slider from "react-slick";

const topBrandList = [
  {
    id: 1,
    time: "25 min",
    cover:
      "https://b.zmtcdn.com/data/brand_creatives/logos/ec72c289aa01d947fe15a009ce8e559f_1616052816.png?output-format=webp",
    name: "Meghana Foods"
  },
  {
    id: 2,
    time: "31 min",
    cover:
      "https://b.zmtcdn.com/data/brand_creatives/logos/7a7904eff687a7456599074a4e7d2335_1617875100.png?output-format=webp",
    name: "Empire Restaurant"
  },
  {
    id: 3,
    time: "28 min",
    cover:
      "https://b.zmtcdn.com/data/brand_creatives/logos/6a11fd0f30c9fd9ceaff2f5b21f61d23_1617187721.png?output-format=webp",
    name: "Burger King"
  },
  {
    id: 4,
    time: "19 min",
    cover:
      "https://b.zmtcdn.com/data/brand_creatives/logos/239f872f52291fe253a37cc8dd16188f_1663838300.png?output-format=webp",
    name: "Truffles"
  },
  {
    id: 5,
    time: "23 min",
    cover:
      "https://b.zmtcdn.com/data/brand_creatives/logos/80c09d718acddee05a655eb378bb442f_1617875125.png?output-format=webp",
    name: "KFC"
  },
  {
    id: 6,
    time: "21 min",
    cover:
      "https://b.zmtcdn.com/data/brand_creatives/logos/3d80cb89fca9e212f7dab2c1914ebd8f_1643983621.png?output-format=webp",
    name: "McDonald's"
  },
  {
    id: 7,
    time: "29 min",
    cover:
      "https://b.zmtcdn.com/data/brand_creatives/logos/dc49d77dce0ee7fc8e495fa35be0e747_1648715086.png?output-format=webp",
    name: "FreshMenu"
  },
  {
    id: 8,
    time: "26 min",
    cover:
      "https://b.zmtcdn.com/data/brand_creatives/logos/5ef673b417cd25b5a04176ce341d425a_1630505477.png?output-format=webp",
    name: "A2B - Adyar Ananda Bhavan"
  },
  {
    id: 9,
    time: "47 min",
    cover:
      "https://b.zmtcdn.com/data/brand_creatives/logos/b9ffb4c181468da1f2b0eebd9ba70415_1643780686.png?output-format=webp",
    name: "Leon's Burgers & Wings"
  },

  {
    id: 10,
    time: "36 min",
    cover:
      "https://b.zmtcdn.com/data/brand_creatives/logos/7e91871a40c877332641a411e7dea18b_1668319552.png?output-format=webp",
    name: "Beijing Bites"
  }
];

const settings = {
  infinite: false,
  slidesToShow: 6,
  slidesToScroll: 1,
  nextArrow: <NextArrow />,
  prevArrow: <PrevArrow />
};

const TopBrands = () => {
  return (
    <div className="top-brands max-width">
      <div className="collection-title">Top brands for you</div>
      <Slider {...settings}>
        {topBrandList.map((brands) => {
          return (
            <div>
              <div className="top-brands-cover">
                <img
                  src={brands.cover}
                  className="top-brands-image"
                  alt={brands.name}
                />
              </div>
              <div className="top-brands-name">{brands.name}</div>
              <div className="top-brands-time">{brands.time}</div>
            </div>
          );
        })}
      </Slider>
    </div>
  );
};

export default TopBrands;
