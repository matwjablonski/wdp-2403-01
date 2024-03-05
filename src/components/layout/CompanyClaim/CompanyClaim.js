import React from 'react';
// import PropTypes from 'prop-types';

import styles from './CompanyClaim.module.scss';
import MobileCompanyClaim, {
  cart,
  logo,
  phoneNumber,
} from '../CompanyClaimMedia/CompanyClaimMedia';

const CompanyClaim = () => {
  return (
    <div className={styles.root}>
      <div className='container'>
        <div className={`row align-items-center ${styles.desktop}`}>
          <div className={`col text-left ${styles.phoneNumber}`}>{phoneNumber}</div>
          {logo}
          <div className={`col text-right ${styles.cart}`}>{cart}</div>
        </div>

        <MobileCompanyClaim>
          {logo}
          <div className={`col mt-3`}>
            <div className={`col text-center ${styles.cart}`}>{cart}</div>
            <div className={`col text-center ${styles.phoneNumber}`}>{phoneNumber}</div>
          </div>
        </MobileCompanyClaim>
      </div>
    </div>
  );
};

// CompanyClaim.propTypes = {};

export default CompanyClaim;
