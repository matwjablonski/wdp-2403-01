import React from 'react';
import PropTypes from 'prop-types';
import { useState, useEffect } from 'react';
import clsx from 'clsx';
import styles from './ProductBox.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faStar,
  faExchangeAlt,
  faShoppingBasket,
} from '@fortawesome/free-solid-svg-icons';
import { faStar as farStar, faHeart } from '@fortawesome/free-regular-svg-icons';
import Button from '../Button/Button';
import Price from '../Price/Price';
import ProductImage from '../ProductImage/ProductImage';

const ProductBox = ({
  id,
  name,
  price,
  originalPrice,
  promo,
  stars,
  favorite,
  compare,
  category,
}) => {
  const [isFav, setIsFav] = useState(favorite);

  const favoriteButtonActive = clsx('outline', {
    [styles.favorite]: isFav,
  });
  const compareButtonActive = clsx('outline', {
    [styles.compare]: compare,
  });

  useEffect(() => {
    const favoriteFromStorage = JSON.parse(localStorage.getItem('favorites')) || [];
    setIsFav(favoriteFromStorage.includes(id));
  }, [id]);

  const addToFavorite = e => {
    e.preventDefault();
    setIsFav(!isFav);
    const favoritesFromStorage = JSON.parse(localStorage.getItem('favorites')) || [];
    const update = isFav
      ? favoritesFromStorage.filter(favId => favId !== id)
      : [...favoritesFromStorage, id];
    localStorage.setItem('favorites', JSON.stringify(update));
  };

  return (
    <div className={styles.root}>
      <div className={styles.photo}>
        <ProductImage name={name} id={id} category={category} />
        {promo && <div className={styles.sale}>{promo}</div>}
        <div className={styles.buttons}>
          <Button variant='small'>Quick View</Button>
          <Button variant='small'>
            <FontAwesomeIcon icon={faShoppingBasket}></FontAwesomeIcon> ADD TO CART
          </Button>
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
          <Button
            variant='outline'
            className={favoriteButtonActive}
            onClick={addToFavorite}
          >
            <FontAwesomeIcon icon={faHeart}>Favorite</FontAwesomeIcon>
          </Button>
          <Button variant='outline' className={compareButtonActive}>
            <FontAwesomeIcon icon={faExchangeAlt}>Add to compare</FontAwesomeIcon>
          </Button>
        </div>
        <div className={styles.price}>
          <Price price={originalPrice} variant='original' />
          <Price price={price} variant='actual' />
        </div>
      </div>
    </div>
  );
};

ProductBox.propTypes = {
  children: PropTypes.node,
  name: PropTypes.string,
  price: PropTypes.number,
  originalPrice: PropTypes.number,
  promo: PropTypes.string,
  stars: PropTypes.number,
  id: PropTypes.string,
  category: PropTypes.string,
  favorite: PropTypes.bool,
  compare: PropTypes.bool,
};

export default ProductBox;
