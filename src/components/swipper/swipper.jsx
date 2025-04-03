import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import './swipper.scss';
import imgs from "../../assets/index.js"
import { IoMdArrowForward } from "react-icons/io";
// import required modules
import { Autoplay, Pagination,  } from 'swiper/modules';

export default function App() {
  return (
    <>
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 1500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        modules={[Autoplay, Pagination,]}
        className="mySwiper"
      >
        <SwiperSlide>
          <div className="swipper">
            <div className="swipper_left">
              <div><img src={imgs.apple} alt="" /><h1>iPhone 14 Series</h1></div>
              <h1>Up to 10% off Voucher</h1>
              <a href="">Shop Now <IoMdArrowForward /></a>
            </div>
            <div className="swipper_right">
              <img src={imgs.iphone} alt="" />
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="swipper">
            <div className="swipper_left">
              <div><img src={imgs.apple} alt="" /><h1>iPhone 14 Series</h1></div>
              <h1>Up to 10% off Voucher</h1>
              <a href="">Shop Now <IoMdArrowForward /></a>
            </div>
            <div className="swipper_right">
              <img src={imgs.iphone} alt="" />
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </>
  );
}
