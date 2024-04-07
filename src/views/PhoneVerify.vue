<template>
    <div class="loginContainer">
        <el-form :model="form" :rules="rules" ref="formRef">
        <div class="phoneNumber">
            <el-form-item prop="phone" label="电话号码">
                    <el-input placeholder="请输入您的电话号码" v-model="form.phone"></el-input>
                </el-form-item>
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
<script setup>
import {reactive,ref} from 'vue'
import { ElMessage } from 'element-plus';
const formRef = ref()
const form = reactive({
    username: '',
    password: '',
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
})
const onSubmit = async () => {
    console.log(666);
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


    .phoneNumber{
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