import styles from './ProductImage.module.scss';
import PropTypes from 'prop-types';
import React from 'react';

const ProductImage = ({ name, id, category }) => {
  return (
    <div className={styles.productImage}>
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
};

export default ProductImage;
