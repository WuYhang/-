import './assets/main.css'

import App from './App.vue'
import { createApp } from 'vue'
//导入pinia
import { createPinia } from 'pinia'
const pinia = createPinia()

createApp(App).use(pinia).mount('#app')
