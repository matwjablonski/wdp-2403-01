import React from 'react';
import { PropTypes } from 'prop-types';
import { useSwipeable } from 'react-swipeable';

const Swipeable = ({ children, action }) => {
  const handlers = useSwipeable({
    onSwipedLeft: () => action('increment'),
    onSwipedRight: () => action('decrement'),
  });

  return <div {...handlers}>{children}</div>;
};

Swipeable.propTypes = {
  children: PropTypes.node,
  action: PropTypes.func,
};

export default Swipeable;
