const path = require('path');

const productionConfig = {
  mode: 'production',
  entry: 'task_1/js/dashboard_main.js',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'public')
  }
};

const developmentConfig = {
  mode: 'development',
  // Add other webpack configuration options for development mode if needed
};

module.exports = process.env.NODE_ENV === 'production' ? productionConfig : developmentConfig;
