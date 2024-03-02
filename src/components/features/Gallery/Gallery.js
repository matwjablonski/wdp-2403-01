import React, { useState } from 'react';
import styles from './Gallery.module.scss';
import { clsx } from 'clsx';
import SalesPanel from '../../common/SalesPanel/SalesPanel';
import Button from '../../common/Button/Button';
import PanelBar from '../../layout/PanelBar/PanelBar';
import PanelMenu from '../../layout/PanelMenu/PanelMenu';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';

import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const Gallery = () => {
  const categories = [
    { id: '1', name: 'featured' },
    { id: '2', name: 'top seller' },
    { id: '3', name: 'sales off' },
    { id: '4', name: 'top rated' },
  ];
  const [activeCategory, setActiveCategory] = useState(categories[0].id);

  const handleCategoryChange = newCategory => {
    setActiveCategory(newCategory);
  };

  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
      slidesToSlide: 1,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 4,
      slidesToSlide: 1,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 3,
      slidesToSlide: 1,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 2,
      slidesToSlide: 1,
    },
  };
  //https://refine.dev/blog/react-slick/#styling-the-thumbnails
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    nextArrow: (
      <div>
        <div className='next-slick-arrow'>
          <svg
            xmlns='http://www.w3.org/2000/svg'
            stroke='black'
            height='24'
            viewBox='0 -960 960 960'
            width='24'
          >
            <path d='m242-200 200-280-200-280h98l200 280-200 280h-98Zm238 0 200-280-200-280h98l200 280-200 280h-98Z' />
          </svg>
        </div>
      </div>
    ),

    prevArrow: (
      <div>
        <div className='next-slick-arrow rotate-180'>
          <svg
            xmlns='http://www.w3.org/2000/svg'
            stroke='black'
            height='24'
            viewBox='0 -960 960 960'
            width='24'
          >
            <path d='m242-200 200-280-200-280h98l200 280-200 280h-98Zm238 0 200-280-200-280h98l200 280-200 280h-98Z' />
          </svg>
        </div>
      </div>
    ),
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
            {/* <Carousel responsive={responsive}>
              <div>
                <h3>Image 1</h3>
              </div>
              <div>
                <h3>Image 2</h3>
              </div>
              <div>
                <h3>Image 3</h3>
              </div>
              <div>
                <h3>Image 4</h3>
              </div>
              <div>
                <h3>Image 5</h3>
              </div>
              <div>
                <h3>Image 6</h3>
              </div>
            </Carousel> */}
            <div className='px-5'>
              <Slider {...settings}>
                <div>
                  <h3>Image 1</h3>
                </div>
                <div>
                  <h3>Image 2</h3>
                </div>
                <div>
                  <h3>Image 3</h3>
                </div>
                <div>
                  <h3>Image 4</h3>
                </div>
                <div>
                  <h3>Image 5</h3>
                </div>
                <div>
                  <h3>Image 6</h3>
                </div>
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
