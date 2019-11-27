module.exports = {
  chainWebpack: config => {
    config.module
      .rule('arraybuffer')
      .type('javascript/auto')
      .test(/\.wasm$/)
      .use('arraybuffer-loader')
      .loader('arraybuffer-loader');
  },
};
