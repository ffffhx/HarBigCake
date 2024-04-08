<template>
    <div class="loginContainer">
        <el-form :model="form" :rules="rules" ref="formRef">
            <div class="username">
                <!-- <label class="search_icon">
                    <svg t="1712500481804" class="loginicon" viewBox="0 0 1024 1024" version="1.1"
                        xmlns="http://www.w3.org/2000/svg" p-id="1196" width="200" height="200">
                        <path
                            d="M842.154667 938.538667a8.533333 8.533333 0 0 1-8.533334-8.533334 321.536 321.536 0 0 0-642.858666 0 8.533333 8.533333 0 0 1-8.533334 8.533334H117.589333a8.533333 8.533333 0 0 1-8.533333-8.789334 397.824 397.824 0 0 1 31.616-147.968 402.773333 402.773333 0 0 1 86.442667-128 397.824 397.824 0 0 1 128-86.357333l1.322666-0.554667a265.856 265.856 0 1 1 311.466667 0l1.322667 0.554667a403.114667 403.114667 0 0 1 246.058666 362.666667 8.533333 8.533333 0 0 1-8.533333 8.789333z"
                            p-id="1197"></path>
                    </svg>
                </label> -->
                <el-form-item prop="username" label="用户名">
                    <el-input placeholder="请输入用户名" v-model="form.username" size="large">
                        <!-- <el-icon>
                            <svg-icon icon-class="el-icon-user" />
                        </el-icon> -->
                        <el-icon class="el-icon-user" />
                        <svg-icon icon="user" />

                    </el-input>
                </el-form-item>
            </div>
            <div class="password">
                <el-form-item prop="password" label="密码">
                    <el-input placeholder="请输入密码" v-model="form.password" size="large"
                        prefix-icon="el-icon-lock"></el-input>
                </el-form-item>
            </div>
            <div class="verify">
                <div class="yourCaptcha">
                    <el-form-item prop="validCode" label="验证码">
                        <el-input placeholder="请输入验证码" v-model="form.validCode" size="large" @click="login">
                        </el-input>
                    </el-form-item>
                </div>
                <div class="AFCK">AFCK</div>
                <div class="getCaptcha">
                    <validCode @click="toggleDark()"></validCode>
                </div>
            </div>
            <div class="other">

            </div>
            <div class="loginButton">
                <el-form-item>
                    <el-button type="primary" @click="onSubmit">
                        Create
                    </el-button>
                </el-form-item>
            </div>
        </el-form>
    </div>

</template>
<script setup lang="ts">
import { reactive, ref } from "vue";
import { ElMessage } from 'element-plus';
import validCode from '@/components/validCode.vue'
import { useDark, useToggle, useColorMode } from "@vueuse/core";
const isDark = useDark();
const toggleDark = useToggle(isDark);
const formRef = ref()
//登录事件处理
const login = () => {
    ElMessage.success("登录成功")
}
const onSubmit = async () => {
    await formRef.value?.validate().catch((err: any) => {
        ElMessage.error("表单校验失败")
        throw err
    })
    ElMessage.success("登录成功")

}
const form = reactive({
    username: '17862926305',
    password: '12345678',
    validCode: ''
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
})
</script>
<style lang="less"></style>