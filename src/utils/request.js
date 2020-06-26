/*
 * @Descripttion: axios配置
 * @Author: dj
 * @Date: 2020-06-26 01:38:51
 */ 
import axios from 'axios'
import jsonBig from 'json-bigint'

const request =  axios.create({
    baseURL: 'http://ttapi.research.itcast.cn/'
})


/**
 * 配置处理后端返回数据中超出 js 安全整数范围问题
 * transformResponse----axios提供的API,支持用户自定义如何转换后端返回的数据
 */
request.defaults.transformResponse = [function (data) {
    try {
      return jsonBig.parse(data)
    } catch (err) {
      return {}
    }
  }]


// 请求拦截器


// 响应拦截器

export default request