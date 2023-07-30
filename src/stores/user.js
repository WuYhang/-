import { ref } from "vue"
import { defineStore } from "pinia"
import { loginApi } from "@/apis/user"
import { useCategoryStore } from './cartStore'
import { mergeCartAPI } from '@/apis/cart'
export const useUserStore = defineStore('user', () => {

    const cartStore = useCategoryStore()
    // state导航列表数据
    const userInfo = ref({})

    //action 获取导航数据的方法
    const getUserInfo = async ({ account, password }) => {
        const res = await loginApi({ account, password });
        userInfo.value = res.data.result
        await mergeCartAPI(cartStore.cartList.map(item => {
            return {
                skuId: item.skuId,
                selected: item.selected,
                count: item.count
            }
        }))
        cartStore.updateNewList()
    }
    // 退出时清除用户信息
    const clearUserInfo = () => {
        userInfo.value = {}
        // 执行清楚购物车action
        cartStore.clearCart()
    }
    return {
        userInfo,
        getUserInfo,
        clearUserInfo
    }
},
    {
        persist: true
    })