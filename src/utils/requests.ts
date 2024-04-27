/*
 * @Author: ffffhx 17862926305@163.com
 * @Date: 2024-04-26 10:04:11
 * @LastEditors: ffffhx 17862926305@163.com
 * @LastEditTime: 2024-04-27 18:17:56
 * @FilePath: \HarBigCake\src\utils\requests.ts
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
//进行axios二次封装，使用请求与响应拦截器
import axios from 'axios';
import { ElMessage } from 'element-plus';
//第一步：利用axios对象的create方法，创建一个axios实例（其他的配置:baseURL，timeout）
let requests = axios.create({
    // baseURL: import.meta.env.VITE_APP_BASE_API,
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
    if (error.response) {
        let status = error.response.status;
        switch (status) {
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