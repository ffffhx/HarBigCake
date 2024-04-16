<script lang="ts" setup>
import { ref, provide, onMounted } from 'vue'
import Login from '../views/Login.vue'
import Register from '../views/Register.vue'
const containerRight = ref<HTMLDivElement | null>(null);
const routerMain = ref<HTMLDivElement | null>(null);
const logintitle1 = ref<HTMLDivElement | null>(null);
const logintitle2 = ref<HTMLDivElement | null>(null);
const background = ref<HTMLDivElement | null>(null);
const images = ref<string[]>([
    './0.jpg', './1.png', './2.png', './3.png',
    './4.png', './5.jpg', './6.jpg', './7.jpg', './8.jpg', './9.jpg', './10.jpg', './11.jpg', './12.jpg', './13.jpg', './14.jpg', './15.jpg', './16.jpg', './17.jpg', './18.jpg', './19.jpg', './20.jpg', './21.jpg', './22.jpg', './23.jpg', './24.jpg', './25.jpg',
    './26.jpg', './27.jpg', './28.jpg', './29.jpg', './30.jpg', './31.jpg',
    './32.jpg', './33.jpg', './34.jpg', './35.jpg',
    './36.jpg', './37.jpg', './38.jpg', './39.jpg', './40.jpg', './41.jpg', './42.jpg', './43.jpg', './44.jpg', './45.png', './46.png',
    './47.png', './48.png', './49.png', './50.png', './51.png', './52.png', './53.png', './54.png', './55.png', './56.png', './57.png', './58.png', './59.png', './60.png', './61.png',
    './62.png', './63.png', './64.png', './65.png', './66.png', './67.png', './68.png', './69.png', './70.png', './71.png', './72.png', './73.png', './74.png', './75.png', './76.png', './77.png', './78.png', './79.png', './80.png',
]);
//.value  数据要都是响应式数据才可以
let i = ref(0);
const value1 = ref(false);
const value2 = ref(false);
let timerId: ReturnType<typeof setInterval> | null;

function toggleDark() {
    console.log('successfulTest');
    background.value?.classList.toggle('darkMode');
    const containerRightValue = containerRight.value;
    if (containerRightValue) {
        console.log(666);
        containerRightValue.style.backgroundImage = `url(${images.value[i.value]})`;
    }
}
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
function autoPlayFunction() {
    if (value1.value) {
        console.log(value1.value);
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

function logintitle1AddClass() {
    logintitle1.value?.classList.add('loginTitleHover')
    logintitle2.value?.classList.remove('loginTitleHover')
}
const logintitle1DelClass = () => {
    if (logintitle1.value) {
        logintitle1.value.classList.remove('loginTitleHover')
    }
}
provide('logintitle1DelClass', logintitle1DelClass)

onMounted(() => {
    logintitle1.value?.classList.add('loginTitleHover')
})
function logintitle2AddClass() {
    logintitle2.value?.classList.add('loginTitleHover')
    logintitle1.value?.classList.remove('loginTitleHover')
}
let Nowpage = ref('Login');
function pushToLogin() {
    Nowpage.value = 'Login'
    logintitle1AddClass();
}
function pushToRegister() {
    Nowpage.value = 'Register'
    logintitle2AddClass();
}
</script>
// 如何通过组件名称引入组件？
<template>
    <div class="background" ref="background" :style="{ backgroundImage: `url(${images[i]})` }">
        <div class="container">
            <div class="changeButton"></div>
            <div class="themeChange" @click="toggleDark" ref="themeChange"><!-- 主题色切换 -->
                <el-switch v-model="value2" class="ml-2"
                    style="--el-switch-on-color: black; --el-switch-off-color: #fff" active-text="暗黑模式"
                    inactive-text="亮白模式" />
            </div>
            <div class="autoPlay" ref="autoPlay" @click="autoPlayFunction()">
                自动更换背景图片
                <el-switch v-model="value1" />
            </div>
            <div class="changeImgNext" @click="changeImgNext()" ref="changeImgNext2"> + </div>
            <div class="changeImgPre" @click="changeImgPre()" ref="changeImgPre2">
                - </div>
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
                    <p class="logintitle1" @click="pushToLogin" ref="logintitle1">账号登录</p>
                    <p class="logintitle2" @click="pushToRegister" ref="logintitle2">注册</p>
                </div>
                <div class="routerMain" ref="routerMain">
                    <div v-if="Nowpage == 'Login'">
                        <Login />
                    </div>
                    <div v-else-if="Nowpage == 'Register'">
                        <Register />
                    </div>
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
}
</style>