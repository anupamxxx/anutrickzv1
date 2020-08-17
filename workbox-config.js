module.exports = {
  globDirectory: './',
  globPatterns: [
    '**/*.{html,json,js,css,woff}'
  ],
  swDest: 'https://raw.githubusercontent.com/anupamxxx/anutrickzv1/master/anutrickz.json',
  runtimeCaching: [{
    urlPattern: /\.(?:png|jpg|jpeg|svg)$/,
    handler: 'NetworkFirst',
    options: {
      cacheName: 'images',
      expiration: {
        maxEntries: 10,
      },
    },
  }],
};
