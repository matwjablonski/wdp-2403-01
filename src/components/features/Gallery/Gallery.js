import React, { useState, useEffect } from 'react';
import styles from './Gallery.module.scss';
import { clsx } from 'clsx';
import SalesPanel from '../../common/SalesPanel/SalesPanel';
import Button from '../../common/Button/Button';
import PanelBar from '../../layout/PanelBar/PanelBar';
import PanelMenu from '../../layout/PanelMenu/PanelMenu';

import { useSelector } from 'react-redux';
import { getByTrend } from '../../../redux/productsRedux';
import { getAllTrends } from '../../../redux/categoriesRedux';

import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import ProductImage from '../../common/ProductImage/ProductImage';

const Gallery = () => {
  const categories = useSelector(getAllTrends);
  const [activeCategory, setActiveCategory] = useState(categories[1].id);
  const items = useSelector(state => getByTrend(state, activeCategory));
  const [activeItem, setActiveItem] = useState(items[3]);
  const activeSale = { filePath: getFilePath(activeItem) };
  console.log(activeItem, activeCategory);
  console.log(items);

  useEffect(() => {
    setActiveItem(items[0]);
    activeSale.filePath = getFilePath(activeItem);
    console.log(activeSale.filePath);
  }, [activeCategory, activeItem, activeSale.filePath, items]);

  const handleCategoryChange = newCategory => {
    setActiveCategory(newCategory);
  };

  function getFilePath(item) {
    if (item)
      return `${process.env.PUBLIC_URL}/images/products/${item.category}/${item.id}.jpg`;
    return '';
  }

  //https://refine.dev/blog/react-slick/#styling-the-thumbnails
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 6,
    slidesToScroll: 1,
  };
  return (
    <div className={styles.root}>
      <div className={'container'}>
        <div className={clsx('d-flex flex-column flex-lg-row', styles.panel)}>
          <div className={clsx('col-lg-6 d-flex flex-column', styles.leftPanel)}>
            <PanelBar title='Furniture Gallery' />
            <PanelMenu
              menuItems={categories}
              action={handleCategoryChange}
              activeItem={activeCategory}
              classActive={styles.active}
              noHover={true}
            />
            <div className={styles.gallery}>
              <SalesPanel className={styles.bkg} sales={activeSale}>
                <div className={styles.content}>
                  <p>from $50.80</p>
                  <p>Bedroom Bed</p>
                  <Button className={styles.button} variant='outline'>
                    Shop now
                  </Button>
                </div>
              </SalesPanel>
            </div>
            <div className={clsx('', styles.sliderItems)}>
              <Slider {...settings}>
                {items.map(item => (
                  <div key={item.id} onClick={() => setActiveItem(item)} className=''>
                    <ProductImage {...item} className={styles.imgBody} />
                    {/* <img alt={'name'} className={styles.imgBody} src={getFilePath(item)} /> */}
                  </div>
                ))}
              </Slider>
            </div>
          </div>
          <div className={clsx('col-lg-6', styles.rightPanel)}>
            <SalesPanel className={styles.bkg}>
              <div className={styles.content}>
                <p>from $50.80</p>
                <p>Bedroom Bed</p>
                <Button className={styles.button} variant='outline'>
                  Shop now
                </Button>
              </div>
            </SalesPanel>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Gallery;
