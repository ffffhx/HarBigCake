/*
 * @Author: ffffhx 17862926305@163.com
 * @Date: 2024-04-26 12:01:20
 * @LastEditors: ffffhx 17862926305@163.com
 * @LastEditTime: 2024-05-09 10:08:30
 * @FilePath: \HarBigCake\src\api\user\indexUser.ts
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
//统一管理项目用户相关的接口
import type { loginForm, loginResponseData, userResponseData } from "@/api/user/type";
import requests from "@/utils/requests";
enum API {
    LOGIN_URL = "/login",
    USERINFO_URL = "/login",
}
//暴露请求函数
//登录接口方法 
export const reqLogin = (data: any) => {
    return requests.post<any, any>(
        "http://47.99.148.150:8090/user/login", data
    )
}
//获取用户信息接口方法 
export const reqUserInfo = () => {
    return requests.get<any,any>(API.USERINFO_URL)
}