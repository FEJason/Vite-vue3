// 每个 Vue 应用都是通过 createApp 函数创建一个新的 应用实例
import { createApp } from 'vue'
import request from './request/request'

// 黑暗模式
import 'element-plus/theme-chalk/dark/css-vars.css'


// 导入跟组件
import App from './App.vue'
import router from './router'

// Element Plus 组件 默认 使用英语
import ElementPlus from 'element-plus'
import zhCn from 'element-plus/es/locale/lang/zh-cn'
// Element所有图标
import * as ElementPlusIconsVue from '@element-plus/icons-vue'



// 传入 createApp 的对象实际上是一个组件，每个应用都需要一个"根组件"， 其他组件将作为其子组件
// 应用实例必须在调用了 .mount() 方法后才会渲染出来。该方法接受一个"容器"参数，可以是一个实际的 DOM 元素或是一个 CSS 选择器字符串
const app = createApp(App)

// 注册Element所有图标
for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
  app.component(key, component)
}

app.config.globalProperties.$http = request
app
  .use(router)
  .use(ElementPlus, { locale: zhCn, })
  .mount('#app')
