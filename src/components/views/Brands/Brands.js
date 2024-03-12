import styles from './Brands.module.scss';
import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons';
import Swipeable from '../../common/Swipeable/Swipeable';
import { getViewMode } from '../../../utils/viewMode';

const Brands = () => {
  const brandsImg = useSelector(state => state.brands);
  const layout = useSelector(state => getViewMode(state));
  const [currentIndex, setCurrentIndex] = useState(0);
  const [currentLayout, setCurrentLayout] = useState(layout);
  const slidesPerPage = {
    desktop: 6,
    tablet: 4,
    mobile: 2,
  };

  useEffect(() => {
    const handleResize = () => {
      const screenWidth = window.innerWidth;
      let view = layout;
      if (screenWidth < 768) {
        view = 'mobile';
      } else if (screenWidth < 1200) {
        view = 'tablet';
      }
      setCurrentLayout(view);
    };

    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [layout]);

  const handleNext = () => {
    const nextIndex = (currentIndex + slidesPerPage[currentLayout]) % brandsImg.length;
    setCurrentIndex(nextIndex);
  };

  const handlePrev = () => {
    let prevIndex = currentIndex - slidesPerPage[currentLayout];
    if (prevIndex < 0) {
      prevIndex = brandsImg.length + prevIndex;
    }
    setCurrentIndex(prevIndex);
  };

  const handleSwipe = direction => {
    if (direction === 'increment') {
      handleNext();
    } else if (direction === 'decrement') {
      handlePrev();
    }
  };

  const visibleSlides = brandsImg.slice(
    currentIndex,
    currentIndex + slidesPerPage[currentLayout]
  );

  return (
    <div className={styles.root}>
      <Swipeable action={handleSwipe}>
        <div className={styles.slider}>
          <button onClick={handleNext}>
            <FontAwesomeIcon icon={faChevronLeft} className={styles.fa} />
          </button>
          <div className={`row ${styles.imgContainer}`}>
            {visibleSlides.map(brandImg => (
              <div key={brandImg.id} className={`${styles.item}`}>
                <img
                  src={process.env.PUBLIC_URL + brandImg.url}
                  alt={brandImg.description}
                />
              </div>
            ))}
          </div>
          <button onClick={handlePrev}>
            <FontAwesomeIcon icon={faChevronRight} className={styles.fa} />
          </button>
        </div>
      </Swipeable>
    </div>
  );
};

export default Brands;
