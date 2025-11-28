const luccaProxy = require('@lucca/proxy');

module.exports = [
  luccaProxy({
    context: [
      '/api',
      '/login',
      '/logout',
      '/identity',
      '/admin',
      '/organization/structure',
      '/lucca-banner',
      '/store/api',
    ],
    useVite: true,
  }),
  {
    context: ['/static', '/lucca-bnb/static'],
    target: 'https://localhost:4200',
    changeOrigin: false,
    secure: false,
    pathRewrite: {
      '^/assets': '',
      '^/static': '',
      '^/lucca-bnb/static': '',
    },
  },
  {
    context: ['/lucca-bnb/lucca-banner'],
    target: 'https://localhost:4200',
    secure: false,
    pathRewrite: {
      '^/lucca-bnb/lucca-banner': '/lucca-banner',
    },
  },
];
