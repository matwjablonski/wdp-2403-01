import React from 'react';
import styles from './Promote.module.scss';
import PromoteProductBox from '../../common/PromoteProductBox/PromoteProductBox';
import FeaturedProduct from '../../common/FeaturedProduct/FeaturedProduct';
import { useSelector } from 'react-redux';
import { getAll } from '../../../redux/productsRedux';

const Promote = () => {
  const products = useSelector(getAll);
  const promotedProduct = products.find(
    product => product.id === 'aenean-ru-bristique-21'
  );

  return (
    <div className={styles.root}>
      <div className='container'>
        <div className='row'>
          <div className='col-3'>
            {promotedProduct && (
              <PromoteProductBox
                id={promotedProduct.id}
                name={promotedProduct.name}
                category={promotedProduct.category}
                stars={promotedProduct.stars}
                favorite={promotedProduct.favorite}
                compare={promotedProduct.compare}
                price={promotedProduct.price}
                originalPrice={promotedProduct.originalPrice}
              />
            )}
          </div>
          <FeaturedProduct />
        </div>
      </div>
    </div>
  );
};

export default Promote;
