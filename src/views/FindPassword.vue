<template>
    <div class="loginContainer" v-next-focus>
        <el-form :model="form" :rules="rules" ref="formRef">
            <div class="username">
                <el-form-item label="用户名" prop="username">
                    <el-input placeholder="用户名" v-model="form.username">
                        <template #prefix>
                            <el-icon class="el-input_icon">
                                <Avatar />
                            </el-icon>
                        </template>
                    </el-input>
                </el-form-item>
            </div>
            <div class="password">
                <el-form-item label="密码" prop="password">
                    <el-input placeholder="密码" v-model="form.password">
                        <template #prefix>
                            <el-icon class="el-input_icon">
                                <Lock />
                            </el-icon>
                        </template>
                    </el-input>
                </el-form-item>
            </div>
            <div class="identifyPassword">
                <el-form-item label="确认新密码" prop="identifyPassword">
                    <el-input placeholder="确认新密码" v-model="form.identifyPassword"></el-input>
                </el-form-item>
            </div>
            <div class="phoneNumber">
                <el-form-item label="电话号码 " prop="phone">
                    <el-input placeholder="请输入您的电话号码 " v-model="form.phone"></el-input>
                </el-form-item>
            </div>
            <div class="verify">
                <div class="yourCaptcha">
                    <el-form-item prop="validCode" label="验证码">
                        <el-input placeholder="请输入验证码" v-model="form.validCode"></el-input>
                    </el-form-item>
                </div>
                <div class="getCaptcha">
                    <!-- <validCode3></validCode3> -->
                </div>
            </div>
            <div class="registerButton">
                <el-form-item>
                    <el-button type="primary" @click="onSubmit">
                        重置密码
                    </el-button>
                </el-form-item>
            </div>
        </el-form>
    </div>

</template>
<script setup>
import { reactive, ref } from "vue";
import { Avatar,Lock } from "@element-plus/icons-vue";

const form = ref({
    username: '',
    password: '',
    identifyPassword: '',
    phone: '',
    validCode:''
})
const formRef = ref()
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
        }
    ],
    identifyPassword: [
        {
            required: true,
            message: '请输入确认密码',
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
            pattern: /^[0-9]{11}$/,
            message: '请输入11位数字',
            trigger: 'blur'
        },
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
