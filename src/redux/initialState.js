const initialState = {
  categories: [
    { id: 'bed', name: 'Bed' },
    { id: 'chair', name: 'Chair' },
    { id: 'sofa', name: 'Sofa' },
    { id: 'table', name: 'Table' },
    { id: 'dining', name: 'Dining' },
  ],
  trends: [
    { id: 'featured', name: 'Featured' },
    { id: 'topSeller', name: 'Top Seller' },
    { id: 'saleOff', name: 'Sale Off' },
    { id: 'topRated', name: 'Top Rated' },
  ],
  promotions: [
    {
      type: 'left-panel',
      title: 'guest room',
      subtitle: 'sofa',
      discount: '-20%',
      filePath: '/images/promotions/left-panel.jpg',
    },
    {
      type: 'right-upper-panel',
      title: 'office#chair',
      subtitle: 'collection',
      discount: '$200.00',
      filePath: '', //'/images/promotions/right-upper-panel.jpg',
    },
    {
      type: 'right-bottom-panel',
      title: 'special#collection',
      subtitle: '',
      discount: 'Save up 45% of furniture',
      filePath: '', //'/images/promotions/right-bottom-panel.jpg',
    },
    {
      type: 'gallery-panel',
      title: 'From#$50.80',
      subtitle: 'Bedroom Bed',
      discount: '',
      filePath: '/images/promotions/gallery-panel.jpg',
    },
  ],
  products: [
    {
      id: 'aenean-ru-bristique-1',
      name: 'Aenean Ru Bristique 1',
      category: 'bed',
      price: 30,
      originalPrice: 40,
      stars: 2,
      promo: 'sale',
      newFurniture: true,
      favorite: false,
      compare: false,
    },
    {
      id: 'aenean-ru-bristique-2',
      name: 'Aenean Ru Bristique 2',
      category: 'bed',
      price: 30,
      originalPrice: 40,
      stars: 2,
      promo: 'sale',
      newFurniture: true,
      favorite: true,
      compare: false,
    },
    {
      id: 'aenean-ru-bristique-3',
      name: 'Aenean Ru Bristique 3',
      category: 'bed',
      price: 30,
      originalPrice: undefined,
      stars: 2,
      promo: 'sale',
      newFurniture: true,
      favorite: false,
      compare: true,
    },
    {
      id: 'aenean-ru-bristique-4',
      name: 'Aenean Ru Bristique 4',
      category: 'bed',
      price: 30,
      originalPrice: 40,
      stars: 2,
      promo: 'sale',
      newFurniture: true,
      favorite: true,
      compare: true,
    },
    {
      id: 'aenean-ru-bristique-5',
      name: 'Aenean Ru Bristique 5',
      category: 'bed',
      price: 30,
      originalPrice: 40,
      stars: 2,
      promo: 'sale',
      newFurniture: true,
      favorite: false,
      compare: false,
    },
    {
      id: 'aenean-ru-bristique-6',
      name: 'Aenean Ru Bristique 6',
      category: 'bed',
      price: 30,
      originalPrice: 40,
      stars: 2,
      promo: 'sale',
      newFurniture: true,
      favorite: false,
      compare: false,
    },
    {
      id: 'aenean-ru-bristique-7',
      name: 'Aenean Ru Bristique 7',
      category: 'bed',
      price: 30,
      originalPrice: 40,
      stars: 2,
      promo: 'sale',
      newFurniture: true,
      favorite: false,
      compare: false,
    },
    {
      id: 'aenean-ru-bristique-8',
      name: 'Aenean Ru Bristique 8',
      category: 'bed',
      price: 30,
      originalPrice: undefined,
      stars: 2,
      promo: 'sale',
      newFurniture: true,
      Favorite: false,
      Compare: false,
    },
    {
      id: 'aenean-ru-bristique-9',
      name: 'Aenean Ru Bristique 9',
      category: 'bed',
      price: 30,
      originalPrice: 40,
      stars: 2,
      promo: 'sale',
      newFurniture: true,
      favorite: false,
      compare: false,
    },
    {
      id: 'aenean-ru-bristique-10',
      name: 'Aenean Ru Bristique 10',
      category: 'bed',
      price: 30,
      originalPrice: 40,
      stars: 2,
      promo: 'sale',
      newFurniture: true,
      favorite: false,
      compare: false,
    },
    {
      id: 'aenean-ru-bristique-11',
      name: 'Aenean Ru Bristique 11',
      category: 'bed',
      price: 30,
      originalPrice: 40,
      stars: 2,
      promo: 'sale',
      newFurniture: true,
      Favorite: false,
      Compare: false,
    },
    {
      id: 'aenean-ru-bristique-12',
      name: 'Aenean Ru Bristique 12',
      category: 'bed',
      price: 30,
      originalPrice: 40,
      stars: 2,
      promo: 'sale',
      newFurniture: true,
      favorite: false,
      compare: false,
    },
    {
      id: 'aenean-ru-bristique-13',
      name: 'Aenean Ru Bristique 13',
      category: 'bed',
      price: 30,
      originalPrice: 40,
      stars: 2,
      promo: 'sale',
      newFurniture: true,
      favorite: false,
      compare: false,
    },
    {
      id: 'aenean-ru-bristique-14',
      name: 'Aenean Ru Bristique 14',
      category: 'bed',
      price: 30,
      originalPrice: undefined,
      stars: 2,
      promo: 'sale',
      newFurniture: true,
      favorite: false,
      compare: false,
    },
    {
      id: 'aenean-ru-bristique-15',
      name: 'Aenean Ru Bristique 15',
      category: 'bed',
      price: 30,
      originalPrice: 40,
      stars: 2,
      promo: 'sale',
      newFurniture: true,
      favorite: false,
      compare: false,
    },
    {
      id: 'aenean-ru-bristique-16',
      name: 'Aenean Ru Bristique 16',
      category: 'bed',
      price: 30,
      originalPrice: 40,
      stars: 2,
      promo: 'sale',
      newFurniture: true,
      Favorite: false,
      Compare: false,
    },
    {
      id: 'aenean-ru-bristique-17',
      name: 'Aenean Ru Bristique 17',
      category: 'bed',
      price: 30,
      originalPrice: 50,
      stars: 2,
      promo: 'sale',
      newFurniture: true,
      favorite: false,
      compare: false,
    },
    {
      id: 'aenean-ru-bristique-18',
      name: 'Aenean Ru Bristique 18',
      category: 'bed',
      price: 30,
      originalPrice: 40,
      stars: 2,
      promo: 'sale',
      newFurniture: true,
      favorite: false,
      compare: false,
    },
    {
      id: 'aenean-ru-bristique-19',
      name: 'Aenean Ru Bristique 19',
      category: 'bed',
      price: 30,
      originalPrice: undefined,
      stars: 2,
      promo: 'sale',
      newFurniture: true,
      favorite: false,
      compare: false,
    },
    {
      id: 'aenean-ru-bristique-20',
      name: 'Aenean Ru Bristique 20',
      category: 'bed',
      price: 30,
      originalPrice: 40,
      stars: 2,
      promo: 'sale',
      newFurniture: true,
      favorite: false,
      compare: false,
    },
    {
      id: 'aenean-ru-bristique-21',
      name: 'Aenean Ru Bristique 21',
      category: 'bed',
      price: 30,
      originalPrice: 40,
      stars: 2,
      promo: 'sale',
      newFurniture: true,
      Favorite: false,
      Compare: false,
    },
    {
      id: 'aenean-ru-bristique-22',
      name: 'Aenean Ru Bristique 22',
      category: 'bed',
      price: 30,
      originalPrice: 40,
      stars: 2,
      promo: 'sale',
      newFurniture: true,
      favorite: false,
      compare: false,
    },
    {
      id: 'aenean-ru-bristique-23',
      name: 'Aenean Ru Bristique 23',
      category: 'bed',
      price: 30,
      originalPrice: undefined,
      stars: 2,
      promo: 'sale',
      newFurniture: true,
      favorite: false,
      compare: false,
    },
    {
      id: 'aenean-ru-bristique-24',
      name: 'Aenean Ru Bristique 24',
      category: 'bed',
      price: 30,
      originalPrice: 40,
      stars: 2,
      promo: 'sale',
      newFurniture: true,
      favorite: false,
      compare: false,
    },
    {
      id: 'chair-1',
      name: 'Aenean Bristique 1',
      category: 'chair',
      trends: 'topSeller',
      price: 30,
      originalPrice: 40,
      stars: 2,
      promo: 'sale',
      newFurniture: true,
      favorite: false,
      compare: false,
    },
    {
      id: 'chair-2',
      name: 'Aenean Bristique 2',
      category: 'chair',
      trends: 'topSeller',
      price: 120,
      originalPrice: 240,
      stars: 3,
      promo: 'sale',
      newFurniture: true,
      favorite: false,
      compare: false,
    },
    {
      id: 'chair-3',
      name: 'Aenean Bristique 3',
      category: 'chair',
      trends: 'featured',
      price: 30,
      originalPrice: 40,
      stars: 7,
      promo: 'sale',
      newFurniture: true,
      favorite: false,
      compare: false,
    },
    {
      id: 'chair-4',
      name: 'Aenean Bristique 4',
      category: 'chair',
      trends: 'topRated',
      price: 30,
      originalPrice: 40,
      stars: 1,
      promo: 'sale',
      newFurniture: true,
      favorite: false,
      compare: false,
    },
    {
      id: 'chair-5',
      name: 'Aenean Bristique 5',
      category: 'chair',
      trends: 'topSeller',
      price: 30,
      originalPrice: 40,
      stars: 4,
      promo: 'sale',
      newFurniture: true,
      favorite: false,
      compare: false,
    },
    {
      id: 'chair-6',
      name: 'Aenean Bristique 6',
      category: 'chair',
      trends: 'topRated',
      price: 30,
      originalPrice: 40,
      stars: 2,
      promo: 'sale',
      newFurniture: true,
      favorite: false,
      compare: false,
    },
    {
      id: 'chair-7',
      name: 'Aenean Bristique 7',
      category: 'chair',
      trends: 'topSeller',
      price: 30,
      originalPrice: 40,
      stars: 2,
      promo: 'sale',
      newFurniture: true,
      favorite: false,
      compare: false,
    },
    {
      id: 'chair-8',
      name: 'Aenean Bristique 8',
      category: 'chair',
      trends: 'saleOff',
      price: 30,
      originalPrice: 40,
      stars: 2,
      promo: 'sale',
      newFurniture: true,
      favorite: false,
      compare: false,
    },
    {
      id: 'chair-9',
      name: 'Aenean Bristique 9',
      category: 'chair',
      trends: 'topSeller',
      price: 30,
      originalPrice: 40,
      stars: 2,
      promo: 'sale',
      newFurniture: true,
      favorite: false,
      compare: false,
    },
    {
      id: 'chair-10',
      name: 'Aenean Bristique 10',
      category: 'chair',
      trends: 'saleOff',
      price: 30,
      stars: 2,
      promo: 'sale',
      newFurniture: true,
      favorite: false,
      compare: false,
    },
    {
      id: 'chair-11',
      name: 'Aenean Bristique 11',
      category: 'chair',
      trends: 'topSeller',
      price: 30,
      originalPrice: 40,
      stars: 2,
      promo: 'sale',
      newFurniture: true,
      favorite: false,
      compare: false,
    },
    {
      id: 'chair-12',
      name: 'Aenean Bristique 12',
      category: 'chair',
      trends: 'featured',
      price: 30,
      originalPrice: 40,
      stars: 2,
      promo: 'sale',
      newFurniture: true,
      favorite: false,
      compare: false,
    },
    {
      id: 'sofa-1',
      name: 'Sofa 1',
      category: 'sofa',
      price: 30,
      originalPrice: 40,
      stars: 2,
      promo: 'sale',
      newFurniture: true,
      favorite: false,
      compare: false,
    },
    {
      id: 'sofa-2',
      name: 'Sofa 2',
      category: 'sofa',
      price: 30,
      stars: 2,
      promo: 'sale',
      newFurniture: true,
      favorite: false,
      compare: false,
    },
    {
      id: 'sofa-3',
      name: 'Sofa 3',
      category: 'sofa',
      price: 30,
      originalPrice: 40,
      stars: 2,
      promo: 'sale',
      newFurniture: true,
      favorite: false,
      compare: false,
    },
    {
      id: 'sofa-4',
      name: 'Sofa 4',
      category: 'sofa',
      price: 30,
      originalPrice: 40,
      stars: 2,
      promo: 'sale',
      newFurniture: true,
      favorite: false,
      compare: false,
    },
    {
      id: 'sofa-5',
      name: 'Sofa 5',
      category: 'sofa',
      price: 30,
      originalPrice: 40,
      stars: 2,
      promo: 'sale',
      newFurniture: true,
      favorite: false,
      compare: false,
    },
    {
      id: 'sofa-6',
      name: 'Sofa 6',
      category: 'sofa',
      price: 30,
      stars: 2,
      promo: 'sale',
      newFurniture: true,
      favorite: false,
      compare: false,
    },
    {
      id: 'sofa-7',
      name: 'Sofa 7',
      category: 'sofa',
      price: 65,
      originalPrice: 120,
      stars: 2,
      promo: 'sale',
      newFurniture: true,
      favorite: false,
      compare: false,
    },
    {
      id: 'sofa-8',
      name: 'Sofa 8',
      category: 'sofa',
      price: 30,
      originalPrice: 40,
      stars: 2,
      promo: 'sale',
      newFurniture: true,
      favorite: false,
      compare: false,
    },
    {
      id: 'table-1',
      name: 'Table 1',
      category: 'table',
      price: 30,
      originalPrice: 40,
      stars: 2,
      promo: 'sale',
      newFurniture: true,
      favorite: false,
      compare: false,
    },
    {
      id: 'table-2',
      name: 'Table 2',
      category: 'table',
      price: 30,
      originalPrice: 40,
      stars: 2,
      promo: 'sale',
      newFurniture: true,
      favorite: false,
      compare: false,
    },
    {
      id: 'table-3',
      name: 'Table 3',
      category: 'table',
      price: 30,
      originalPrice: 40,
      stars: 2,
      promo: 'sale',
      newFurniture: true,
      favorite: false,
      compare: false,
    },
    {
      id: 'table-4',
      name: 'Table 4',
      category: 'table',
      price: 30,
      originalPrice: 40,
      stars: 2,
      promo: 'sale',
      newFurniture: true,
      favorite: false,
      compare: false,
    },
    {
      id: 'table-5',
      name: 'Table 5',
      category: 'table',
      price: 30,
      originalPrice: 40,
      stars: 2,
      promo: 'sale',
      newFurniture: true,
      favorite: false,
      compare: false,
    },
    {
      id: 'table-6',
      name: 'Table 6',
      category: 'table',
      price: 30,
      originalPrice: 40,
      stars: 2,
      promo: 'sale',
      newFurniture: true,
      favorite: false,
      compare: false,
    },
    {
      id: 'table-7',
      name: 'Table 7',
      category: 'table',
      price: 30,
      originalPrice: 40,
      stars: 2,
      promo: 'sale',
      newFurniture: true,
      favorite: false,
      compare: false,
    },
    {
      id: 'table-8',
      name: 'Table 8',
      category: 'table',
      price: 30,
      originalPrice: 40,
      stars: 2,
      promo: 'sale',
      newFurniture: true,
      favorite: false,
      compare: false,
    },
    {
      id: 'dining-1',
      name: 'Dining 1',
      category: 'dining',
      price: 30,
      stars: 2,
      promo: 'sale',
      newFurniture: true,
      favorite: false,
      compare: false,
    },
    {
      id: 'dining-2',
      name: 'Dining 2',
      category: 'dining',
      price: 30,
      originalPrice: 40,
      stars: 2,
      promo: 'sale',
      newFurniture: true,
      favorite: false,
      compare: false,
    },
    {
      id: 'dining-3',
      name: 'Dining 3',
      category: 'dining',
      price: 30,
      originalPrice: 40,
      stars: 2,
      promo: 'sale',
      newFurniture: true,
      favorite: false,
      compare: false,
    },
    {
      id: 'dining-4',
      name: 'Dining 4',
      category: 'dining',
      price: 30,
      originalPrice: 40,
      stars: 2,
      promo: 'sale',
      newFurniture: true,
      favorite: false,
      compare: false,
    },
    {
      id: 'dining-5',
      name: 'Dining 5',
      category: 'dining',
      price: 30,
      originalPrice: 40,
      stars: 2,
      promo: 'sale',
      newFurniture: true,
      favorite: false,
      compare: false,
    },
    {
      id: 'dining-6',
      name: 'Dining 6',
      category: 'dining',
      price: 30,
      originalPrice: 40,
      stars: 2,
      promo: 'sale',
      newFurniture: true,
      favorite: false,
      compare: false,
    },
    {
      id: 'dining-7',
      name: 'Dining 7',
      category: 'dining',
      price: 30,
      originalPrice: 40,
      stars: undefined,
      promo: 'sale',
      newFurniture: true,
      favorite: false,
      compare: false,
    },
    {
      id: 'dining-8',
      name: 'Dining 8',
      category: 'dining',
      price: 30,
      originalPrice: 40,
      stars: 4,
      promo: 'sale',
      newFurniture: true,
      favorite: false,
      compare: false,
    },
  ],

  productsCompare: [],

  cart: {
    products: [],
  },
  clientsOpinions: [
    {
      id: '1',
      fullName: 'John Smith',
      role: 'Favourite client',
      photo: 'images/clients/john-smith.jpg',
      text:
        'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Impedit at mollitia voluptatibus harum placeat adipisci consequuntur, laboriosam maiores. Facilis, ad!',
    },
  ],
  brands: [
    {
      id: 1,
      url: 'images/brands/brands-1.jpg',
    },
    {
      id: 2,
      url: 'images/brands/brands-2.jpg',
    },
    {
      id: 3,
      url: 'images/brands/brands-3.jpg',
    },
    {
      id: 4,
      url: 'images/brands/brands-4.jpg',
    },
    {
      id: 5,
      url: 'images/brands/brands-5.jpg',
    },
    {
      id: 6,
      url: 'images/brands/brands-6.jpg',
    },
    {
      id: 7,
      url: 'images/brands/brands-7.png',
    },
    {
      id: 8,
      url: 'images/brands/brands-8.png',
    },
    {
      id: 9,
      url: 'images/brands/brands-9.jpg',
    },
    {
      id: 10,
      url: 'images/brands/brands-10.png',
    },
    {
      id: 11,
      url: 'images/brands/brands-11.jpg',
    },
    {
      id: 12,
      url: 'images/brands/brands-12.png',
    },
  ],
  activeViewMode: 'desktop',
};

export default initialState;
