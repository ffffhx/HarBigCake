//创建用户相关的小仓库 用选择式api
import { defineStore } from "pinia";
//引入接口
import { reqLogin } from "@/api/user/indexUser";
let useUserStore = defineStore("user", {
    //小仓库存储数据的地方
    state: () => {
        return {
            // username: "admin",
            // password: "123456",
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
                this.token = result.data.token
                localStorage.setItem("TOKEN", result.data.token);
                return 'ok'
            }else{
                return Promise.reject(new Error(result.data.message))
            }
        }
    },
    getters: {

    }
})
//对外暴露
export default useUserStore
