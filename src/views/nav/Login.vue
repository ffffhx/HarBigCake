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
import { ElMessage } from 'element-plus';
import { useDark, useToggle, useColorMode } from "@vueuse/core";
import { Avatar, Lock } from "@element-plus/icons-vue";
import { useRouter } from 'vue-router'
import requests from "@/utils/requests";
import useUserStore from '@/stores/modules/user'
const userStore = useUserStore()
const logintitle1DelClass = inject('logintitle1DelClass')
const router = useRouter();
const isDark = useDark();
const toggleDark = useToggle(isDark);
const formRef = ref()
const form = reactive({
    username: '17862926305',
    password: '12345678',
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
        {
            min: 6,
            max: 12,
            message: '请输入正确的密码',
            trigger: 'blur'
        }
    ],
    validCode: [
        {
            required: true,
            message: '请输入验证码',
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
    requests({
        url: 'http://116.196.99.29:8090 - Generated server url',
        method: 'post',
        data: {
            username: '123',
            password: '123456'
        }
    }).then((res) => {
        console.log(res,'这个是res');
    })
})
// 登录事件处理函数，接受用户输入的登录信息，并进行表单验证。如果验证成功，则显示登录成功的提示信息。如果验证失败，则显示错误信息。
const onSubmit = async () => {
    try {
        // 等待formRef对应的表单完成验证，如果验证失败，则抛出错误并显示错误信息
        await formRef.value?.validate()
        userStore.userLogin(form)
        console.log(form,'这个是form');
        console.log('onSubmit的try方法成功执行');        
        ElMessage.success("登录成功")
        pushToHome();
    } catch (err) {
        ElMessage.error("表单校验失败")
        throw err

    }
}
</script>
<style lang="less"></style>