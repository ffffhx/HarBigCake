<template>
    <div class="loginContainer">
        <el-form :model="form" :rules="rules" ref="formRef">
            <div class="username">
                <el-form-item prop="username" label="用户名">
                    <el-input placeholder="请输入用户名" v-model="form.username" size="large" prefix-icon="el-icon-user"></el-input>
                </el-form-item>
            </div>
            <div class="password">
                <el-form-item prop="password" label="密码">
                    <el-input placeholder="请输入密码" v-model="form.password" size="large" prefix-icon="el-icon-lock"></el-input>
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
                <div class="getCaptcha"><validCode></validCode></div>
            </div>
            <div class="other">

            </div>
            <div class="loginButton">
                <el-form-item>
                    <el-button type="primary" @click="onSubmit" primary>
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
import validCode from '../components/validCode.vue'
const formRef = ref()
//登录事件处理
const login = () => {
    ElMessage.success("登录成功")
}
const onSubmit = async () => {
    await formRef.value?.validate().catch((err) => {
        ElMessage.error("表单校验失败")
        throw err
    })
    ElMessage.success("登录成功")

}
const form = reactive({
    username: '17862926305',
    password: '12345678',
    validCode:''
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

    .verify {
        width: 350px;
        height: 50px;
        display: flex;
        background-color: yellow;

        .yourCaptcha {
            width: 120px;
            background-color: red;
            margin-right: 20px;
        }

        .AFCK {
            width: 80px;
            background-color: gray;
            margin-right: 20px;

        }

        .getCaptcha {
            width: 100px;
            background-color: blue;
        }
    }

    .other {
        width: 350px;
        height: 20px;
        display: flex;
        background-color: green;

        .loginByPhone {
            width: 150px;
        }

        .forgetPassword {
            width: 150px;
        }
    }

    .loginButton {
        width: 150px;
        height: 50px;
        background-color: yellowgreen;
        font-size: 20px;
    }
}
</style>