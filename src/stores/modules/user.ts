/*
 * @Author: ffffhx 17862926305@163.com
 * @Date: 2024-04-27 09:16:56
 * @LastEditors: ffffhx 17862926305@163.com
 * @LastEditTime: 2024-05-09 13:58:01
 * @FilePath: \HarBigCake\src\stores\modules\user.ts
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
//创建用户相关的小仓库 用选择式api
import { defineStore } from "pinia";
//引入接口
import { reqLogin,reqUserInfo } from "@/api/user/indexUser";
// import { userInfo } from "os";
let useUserStore = defineStore("user", {
    //小仓库存储数据的地方
    state: () => {
        return {
            token: localStorage.getItem("TOKEN"),//用户的唯一标识
        };
    },
    //处理异步或者逻辑的地方
    actions: {
        //用户登录的方法
        async userLogin(form: any) {
            console.log('userLogin方法成功执行');
            let result:any = await reqLogin(form)
            console.log('let result = await reqLogin(form)成功执行');
            if (result.code == 200) {
                //pinia仓库存储一下token
                this.token = result.data
                localStorage.setItem("TOKEN", result.data);
                return 'ok'
            }else{
                // return Promise.reject(new Error(result.data))
            }
        },
        async userInfo(){
            console.log('userInfo方法成功执行');
            let result =  await reqUserInfo()
            console.log('这是result',result);
            
        }
    },
    getters: {

    }
})
//对外暴露
export default useUserStore
