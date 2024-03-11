import React, { useRef, useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import styles from './PromoteProductBox.module.scss';
import ProductImage from '../ProductImage/ProductImage';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faStar,
  faExchangeAlt,
  faHeart,
  faEye,
  faShoppingBasket,
} from '@fortawesome/free-solid-svg-icons';
import { faStar as farStar } from '@fortawesome/free-regular-svg-icons';
import Button from '../Button/Button';
import Price from '../Price/Price';
import clsx from 'clsx';

const PromoteProductBox = ({ products }) => {
  const slider = useRef(null);
  const [activeSlide, setActiveSlide] = useState(0);
  useEffect(() => {
    const interval = setInterval(() => {
      slider.current.slickNext();
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  const settings = {
    arrows: false,
    autoplay: true,
    autoplaySpeed: 3000,
    dots: false,
    infinite: true,
    fade: true,
    afterChange: current => {
      setActiveSlide(current);
    },
  };

  const pauseCarousel = () => {
    slider.current.slickPause();

    setTimeout(() => {
      slider.current.slickPlay();
    }, 10000);
  };

  const handleClick = index => {
    slider.current.slickGoTo(index);
    setActiveSlide(index);
  };

  return (
    <div className={styles.root}>
      <div className={styles.photo}>
        <div className={styles.hotDeals}>
          <div>HOT DEALS</div>
          <div className={styles.dots}>
            {[...Array(products.length)].map((_, index) => (
              <div
                key={index}
                className={clsx(styles.dot, {
                  [styles.active]: index === activeSlide,
                })}
                onClick={() => handleClick(index)}
              ></div>
            ))}
          </div>
        </div>
      </div>
      <Slider ref={slider} {...settings}>
        {products.map((product, index) => (
          <div key={index} className={styles.slide}>
            <div className={styles.photo} onClick={pauseCarousel}>
              <ProductImage
                name={product.name}
                id={product.id}
                category={product.category}
              />
              <div className={styles.addToCartButton}>
                <Button variant='small'>
                  <FontAwesomeIcon icon={faShoppingBasket} />
                  Add to cart
                </Button>
              </div>
              <div className={styles.timer}>
                <ul>
                  <li>
                    <p>02</p>
                    <span>Days</span>
                  </li>
                  <li>
                    <p>12</p>
                    <span>Hours</span>
                  </li>
                  <li>
                    <p>27</p>
                    <span>Minutes</span>
                  </li>
                  <li>
                    <p>55</p>
                    <span>Seconds</span>
                  </li>
                </ul>
              </div>
            </div>
            <div className={styles.content}>
              <h5>{product.name}</h5>
              <div className={styles.stars}>
                {[1, 2, 3, 4, 5].map(i => (
                  <a key={i} href='#'>
                    {i <= product.stars ? (
                      <FontAwesomeIcon icon={faStar}>{i} stars</FontAwesomeIcon>
                    ) : (
                      <FontAwesomeIcon icon={farStar}>{i} stars</FontAwesomeIcon>
                    )}
                  </a>
                ))}
              </div>
              <div className={styles.actions}>
                <div className={styles.outlines}>
                  <Button variant='outline' className={styles.favoriteButtonActive}>
                    <FontAwesomeIcon icon={faEye}>Favorite</FontAwesomeIcon>
                  </Button>
                  <Button variant='outline' className={styles.favoriteButtonActive}>
                    <FontAwesomeIcon icon={faHeart}>Favorite</FontAwesomeIcon>
                  </Button>
                  <Button variant='outline' className={styles.compareButtonActive}>
                    <FontAwesomeIcon icon={faExchangeAlt}>
                      Add to compare
                    </FontAwesomeIcon>
                  </Button>
                </div>
                <div className={styles.price}>
                  <Price price={product.originalPrice} variant='original' />
                  <Button className={styles.priceBtn}>
                    <Price price={product.price} variant='actual' />
                  </Button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

PromoteProductBox.propTypes = {
  products: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      id: PropTypes.string.isRequired,
      category: PropTypes.string.isRequired,
      stars: PropTypes.number.isRequired,
      favorite: PropTypes.bool,
      compare: PropTypes.bool,
      price: PropTypes.number.isRequired,
      originalPrice: PropTypes.number.isRequired,
    })
  ).isRequired,
};

export default PromoteProductBox;
