import { createApp } from 'vue'
import { createPinia } from 'pinia'
import App from './App.vue'
import router from './router'

import '@/styles/common.scss'

//懒加载
import { layzPlugin } from './directives'

const app = createApp(App)

app.use(createPinia())
app.use(router)
app.use(layzPlugin)
app.mount('#app')

