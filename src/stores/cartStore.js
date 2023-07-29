import { computed, ref } from "vue"
import { defineStore } from "pinia"

export const useCategoryStore = defineStore('cart', () => {

    // state导航列表数据
    const cartList = ref([])

    //action 获取导航数据的方法
    const addCart = (goods) => {
        const item = cartList.value.find((item) => goods.skuId === item.skuId)
        if (item) {
            // 找到了
            item.count++
        } else {
            // 没找到
            cartList.value.push(goods)
        }
    }
    // 删除购物车
    const delCart = (skuId) => {

        // 1. 找到要删除项的下标值 - splice
        // const idx = cartList.value.findIndex((item) => skuId === item.skuId)
        // cartList.value.splice(idx, 1)
        // 2. 使用数组的过滤方法 - filter
        let cartListFilter = cartList.value.filter((item) => skuId !== item.skuId)
        cartList.value = cartListFilter
    }
    // 计算金额
    //总数
    const allCount = computed(() => cartList.value.reduce((a, c) => a + c.count, 0))

    const allPrice = computed(() => cartList.value.reduce((a, c) => a + c.count * c.price, 0))
    return {
        cartList,
        addCart,
        delCart,
        allCount,
        allPrice
    }
}, {
    persist: true
})