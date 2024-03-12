import React from 'react';
import PropTypes from 'prop-types';

import styles from './Feedback.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faQuoteRight } from '@fortawesome/free-solid-svg-icons';
import { useSelector } from 'react-redux';
import clsx from 'clsx';

const Feedback = () => {
  const clientsOpinions = useSelector(state => state.clientsOpinions);
  const clientOpinion = clientsOpinions[0];

  return (
    <div className={styles.root}>
      <div className='container'>
        <div className={styles.panelBar}>
          <div className='row no-gutters align-items-end'>
            <div className={'col-auto ' + styles.heading}>
              <h3>CLIENT FEEDBACK</h3>
            </div>
            <div className={'col-auto ' + styles.dots}>
              <ul>
                <li>
                  <a className={styles.active}>.</a>
                </li>
                <li>
                  <a>.</a>
                </li>
                <li>
                  <a>.</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className={clsx(styles.opinion, 'row d-flex justify-content-center')}>
          <div className='d-flex justify-content-center'>
            <FontAwesomeIcon className={styles.quotes} icon={faQuoteRight} />
          </div>
          <div
            className={clsx(styles.opinionText, 'mt-4 d-flex justify-content-center')}
          >
            <p>{clientOpinion.text}</p>
          </div>
          <div className={clsx(styles.clientThumbnail, 'mt-2 mb-5')}>
            <div>
              <img
                src={process.env.PUBLIC_URL + 'images/clients/john-smith.jpg'}
                alt={clientOpinion.fullName}
              />
            </div>
            <div className={clsx(styles.description, 'ml-3')}>
              <div className={styles.fullName}>{clientOpinion.fullName}</div>
              <div className={styles.role}>{clientOpinion.role}</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

Feedback.propTypes = {
  children: PropTypes.node,
  clientsOpinions: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string,
      fullName: PropTypes.string,
      photo: PropTypes.string,
      text: PropTypes.string,
    })
  ),
};

Feedback.defaultProps = {
  clientsOpinions: [],
};

export default Feedback;
