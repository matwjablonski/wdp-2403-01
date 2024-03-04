import React from 'react';
import { useState } from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import styles from './ProductBox.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faStar,
  faExchangeAlt,
  faShoppingBasket,
} from '@fortawesome/free-solid-svg-icons';
import { useDispatch } from 'react-redux';
import { faStar as farStar, faHeart } from '@fortawesome/free-regular-svg-icons';
import Button from '../Button/Button';
import Price from '../Price/Price';
import ProductImage from '../ProductImage/ProductImage';
import { addProductToCompare } from '../../../redux/compareRedux';

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
  const favoriteButtonActive = clsx('outline', {
    [styles.favorite]: favorite,
  });
  const compareButtonActive = clsx('outline', {
    [styles.compare]: compare,
  });
  const dispatch = useDispatch();
  const product = { name, category, id, price };

  const addToCompare = e => {
    e.preventDefault();
    dispatch(addProductToCompare(product));
  };
  return (
    <div className={styles.root}>
      <div className={styles.photo}>
        <ProductImage name={name} id={id} category={category} />
        {promo && <div className={styles.sale}>{promo}</div>}
        <div className={styles.buttons}>
          <Button variant='small'>Quick View</Button>
          <Button variant='small'>
            <FontAwesomeIcon icon={faShoppingBasket} />
            Add to cart
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
          <Button variant='outline' className={favoriteButtonActive}>
            <FontAwesomeIcon icon={faHeart}>Favorite</FontAwesomeIcon>
          </Button>
          <Button
            variant='outline'
            onClick={addToCompare}
            className={compareButtonActive}
          >
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
