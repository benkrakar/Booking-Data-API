import AuthController from '../../controllers/api/auth-controller.js';

export default {
  group: {
    prefix: '/auth',
  },
  routes: [
    {
      method: 'post',
      path: '/login',
      handler: AuthController.login,
    },
    {
      method: 'post',
      path: '/register',
      handler: AuthController.register,
    },
  ],
};
