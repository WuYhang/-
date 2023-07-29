import { createApp } from 'vue'
import { createPinia } from 'pinia'
import App from './App.vue'
import piniaPluginPersistedstate from 'pinia-plugin-persistedstate'
import router from './router'

import '@/styles/common.scss'

//懒加载
import { layzPlugin } from './directives'

// 引入全局组件插件
import { componentPlugin } from '@/components'
const app = createApp(App)
const pinia = createPinia()

pinia.use(piniaPluginPersistedstate)
app.use(pinia)
app.use(router)
app.use(layzPlugin)
app.use(componentPlugin)
app.mount('#app')

