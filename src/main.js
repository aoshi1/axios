import { createApp } from 'vue'
import App from './App.vue'
//导入axios
import axios from 'axios'

const app=createApp(App)
//设置默认值
// axios.defaults.baseURL='http://localhost:8081/'
//注意这个绑定到vue的原型链中必须在mount之前，否则会报错
app.config.globalProperties.$axios = axios
app.mount('#app')

