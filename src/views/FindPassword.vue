<template>
    <div class="loginContainer">
        <el-form :model="form" :rules="rules" ref="formRef">
            <div class="username">
                <el-form-item label="用户名" prop="username">
                    <el-input placeholder="用户名" v-model="form.username"></el-input>
                </el-form-item>
            </div>
            <div class="password">
                <el-form-item label="密码" prop="password">
                    <el-input placeholder="密码" v-model="form.password"></el-input>
                </el-form-item>
            </div>
            <div class="identifyPassword">
                <el-form-item label="确认新密码" prop="identifyPassword">
                    <el-input placeholder="确认新密码" v-model="form.identifyPassword"></el-input>
                </el-form-item>
            </div>
            <div class="phoneNumber">
                <el-form-item label="请输入您的电话号码 " prop="phone">
                    <el-input placeholder="请输入您的电话号码 " v-model="form.phone"></el-input>
                </el-form-item>
            </div>
            <div class="verify">
                <div class="yourCaptcha">输入验证码</div>
                <div class="getCaptcha">获取验证码</div>
            </div>
            <div class="registerButton">
                <el-form-item>
                    <el-button type="primary" @click="onSubmit">
                        Reset
                    </el-button>
                </el-form-item>
            </div>
        </el-form>
    </div>

</template>
<script setup>
import { reactive, ref } from "vue";
const form = ref({
    username: '',
    password: '',
    identifyPassword: '',
    phone: ''
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
            trigger: blur
        }
    ],
    identifyPassword: [
        {
            required: true,
            message: '请输入确认密码',
            trigger: blur
        }
    ],
    phone: [
        {
            required: true,
            message: '请输入电话号码',
            trigger: 'blur'
        }
    ]
})
const onSubmit = async () => {
    await formRef.value?.validate().catch((err) => {
        ElMessage.error("表单校验失败")
        throw err
    })
}
</script>
<style lang="less">
.loginContainer {
    width: 350px;
    height: 420px;
    background-color: #fff;

    .username {
        width: 350px;
        height: 60px;
        background-color: red;
    }

    .password {
        width: 350px;
        height: 60px;
        background-color: pink;
    }

    .identifyPassword {
        width: 350px;
        height: 60px;
        background-color: goldenrod;
    }

    .phoneNumber {
        width: 350px;
        height: 60px;
        background-color: skyblue;
    }

    .verify {
        width: 350px;
        height: 50px;
        display: flex;
        background-color: yellow;

        .yourCaptcha {
            width: 180px;
            background-color: red;
            margin-right: 20px;
        }

        .getCaptcha {
            width: 160px;
            background-color: blue;
        }
    }



    .loginByPhone {
        width: 150px;
    }

    .forgetPassword {
        width: 150px;
    }

    .registerButton {
        width: 150px;
        height: 50px;
        background-color: yellowgreen;
        font-size: 20px;
    }
}
</style>