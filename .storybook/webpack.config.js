const path = require('path');

const {
  createDefaultWebpackConfig
} = require('@storybook/core/dist/server/config/webpack.config.default.js');

module.exports = (baseConfig, env) => {
  const config = createDefaultWebpackConfig(baseConfig, env);

  // SASS loader:
  config.module.rules.push({
    test: /\.scss$/,
    loaders: ['style-loader', 'css-loader', 'sass-loader'],
    include: path.resolve(__dirname, '../')
  });
  config.resolve.extensions.push('.scss', '.sass');

  // MD loader:
  config.module.rules.push({
    test: /\.md$/,
    loader: 'highlight-loader!markdown-loader'
  });

  return config;
};
