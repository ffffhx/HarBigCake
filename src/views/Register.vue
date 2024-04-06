<template>
    <div class="loginContainer">
        <el-form :model="form">
            <!-- <div class="username">
                <el-item-form>
                    <el-input placeholder="请输入用户名"></el-input>
                </el-item-form>
            </div> -->
            <div class="password">
                <el-item-form>
                    <el-input placeholder="请输入密码" v-model="form.password"></el-input>
                </el-item-form>
            </div>
            <div class="phoneNumber">
                <el-item-form rules="rules" label="电话号码" prop="phone" :model-value="phone" :model="phone">
                    <el-input placeholder="请输入您的电话号码"></el-input>
                </el-item-form>
            </div>
            <div class="verify">
                <div class="yourCaptcha">输入验证码</div>
                <div class="getCaptcha">获取验证码</div>
            </div>
            <div class="registerButton">
                <el-form-item>
                    <el-button type="primary" @click="submitForm(ruleFormRef)">
                        Create
                    </el-button>
                </el-form-item>
            </div>
        </el-form>
    </div>

</template>
<script setup lang="ts">
import { reactive } from 'vue'
import type { FormRules } from 'element-plus'
const form = reactive({
    username: '',
    password: '111111',
    phone: '18201288771'
})
//登录时间处理
const onSubmit = () => {
    console.log('submit!')
    ElMessage.success('登录成功')
}
const rules = reactive<FormRules>({
    phone: [
        {
            required: true,
            message: '请输入电话号码',
            trigger: 'blur'
        },
        {
            pattern: /^1[3-9]\d{9}$/,
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