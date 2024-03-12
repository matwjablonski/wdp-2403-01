import React from 'react';
import styles from './Promote.module.scss';

import ProductImage from '../../common/ProductImage/ProductImage';
import ProductBox from '../../common/ProductBox/ProductBox';

const Promote = () => {
  return (
    <div className={styles.root}>
      <div className='container'>
        <div className='row'>
          <div className='col-3'>
            <ProductBox />
          </div>
          <div className={'col-9 ' + styles.promoSale}>
            <span>TEST</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Promote;
