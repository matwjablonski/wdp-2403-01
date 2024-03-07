import React from 'react';
// import PropTypes from 'prop-types';

import styles from './Homepage.module.scss';
import FeatureBoxes from '../../features/FeatureBoxes/FeatureBoxes';
import NewFurniture from '../../features/NewFurniture/NewFurnitureContainer';
import Promote from '../../features/Promote/Promote';
import Brands from '../Brands/Brands';
import Promotions from '../../features/Promotions/Promotions';


const Homepage = () => (
  <div className={styles.root}>
    <Promote />
    <FeatureBoxes />
    <Promotions />
    <NewFurniture />
    <Brands />
  </div>
);

// Homepage.propTypes = {};

export default Homepage;
