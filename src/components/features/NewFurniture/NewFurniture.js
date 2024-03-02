import React from 'react';
import PropTypes from 'prop-types';

import styles from './NewFurniture.module.scss';
import ProductBox from '../../common/ProductBox/ProductBox';
import Swipeable from '../../common/Swipeable/Swipeable';
import PanelBar from '../../layout/PanelBar/PanelBar';
import PanelMenu from '../../layout/PanelMenu/PanelMenu';

class NewFurniture extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      activePage: 0,
      activeCategory: 'bed',
      showAllProducts: false,
      isMobile: window.innerWidth <= 768,
      isTablet: window.innerWidth > 768 && window.innerWidth <= 992,
    };

    this.handlePageSwipe = this.handlePageSwipe.bind(this);
    this.handlePageChange = this.handlePageChange.bind(this);
    this.handleCategoryChange = this.handleCategoryChange.bind(this);
    this.toggleShowAllProducts = this.toggleShowAllProducts.bind(this);
    this.handleResize = this.handleResize.bind(this);
  }

  handlePageSwipe(pageChange) {
    const { products } = this.props;
    const { activeCategory, activePage } = this.state;

    const categoryProducts = products.filter(item => item.category === activeCategory);
    const pagesCount = Math.ceil(categoryProducts.length / 8);

    let actualPage = activePage;
    if (pageChange === 'increment') {
      actualPage++;
    } else if (pageChange === 'decrement') {
      actualPage--;
    }
    if (actualPage >= 0 && actualPage < pagesCount) {
      this.setState({ activePage: actualPage });
    }
  }

  handlePageChange(newPage) {
    this.setState({ activePage: newPage });
  }

  handleCategoryChange(newCategory) {
    this.setState({ activeCategory: newCategory });
  }

  toggleShowAllProducts() {
    this.setState(prevState => ({ showAllProducts: !prevState.showAllProducts }));
  }

  componentDidMount() {
    window.addEventListener('resize', this.handleResize);
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.handleResize);
  }

  handleResize() {
    this.setState({
      isMobile: window.innerWidth <= 768,
      isTablet: window.innerWidth > 768 && window.innerWidth <= 992,
    });
  }

  render() {
    const { categories, products } = this.props;
    const { activeCategory, activePage, showAllProducts } = this.state;

    const categoryProducts = products.filter(item => item.category === activeCategory);
    const pagesCount = Math.ceil(categoryProducts.length / 8);

    const dots = [];
    for (let i = 0; i < pagesCount; i++) {
      dots.push(
        <li key={i}>
          <a
            onClick={() => this.handlePageChange(i)}
            className={i === activePage && styles.active}
          >
            page {i}
          </a>
        </li>
      );
    }

    let displayedProducts = categoryProducts;

    if (!showAllProducts && this.state.isMobile) {
      displayedProducts = categoryProducts.slice(activePage * 8, (activePage + 1) * 2);
    } else if (!showAllProducts && this.state.isTablet) {
      displayedProducts = categoryProducts.slice(activePage * 8, (activePage + 1) * 3);
    } else if (!showAllProducts) {
      displayedProducts = categoryProducts.slice(activePage * 8, (activePage + 1) * 8);
    }

    return (
      <Swipeable action={this.handlePageSwipe}>
        <div className={styles.root}>
          <div className='container'>
            <PanelBar title='New furniture'>
              <PanelMenu
                menuItems={categories}
                action={this.handleCategoryChange}
                activeItem={activeCategory}
              />
              <div
                className={'col-auto ' + styles.dots}
                onDoubleClick={this.toggleShowAllProducts}
              >
                {!showAllProducts && <ul>{dots}</ul>}
                <ul>{showAllProducts && dots}</ul>
              </div>
            </PanelBar>
            <div className='row'>
              {displayedProducts.map(item => (
                <div key={item.id} className='col-6 col-md-4 col-sm-6 col-lg-3'>
                  <ProductBox {...item} />
                </div>
              ))}
            </div>
          </div>
        </div>
      </Swipeable>
    );
  }
}

NewFurniture.propTypes = {
  children: PropTypes.node,
  categories: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string,
      name: PropTypes.string,
    })
  ),
  products: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string,
      name: PropTypes.string,
      category: PropTypes.string,
      price: PropTypes.number,
      stars: PropTypes.number,
      promo: PropTypes.string,
      newFurniture: PropTypes.bool,
    })
  ),
};

NewFurniture.defaultProps = {
  categories: [],
  products: [],
};

export default NewFurniture;
