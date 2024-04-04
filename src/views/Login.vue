<template>
    <div class="loginContainer">
        <div class="username">用户名</div>
        <div class="password">密码</div>
        <div class="verify">
            <div class="yourCaptcha">输入验证码</div>
            <div class="AFCK">AFCK</div>
            <div class="getCaptcha">获取验证码</div>
        </div>
        <div class="other">

        </div>
        <div class="loginButton">
            登录
        </div>
    </div>

</template>
<script setup>

</script>
<style lang="less">
    .loginContainer{
        width: 350px;
        height: 420px;
        background-color: #fff;
        .username{
            width: 350px;
            height: 60px;
            background-color: red;
        }
        .password{
            width: 350px;
            height: 60px;
            background-color: pink;
        }
        .verify{
            width: 350px;
            height: 50px;
            display: flex;
            background-color: yellow;
            .yourCaptcha{
                width: 120px;
                background-color: red;
                margin-right: 20px;
            }
            .AFCK{
                width: 80px;
                background-color: gray;
                margin-right: 20px;

            }
            .getCaptcha{
                width: 100px;
                background-color: blue;
            }
        }
        .other{
            width: 350px;
            height: 20px;
            display: flex;
            background-color: green;
            .loginByPhone{
                width: 150px;
            }
            .forgetPassword{
                width: 150px;
            }
        }
        .loginButton{
            width: 150px;
            height: 50px;
            background-color: yellowgreen;
            font-size: 20px;
        }
    }
</style>