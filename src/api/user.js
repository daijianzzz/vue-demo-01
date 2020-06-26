/*
 * @Descripttion: 用户模块 
 * @Author: dj
 * @Date: 2020-06-26 03:10:07
 */ 
import request from '@/utils/request'

export const login = (data) => {
    return request({
        method: 'POST',
        url: '/app/v1_0/authorizations',
        // headers: {
        //     'Content-type': 'application/json' // axios默认类型
        // },
        // Query查询参数
        // params: {},
        // Body查询参数
        data: data
    })
}



/**
 * 获取验证码
 */
export function sendSmsCode (mobile) {
    return request({
      method: 'GET',
      url: `/app/v1_0/sms/codes/${mobile}`
    })
  }