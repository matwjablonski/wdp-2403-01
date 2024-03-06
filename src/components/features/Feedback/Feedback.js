import React from 'react';
import PropTypes from 'prop-types';

import styles from './Feedback.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faQuoteRight } from '@fortawesome/free-solid-svg-icons';
import { useSelector } from 'react-redux';
import { useState } from 'react';
import Swipeable from '../../common/Swipeable/Swipeable';
import clsx from 'clsx';
import getMultipleRandom from '../../../utils/getMultipleRandom';
import { useMemo } from 'react';

const Feedback = () => {
  const allClientsOpinions = useSelector(state => state.clientsOpinions);
  const clientsOpinions = useMemo(() => {
    return getMultipleRandom(allClientsOpinions, 3);
  }, [allClientsOpinions]);
  const [activeOpinion, setActiveOpinion] = useState(clientsOpinions[0]);
  const [activeDot, setActiveDot] = useState(clientsOpinions[0].id);

  const handleOpinionChange = newOpinion => {
    if (newOpinion === clientsOpinions[0].id) {
      setActiveOpinion(clientsOpinions[0]);
      setActiveDot(clientsOpinions[0].id);
    } else if (newOpinion === clientsOpinions[1].id) {
      setActiveOpinion(clientsOpinions[1]);
      setActiveDot(clientsOpinions[1].id);
    } else if (newOpinion === clientsOpinions[2].id) {
      setActiveOpinion(clientsOpinions[2]);
      setActiveDot(clientsOpinions[2].id);
    }
  };

  const handleOpinionSwipe = opinionChange => {
    let activeIndex = clientsOpinions.indexOf(activeOpinion);

    if (opinionChange === 'increment') {
      activeIndex++;
      if (activeIndex < 3) {
        setActiveOpinion(clientsOpinions[activeIndex]);
        setActiveDot((++activeIndex).toString());
      }
    } else if (opinionChange === 'decrement') {
      activeIndex--;
      if (activeIndex >= 0) {
        setActiveOpinion(clientsOpinions[activeIndex]);
        setActiveDot((++activeIndex).toString());
      }
    }
  };

  return (
    <Swipeable action={handleOpinionSwipe}>
      <div className={styles.root}>
        <div className='container'>
          <div className={styles.panelBar}>
            <div className='row no-gutters align-items-end'>
              <div className={'col-auto ' + styles.heading}>
                <h3>CLIENT FEEDBACK</h3>
              </div>
              <div className={'col-auto ' + styles.dots}>
                <ul>
                  {clientsOpinions.map(opinion => (
                    <li key={opinion.id}>
                      <a
                        className={opinion.id === activeDot && styles.active}
                        onClick={() => handleOpinionChange(opinion.id)}
                      >
                        {opinion.fullName}
                      </a>
                    </li>
                  ))}
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
              <p>{activeOpinion.text}</p>
            </div>
            <div className={clsx(styles.clientThumbnail, 'mt-2 mb-5')}>
              <div>
                <img
                  src={process.env.PUBLIC_URL + activeOpinion.photoURL}
                  alt={activeOpinion.fullName}
                />
              </div>
              <div className={clsx(styles.description, 'ml-3')}>
                <div className={styles.fullName}>{activeOpinion.fullName}</div>
                <div className={styles.role}>{activeOpinion.role}</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Swipeable>
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
