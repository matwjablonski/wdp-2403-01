import React from 'react';
import styles from './PanelBar.module.scss';
import { PropTypes } from 'prop-types';
import { clsx } from 'clsx';

const PanelBar = ({ title, children, className: classNameProps }) => {
  return (
    <div className={clsx(styles.panelBar, classNameProps)}>
      <div className={'col-auto ' + styles.heading}>
        <h3>{title}</h3>
      </div>
      {children}
    </div>
  );
};

PanelBar.propTypes = {
  title: PropTypes.string,
  children: PropTypes.node,
  className: PropTypes.string,
};

export default PanelBar;
