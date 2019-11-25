const path = require('path');

module.exports = {
  webpack: {
    alias: {
      '@': path.resolve(__dirname, 'src/'),
    },
    entry: [path.resolve(__dirname, 'src', 'indx.web.js')],
  },
};
