<template>
    <div class="loginContainer">
        <el-form :model="form" :rules="rules" ref="formRef">
            <div class="username">
                <el-item-form prop="username">
                    <el-input placeholder="请输入用户名" v-model="form.username"></el-input>
                </el-item-form>
            </div>
            <div class="password">
                <el-item-form prop="password">
                    <el-input placeholder="请输入密码" v-model="form.password"></el-input>
                </el-item-form>
            </div>
            <div class="phoneNumber">
                <el-item-form prop="phone">
                    <el-input placeholder="请输入您的电话号码" v-model="form.phone"></el-input>
                </el-item-form>
            </div>


            <div class="verify">
                <div class="yourCaptcha">输入验证码</div>
                <div class="getCaptcha">获取验证码</div>
            </div>
            <div class="registerButton">
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
import { reactive,ref } from 'vue'
import type { FormRules } from 'element-plus'
const form = reactive({
    username: '',
    password: '',
    phone: '',
})
const formRef = ref()
//登录事件处理
const onSubmit = () => {
formRef.value?.validate()
}
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
    ]
})
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