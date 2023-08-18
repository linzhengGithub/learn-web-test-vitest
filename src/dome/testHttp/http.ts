import axios, { AxiosInstance, AxiosResponse } from "axios";
import { errorMessage } from "./httpHelper";



export const http: AxiosInstance = axios.create({
  baseURL: '/api',
  timeout: 10000,
  headers: { 'Content-Type': 'application/json' },
})

http.interceptors.response.use(
  (response: AxiosResponse): any => {
    const { code, data, message } = response.data
    if (code === 0) {
      return { code, data, message }
    } else {
      errorMessage(message)
      return Promise.reject(new Error(message))
    }
  },
  (error) => {
    if(error.respone.status) {
      switch (error.respone.status) {
        case 401:
          break;
      
        default:
          break;
      }
    }
    return Promise.reject(error)
  },
)

