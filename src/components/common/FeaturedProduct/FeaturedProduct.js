import React from 'react';
import styles from './FeaturedProduct.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons';

const FeaturedProduct = () => {
  return (
    <div className={'col-9 ' + styles.promoSale}>
      <img
        alt='name'
        src={`${process.env.PUBLIC_URL}/images/products/featured/featured-2.jpg`}
      ></img>
      <div className={styles.verticalBar}>
        <span>
          INDOOR <span> FURNITURE</span>
        </span>
        <p>save up to 50% of all furniture</p>
      </div>
      <div className={styles.shopNow}>SHOP NOW</div>
      <div className={styles.buttonContainer}>
        <button className='col-6'>
          <FontAwesomeIcon icon={faChevronLeft} className={styles.fa} />
        </button>
        <button className='col-6'>
          <FontAwesomeIcon icon={faChevronRight} className={styles.fa} />
        </button>
      </div>
    </div>
  );
};

export default FeaturedProduct;
