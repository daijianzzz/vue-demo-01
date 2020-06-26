/*
 * @Descripttion: axios配置
 * @Author: dj
 * @Date: 2020-06-26 01:38:51
 */ 
import axios from 'axios'
import jsonBig from 'json-bigint'
import store from '@/store'

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


// 添加请求拦截器
request.interceptors.request.use(function (config) {
  // 统一设置token
  const { user } = store.state
  if (user) {
    config.headers.Authorization =  `Bearer ${user.token}`
  }

  console.log('config', config);
  
  return config;
}, function (error) {
  // 对请求错误做些什么
  return Promise.reject(error);
})

// 添加响应拦截器
request.interceptors.response.use(function (response) {
  // 对响应数据做点什么
  return response;
}, function (error) {
  // 对响应错误做点什么
  return Promise.reject(error);
})

export default request