//进行axios二次封装，使用请求与响应拦截器
import axios from 'axios';
import { ElMessage } from 'element-plus';
//引入用户相关的仓库
// import useUserStore from '@/stores/modules/user';
//第一步：利用axios对象的create方法，创建一个axios实例（其他的配置:baseURL，timeout）
let requests = axios.create({
    // baseURL: "http://47.99.148.150:8090/",
    baseURL: "http://localhost:8090/",
    timeout: 5000,
})
//第二步：请求拦截器
requests.interceptors.request.use((config) => {
    //获取用户相关的小仓库，主要目的是获取其token，登录成功以后携带给服务器
    config.headers.token = localStorage.getItem("token");
    return config;
})
//第三步:响应拦截器
requests.interceptors.response.use((res) => {
    return res.data;
}, (error) => {
    let message = '';
    if (error.response) {
        let status = error.response.status;
        switch (status) {
            case 400:
                message = '参数错误400';
                break;
            case 401:
                message = 'token过期401';
                break;
            case 403:
                message = '无权访问403';
                break;
            case 404:
                message = '请求地址错误404';
                break;
            case 500:
                message = '服务器异常500';
                break;
            case 405:
                message = '请求方式错误405';
                break;
            default:
                message = '网络出现问题啦';
        }
        ElMessage({
            type: 'error',
            message
        })
        return Promise.reject(error);
    }

})
export default requests