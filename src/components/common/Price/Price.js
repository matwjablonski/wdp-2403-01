import React from 'react';
import PropTypes from 'prop-types';
import styles from './Price.module.scss';

const Price = ({ price, variant, className: priceBtn }) => {
  const classes = ['main'];

  if (priceBtn) classes.push(styles[priceBtn]);
  if (variant) classes.push(styles[variant]);
  if (!price || price < 0) return null;
  return <div className={classes.join(' ')}>$ {price}</div>;
};

Price.propTypes = {
  price: PropTypes.number,
  variant: PropTypes.string,
  className: PropTypes.string,
};

export default Price;
