import React from 'react';
import styles from './Promote.module.scss';
import ProductImage from '../../common/ProductImage/ProductImage';
import ProductBox from '../../common/ProductBox/ProductBox';
import PropTypes from 'prop-types';

const Promote = ({ name, id, category }) => {
  return (
    <div className={styles.root}>
      <div className='container'>
        <div className='row'>
          <div className='col-3'>
            <ProductImage name={name} id={id} category={category} />
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

Promote.propTypes = {
  name: PropTypes.string,
  id: PropTypes.string,
  category: PropTypes.string,
};

export default Promote;
