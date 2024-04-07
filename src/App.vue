<script setup lang="ts">
import { RouterLink, RouterView, useRouter } from 'vue-router'
import { useDark, useToggle, useColorMode } from '@vueuse/core'
const router = useRouter();
function pushToLogin() {
  router.push('/login')
}
function pushToRegister() {
  router.push('/register')
}
function pushToPhoneVerify() {
  router.push('/phoneverify')
}
function pushToFindPassword() {
  router.push('/findpassword')
}
</script>

<template>
  <div class="container">
    <div class="containerRight">
      <div class="navHeader">
        <div class="login">
          <p @click="pushToLogin">登录</p>
        </div>
        <div class="register">
          <p @click="pushToRegister">注册</p>
        </div>
      </div>
      <div class="routerMain">
        <RouterView></RouterView>
      </div>
      <div class="navFooter">
        <div class="loginByPhone"><span @click="pushToPhoneVerify">手机验证登录</span></div>
        <div class="forgetPassword"><span @click='pushToFindPassword'>找回密码</span></div>
      </div>
    </div>
  </div>



</template>

<style scoped lang="less">
template {
  margin: 0;
  padding: 0;
  border: 0;
}

.container {
  background-color: yellow;
  height: 100vh;
  width: 100vw;

  .containerRight {
    width: 350px;
    height: 600px;
    background-color: red;

    .navHeader {
      display: flex;
      justify-content: space-between;
      height: 80px;
      background-color: blue;
      width: 350px;
      font-size: 30px
    }

    .routerMain {
      background-color: pink;
      height: 500px;
      width: 350px;
    }
    .navFooter {
      display: flex;
      justify-content: space-between;
      height: 80px;
      background-color: blue;
      width: 350px;
      font-size: 30px
    }

  }
}



.dark {
  background: gray;
  color: pink
}

.dim {
  background: aqua;
}
</style>
