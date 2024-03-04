import styles from './ImageWrapper.module.scss';
import PropTypes from 'prop-types';
import React from 'react';

const ImageWrapper = ({ name, filePath }) => {
  return (
    <div className={styles.root}>
      <img alt={name} src={filePath} />
    </div>
  );
};

ImageWrapper.propTypes = {
  name: PropTypes.string,
  filePath: PropTypes.string,
};

export default ImageWrapper;
