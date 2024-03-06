import React, { useEffect } from 'react';
import PropTypes from 'prop-types';

import Header from '../Header/Header';
import Footer from '../Footer/Footer';

import { useDispatch } from 'react-redux';
import { setViewMode } from '../../../redux/viewModeRedux';

import { getViewMode } from '../../../utils/viewMode';

const MainLayout = ({ children }) => {
  const dispatch = useDispatch();
  let activeView = getViewMode(window.innerWidth);

  useEffect(() => {
    dispatch(setViewMode(activeView));

    const handleResize = () => {
      const newView = getViewMode(window.innerWidth);
      if (activeView !== newView) {
        dispatch(setViewMode(newView));
        // eslint-disable-next-line react-hooks/exhaustive-deps
        activeView = newView;
      }
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
    // eslint-disable-next-line
  }, []);

  return (
    <div>
      <Header />
      {children}
      <Footer />
    </div>
  );
};

MainLayout.propTypes = {
  children: PropTypes.node,
};

export default MainLayout;
