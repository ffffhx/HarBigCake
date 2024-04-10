<script setup lang="ts">
import { RouterLink, RouterView, useRouter } from 'vue-router'
import { onMounted,ref } from 'vue';
// import {RGBaster} from '@/assets/rgbaster.js'
import '@/assets/rgbaster.js'
// RGBaster.colors('@/bgcImg/211515/95577715_p0.jpg', {
//   paletteSize: 30, // 调色板大小
//   exclude: [ 'rgb(255,255,255)' ],  // 不包括白色
//   success: function(payload){
//     // 包含一些颜色信息(payload)的回调
//     console.log(payload);
    
//   }
// })

const containerRight = ref<HTMLDivElement | null>(null);
const routerMain = ref<HTMLDivElement | null>(null);
onMounted(() => {
// console.log(themeChange.value);
console.log(containerRight.value);
console.log(routerMain.value);
})

//这个属于是在更新之后需要执行的函数
function toggleDark() {
//themeChange.value?.classList.toggle('darkMode');
console.log('successfulTest');
containerRight.value?.classList.toggle('darkMode');
routerMain.value?.classList.toggle('darkMode');
//console.log(777);
}


const router = useRouter();
function pushToLogin() {
  router.push('/login')
}
function pushToRegister() {
  router.push('/register')
}
// function changeImgNext() {
  
// }
// function changeImgPre() {
  
// }
</script>

<template>
  <div class="background">
    <div class="container">
      <div class="themeChange" @click="toggleDark" ref="themeChange">
        <button>
          黑夜模式
        </button>
      </div>
      <!-- <div class="changeImgNext">
        >
      </div>
      <div class="changeImgPre">
        <
      </div> -->
      <div class="name"><p style="font-family:peiqin" >哈大饼前端控制台</p></div>
      <div class="service">
        <div class="Bug"><a href="#">BUG反馈</a></div>
        <div class="opinion"><a href="#">改进意见</a></div>
        <div class="clientService"><a href="">人工客服</a></div>
      </div>
      <div class="containerRight" ref="containerRight">
        <div class="navHeader">
          <p class="logintitle" @click="pushToLogin">账号登录</p>
          <p class="logintitle" @click="pushToRegister">注册</p>
        </div>
        <div class="routerMain" ref="routerMain">
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
