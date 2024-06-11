module.exports = {
  configureWebpack: {
    plugins: []
  },
  chainWebpack: config => {
    config.plugin('html').tap(args => {
      args[0].template = 'public/index.html';
      return args;
    });
  },
  devServer: {
    allowedHosts: 'all',
    host: '0.0.0.0',
    port: 8080,  
    client: {
      webSocketURL: {
        hostname: '0.0.0.0',
        pathname: '/ws',
        password: '',
        port: 8080,
        protocol: 'wss'
      },
      overlay: {
        warnings: false,
        errors: true
      },
    },
    https: true
  }
};
