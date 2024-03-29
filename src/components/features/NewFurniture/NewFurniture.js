import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import CompareProducts from '../../views/CompareProducts/CompareProducts';
import styles from './NewFurniture.module.scss';
import { clsx } from 'clsx';
import ProductBox from '../../common/ProductBox/ProductBox';
import Swipeable from '../../common/Swipeable/Swipeable';
import PanelBar from '../../layout/PanelBar/PanelBar';
import PanelMenu from '../../layout/PanelMenu/PanelMenu';
import { getItemsOnPage } from '../../../utils/viewMode';

class NewFurniture extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      activePage: 0,
      activeCategory: 'bed',
      isFading: false,
      fadeTime: parseInt(styles.timeAnimation),
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

  render() {
    const { categories, itemsOnPage } = this.props;
    const {
      activeCategory,
      categoryProducts,
      isFading,
      activePage,
      pagesCount,
    } = this.state;

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
            <PanelBar title='New furniture'>
              <PanelMenu
                menuItems={categories}
                action={this.handleCategoryChange}
                activeItem={activeCategory}
              />
              <div className={'col-auto ' + styles.dots}>
                <ul>{dots}</ul>
              </div>
            </PanelBar>
            <div
              className={`row justify-content-center ${
                isFading ? styles.fadeOut : styles.fadeIn
              }`}
            >
              {categoryProducts
                .slice(activePage * itemsOnPage, (activePage + 1) * itemsOnPage)
                .map(item => (
                  <div
                    key={item.id}
                    className={clsx(
                      'col-sm-6 col-md-4 col-lg-3',
                      styles.colXSmall,
                      styles.colXXSmall
                    )}
                  >
                    <ProductBox {...item} />
                  </div>
                ))}
            </div>
            <div className={styles.compare}>
              <CompareProducts />
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
