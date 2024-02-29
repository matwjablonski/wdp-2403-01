const viewModes = [
  {
    type: 'mobile',
    max: 768,
  },
  {
    type: 'tablet',
    max: 992,
  },
  {
    type: 'desktop',
    max: 2400,
  },
];

// isMobile: window.innerWidth <= 768,
// isTablet: window.innerWidth > 768 && window.innerWidth <= 992,

export const getViewMode = width => {
  const view = viewModes.find(view => width < view.max);
  return view ? view.type : 'desktop';
};

export const getItemsOnPage = activeViewMode => {
  switch (activeViewMode) {
    case 'desktop':
      return { itemsOnPage: 8 };
    case 'tablet':
      return { itemsOnPage: 6 };
    case 'mobile':
      return { itemsOnPage: 2 };
    default:
      return { itemsOnPage: 8 };
  }
};
