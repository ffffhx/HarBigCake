<template>
    <div class="loginContainer" v-next-focus>
        <el-form class="form2" :model="form" :rules="rules" ref="formRef">

            <div class="username">
                <el-form-item style="width: 87%; " prop="username" label="用户名" class="username">
                    <el-input placeholder="请输入用户名" v-model="form.username" size="large" ref="test" class="test100">
                        <template #prefix>
                            <el-icon>
                                <Avatar />
                            </el-icon>
                        </template>
                    </el-input>
                </el-form-item>
            </div>
            <div class="password">
                <el-form-item style="width: 310px;margin-right: -32px;" prop="password" label="密码">
                    <el-input style="width: 240px;" placeholder="请输入密码" v-model="form.password" size="large"
                        type="password">

                        <template #prefix>
                            <el-icon>
                                <Lock />
                            </el-icon>
                        </template>

                    </el-input>
                </el-form-item>
            </div>
            <div class="verify">
                <div class="yourCaptcha">
                    <el-form-item prop="validCode" label="验证码">
                        <el-input placeholder="请输入验证码" v-model="form.validCode" size="large" @keydown.enter="onSubmit">
                        </el-input>
                    </el-form-item>
                </div>
                <div class="getCaptcha">
                    <validCode @click="toggleDark2"></validCode>
                </div>
            </div>
            <div class="other">
                <p class="loginByPhone" @click="pushToPhoneVerify">手机验证登录</p>
                <p class="forgetPassword" @click='pushToFindPassword'>找回密码</p>
            </div>
            <div class="loginButton">
                <el-form-item>
                    <el-button type="primary" @click="onSubmit">
                        登录
                    </el-button>

                </el-form-item>
            </div>
        </el-form>

    </div>
</template>
<script setup lang="ts">
import { reactive, ref, inject, onMounted } from "vue";
import validCode from '@/components/validCode/validCode.vue'
import { ElMessage, ElNotification } from 'element-plus';
import { useDark, useToggle, useColorMode, identity } from "@vueuse/core";
import { Avatar, Lock, Phone } from "@element-plus/icons-vue";
import { useRouter } from 'vue-router'
import requests from "@/utils/requests";
import useUserStore from '@/stores/modules/user'
const router = useRouter()

// import nprogress from 'nprogress'
// // import nprogress from 'nprogress'
// //引入进度条样式
// // import useStore from 'element-plus/es/components/table/src/store/index.mjs'
// import 'nprogress/nprogress.css'
import { useIndexView } from '@/stores/IndexView.ts';
const useIndexViewStore = useIndexView();
// router.beforeEach((to, from, next) => {
//     console.log('全局前置守卫');
//     //to:你将要访问哪个路由
//     //from：你从哪个路由而来
//     //next:路由的放行函数
    console.log(useIndexViewStore.isLoggedIn);

//     if (useIndexViewStore.isLoggedIn) {
//         // 用户已登录，继续路由导航
//         nprogress.start()
//         next();
//     } else {
//         // 用户未登录，重定向到登录页面
//         next('/login');
//     }
//     // console.log(useIndexViewStore.data);
//     // log
//     // nprogress.start()
//     // next()
// })

// // 全局后置守卫
// router.afterEach((to, from) => {
//     nprogress.done()
// })


const userStore = useUserStore()
const logintitle1DelClass = inject('logintitle1DelClass')
// const router = useRouter();
const isDark = useDark();
const toggleDark = useToggle(isDark);
const formRef = ref()
const form = reactive({
    username: 'text',
    password: '1234',
})
const rules = reactive({
    username: [
        {
            required: true,
            message: '请输入用户名',
            trigger: 'blur'
        }
    ],
    password: [
        {
            required: true,
            message: '请输入密码',
            trigger: 'blur'
        },
    ],
    validCode: [
        {
            required: true,
            message: '请输入验证码',
            trigger: 'blur'
        },
        {
            pattern: /^1234$/,
            message: '验证码不对',
            trigger: 'blur'
        }
    ]
})
const test = ref<HTMLDivElement | null>(null)
function pushToPhoneVerify() {
    // data.value[1] = 
    // UpdateLogin('PhoneVerify');
    router.push('/phoneverify');
    if (typeof logintitle1DelClass === 'function') {
        logintitle1DelClass();
    }
}
function pushToFindPassword() {
    router.push('/findpassword');
    // UpdateLogin('FindPassword');
    if (typeof logintitle1DelClass === 'function') {
        logintitle1DelClass();
    }

}
function pushToHome() {
    router.push('/home');
}
function toggleDark2() {
    console.log('successfulTest2');
    test.value?.classList.toggle('darkMode');
}
onMounted(() => {
    // userStore.userLogin(form);

})
// 登录事件处理函数，接受用户输入的登录信息，并进行表单验证。如果验证成功，则显示登录成功的提示信息。如果验证失败，则显示错误信息。
const onSubmit = async () => {
    try {
        await formRef.value?.validate()//这是表单验证功能
        console.log('表单验证成功');

    } catch (err) {
        ElMessage.error("表单校验失败")
        throw err
    }
    requests({
        url: 'http://localhost:8090/user/login',
        method: 'post',
        data: {
            account: form.username,
            password: form.password,
        }
    }).then((res: any) => {
        console.log(res);
        if (res.code === '1') {
            ElMessage.success("登录成功")
            localStorage.setItem("token", res.data);
            console.log(res.data);
            useIndexViewStore.isLoggedIn = true;
            pushToHome();
        }else if(res.code === '0'){
            ElMessage.error("密码错误")
        }
    }).catch((err) => {
        console.log(err, '登录失败');
    })
}
</script>
<style lang="less">
.input-with-select .el-input-group__prepend {
    background-color: var(--el-fill-color-blank);
}
</style>