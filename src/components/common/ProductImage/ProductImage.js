import styles from './ProductImage.module.scss';
import PropTypes from 'prop-types';
import React from 'react';
import { clsx } from 'clsx';

const ProductImage = ({ name, id, category, className: classNameProp }) => {
  return (
    <div className={clsx(styles.productImage, classNameProp)}>
      <img
        alt={name}
        src={`${process.env.PUBLIC_URL}/images/products/${category}/${id}.jpg`}
      />
    </div>
  );
};

ProductImage.propTypes = {
  name: PropTypes.string,
  id: PropTypes.string,
  category: PropTypes.string,
  className: PropTypes.string,
};

export default ProductImage;
