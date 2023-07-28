// 定义懒加载插件
import { useIntersectionObserver } from '@vueuse/core'

export const layzPlugin = {
    install(app) {
        // 使 img-lazy 在所有组件中都可用
        app.directive('img-lazy', {
            mounted(el, binding) {
                // el:指令绑定的那个元素img
                // binding：binding.value 指令等于号后面绑定的表达式的值，图片URL
                console.log(el, binding.value)
                const { stop } =  useIntersectionObserver(
                    el,
                    ([{ isIntersecting }]) => {
                        if (isIntersecting) {
                            el.src = binding.value
                            stop()
                        }
                    },
                )
            }
        })

        //#region 
        // app.directive('img-lazy',/* <img v-img-lazy="item.picture"> */ {
        //     mounted(el, binding) {
        //         // el:指令绑定的那个元素img
        //         // binding：binding.value 指令等于号后面绑定的表达式的值，图片URL
        //         useIntersectionObserver(
        //             el,
        //             ([{ isIntersecting }]) => {
        //                 if (isIntersecting) {
        //                     //是否进入视口区域
        //                     // 给绑定元素的img赋值（src路径） binding是URL
        //                     el.src = binding.value
        //                 }
        //             },
        //         )
        //     }
        // })
        //#endregion
    }
}