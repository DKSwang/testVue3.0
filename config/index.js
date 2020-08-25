/*
 * @Descripttion:
 * @version:
 * @Author: yanan.zhao
 * @Date: 2019-11-28 13:38:44
 * @LastEditors: xuzhong.wang
 * @LastEditTime: 2020-05-21 18:59:04
 */
// see http://vuejs-templates.github.io/webpack for documentation.
let path = require('path');

module.exports = {
  build: {
    env: require('./prod.env'),
    index: path.resolve(__dirname, '../basicProject/index.html'),
    assetsRoot: path.resolve(__dirname, '../basicProject'),
    assetsSubDirectory: 'static',
    assetsPublicPath: '/',
    productionSourceMap: false,
    // Gzip off by default as many popular static hosts such as
    // Surge or Netlify already gzip all static assets for you.
    // Before setting to `true`, make sure to:
    // npm install --save-dev compression-webpack-plugin
    productionGzip: false,
    productionGzipExtensions: ['js', 'css'],
    // Run the build command with an extra argument to
    // View the bundle analyzer report after build finishes:
    // `npm run build --report`
    // Set to `true` or `false` to always turn it on or off
    bundleAnalyzerReport: process.env.npm_config_report,
  },
  dev: {
    env: require('./dev.env').default,
    port: 8008,
    autoOpenBrowser: true,
    assetsSubDirectory: 'static',
    assetsPublicPath: '/',
    proxyTable: {
      '/api': {
        target: 'http://172.16.82.109:9527', // 韩亚林
        // target: 'http://192.168.1.101:8083',//阳仔
        // target: "http://172.16.82.0:9527", //俊旺
        // target: 'http://172.16.82.217:9527', //小鞠小电脑
        // target: "http://192.168.163.38:8083", //服务器
        // target: "http://192.168.163.39:9527", //公司服务器
        // target: "http://172.16.82.100:9527", //张宇
        // target: "http://172.16.82.251:9527", //姜浩东
        pathRewrite: {
          '^/api': '',
        },
        // secure: true, // ws: false,
        changeOrigin: true,
      },
      '/code': {
        target: 'http://172.16.82.109:9527', // 韩亚林
        // secure: true, // ws: false,
        // target: 'http://192.168.1.101:8083',//阳仔
        // target: "http://172.16.82.0:9527", //俊旺
        // target: 'http://172.16.82.217:9527', //小鞠小电脑
        // target: "http://192.168.163.38:8083", //服务器
        // target: "http://192.168.163.39:9527", //公司服务器
        // target: 'http://172.16.80.184:9527', //阳仔
        // target: "http://172.16.82.100:9527", //张宇
        // target: "http://172.16.82.251:9527", //姜浩东
        changeOrigin: true,
      },
    },
    context: [
      // 代理路径
      '/shopping',
      '/ugc',
      '/v1',
      '/v2',
      '/v3',
      '/v4',
      '/bos',
      '/member',
      '/promotion',
      '/eus',
      '/payapi',
      '/admin',
      '/statis',
      '/img',
    ],
    // CSS Sourcemaps off by default because relative paths are "buggy"
    // with this option, according to the CSS-Loader README
    // (https://github.com/webpack/css-loader#sourcemaps)
    // In our experience, they generally work as expected,
    // just be aware of this issue when enabling this option.
    cssSourceMap: false,
  },
};
