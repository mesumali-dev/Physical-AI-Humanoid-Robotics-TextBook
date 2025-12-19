// src/plugins/docusaurus-webpack-plugin.js
module.exports = function createWebpackPlugin() {
  return {
    name: 'docusaurus-webpack-plugin',

    configureWebpack(config, isServer, utils) {
      // Only configure proxy for client-side in development
      if (!isServer && process.env.NODE_ENV === 'development') {
        config.devServer = config.devServer || {};
        config.devServer.proxy = [
          {
            context: ['/api'],
            target: 'https://mesum-ali-physical-ai-humanoid-robotics-textbook.hf.space',
            changeOrigin: true,
            secure: false,
          }
        ];
      }
      return config;
    },
  };
};