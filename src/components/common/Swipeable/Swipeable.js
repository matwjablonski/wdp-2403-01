import React from 'react';
import { PropTypes } from 'prop-types';
import { useSwipeable } from 'react-swipeable';

const Swipeable = ({ children }) => {
  const handlers = useSwipeable({
    onSwiped: eventData => console.log('ufsowa User Swiped!', eventData),
    onSwipedLeft: () => console.log('Swiped left!'),
    onSwipedRight: () => console.log('Swiped right!'),
  });
  return <div {...handlers}>{children}</div>;
};

Swipeable.propTypes = {
  children: PropTypes.node,
};

export default Swipeable;
