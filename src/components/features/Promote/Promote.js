import React from 'react';
import styles from './Promote.module.scss';
import PromoteProductBox from '../../common/PromoteProductBox/PromoteProductBox';
import FeaturedProduct from '../../common/FeaturedProduct/FeaturedProduct';
import { useSelector } from 'react-redux';
import { getAll } from '../../../redux/productsRedux';

const Promote = () => {
  const products = useSelector(getAll);

  const promotedProducts = products.filter(
    product =>
      product.id === 'aenean-ru-bristique-2' ||
      product.id === 'aenean-ru-bristique-10' ||
      product.id === 'aenean-ru-bristique-20'
  );

  return (
    <div className={styles.root}>
      <div className='container'>
        <div className='row'>
          <div className='col-3 d-none d-lg-block'>
            <PromoteProductBox products={promotedProducts} />
          </div>
          <FeaturedProduct />
        </div>
      </div>
    </div>
  );
};

export default Promote;
