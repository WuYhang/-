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
    // 单选功能
    const singleCheck = (skuId, selected) => {
        // 通过skuId找到要修改的那一项 然后把它的selected修改为传过来的selected
        const item = cartList.value.find((item) => item.skuId === skuId)
        item.selected = selected
    }
    //是否全选
    const isAll = computed(() => cartList.value.every((item) => item.selected))
    // 全选功能action
    const allCheck = (selected) => {
        // 把cartList中的每一项的selected都设置为当前的全选框状态
        cartList.value.forEach(item => item.selected = selected)
    }
    // 3. 已选择数量
    const selectedCount = computed(() => cartList.value.filter(item => item.selected).reduce((a, c) => a + c.count, 0))
    // 4. 已选择商品价钱合计
    const selectedPrice = computed(() => cartList.value.filter(item => item.selected).reduce((a, c) => a + c.count * c.price, 0))
    return {
        cartList,
        addCart,
        delCart,
        allCount,
        allPrice,
        singleCheck,
        isAll,
        allCheck,
        selectedCount,
        selectedPrice
    }
}, {
    persist: true
})