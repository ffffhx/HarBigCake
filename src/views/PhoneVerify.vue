<template>
    <div class="loginContainer">
        <el-form>
        <div class="phoneNumber">
            <el-form-item label="电话号码">
                <el-input placeholder="请输入您的电话号码"></el-input>
            </el-form-item>
        </div>
        <div class="verify">
            <div class="yourCaptcha">输入验证码</div>
            <div class="getCaptcha">获取验证码</div>
        </div>
        <div class="registerButton">
            登录
        </div>
    </el-form>
    </div>

</template>
<script setup>

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