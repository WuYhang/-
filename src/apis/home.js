import httpInstance from "@/utils/http"

//axios常用参数配置
//#region 
// 请求地址：url: '/user'
// 请求类型：method: 'get'
// 请根路径：baseURL: 'http://www.mt.com/api'
// 请求前的数据处理：transformRequest: [function (data) { }]
// 请求后的数据处理： transformResponse: [function (data) { }]
// 自定义的请求头：headers: { 'x-Requested-With': 'XMLHttpRequest' }
// URL查询对象：params: { id: 12 },
// 查询对象序列化函数：paramsSerializer: function(params) { }
// request body：data: { key: 'aa' }
// 超时设置：timeout: 1000,
//     跨域是否带Token：withCredentials: false
// 自定义请求处理：adapter: function(resolve, reject, config) { }
// 身份验证信息：auth: { uname: '', pwd: '12' }
//#endregion
export function getBannerAPI(params = {}) {
    // 默认为1 商品为2
    const { distributionSite = '1' } = params
    return httpInstance({
        url: '/home/banner',
        params: {
            distributionSite
        }
    })
}
/**
 * @description: 获取新鲜好物
 * @param {*}
 * @return {*}
 */
export const findNewAPI = () => {
    return httpInstance({
        url: '/home/new'
    })
}
/**
 * @description: 获取人气推荐
 * @param {*}
 * @return {*}
 */
export const getHotAPI = () => {
    return httpInstance({
        url: 'home/hot',
        method: 'get'
    })
}
/**
 * @description: 获取所有商品模块
 * @param {*}
 * @return {*}
 */
export const getGoodsAPI = () => {
    return httpInstance({
        url: '/home/goods'
    })
}
