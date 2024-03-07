import React from 'react';
import PropTypes from 'prop-types';
import styles from './Stars.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';
import { faStar as farStar } from '@fortawesome/free-regular-svg-icons';
import { useState } from 'react';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { addGrade } from '../../../redux/clientsGradesRedux';
import clsx from 'clsx';

const Stars = props => {
  const dispatch = useDispatch();
  let [filledStarsNum, setFilledStarsNum] = useState(props.stars);
  const productName = props.productName;
  let [onMouseEnterFlag, setOnMouseEnterFlag] = useState(false);
  const clientsGrades = useSelector(state => state.clientsGrades);

  const checkIfThisProductIsGraded = () => {
    for (let clientGrade of clientsGrades) {
      if (clientGrade.gradedProductName === productName) {
        filledStarsNum = parseInt(clientGrade.grade);
        onMouseEnterFlag = true;
      }
    }
  };
  const fillSelectedStars = id => {
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
  const addClientGrade = e => {
    e.preventDefault();
    let grade = e.target.parentElement.getAttribute('id');
    if (grade === null) {
      grade = e.target.getAttribute('id');
    }
    dispatch(addGrade({ productName, grade }));
  };

  checkIfThisProductIsGraded();

  return (
    <div className={styles.stars}>
      {[1, 2, 3, 4, 5].map(i => (
        <a key={i} href='#'>
          {i <= filledStarsNum ? (
            <FontAwesomeIcon
              className={clsx(onMouseEnterFlag && styles.colorfulStarOnHover)}
              icon={faStar}
              id={i}
              onMouseEnter={e => fillSelectedStars(e.target.getAttribute('id'))}
              onMouseLeave={() => unfillSelectedStars(props.stars)}
              onClick={e => addClientGrade(e)}
            >
              {i} stars
            </FontAwesomeIcon>
          ) : (
            <FontAwesomeIcon
              className={styles.noHoverEff}
              icon={farStar}
              id={i}
              onMouseEnter={e => fillSelectedStars(e.target.getAttribute('id'))}
              onMouseLeave={() => unfillSelectedStars(props.stars)}
              onClick={e => addClientGrade(e)}
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
  productName: PropTypes.string,
};

export default Stars;
