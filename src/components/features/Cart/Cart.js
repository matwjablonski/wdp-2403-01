import React, { useState } from 'react';
import styles from './Cart.module.scss';
import { useSelector } from 'react-redux';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingBasket } from '@fortawesome/free-solid-svg-icons';
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
    isOpen = true;
    setIsOpen(isOpen);
    console.log(isOpen);
  };

  return (
    <div>
      <div
        id='cart'
        onClick={e => toggleTrigger(e)}
        className={clsx(styles.cart, isOpen && styles.active)}
      >
        <div className={styles.cart__summary}>
          <div className={`col text-right ${styles.cart}`}>
            <a href='#' className={styles.cartBox}>
              <div className={styles.cartIcon}>
                <FontAwesomeIcon className={styles.icon} icon={faShoppingBasket} />
              </div>
              <div className={styles.cartCounter}>
                <div className={styles.itemsAmount}>{products[0].price}</div>
              </div>
            </a>
          </div>
        </div>
        <div className={styles.cart__content}>
          <form className={styles.cart__order}>
            <ul className={styles.cart__order_summary}></ul>
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
              <input type='tel' name='phone' placeholder='Your phone'></input>
              <input type='text' name='address' placeholder='Your address'></input>
              <button type='submit' className='btn-secondary'>
                Order
              </button>
            </div>
          </form>
          template-cart-product
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
