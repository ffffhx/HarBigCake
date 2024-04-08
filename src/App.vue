<script setup lang="ts">
import { RouterLink, RouterView, useRouter } from 'vue-router'
import { useDark, useToggle, useColorMode } from '@vueuse/core'
const isDark = useDark();
const toggleDark = useToggle(isDark);
const router = useRouter();
function pushToLogin() {
  router.push('/login')
}
function pushToRegister() {
  router.push('/register')
}

</script>

<template>
  <div class="background">
    <div class="container">
      <div class="themeChange" @click="toggleDark()"><button>
        黑夜模式
      </button></div>
      <div class="name">"哈大饼"前端控制台 </div>
      <div class="service">
        <div class="Bug">Bug反馈</div>
        <div class="opinion">改进意见</div>
        <div class="clientService">人工客服</div>
      </div>
      <div class="containerRight">
        <div class="navHeader">
          <p class="logintitle" @click="pushToLogin">账号登录</p>
          <p class="logintitle" @click="pushToRegister">注册</p>
        </div>
        <div class="routerMain">
          <RouterView></RouterView>
        </div>

        <div class="navFooter">

        </div>
      </div>
    </div>
  </div>



</template>

<style scoped lang="less">

</style>
