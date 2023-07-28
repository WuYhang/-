import { getBannerAPI } from "@/apis/home"
import { ref } from 'vue'

export function useBanner() {
    // 获取banner
    const bannerList = ref([])

    const getBanner = async () => {
        const res = await getBannerAPI({
            distributionSite: '2'
        })
        console.log(res);
        bannerList.value = res.data.result
    }
    getBanner()

    return {
        bannerList
    }
}