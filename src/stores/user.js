import { ref } from "vue"
import { defineStore } from "pinia"
import { loginApi } from "@/apis/user"

export const useUserStore = defineStore('user', () => {

    // state导航列表数据
    const userInfo = ref({})

    //action 获取导航数据的方法
    const getUserInfo = async ({ account, password }) => {
        const res = await loginApi({ account, password });
        userInfo.value = res.data.result
    } 
    // 退出时清除用户信息
    const clearUserInfo = () => {
        userInfo.value = {}
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