<script setup lang="ts">
import { RouterLink, RouterView, useRouter } from 'vue-router'
import { onMounted, onUpdated, ref } from 'vue';
// import {RGBaster} from '@/assets/rgbaster.js'
// import '@/assets/rgbaster.js'
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
const changeImgNext2 = ref<HTMLDivElement | null>(null)
const service = ref<HTMLDivElement | null>(null)
const changeImgPre2 = ref<HTMLDivElement | null>(null)
// onMounted(() => {
// console.log(themeChange.value);
// // console.log(containerRight.value);
// console.log(routerMain.value);
// console.log(background.value);
// background.value?.style.backgroundImage = `url(/bgcImg/${images[0]})`;




// const autoPlay = document.querySelector('.autoPlay');
// autoPlay?.addEventListener('mouseover', () => {
//   const timer = setInterval(changeImgNext, 2000);
//   console.log(666);
// })
// })



//这个属于是在更新之后需要执行的函数
function toggleDark() {
  //themeChange.value?.classList.toggle('darkMode');
  console.log('successfulTest');
  containerRight.value?.classList.toggle('darkMode');
  changeImgNext2.value?.classList.toggle('darkMode');
  service.value?.classList.toggle('darkMode');
  changeImgPre2.value?.classList.toggle('darkMode');
  // routerMain.value?.classList.toggle('darkMode');
  //console.log(777);
}


const router = useRouter();
function pushToLogin() {
  router.push('/login')
}
function pushToRegister() {
  router.push('/register')
}
const images = ref<string[]>([
  './public/0.jpg',
  './public/1.png',
  './public/2.png',
  './public/3.png',
  './public/4.png',
  './public/5.jpg',
  './public/6.jpg',
  './public/7.jpg',
  './public/8.jpg',
  './public/9.jpg',
  './public/10.jpg',
  './public/11.jpg',
  './public/12.jpg',
  './public/13.jpg',
  './public/14.jpg',
  './public/15.jpg',
  './public/16.jpg',
  './public/17.jpg',
  './public/18.jpg',
  './public/19.jpg',
  './public/20.jpg',
  './public/21.jpg',
  './public/22.jpg',
  './public/23.jpg',
  './public/24.jpg',
  './public/25.jpg',
  './public/26.jpg',
  './public/27.jpg',
  './public/28.jpg',
  './public/29.jpg',
  './public/30.jpg',
  './public/31.jpg',
  './public/32.jpg',
  './public/33.jpg',
  './public/34.jpg',
  './public/35.jpg',
  './public/36.jpg',
  './public/37.jpg',
  './public/38.jpg',
  './public/39.jpg',
  './public/40.jpg',
  './public/41.jpg',
  './public/42.jpg',
  './public/43.jpg',
  './public/44.jpg',
  './public/45.png',
  './public/46.png',
  './public/47.png',
  './public/48.png',
  './public/49.png',
  './public/50.png',
  './public/51.png',
  './public/52.png',
  './public/53.png',
  './public/54.png',
  './public/55.png',
  './public/56.png',
  './public/57.png',
  './public/58.png',
  './public/59.png',
  './public/60.png',
  './public/61.png',
  './public/62.png',
  './public/63.png',
  './public/64.png',
  './public/65.png',
  './public/66.png',
  './public/67.png',
  './public/68.png',
  './public/69.png',
  './public/70.png',
  './public/71.png',
  './public/72.png',
  './public/73.png',
  './public/74.png',
  './public/75.png',
  './public/76.png',
  './public/77.png',
  './public/78.png',
  './public/79.png',
  './public/80.png',


]);
//.value  数据要都是响应式数据才可以
let i = ref(0);
function changeImgNext() {
  i.value++;
  if (i.value == images.value.length) {
    i.value = 0
  }
}
function changeImgPre() {
  if (i.value == 0) {
    i.value = images.value.length - 1
  }
  i.value--;
  console.log('pre');
}
const autoPlay = ref(null)
const value1 = ref(false)
const value2 = ref(false)
// const timer = ref(number)
let timerId: ReturnType<typeof setInterval> | null;

function autoPlayFunction() {
  if (value1.value) {
    console.log(value1.value);
    
    // if (timerId) {
    //   console.log(timerId);
    //   console.log(666);
      
    //   // 如果已经存在定时器，说明之前是开启了自动播放，此时不需要再创建新的定时器
    //   return;
    // }
    timerId = setInterval(changeImgNext, 3000);
    console.log('开始自动播放');
  } else {
    // 如果关闭了自动播放，清除之前的定时器
    if (timerId) {
      clearInterval(timerId);
      timerId = null;
    }
    console.log('取消自动播放');
  }
}
// const timer = setInterval(changeImgNext, 2000);

// onUpdated(() => {
//   autoPlay.addEventListenr('click', () => {
//   console.log(6);

// })
// })

const background = ref<HTMLDivElement | null>(null);
</script>

<template>
  <div class="background" ref="background" :style="{ backgroundImage: `url(${images[i]})` }">
    <div class="container">
      <div class="themeChange" @click="toggleDark" ref="themeChange">
        <el-switch v-model="value2" class="ml-2" style="--el-switch-on-color: black; --el-switch-off-color: #fff"
          active-text="暗黑模式" inactive-text="亮白模式" />
      </div>
      <div class="changeImgNext" @click="changeImgNext()" ref="changeImgNext2">
        >
      </div>
      <div class="changeImgPre" @click="changeImgPre()" ref="changeImgPre2">
        < </div>
          <div class="autoPlay" ref="autoPlay" @click="autoPlayFunction()">自动播放 <el-switch v-model="value1" /></div>
          <div class="name">
            <p>哈大饼前端控制台</p>
          </div>
          <div class="service" ref="service">
            <div class="Bug"><a href="#">BUG反馈</a></div>
            <div class="opinion"><a href="#">改进意见</a></div>
            <div class="clientService"><a href="">人工客服</a></div>
          </div>
          <div class="containerRight" ref="containerRight" :style="{ backgroundImage: `url(${images[i]})` }">
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
.containerRight {
  display: flex;
  width: 400px;
  height: 488px;
  top: 50%;
  left: 50%;
  margin-top: -238px;
  margin-left: 160px;
  border-radius: inherit;
  text-align: left;
  position: absolute;
  color: var(--font-color, #000);
  // --background-image: url(""); /* 定义变量 */
  // background-image: var(--background-image); /* 使用变量 */
  transition: background-image 0.5s ease-in-out;
  flex-direction: column;
  flex-wrap: nowrap;
  justify-content: space-around;
  align-items: center;
}

.background {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  transition: background-image 0.5s ease-in-out;
  // :background-image: url(`${images[i]}`)
}
</style>
