import { createApp } from 'vue'
import { createPinia } from 'pinia'
import { getCategoryAPI } from "@/apis/TestAPI"

import App from './App.vue'
import router from './router'

import '@/styles/common.scss'

getCategoryAPI().then(res => {
    console.log(res);
})


const app = createApp(App)

app.use(createPinia())
app.use(router)
app.mount('#app')
