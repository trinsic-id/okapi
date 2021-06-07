const path = require('path');

module.exports = {
  entry: './src/example.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js',
  },
};