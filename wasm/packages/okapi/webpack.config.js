const path = require('path');

module.exports = {
  entry: './src/index.web.js',
  output: {
    path: path.resolve(__dirname, 'src'),
    filename: 'bundle.js',
  },
};