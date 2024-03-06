import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import styles from './NewFurniture.module.scss';
import { clsx } from 'clsx';
import ProductBox from '../../common/ProductBox/ProductBox';
import Swipeable from '../../common/Swipeable/Swipeable';
import { getItemsOnPage } from '../../../utils/viewMode';

class NewFurniture extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      activePage: 0,
      activeCategory: 'bed',
      isFading: false,
      fadeTime: parseInt(styles.timeAnimation),
      showAllProducts: false,
      isMobile: window.innerWidth <= 768,
      isTablet: window.innerWidth > 768 && window.innerWidth <= 992,

    };
    this.handlePageSwipe = this.handlePageSwipe.bind(this);
    this.handlePageChange = this.handlePageChange.bind(this);
    this.handleCategoryChange = this.handleCategoryChange.bind(this);
  }

  static getDerivedStateFromProps(props, currentState) {
    const { products, itemsOnPage } = props;
    const { activeCategory, pagesCount, activePage } = currentState;

    const categoryProducts = products.filter(item => item.category === activeCategory);
    const updatedPagesCount = Math.ceil(categoryProducts.length / itemsOnPage);
    const updatedActivePage = pagesCount === updatedPagesCount ? activePage : 0;

    return {
      currentState,
      pagesCount: updatedPagesCount,
      activePage: updatedActivePage,
      categoryProducts,
    };
  }

  handlePageSwipe(pageChange) {
    const { activePage, pagesCount } = this.state;

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
    this.setState({ isFading: true });
    setTimeout(() => {
      this.setState({
        activePage: newPage,
        isFading: false,
      });
    }, this.state.fadeTime);
  }
  handleCategoryChange(newCategory) {
    this.setState({ isFading: true });
    setTimeout(() => {
      this.setState({
        activeCategory: newCategory,
        isFading: false,
      });
    }, this.state.fadeTime);
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
    const { activeCategory, activePage, isFading, showAllProducts } = this.state;

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

    return (
      <Swipeable action={this.handlePageSwipe}>
        <div className={styles.root}>
          <div className='container'>
            <div className={styles.panelBar}>
              <div className={'col-auto ' + styles.heading}>
                <h3>New furniture</h3>
              </div>
              <div className={'col-auto ' + styles.menu}>
                <ul>
                  {categories.map(item => (
                    <li key={item.id}>
                      <a
                        className={item.id === activeCategory && styles.active}
                        onClick={() => this.handleCategoryChange(item.id)}
                      >
                        {item.name}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
              <div className={'col-auto ' + styles.dots}>
                <ul>{dots}</ul>
              </div>
            </div>
            <div className={`row ${isFading ? styles.fadeOut : styles.fadeIn}`}>
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
  itemsOnPage: PropTypes.number,
};

NewFurniture.defaultProps = {
  categories: [],
  products: [],
};

function mapStateToProps(state) {
  return getItemsOnPage(state.activeViewMode);
}

export default connect(mapStateToProps)(NewFurniture);
