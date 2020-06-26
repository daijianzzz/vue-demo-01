/*
 * @Descripttion: 
 * @Author: dj
 * @Date: 2020-06-26 14:11:15
 */ 
import Vue from 'vue'
//加载要使用的验证组件
import { ValidationProvider, ValidationObserver, extend } from 'vee-validate'
// 加载内置的验证规则
import * as rules from 'vee-validate/dist/rules';
// 加载中文语言包
import { messages } from 'vee-validate/dist/locale/zh_CN.json';

// 注册全局组件
Vue.component('ValidationProvider', ValidationProvider)
Vue.component('ValidationObserver', ValidationObserver)

// 配置验证规则和中文提示消息
Object.keys(rules).forEach(rule => {
  extend(rule, {
    ...rules[rule], // copies rule configuration
    message: messages[rule] // assign message
  });
});

// 自定义验证规则
extend('mobilezzz', {
  validate: value => {
    return /^1(3|5|6|7|8|9)\d{9}$/.test(value);
  },
  // message: '手机号格式不正确'
  message: '{_field_}格式不正确'
});

extend('codezzz', {
  validate: value => {
    return /^\d{6}$/.test(value);
  },
  // message: '手机号格式不正确'
  message: '{_field_}长度6位'
});

























