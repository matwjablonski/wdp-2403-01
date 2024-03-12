import React from 'react';
import { useSelector } from 'react-redux';
import { getAllCompare, getCompareById } from '../../../redux/compareRedux';
import styles from './CompareProducts.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart, faTimes } from '@fortawesome/free-solid-svg-icons';
import { useDispatch } from 'react-redux';
import { removeProductFromCompare } from '../../../redux/compareRedux.js';
import Button from '../../common/Button/Button';
import { faExchangeAlt } from '@fortawesome/free-solid-svg-icons';

const CompareProducts = () => {
  const productsCompare = useSelector(getAllCompare);
  const dispatch = useDispatch();
  const handleRemoveProductFromCompare = compareName => {
    dispatch(removeProductFromCompare(compareName));
  };

  return (
    <div className={styles.container}>
      {productsCompare.map(products => (
        <div key={products.id} className={styles.product}>
          <div className={styles.imageContainer}>
            <img
              className={styles.imgCompare}
              src={`${process.env.PUBLIC_URL}/images/products/${products.category}/${products.id}.jpg`}
              alt={products.name}
            />
            <FontAwesomeIcon
              icon={faTimes}
              onClick={() => handleRemoveProductFromCompare(products.name)}
              className={styles.closeIcon}
            />
          </div>
          <div className={styles.content}>
            <h5>{products.name}</h5>
          </div>
          <div className={styles.buttonContainer}>
            <div className={styles.button}>
              <Button variant='outline'>
                <FontAwesomeIcon icon={faHeart}></FontAwesomeIcon>
              </Button>
              <Button variant='outline'>
                <FontAwesomeIcon icon={faExchangeAlt}></FontAwesomeIcon>
              </Button>
            </div>
            <div className={styles.price}>
              <Button noHover variant='small' className={styles.priceBtn}>
                $ {products.price}
              </Button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default CompareProducts;
