import React from 'react';
import styles from './PanelBar.module.scss';
import { PropTypes } from 'prop-types';

const PanelBar = ({ title, children }) => {
  return (
    <div className={styles.panelBar}>
      <div className='row no-gutters align-items-end'>
        <div className={'col-auto ' + styles.heading}>
          <h3>{title}</h3>
        </div>
        {children}
      </div>
    </div>
  );
};

PanelBar.propTypes = {
  title: PropTypes.string,
  children: PropTypes.node,
};

export default PanelBar;
