// src/plugins/docusaurus-proxy-plugin.js
module.exports = function proxyPlugin(context, options) {
  return {
    name: 'docusaurus-proxy-plugin',

    configureWebpack(config, isServer, utils) {
      if (!isServer) {
        // Configure webpack dev server proxy for API requests
        return {
          devServer: {
            proxy: {
              '/api': {
                target: 'https://mesum-ali-physical-ai-humanoid-robotics-textbook.hf.space',
                changeOrigin: true,
                secure: false,
              },
            },
          },
        };
      }
      return {};
    },
  };
};