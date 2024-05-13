<template>
    <div class="loginContainer" v-next-focus>
        <el-form :model="form" :rules="rules" ref="formRef">
            <div class="username">
                <el-form-item style="width: 87%;" prop="username" label="用户名">
                    <el-input placeholder="请输入用户名" v-model="form.username" size="large">
                        <template #prefix>
                            <el-icon>
                                <Avatar />
                            </el-icon>
                        </template>
                    </el-input>
                </el-form-item>
            </div>
            <div class="password">
                <el-form-item style="width: 310px;margin-right: -32px;"prop="password" label="密码">
                    <el-input style="width: 240px;" placeholder="请输入密码" v-model="form.password" size="large" type="password">
                        <template #prefix>
                            <el-icon>
                                <Lock />
                            </el-icon>
                        </template>

                    </el-input>
                </el-form-item>
            </div>
            <div class="phoneNumber">
                <el-form-item style="width: 317px;margin-left: 8px;"prop="phone" label="电话号码">
                    <el-input style="width: 240px;" placeholder="请输入您的电话号码" v-model="form.phone" size="large">
                        <template #prefix>
                            <el-icon>
                                <Bell />
                            </el-icon>
                        </template>

                    </el-input>
                </el-form-item>
            </div>


            <div class="verify">
                <div class="yourCaptcha">
                    <el-form-item prop="validCode" label="验证码">
                        <el-input placeholder="请输入验证码" v-model="form.validCode" size="large">
                        </el-input>
                    </el-form-item>
                </div>
                <div class="getCaptcha">
                    <validCode></validCode>
                </div>
            </div>
                <el-form-item class="registerButton">
                    <el-button type="primary" @click="onSubmit">
                        注册
                    </el-button>
                </el-form-item>
        </el-form>
    </div>

</template>
<script setup lang="ts">
import { reactive, ref } from 'vue'
import type { FormRules } from 'element-plus'
import validCode from '@/components/validCode/validCode.vue'
import { ElMessage } from 'element-plus';
import { Avatar,Lock,Bell } from "@element-plus/icons-vue";
import requests from '@/utils/requests'
import { useRouter } from 'vue-router';
const router = useRouter();
function pushToLogin() {
    router.push('/Login');
}
// import { login } from '../api/users'
const form = reactive({
    username: '',
    password: '',
    phone: '',
    validCode:''
})
const formRef = ref()
//登录事件处理
const onSubmit = async () => {
    await formRef.value?.validate().catch((err: any) => {
        ElMessage.error("表单校验失败")
        throw err
    })
    requests({
        url: 'http://localhost:8090/user/login',
        method: 'post',
        data: {
            identity: 0,
            account: form.username,
            phone:form.phone,
            password: form.password,
            gender:0,
            isOwner:0,
            name:'zs',
        }
    }).then((res:any) => {
        console.log(res);
    ElMessage.success("注册成功")
    pushToLogin();
    }).catch((err) => {
        console.log(err,'err为');
    })
}
const rules = reactive({
    username: [
        {
            required: true,
            message: '请输入用户名',
            trigger: 'blur'
        },
        {
            max:20,
            message:'用户名最多20个字符'
        }
    ],
    phone: [
        {
            required: true,
            message: '请输入电话号码',
            trigger: 'blur'
        },
        {
            pattern: /^1[3-9]\d{9}$/,//1开头，中间必须是3-9的数字，共10位
            message: '电话号码必须1开头,中间必须是3-9的数字,共10位',
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
            message: '请输入6-12位密码',
            trigger: 'blur'
        },
        {
            pattern: /^(?=.*\d)(?=.*[a-zA-Z])[a-zA-Z\d]+$/,
            // pattern: /^(?=.*[a-zA-Z])(?=.*[\u4e00-\u9fa5])[\u4e00-\u9fa5a-zA-Z]+$/,
            message: '密码必须由数字加英文组成',
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
</script>
<style lang="less">

</style>