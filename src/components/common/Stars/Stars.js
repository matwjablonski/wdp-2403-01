import React from 'react';
import PropTypes from 'prop-types';
import styles from './Stars.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';
import { faStar as farStar } from '@fortawesome/free-regular-svg-icons';
import { useState } from 'react';
import clsx from 'clsx';

const Stars = props => {
  let [filledStarsNum, setFilledStarsNum] = useState(props.stars);
  let [onMouseEnterFlag, setOnMouseEnterFlag] = useState(false);
  const fillSelectedStars = e => {
    let id = e.target.getAttribute('id');
    onMouseEnterFlag = true;
    setOnMouseEnterFlag(onMouseEnterFlag);
    if (id === null) {
      id = 2;
    }
    filledStarsNum = parseInt(id);
    setFilledStarsNum(filledStarsNum);
  };
  const unfillSelectedStars = stars => {
    filledStarsNum = stars;
    setFilledStarsNum(filledStarsNum);
    onMouseEnterFlag = false;
    setOnMouseEnterFlag(onMouseEnterFlag);
  };

  return (
    <div className={styles.stars}>
      {[1, 2, 3, 4, 5].map(i => (
        <a key={i} href='#'>
          {i <= filledStarsNum ? (
            <FontAwesomeIcon
              className={clsx(onMouseEnterFlag && styles.colorfulStarOnHover)}
              icon={faStar}
              id={i}
              onMouseEnter={e => fillSelectedStars(e)}
              onMouseLeave={() => unfillSelectedStars(props.stars)}
            >
              {i} stars
            </FontAwesomeIcon>
          ) : (
            <FontAwesomeIcon
              className={styles.noHoverEff}
              icon={farStar}
              id={i}
              onMouseEnter={e => fillSelectedStars(e)}
              onMouseLeave={() => unfillSelectedStars(props.stars)}
            >
              {i} stars
            </FontAwesomeIcon>
          )}
        </a>
      ))}
    </div>
  );
};

Stars.propTypes = {
  stars: PropTypes.number,
};

export default Stars;
