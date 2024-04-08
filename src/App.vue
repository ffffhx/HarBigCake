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
  <div class="background">
    <div class="container">
      <div class="containerRight">
        <div class="navHeader">
          <p class="logintitle" @click="pushToLogin">账号登录</p>
          <p class="logintitle" @click="pushToRegister">注册</p>
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
  </div>



</template>

<style scoped lang="less">

</style>
