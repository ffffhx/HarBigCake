<template>
    <div class="loginContainer">
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
                    <el-input style="width: 240px;" placeholder="请输入密码" v-model="form.password" size="large">
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
                    <el-input style="width: 240px;" placeholder="请输入您的电话号码" v-model="form.password" size="large">
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
                    <validCode @click="toggleDark()"></validCode>
                </div>
            </div>
            <div class="registerButton">
                <el-form-item>
                    <el-button type="primary" @click="onSubmit">
                        注册
                    </el-button>
                </el-form-item>
            </div>
        </el-form>
    </div>

</template>
<script setup lang="ts">
import { reactive, ref } from 'vue'
import type { FormRules } from 'element-plus'
import validCode from '@/components/validCode.vue'
import { ElMessage } from 'element-plus';
import { Avatar,Lock,Bell } from "@element-plus/icons-vue";

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
    ElMessage.success("登录成功")
    
}
const rules = reactive({
    username: [
        {
            required: true,
            message: '请输入用户名',
            trigger: 'blur'
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
            message: '请输入正确的电话号码',
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
            pattern: /^(?=.*[a-zA-Z])(?=.*[\u4e00-\u9fa5])[\u4e00-\u9fa5a-zA-Z]+$/,
            message: '密码必须由中文加英文组成',
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