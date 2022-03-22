import { Request } from '@/utils/request'
import { AxiosPromise } from 'axios'
interface loginParam { // 登录的参数
  name:string,
  password:string,
  email:string
}
export function login (parameter:loginParam) :AxiosPromise {
  return Request.axiosInstance({
    url: '/login',
    method: 'post',
    data: parameter
  })
}
export function register (parameter:loginParam) :AxiosPromise {
  return Request.axiosInstance({
    url: '/login/register',
    method: 'post',
    data: parameter
  })
}
