import styles from './Brands.module.scss';
import React from 'react';
import { useSelector } from 'react-redux';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons';

const Brands = () => {
  const brandsImg = useSelector(state => state.brands);

  return (
    <div className={styles.slider}>
      <button>
        <FontAwesomeIcon icon={faChevronLeft} className={styles.fa} />
      </button>
      {brandsImg.map(brandImg => (
        <div key={brandImg.id} className={styles.item}>
          <img src={process.env.PUBLIC_URL + brandImg.url} alt={brandImg.description} />
        </div>
      ))}
      <button>
        <FontAwesomeIcon icon={faChevronRight} className={styles.fa} />
      </button>
    </div>
  );
};

export default Brands;
