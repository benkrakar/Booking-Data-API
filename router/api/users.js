import UsersController from '../../app/controllers/api/users-controller.js';
import auth from '../../app/middlewares/authentification.js';
import authrization from '../../app/middlewares/authorization.js';

export default {
  group: {
    prefix: '/users',
    middlewares: [
      auth,
      function (req, res, next) {
        authrization(req, res, next, 'admin');
      },
    ],
  },
  routes: [
    {
      method: 'get',
      path: '/',
      handler: UsersController.getUsers,
    },
    {
      method: 'post',
      path: '/',
      handler: UsersController.createUser,
    },
    {
      method: 'get',
      path: '/:id',
      handler: UsersController.getUser,
    },
    {
      method: 'put',
      path: '/:id',
      handler: UsersController.updateUser,
    },
    {
      method: 'delete',
      path: '/:id',
      handler: UsersController.deleteUser,
    },
  ],
};
