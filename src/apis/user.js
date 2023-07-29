import request from '@/utils/http'

export const loginApi = ({account,password}) => {
    return request({
        url: '/login',
        method: 'post',
        data: {
            account,
            password
        }
    })
}