// createRouter：创建router实例对象
// createWebHistory：创建history模式的路由

import { createRouter, createWebHistory } from 'vue-router'
// import Layout from "@/views/Layout/index.vue"
import Layout from "@/views/Layout/index.vue"
import Login from "@/views/Login/index.vue"
import Home from "@/views/Home/index.vue"
import Category from "@/views/Category/index.vue"

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    // path和component对应关系的位置
    routes: [
        {
            path: "/",
            component: Layout,
            children: [
                {
                    // 默认二级路由如何进行设置 path设置为空 访问一级路由时二级路由组件也会渲染
                    path: '',
                    component: Home
                }, {
                    path: "Category",
                    component: Category
                }
            ]
        },
        {
            path: "/Login",
            component: Login
        }
    ]
})

export default router