var path = require('path');

module.exports = function override(config, env) {
  config.resolve = {
    alias: {
      components: path.resolve(__dirname, 'src/components/'),
      assets: path.resolve(__dirname, 'src/assets/'),
    },
    extensions: ['.js', '.jsx'],
  };

  return config;
}