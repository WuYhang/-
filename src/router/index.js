// createRouter：创建router实例对象
// createWebHistory：创建history模式的路由
import { createRouter, createWebHistory } from 'vue-router'
import Layout from "@/views/Layout/index.vue"
import Login from "@/views/Login/index.vue"
import Home from "@/views/Home/index.vue"
import Category from "@/views/Category/index.vue"
import SubCategory from '@/views/SubCategory/index.vue'
import Detail from "@/views/Datail/index.vue"
import CartList from "@/views/CartList/index.vue"
import Checkout from "@/views/Checkout/index.vue"
import Pay from "@/views/Pay/index.vue"
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
                    path: "Category/:id",
                    component: Category,
                }, {
                    path: "Category/sub/:id",
                    component: SubCategory,
                }, {
                    path: "detail/:id",
                    component: Detail
                }, {
                    path: "CartList",
                    component: CartList
                }, {
                    path: "Checkout",
                    component: Checkout
                }, {
                    path: "Pay",
                    component: Pay
                }
            ]
        },
        {
            path: "/Login",
            component: Login
        }
    ],
    //路由滚动行为定制
    scrollBehavior() {
        return {
            top: 0
        }
    }
})

export default router