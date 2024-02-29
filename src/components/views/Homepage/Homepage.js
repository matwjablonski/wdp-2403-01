import React from 'react';
// import PropTypes from 'prop-types';

import styles from './Homepage.module.scss';

import FeatureBoxes from '../../features/FeatureBoxes/FeatureBoxes';
import NewFurniture from '../../features/NewFurniture/NewFurnitureContainer';
import Promote from '../../layout/Promote/Promote';

const Homepage = () => (
  <div className={styles.root}>
    <FeatureBoxes />
    <Promote />
    <NewFurniture />
  </div>
);

// Homepage.propTypes = {};

export default Homepage;
