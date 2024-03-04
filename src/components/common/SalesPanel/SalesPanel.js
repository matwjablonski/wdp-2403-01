import React from 'react';
import PropTypes from 'prop-types';
import styles from './SalesPanel.module.scss';

const SalesPanel = ({ children, className: propClassName, sales }) => {
  const classes = [styles.root];
  const srcDir = process.env.PUBLIC_URL;

  if (propClassName) classes.push(propClassName);

  return (
    <div
      className={classes.join(' ')}
      style={{ backgroundImage: `url(${srcDir}${sales.filePath}` }}
    >
      {children}
    </div>
  );
};

SalesPanel.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  sales: PropTypes.object,
};

export default SalesPanel;
