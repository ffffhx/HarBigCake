<template>
    <div class="loginContainer">
        <el-form :model="form" :rules="rules" ref="formRef">
            <div class="phoneNumber">
                <el-form-item prop="phone" label="电话号码">
                    <el-input placeholder="请输入您的电话号码" v-model="form.phone">
                        <template #prefix>
                            <el-icon>
                                <Avatar />
                            </el-icon>
                        </template>
                    </el-input>
                </el-form-item>
            </div>
            <div class="verify">
                <div class="yourCaptcha">
                    <el-form-item prop="validCode" label="验证码">
                        <el-input placeholder="请输入验证码" v-model="form.validCode">
                            <!-- <el-icon><Finished /></el-icon> -->
                            <template #prefix>
                            <el-icon>
                                <Finished />
                            </el-icon>
                        </template>
                        </el-input>
                    </el-form-item></div>
                <div class="getCaptcha">
                    <!-- <validCode2></validCode2> -->
                </div>
            </div>
            <div class="registerButton">
                <el-form-item>
                    <el-button type="primary" @click="onSubmit" style="width: 260px; height: 40px;">
                        登录
                    </el-button>
                </el-form-item>
            </div>
        </el-form>
    </div>

</template>
<script setup>
import { reactive, ref } from 'vue'
import { ElMessage } from 'element-plus';
import validCode2 from '../components/validCode2.vue'
import { Avatar,Lock,Finished } from "@element-plus/icons-vue";

const formRef = ref()
const form = reactive({
    username: '',
    password: '',
    validCode:''
})
const rules = reactive({
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
    validCode: [
        {
            required: true,
            message: '请输入验证码',
            trigger: 'blur'

        }
    ]
})
const onSubmit = async () => {
    await formRef.value?.validate().catch((err) => {
        ElMessage.error("表单校验失败")
        throw err
    })
    ElMessage.success("登录成功")
}
</script>
<style lang="less">

</style>