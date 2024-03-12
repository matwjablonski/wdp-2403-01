import React from 'react';
import PropTypes from 'prop-types';
import styles from './PromoteProductBox.module.scss';
import ProductImage from '../ProductImage/ProductImage';
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

const PromoteProductBox = ({
  name,
  id,
  category,
  stars,
  favorite,
  compare,
  price,
  originalPrice,
}) => {
  const favoriteButtonActive = clsx('outline', {
    [styles.favorite]: favorite,
  });
  const compareButtonActive = clsx('outline', {
    [styles.compare]: compare,
  });

  return (
    <div className={styles.root}>
      <div className={styles.photo}>
        <div className={styles.hotDeals}>
          <div>HOT DEALS</div>
          <div className={styles.dots}>
            {[...Array(3)].map((_, index) => (
              <div key={index} className={styles.dot}></div>
            ))}
          </div>
        </div>

        <ProductImage name={name} id={id} category={category} />
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
        <h5>{name}</h5>
        <div className={styles.stars}>
          {[1, 2, 3, 4, 5].map(i => (
            <a key={i} href='#'>
              {i <= stars ? (
                <FontAwesomeIcon icon={faStar}>{i} stars</FontAwesomeIcon>
              ) : (
                <FontAwesomeIcon icon={farStar}>{i} stars</FontAwesomeIcon>
              )}
            </a>
          ))}
        </div>
      </div>
      <div className={styles.line}></div>
      <div className={styles.actions}>
        <div className={styles.outlines}>
          <Button variant='outline' className={favoriteButtonActive}>
            <FontAwesomeIcon icon={faEye}>Favorite</FontAwesomeIcon>
          </Button>
          <Button variant='outline' className={favoriteButtonActive}>
            <FontAwesomeIcon icon={faHeart}>Favorite</FontAwesomeIcon>
          </Button>
          <Button variant='outline' className={compareButtonActive}>
            <FontAwesomeIcon icon={faExchangeAlt}>Add to compare</FontAwesomeIcon>
          </Button>
        </div>
        <div className={styles.price}>
          <Price price={originalPrice} variant='original' />
          <Button className={styles.priceBtn}>
            <Price price={price} variant='actual' />
          </Button>
        </div>
      </div>
    </div>
  );
};

PromoteProductBox.propTypes = {
  name: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  category: PropTypes.string.isRequired,
  stars: PropTypes.number.isRequired,
  favorite: PropTypes.bool,
  compare: PropTypes.bool,
  price: PropTypes.number.isRequired,
  originalPrice: PropTypes.number.isRequired,
};

export default PromoteProductBox;
