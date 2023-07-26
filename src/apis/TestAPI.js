import httpInstace from '@/utils/http'

export function getCategoryAPI () {
  return httpInstace({
    url: 'home/category/head'
  })
}