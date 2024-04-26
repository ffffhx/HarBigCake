//进行axios二次封装，使用请求与响应拦截器
import axios from 'axios';
import { ElMessage } from 'element-plus';
//第一步：利用axios对象的create方法，创建一个axios实例（其他的配置:baseURL，timeout）
let requests = axios.create({
    baseURL: import.meta.env.VITE_APP_BASE_API,
    timeout: 5000
})
//第二步：请求拦截器
requests.interceptors.request.use((config) => {
    config.headers.token = '132';
    return config;
})
//第三步:响应拦截器
requests.interceptors.response.use((res) => {
    return res.data;
}, (error) => {
    let message = '';
    let status = error.response.status;
    switch (status) {
        case 401:
            message = 'token过期';
            break;
        case 403:
            message = '无权访问';
            break;
        case 404:
            message = '请求地址错误';
            break;
        case 500:
            message = '服务器异常';
            break;
        default:
            message = '网络出现问题';
    }
    ElMessage({
        type: 'error',
        message
    })
    return Promise.reject(error);
})
export default requests