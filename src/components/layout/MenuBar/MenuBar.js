import React from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';

import ProductSearch from '../../features/ProductSearch/ProductSearch';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import Dropdown from 'react-bootstrap/Dropdown';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';

import styles from './MenuBar.module.scss';

const MenuBar = ({ children }) => (
  <div className={styles.root}>
    <div className='container'>
      <div className={clsx(styles.content, 'row align-items-center')}>
        <div className={clsx(styles.topPanel, 'col')}>
          <ProductSearch className={styles.searchPanel} />
          <Dropdown className={styles.mobileMenu} as={ButtonGroup}>
            <Dropdown.Toggle className={clsx(styles.menuToggle, 'btn btn-light')}>
              <FontAwesomeIcon icon={faBars} />
            </Dropdown.Toggle>
            <Dropdown.Menu className='super-colors'>
              <Dropdown.Item
                eventKey='1'
                className={clsx(styles.option, styles.active)}
              >
                Home
              </Dropdown.Item>
              <Dropdown.Item eventKey='2' className={styles.option}>
                Furniture
              </Dropdown.Item>
              <Dropdown.Item eventKey='3' className={styles.option}>
                Chair
              </Dropdown.Item>
              <Dropdown.Item eventKey='4' className={styles.option}>
                Table
              </Dropdown.Item>
              <Dropdown.Item eventKey='5' className={styles.option}>
                Sofa
              </Dropdown.Item>
              <Dropdown.Item eventKey='6' className={styles.option}>
                Bedroom
              </Dropdown.Item>
              <Dropdown.Item eventKey='7' className={styles.option}>
                Blog
              </Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
        </div>
        <div className={'col-auto ' + styles.menu}>
          <ul>
            <li>
              <a href='#' className={styles.active}>
                Home
              </a>
            </li>
            <li>
              <a href='#'>Furniture</a>
            </li>
            <li>
              <a href='#'>Chair</a>
            </li>
            <li>
              <a href='#'>Table</a>
            </li>
            <li>
              <a href='#'>Sofa</a>
            </li>
            <li>
              <a href='#'>Bedroom</a>
            </li>
            <li>
              <a href='#'>Blog</a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
);

MenuBar.propTypes = {
  children: PropTypes.node,
};

export default MenuBar;
