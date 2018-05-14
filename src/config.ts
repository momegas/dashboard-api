const Config = {
  databases: {
    mongo: {
      url: 'mongodb://localhost:27017/test',
    },
  },
  apiV1: {
    shops: 'shops',
    brands: 'brands',
    categories: 'categories',
    products: 'products',
    users: 'users',
    images: 'images',
  },
};

export default Config;
