import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMobileAlt, faShoppingBasket } from '@fortawesome/free-solid-svg-icons';
import PropTypes from 'prop-types';

import styles from '../CompanyClaim/CompanyClaim.module.scss';

export const logo = (
  <div className={`col text-center ${styles.logo}`}>
    <a href='/'>
      <img src='/images/logo.png' alt='Bazar' />
    </a>
  </div>
);

export const cart = (
  <div className={`col text-center ${styles.cart}`}>
    <a href='#' className={styles.cartBox}>
      <div className={styles.cartIcon}>
        <FontAwesomeIcon className={styles.icon} icon={faShoppingBasket} />
      </div>
      <div className={styles.cartCounter}>0</div>
    </a>
  </div>
);
export const phoneNumber = (
  <p>
    <FontAwesomeIcon className={styles.icon} icon={faMobileAlt} /> 2300 - 3560 - 222
  </p>
);
const MobileCompanyClaim = props => {
  return (
    <div className={`row align-items-center ${styles.mobile}`}>{props.children}</div>
  );
};
export default MobileCompanyClaim;

MobileCompanyClaim.propTypes = {
  children: PropTypes.node,
};
