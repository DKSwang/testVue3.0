/*
 * @Author: xxuzhong.wang
 * @Date: 2020-05-21 16:45:58
 * @LastEditors: xuzhong.wang
 * @LastEditTime: 2020-06-06 23:48:59
 * @Description: 
 */
module.exports = {
  root: true,
  parser: 'babel-eslint',
  parserOptions: {
    sourceType: 'module'
  },
  env: {
    browser: true,
    node: true
  },
  extends: 'eslint:recommended',
  // required to lint *.vue files
  //   plugins: [
  //     'html'
  //   ],
  // check if imports actually resolve
  'settings': {
    'import/resolver': {
      'webpack': {
        'config': 'build/webpack.base.conf.js'
      }
    }
  },
  // add your custom rules here
  'rules': {
    // allow paren-less arrow functions
    'arrow-parens': 0,
    // allow async-await
    'generator-star-spacing': 0,
    // allow debugger during development
    'no-debugger': process.env.NODE_ENV === 'production' ? 2 : 0,
    "indent": ["error", "tab"]
  }
}
