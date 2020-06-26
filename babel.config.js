/*
 * @Descripttion: 添加了vant配置
 * @Author: dj
 * @Date: 2020-06-25 20:12:06
 */ 
module.exports = {
  presets: [
    '@vue/cli-plugin-babel/preset'
  ],
  plugins: [
    ['import', {
      libraryName: 'vant',
      libraryDirectory: 'es',
      style: true
    }, 'vant']
  ]
}
