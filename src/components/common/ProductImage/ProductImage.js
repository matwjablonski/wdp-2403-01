import PropTypes from 'prop-types';
import React from 'react';

import ImageWrapper from '../ImageWrapper/ImageWrapper';

const ProductImage = ({ name, id, category }) => {
  const imageProps = {
    alt: name,
    filePath: `${process.env.PUBLIC_URL}/images/products/${category}/${id}.jpg`,
  };
  return <ImageWrapper {...imageProps} />;
};

ProductImage.propTypes = {
  name: PropTypes.string,
  id: PropTypes.string,
  category: PropTypes.string,
};

export default ProductImage;
