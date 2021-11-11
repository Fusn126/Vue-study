import axios, { AxiosInstance, AxiosRequestConfig, AxiosResponse } from 'axios'

export class Request {
    public static axiosInstance: AxiosInstance;

    public static init () :void{
      // 创建axios实例
      this.axiosInstance = axios.create({
        baseURL: process.env.VUE_APP_BASE_URL,
        timeout: 3000
      })
      // 初始化拦截器
      this.initInterceptors()
    }

    // 为了让http.ts中获取初始化好的axios实例
    // 初始化拦截器
    public static initInterceptors ():void {
      // 设置post请求头
      this.axiosInstance.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded'
      /**
         * 请求拦截器
         * 每次请求前，如果存在token则在请求头中携带token
         */
      this.axiosInstance.interceptors.request.use(
        (config: AxiosRequestConfig) => {
          const token = localStorage.getItem('ACCESS_TOKEN')
          if (token) {
            console.log('具有token')
          } else {
            console.log('没有token')
          }
          return config
        },
        (error) => {
          console.log(error)
        }
      )

      // 响应拦截器
      this.axiosInstance.interceptors.response.use(
        // 请求成功
        (response: AxiosResponse) => {
          if (response.status === 200) {
            return response
          } else {
            console.log('返回错误')
            return response
          }
        },
        // 请求失败
        (error) => {
          const { response } = error
          if (response) {
            // 请求已发出，但是不在2xx的范围
            console.log('请求错误')
            return Promise.reject(response.data)
          } else {
            console.log('网络错误')
          }
        }
      )
    }
}
