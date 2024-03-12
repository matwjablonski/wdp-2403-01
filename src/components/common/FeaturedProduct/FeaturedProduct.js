import React, { useRef, useEffect, useState } from 'react';
import styles from './FeaturedProduct.module.scss';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons';
import Swipeable from '../Swipeable/Swipeable';

const FeaturedProduct = () => {
  const slider = useRef(null);
  const [screenSize, setScreenSize] = useState('desktop');
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: false,
    pauseOnHover: false,
    swipe: screenSize === 'mobile',
    arrows: false,
    fade: true,
  };

  const detectScreenSize = () => {
    const screenWidth = window.innerWidth;
    if (screenWidth < 768) {
      setScreenSize('mobile');
    } else {
      setScreenSize('desktop');
    }
  };

  useEffect(() => {
    detectScreenSize();
    window.addEventListener('resize', detectScreenSize);
    return () => window.removeEventListener('resize', detectScreenSize);
  }, []);

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

  const handleSwipe = action => {
    if (action === 'increment') {
      handleNext();
    } else if (action === 'decrement') {
      handlePrev();
    }
  };

  return (
    <div className={'col-12 col-lg-9 ' + styles.promoSale}>
      <div className={styles.sliderContainer}>
        {screenSize === 'mobile' ? (
          <Swipeable action={handleSwipe}>
            <Slider ref={slider} {...settings}>
              <div>
                <img
                  alt='name'
                  src={`${process.env.PUBLIC_URL}/images/products/featured/featured-1.jpg`}
                />
              </div>
              <div>
                <img
                  alt='name'
                  src={`${process.env.PUBLIC_URL}/images/products/featured/featured-2.jpg`}
                />
              </div>
              <div>
                <img
                  alt='name'
                  src={`${process.env.PUBLIC_URL}/images/products/featured/featured-3.jpg`}
                />
              </div>
            </Slider>
          </Swipeable>
        ) : (
          <Slider ref={slider} {...settings}>
            <div>
              <img
                alt='name'
                src={`${process.env.PUBLIC_URL}/images/products/featured/featured-1.jpg`}
              />
            </div>
            <div>
              <img
                alt='name'
                src={`${process.env.PUBLIC_URL}/images/products/featured/featured-2.jpg`}
              />
            </div>
            <div>
              <img
                alt='name'
                src={`${process.env.PUBLIC_URL}/images/products/featured/featured-3.jpg`}
              />
            </div>
          </Slider>
        )}
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
