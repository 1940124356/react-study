import axios from 'axios'

let baseURL = 'http://localhost:8080'

const instance = axios.create({
    baseURL: baseURL,
    timeout: 7000,
    headers: {}
  });

//请求拦截器
instance.interceptors.request.use(function (config) {
    //鉴权 token添加
    config.headers.Authorization = localStorage.getItem('token') || ''
    return config;
  }, function (error) {
    return Promise.reject(error);
  });
 //响应拦截器
instance.interceptors.response.use(function (response) {
    if(response.status===200){
        if(response.data && response.data.err==0){
            return response.data.data;
        }
    }
  }, function (error) {
    return Promise.reject(error);
  });

  export default instance