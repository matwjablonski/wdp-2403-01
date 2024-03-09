import React, { useState } from 'react';
import styles from './Cart.module.scss';
import { useSelector } from 'react-redux';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faShoppingBasket,
  faPencilAlt,
  faTrashAlt,
  faPlus,
  faMinus,
} from '@fortawesome/free-solid-svg-icons';
import clsx from 'clsx';

const Cart = () => {
  const [cart, setCart] = useState([]);
  let [isOpen, setIsOpen] = useState(false);
  const products = useSelector(state => state.cart).products;

  const addToCart = product => {
    setCart([...cart, product]);
  };

  const toggleTrigger = e => {
    e.preventDefault();
    if (isOpen) {
      isOpen = false;
      setIsOpen(isOpen);
    } else {
      isOpen = true;
      setIsOpen(isOpen);
    }
  };

  return (
    <div className={`col text-right ${styles.cart}`}>
      <div id='cart' className={clsx(styles.cart, isOpen && styles.active)}>
        <div onClick={e => toggleTrigger(e)}>
          <a href='#' className={styles.cartBox}>
            <div className={styles.cartIcon}>
              <FontAwesomeIcon className={styles.icon} icon={faShoppingBasket} />
            </div>
            <div className={styles.cartCounter}>
              <div className={styles.itemsAmount}>{products[0].price}</div>
            </div>
          </a>
          <div className={styles.cart__summary}></div>
        </div>
        <div className={styles.cart__content}>
          <form className={styles.cart__order}>
            <ul className={styles.cart__order_summary}>
              <li>
                <div className={styles.widget_amount}>
                  <a className='btn-quantity btn-quantity--lt' href='#less'>
                    <FontAwesomeIcon icon={faMinus} />
                  </a>
                  <input
                    className='amount'
                    type='text'
                    value={products[0].amount}
                  ></input>
                  <a className='btn-quantity btn-quantity--lt' href='#more'>
                    <FontAwesomeIcon icon={faPlus} />
                  </a>
                </div>
                <div className={styles.cart__product}>
                  <div className={styles.cart__product_header}>
                    <span>{products[0].name}</span>
                    <span className={styles.cart__product_price}>
                      $<strong>{products[0].price}</strong>
                    </span>
                  </div>
                </div>
                <ul className={styles.cart__action_buttons}>
                  <li>
                    <a href='#edit'>
                      Edit
                      <FontAwesomeIcon icon={faPencilAlt} />
                    </a>
                  </li>
                  <li>
                    <a href='#remove'>
                      Remove
                      <FontAwesomeIcon icon={faTrashAlt} />
                    </a>
                  </li>
                </ul>
              </li>
            </ul>
            <ul className={styles.cart__order_price}>
              <li className='cart__order-subtotal'>
                <span className='cart__order-price-name'>Subtotal:</span>
                <span className='cart__order-price-sum'>
                  $<strong>0</strong>
                </span>
              </li>
              <li className='cart__order-delivery'>
                <span className='cart__order-price-name'>Delivery:</span>
                <span className='cart__order-price-sum'>
                  $<strong>0</strong>
                </span>
              </li>
              <li className='cart__order-total'>
                <span className='cart__order-price-name'>
                  <strong>Total:</strong>
                </span>
                <span className='cart__order-price-sum'>
                  $<strong>0</strong>
                </span>
              </li>
            </ul>
            <div className={styles.cart__order_confirmation}>
              <button
                type='submit'
                className={clsx('btn btn-secondary', styles.button)}
              >
                Order
              </button>
            </div>
          </form>
        </div>
      </div>

      {/* <h2>Koszyk</h2>
      <ul>
        {cart.map((product) => (
          <li key={product.id}>
            {product.name} - ${product.price}
          </li>
        ))}
      </ul>

      <h2>Dodaj produkt do koszyka</h2>
      <button onClick={() => addToCart({ id: 4, name: 'Nowy produkt', price: 15.0 })}>
        Dodaj nowy produkt do koszyka
      </button> */}
    </div>
  );
};

export default Cart;
