import React from 'react';
// import PropTypes from 'prop-types';

import styles from './CompanyClaim.module.scss';
import MobileCompanyClaim, {
  cart,
  logo,
  phoneNumber,
} from '../CompanyClaimMedia/CompanyClaimMedia';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMobileAlt } from '@fortawesome/free-solid-svg-icons';
import Cart from '../../features/Cart/Cart';

const CompanyClaim = () => {
  return (
    <div className={styles.root}>
      <div className='container'>
        <div className='row align-items-center'>
          <div className={`col text-left ${styles.phoneNumber}`}>
            <p>
              <FontAwesomeIcon className={styles.icon} icon={faMobileAlt} /> 2300 - 3560
              - 222
            </p>
          </div>
          <div className='col text-center'>
            <a href='#'>
              <img src='/images/logo.png' alt='Bazar' />
            </a>
          </div>
          <Cart />
          <MobileCompanyClaim>
            {logo}
            <div className={`col mt-3`}>
              <div className={`col text-center ${styles.cart}`}>{cart}</div>
              <div className={`col text-center ${styles.phoneNumber}`}>
                {phoneNumber}
              </div>
            </div>
          </MobileCompanyClaim>
        </div>
      </div>
    </div>
  );
};

// CompanyClaim.propTypes = {};

export default CompanyClaim;
