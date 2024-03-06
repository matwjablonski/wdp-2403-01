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
import { getPromByType } from '../../../redux/promotionsRedux';

import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import ProductImage from '../../common/ProductImage/ProductImage';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faEye,
  faStar,
  faExchangeAlt,
  faShoppingBasket,
} from '@fortawesome/free-solid-svg-icons';
import { faStar as farStar, faHeart } from '@fortawesome/free-regular-svg-icons';
import Price from '../../common/Price/Price';
import ReactTooltip from 'react-tooltip';

const Gallery = () => {
  const categories = useSelector(getAllTrends);
  const [activeCategory, setActiveCategory] = useState(categories[1].id);
  const items = useSelector(state => getByTrend(state, activeCategory));
  const [activeItem, setActiveItem] = useState(items[3]);
  const activeSale = { filePath: getFilePath(activeItem) };
  const promItems = useSelector(state => getPromByType(state, 'gallery-panel'));

  useEffect(() => {
    setActiveItem(items[0]);
    activeSale.filePath = getFilePath(activeItem);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [activeCategory]);

  const handleCategoryChange = newCategory => {
    setActiveCategory(newCategory);
  };

  function getFilePath(item) {
    if (item)
      return `${process.env.PUBLIC_URL}/images/products/${item.category}/${item.id}.jpg`;
    return '';
  }

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
        <div className={clsx('row d-flex flex-column flex-lg-row', styles.panel)}>
          <div className={clsx('col-lg-6 d-flex flex-column', styles.leftPanel)}>
            <PanelBar title='Furniture Gallery' className={styles.PanelBar} />
            <PanelMenu
              menuItems={categories}
              action={handleCategoryChange}
              activeItem={activeCategory}
              classActive={styles.active}
              noHover={true}
            />
            <div className={styles.gallery}>
              <SalesPanel className={styles.bkg} sales={activeSale}>
                <div className={styles.buttons}>
                  <Button
                    variant='outline'
                    className={styles.btn}
                    data-tip='favorite'
                    data-for='test'
                  >
                    <FontAwesomeIcon icon={faHeart} />
                  </Button>
                  <Button
                    variant='outline'
                    className={styles.btn}
                    data-tip='compare'
                    data-for='test'
                  >
                    <FontAwesomeIcon icon={faExchangeAlt} />
                  </Button>
                  <Button
                    variant='outline'
                    className={styles.btn}
                    data-tip='quick view'
                    data-for='test'
                  >
                    <FontAwesomeIcon icon={faEye} />
                  </Button>
                  <Button
                    variant='outline'
                    className={styles.btn}
                    data-tip='add to cart'
                    data-for='test'
                  >
                    <FontAwesomeIcon icon={faShoppingBasket} />
                  </Button>
                  <ReactTooltip
                    id='test'
                    place='right'
                    type='info'
                    effect='solid'
                    arrowColor='black'
                    className={styles.tooltip}
                  />
                </div>
                <div className={styles.detailsWrapper}>
                  <div className={clsx('', styles.details)}>
                    <div className={styles.detailsPrice}>
                      <Price price={activeItem.price} variant='actual' />
                      <Price price={activeItem.originalPrice} variant='original' />
                    </div>
                    <h5>{activeItem.name}</h5>
                    <div className={styles.stars}>
                      {[1, 2, 3, 4, 5].map(i => (
                        <a key={i} href='#'>
                          {i <= activeItem.stars ? (
                            <FontAwesomeIcon icon={faStar}>{i} stars</FontAwesomeIcon>
                          ) : (
                            <FontAwesomeIcon icon={farStar}>{i} stars</FontAwesomeIcon>
                          )}
                        </a>
                      ))}
                    </div>
                  </div>
                </div>
              </SalesPanel>
            </div>
            <div className={clsx('', styles.sliderItems)}>
              <Slider {...settings}>
                {items.map(item => (
                  <div key={item.id} onClick={() => setActiveItem(item)} className=''>
                    <ProductImage
                      {...item}
                      className={clsx(styles.imgBody, styles.notActive)}
                    />
                  </div>
                ))}
              </Slider>
            </div>
          </div>
          <div className={clsx('col-lg-6', styles.rightPanel)}>
            <SalesPanel className={styles.bkg} sales={promItems[0]}>
              <div className={styles.content}>
                <p>
                  {promItems[0].title.split('#')[0]}
                  <span>{promItems[0].title.split('#')[1]}</span>
                </p>
                <p>{promItems[0].subtitle}</p>
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
