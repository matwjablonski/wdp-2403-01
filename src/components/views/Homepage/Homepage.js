import React from 'react';
// import PropTypes from 'prop-types';

import styles from './Homepage.module.scss';

import FeatureBoxes from '../../features/FeatureBoxes/FeatureBoxes';
import NewFurniture from '../../features/NewFurniture/NewFurnitureContainer';
import Swipeable from '../../common/Swipeable/Swipeable';

const Homepage = () => (
  <div className={styles.root}>
    <Swipeable>Swipe me</Swipeable>
    <FeatureBoxes />
    <Swipeable>
      <NewFurniture />
    </Swipeable>
  </div>
);

// Homepage.propTypes = {};

export default Homepage;
