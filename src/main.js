/*
 * @Descripttion: 
 * @Author: dj
 * @Date: 2020-06-25 20:12:06
 */ 
import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
// import 'normalize.css' // 一个体积很小reset全局样式的包------vant内置了normalize
import 'amfe-flexible' // 设置rem基准值
// // 加载
// import { 
//   Button, 
//   Cell,
//   Icon,
//   CellGroup,
// } from 'vant'
// // 注册
// Vue.use(Button)
//   .use(Cell)
//   .use(CellGroup)
//   .use(Icon)
import './utils/register-vant' // 上面的引入封装到这个里面
import './styles/index.scss' // 加载全局样式(注意，自己的样式文件放在其他样式文件后面，css重叠以改库样式)

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
