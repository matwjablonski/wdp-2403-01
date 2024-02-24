const viewModes = [
  {
    type: 'mobile',
    max: 450,
  },
  {
    type: 'tablet',
    max: 900,
  },
  {
    type: 'desktop',
    max: 2400,
  },
];

export const getViewMode = width => {
  const view = viewModes.find(view => width < view.max);
  return view ? view.type : 'desktop';
};

export const getItemsOnPage = activeViewMode => {
  switch (activeViewMode) {
    case 'desktop':
      return { itemsOnPage: 8 };
    case 'tablet':
      return { itemsOnPage: 4 };
    case 'mobile':
      return { itemsOnPage: 1 };
    default:
      return { itemsOnPage: 8 };
  }
};
