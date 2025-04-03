import React from 'react'
import { IoIosArrowForward } from "react-icons/io";
import Swiper from '../../components/swipper/swipper'
import './home.scss'

export default function home() {
  return (
    <div>
      <div className="wrapper">
            <div className="home">
            <div className="home_left">
                  <a href="">Woman’s Fashion <span><IoIosArrowForward /></span></a>
                  <a href="">Men’s Fashion <span><IoIosArrowForward /></span></a>
                  <a href="">Electronics <span><IoIosArrowForward /></span></a>
                  <a href="">Home & Lifestyle <span><IoIosArrowForward /></span></a>
                  <a href="">Medicine <span><IoIosArrowForward /></span></a>
                  <a href="">Sports & Outdoor <span><IoIosArrowForward /></span></a>
                  <a href="">Baby’s & Toys <span><IoIosArrowForward /></span></a>
                  <a href="">Groceries & Pets <span><IoIosArrowForward /></span></a>
                  <a href="">Health & Beauty <span><IoIosArrowForward /></span></a>
            </div>
            <div className="home_right">
                  <Swiper></Swiper>
            </div>
            </div>
      </div>
    </div>
  )
}
