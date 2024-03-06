import styles from './Brands.module.scss';
import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons';

const Brands = () => {
  const brandsImg = useSelector(state => state.brands);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [currentLayout, setCurrentLayout] = useState('DESKTOP');
  const slidesPerPage = {
    DESKTOP: 6,
    TABLET: 4,
    MOBILE: 2,
  };

  useEffect(() => {
    const handleResize = () => {
      const screenWidth = window.innerWidth;
      let layout = 'DESKTOP';
      if (screenWidth < 768) {
        layout = 'MOBILE';
      } else if (screenWidth < 1024) {
        layout = 'TABLET';
      }
      setCurrentLayout(layout);
    };

    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const handleNext = () => {
    const nextIndex = (currentIndex + slidesPerPage[currentLayout]) % brandsImg.length;
    setCurrentIndex(nextIndex);
    console.log(nextIndex);
  };

  const handlePrev = () => {
    let prevIndex = currentIndex - slidesPerPage[currentLayout];
    if (prevIndex < 0) {
      prevIndex = brandsImg.length + prevIndex;
    }
    setCurrentIndex(prevIndex);
  };

  const visibleSlides = brandsImg.slice(
    currentIndex,
    currentIndex + slidesPerPage[currentLayout]
  );

  return (
    <div className={styles.slider}>
      <button onClick={handleNext}>
        <FontAwesomeIcon icon={faChevronLeft} className={styles.fa} />
      </button>
      {visibleSlides.map(brandImg => (
        <div key={brandImg.id} className={styles.item}>
          <img src={process.env.PUBLIC_URL + brandImg.url} alt={brandImg.description} />
        </div>
      ))}
      <button onClick={handlePrev}>
        <FontAwesomeIcon icon={faChevronRight} className={styles.fa} />
      </button>
    </div>
  );
};

export default Brands;
