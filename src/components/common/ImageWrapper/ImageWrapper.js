import styles from './ImageWrapper.module.scss';
import PropTypes from 'prop-types';
import React from 'react';
import { clsx } from 'clsx';

const ImageWrapper = ({ name, filePath, className: classNameProps }) => {
  return (
    <div className={clsx(styles.root, classNameProps)}>
      <img alt={name} src={filePath} />
    </div>
  );
};

ImageWrapper.propTypes = {
  name: PropTypes.string,
  filePath: PropTypes.string,
  className: PropTypes.string,
};

export default ImageWrapper;
