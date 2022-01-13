export default {
  group: {
    prefix: '/users',
  },
  routes: [
    {
      method: 'get',
      path: '/',
      handler: (req, res) => {
        res.send('Home page.');
      },
    },
    {
      method: 'post',
      path: '/',
      handler: (req, res) => {
        res.send(`Create page.`);
      },
    },
  ],
};
