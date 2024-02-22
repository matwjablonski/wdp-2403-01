import React from 'react';
import PropTypes from 'prop-types';
import styles from './Price.module.scss';

const Price = ({ price, variant }) => {
  const classes = ['main'];

  if (variant) classes.push(styles[variant]);
  if (!price || price < 0) return <></>;
  return <div className={classes.join(' ')}>$ {price}</div>;
};

Price.propTypes = {
  price: PropTypes.number,
  variant: PropTypes.string,
};

export default Price;
