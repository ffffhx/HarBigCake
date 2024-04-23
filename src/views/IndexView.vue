<script lang="ts" setup>
import { ref, provide, onMounted, watch } from 'vue'
import { storeToRefs } from 'pinia';
import { useIndexView } from '@/stores/IndexView';
import Login from '../views/Login.vue'
import Register from '../views/Register.vue'
import FindPassword from './FindPassword.vue';
import PhoneVerify from './PhoneVerify.vue';
const containerRight = ref<HTMLDivElement | null>(null);
const routerMain = ref<HTMLDivElement | null>(null);
const logintitle1 = ref<HTMLDivElement | null>(null);
const logintitle2 = ref<HTMLDivElement | null>(null);
const background = ref<HTMLDivElement | null>(null);
const images = ref<string[]>([
    './public/0.jpg', './public/1.png', './public/2.png', './public/3.png',
    './public/4.png', './public/5.jpg', './public/6.jpg', './public/7.jpg', './public/8.jpg', './public/9.jpg', './public/10.jpg', './public/11.jpg', './public/12.jpg', './public/13.jpg', './public/14.jpg', './public/15.jpg', './public/16.jpg', './public/17.jpg', './public/18.jpg', './public/19.jpg', './public/20.jpg', './public/21.jpg', './public/22.jpg', './public/23.jpg', './public/24.jpg', './public/25.jpg',
    './public/26.jpg', './public/27.jpg', './public/28.jpg', './public/29.jpg', './public/30.jpg', './public/31.jpg',
    './public/32.jpg', './public/33.jpg', './public/34.jpg', './public/35.jpg',
    './public/36.jpg', './public/37.jpg', './public/38.jpg', './public/39.jpg', './public/40.jpg', './public/41.jpg', './public/42.jpg', './public/43.jpg', './public/44.jpg', './public/45.png', './public/46.png',
    './public/47.png', './public/48.png', './public/49.png', './public/50.png', './public/51.png', './public/52.png', './public/53.png', './public/54.png', './public/55.png', './public/56.png', './public/57.png', './public/58.png', './public/59.png', './public/60.png', './public/61.png',
    './public/62.png', './public/63.png', './public/64.png', './public/65.png', './public/66.png', './public/67.png', './public/68.png', './public/69.png', './public/70.png', './public/71.png', './public/72.png', './public/73.png', './public/74.png', './public/75.png', './public/76.png', './public/77.png', './public/78.png', './public/79.png', './public/80.png',
]);
//.value  数据要都是响应式数据才可以
let nowpic = storeToRefs(useIndexView()).data;
const updateNowpic = useIndexView().updateNowpic;
const UpdateLogin = useIndexView().UpdateLogin;
// console.log(nowpic);

const value1 = ref(false);
const value2 = ref(false);
let timerId: ReturnType<typeof setInterval> | null;

function toggleDark() {
    console.log('successfulTest');
    background.value?.classList.toggle('darkMode');
    const containerRightValue = containerRight.value;
    if (containerRightValue) {
        console.log(666);
        const imgUrl = images.value[nowpic.value[0] as number];
        if (typeof imgUrl === 'string') {
            containerRightValue.style.backgroundImage = `url(${imgUrl})`;
        }
    }
}
function changeImgNext() {
    updateNowpic(Number(nowpic.value[0]) + 1);
    if (nowpic.value[0] == images.value.length) {
        updateNowpic(0)
    }
}
function changeImgPre() {
    if (nowpic.value[0] == 0) {
        updateNowpic(images.value.length - 1)
    }
    else updateNowpic(Number(nowpic.value[0]) - 1)
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
function pushToLogin() {
    UpdateLogin('Login');
    logintitle1AddClass();
}
function pushToRegister() {
    UpdateLogin('Register');
    logintitle2AddClass();
}
</script>

<template>
    <div class="background" ref="background" :style="{ backgroundImage: `url(${images[Number(nowpic[0])]})` }">
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
            <div class="containerRight" ref="containerRight" :style="{ backgroundImage: `url(${images[Number(nowpic[0])]})` }">
                <div class="navHeader">
                    <p class="logintitle1" @click="pushToLogin" ref="logintitle1">账号登录</p>
                    <p class="logintitle2" @click="pushToRegister" ref="logintitle2">注册</p>
                </div>
                <div class="routerMain" ref="routerMain">
                    <div v-if="nowpic[1] == 'Login'">
                        <Login />
                    </div>
                    <div v-else-if="nowpic[1] == 'Register'">
                        <Register />
                    </div>
                    <div v-else-if="nowpic[1] == 'PhoneVerify'">
                        <PhoneVerify />
                    </div>
                    <div v-else-if="nowpic[1] == 'FindPassword'">
                        <FindPassword />
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