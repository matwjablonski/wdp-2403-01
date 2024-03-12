import React from 'react';
// import PropTypes from 'prop-types';
import styles from './Homepage.module.scss';
import FeatureBoxes from '../../features/FeatureBoxes/FeatureBoxes';
import NewFurniture from '../../features/NewFurniture/NewFurnitureContainer';
import Gallery from '../../features/Gallery/Gallery';
import Brands from '../Brands/Brands';
import Promote from '../../features/Promote/Promote';
import Promotions from '../../features/Promotions/Promotions';

const Homepage = () => (
  <div className={styles.root}>
    <Promote />
    <FeatureBoxes />
    <Promotions />
    <NewFurniture />
    <Gallery />
    <Brands />
  </div>
);

// Homepage.propTypes = {};

export default Homepage;
