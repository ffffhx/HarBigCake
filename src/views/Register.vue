<template>
    <div class="loginContainer">
        <el-form :model="form" :rules="rules" ref="formRef"
        :size="large">
            <div class="username">
                <el-form-item prop="username" label="用户名" >
                    <el-input placeholder="请输入用户名" v-model="form.username"></el-input>
                </el-form-item>
            </div>
            <div class="password">
                <el-form-item prop="password" label="密码">
                    <el-input placeholder="请输入密码" v-model="form.password"></el-input>
                </el-form-item>
            </div>
            <div class="phoneNumber">
                <el-form-item prop="phone" label="电话号码">
                    <el-input placeholder="请输入您的电话号码" v-model="form.phone"></el-input>
                </el-form-item>
            </div>


            <div class="verify">
                <div class="yourCaptcha"><el-form-item prop="validCode" label="验证码">
                        <el-input placeholder="请输入验证码" v-model="form.validCode"></el-input>
                    </el-form-item></div>
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
import { reactive, ref } from 'vue'
import type { FormRules } from 'element-plus'
import { ElMessage } from 'element-plus';
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
    await formRef.value?.validate().catch((err) => {
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
        // background-color: yellowgreen;
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