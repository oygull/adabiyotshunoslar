import React from 'react'
import './Hero.css';
import sliderImg1 from '../images/slider-img1.png'
import sliderImg2 from '../images/slider-img2.jpeg'
import sliderImg3 from '../images/slider-img3.png'
import sliderImg4 from '../images/slider-img4.jpeg'

const mystyle = {
  transform: 'translateX(-1250px)'
};

let sliderItem = document.getElementById('sliderItem')

function Slider() {

  function nexrSlide(){
    sliderItem.classList.add("mystyle")
  }
  return (
    <div className='slider'>
    <div className='container'>
      <div className='list__box'>
      <ul id='sliderItem' className='slider__list'>
        <li  className='slider__item'><img src={sliderImg1}/></li>
        <li className='slider__item'><img src={sliderImg2}/></li>
        <li className='slider__item'><img src={sliderImg3}/></li>
        <li className='slider__item'><img src={sliderImg4}/></li>
      </ul>
      </div>
  
      <div className='slider-btns'>
        <div onClick={nexrSlide} className='slider-btn'></div>
        <div className='slider-btn'></div>
        <div className='slider-btn'></div>
        <div className='slider-btn'></div>
      </div>
    </div>
    </div>
   
  )
}

export default Slider