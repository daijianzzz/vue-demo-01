/*
 * @Descripttion: 将px转换成rem
 * @Author: dj
 * @Date: 2020-06-25 20:12:06
 */ 
module.exports = {
  plugins: {
    "postcss-pxtorem": {
      // 设计稿：375： 37.5
      // 设计稿：750： 75
      // vant是基于375
      rootValue: 37.5,
      // rootValue: 75,
      propList: ["*"]
    }
  }
}
