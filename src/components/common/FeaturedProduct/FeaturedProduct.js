import React, { useRef } from 'react';
import styles from './FeaturedProduct.module.scss';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons';

const FeaturedProduct = () => {
  const slider = useRef(null);
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: false,
    pauseOnHover: false,
    swipe: false,
    arrows: false,
  };

  const handlePrev = () => {
    if (slider.current) {
      slider.current.slickPrev();
    }
  };

  const handleNext = () => {
    if (slider.current) {
      slider.current.slickNext();
    }
  };

  return (
    <div className={'col-9 ' + styles.promoSale}>
      <div className={styles.sliderContainer}>
        <Slider ref={slider} {...settings}>
          <div>
            <img
              alt='name'
              src={`${process.env.PUBLIC_URL}/images/products/featured/featured-1.jpg`}
              className={styles.sliderImage}
            />
          </div>
          <div>
            <img
              alt='name'
              src={`${process.env.PUBLIC_URL}/images/products/featured/featured-2.jpg`}
              className={styles.sliderImage}
            />
          </div>
          <div>
            <img
              alt='name'
              src={`${process.env.PUBLIC_URL}/images/products/featured/featured-3.jpg`}
              className={styles.sliderImage}
            />
          </div>
        </Slider>
      </div>
      <div className={styles.verticalBar}>
        <span>
          INDOOR <span> FURNITURE</span>
        </span>
        <p>save up to 50% of all furniture</p>
      </div>
      <div className={styles.shopNow}>SHOP NOW</div>
      <div className={styles.buttonContainer}>
        <button className='col-6' onClick={handlePrev}>
          <FontAwesomeIcon icon={faChevronLeft} className={styles.fa} />
        </button>
        <button className='col-6' onClick={handleNext}>
          <FontAwesomeIcon icon={faChevronRight} className={styles.fa} />
        </button>
      </div>
    </div>
  );
};

export default FeaturedProduct;
