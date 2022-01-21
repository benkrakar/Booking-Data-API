import ProductsController from '../../app/controllers/api/products-controller.js';
import auth from '../../app/middlewares/auth.js';

export default {
  group: {
    prefix: '/products',
  },
  routes: [
    {
      method: 'get',
      path: '/',
      middlewares: [auth],
      handler: ProductsController.getProducts,
    },
    {
      method: 'post',
      path: '/',
      handler: ProductsController.createProduct,
    },
    {
      method: 'get',
      path: '/:id',
      handler: ProductsController.getProduct,
    },
    {
      method: 'put',
      path: '/:id',
      handler: ProductsController.updateProduct,
    },
    {
      method: 'delete',
      path: '/:id',
      handler: ProductsController.deleteProduct,
    },
  ],
};
