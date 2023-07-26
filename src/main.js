import './assets/main.css'

import App from './App.vue'
import router from 'router'

import { createApp } from 'vue'
//导入pinia
import { createPinia } from 'pinia'

import { getCategoryAPI } from "@/apis/TestAPI"
getCategoryAPI().then(res => {
    console.log(res);
})


const app = createApp(App)

app.use(createPinia())
app.use(router)
app.mount('#app')
