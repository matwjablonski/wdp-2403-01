import React from 'react';
// import PropTypes from 'prop-types';

import styles from './CompanyClaim.module.scss';
import MobileCompanyClaim, {
  cart,
  logo,
  phoneNumber,
} from '../CompanyClaimMedia/CompanyClaimMedia';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingBasket } from '@fortawesome/free-solid-svg-icons';

const CompanyClaim = () => {
  return (
    <div className={styles.root}>
      <div className='container'>
        <div className={`row align-items-center ${styles.desktop}`}>
          <div className={`col text-left ${styles.phoneNumber}`}>{phoneNumber}</div>
          <div className='col text-center'>
            <a href='#'>
              <img src='/images/logo.png' alt='Bazar' />
            </a>
          </div>
          <div className={`col text-right ${styles.cart}`}>
            <a href='#' className={styles.cartBox}>
              <div className={styles.cartIcon}>
                <FontAwesomeIcon className={styles.icon} icon={faShoppingBasket} />
              </div>
              <div className={styles.cartCounter}>0</div>
            </a>
          </div>
        </div>

        <MobileCompanyClaim>
          {logo}
          <div className={`col mt-3`}>
            {cart}
            <div className={`col text-center ${styles.phoneNumber}`}>{phoneNumber}</div>
          </div>
        </MobileCompanyClaim>
      </div>
    </div>
  );
};

// CompanyClaim.propTypes = {};

export default CompanyClaim;
