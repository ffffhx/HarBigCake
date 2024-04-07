<template>
    <div class="loginContainer">
        <el-form :model="form" :rules="rules" ref="formRef">
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
            <div class="verify">
                <div class="yourCaptcha">输入验证码</div>
                <div class="AFCK">AFCK</div>
                <div class="getCaptcha">获取验证码</div>
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
<script setup>
import { reactive,ref } from "vue";
import { ElMessage } from 'element-plus';
const formRef = ref()
//登录事件处理
const onSubmit = async () => {
    console.log(666);
    await formRef.value?.validate().catch((err) => {
        ElMessage.error("表单校验失败")
        throw err
    })
}
const form = reactive({
    username: '',
    password: '',
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
            message: '请输入电话号码',
            trigger: 'blur'
        },
        {
            pattern: /^1[3-9]\d{9}$/,//1开头，中间必须是3-9的数字，共10位
            message: '请输入正确的电话号码',
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