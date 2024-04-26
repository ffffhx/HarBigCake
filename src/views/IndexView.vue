<script lang="ts" setup>
import { ref, provide, onMounted, watch } from 'vue'
import { storeToRefs } from 'pinia';
import { useIndexView } from '@/stores/IndexView';
import Login from '../views/nav/Login.vue';
import Register from '../views/nav/Register.vue';
import { RouterLink, RouterView, createRouter, createWebHistory, useRouter } from 'vue-router'
const router = useRouter();
// import FindPassword from '../views/nav/FindPassword.vue';
// import PhoneVerify from '../views/nav/PhoneVerify.vue';
const containerRight = ref<HTMLDivElement | null>(null);
const routerMain = ref<HTMLDivElement | null>(null);
const logintitle1 = ref<HTMLDivElement | null>(null);
const logintitle2 = ref<HTMLDivElement | null>(null);
const background = ref<HTMLDivElement | null>(null);
const images = ref<string[]>([
    //  一个'/'代表根目录，在这里就是HARBIGCAKE  ,./表示当前文件的上一级，../表示当前文件的上两级
    '/public/images/0.jpg', '/public/images/1.png', '/public/images/2.png', '/public/images/3.png',
    '/public/images/4.png', '/public/images/5.jpg', '/public/images/6.jpg', '/public/images/7.jpg', '/public/images/8.jpg', '/public/images/9.jpg', '/public/images/10.jpg', '/public/images/11.jpg', '/public/images/12.jpg', '/public/images/13.jpg', '/public/images/14.jpg', '/public/images/15.jpg', '/public/images/16.jpg', '/public/images/17.jpg', '/public/images/18.jpg', '/public/images/19.jpg', '/public/images/20.jpg', '/public/images/21.jpg', '/public/images/22.jpg', '/public/images/23.jpg', '/public/images/24.jpg', '/public/images/25.jpg',
    '/public/images/26.jpg', '/public/images/27.jpg', '/public/images/28.jpg', '/public/images/29.jpg', '/public/images/30.jpg', '/public/images/31.jpg',
    '/public/images/32.jpg', '/public/images/33.jpg', '/public/images/34.jpg', '/public/images/35.jpg',
    '/public/images/36.jpg', '/public/images/37.jpg', '/public/images/38.jpg', '/public/images/39.jpg', '/public/images/40.jpg', '/public/images/41.jpg', '/public/images/42.jpg', '/public/images/43.jpg', '/public/images/44.jpg', '/public/images/45.png', '/public/images/46.png',
    '/public/images/47.png', '/public/images/48.png', '/public/images/49.png', '/public/images/50.png', '/public/images/51.png', '/public/images/52.png', '/public/images/53.png', '/public/images/54.png', '/public/images/55.png', '/public/images/56.png', '/public/images/57.png', '/public/images/58.png', '/public/images/59.png', '/public/images/60.png', '/public/images/61.png',
    '/public/images/62.png', '/public/images/63.png', '/public/images/64.png', '/public/images/65.png', '/public/images/66.png', '/public/images/67.png', '/public/images/68.png', '/public/images/69.png', '/public/images/70.png', '/public/images/71.png', '/public/images/72.png', '/public/images/73.png', '/public/images/74.png', '/public/images/75.png', '/public/images/76.png', '/public/images/77.png', '/public/images/78.png', '/public/images/79.png', '/public/images/80.png',
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
    router.push('/Login');
    logintitle1AddClass();
}
function pushToRegister() {
    router.push('/Register');
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
            <div class="containerRight" ref="containerRight"
                :style="{ backgroundImage: `url(${images[Number(nowpic[0])]})` }">
                <div class="navHeader">
                    <p class="logintitle1" @click="pushToLogin" ref="logintitle1">账号登录</p>
                    <p class="logintitle2" @click="pushToRegister" ref="logintitle2">注册</p>
                </div>

                <div class="routerMain" ref="routerMain">
                <RouterView></RouterView>

                    <!-- <div v-if="nowpic[1] == 'Login'">
                        <Login />
                    </div>
                    <div v-else-if="nowpic[1] == 'Register'">
                        <Register />
                    </div> -->
                    <!-- <div v-else-if="nowpic[1] == 'PhoneVerify'">
                        <PhoneVerify />
                    </div>
                    <div v-else-if="nowpic[1] == 'FindPassword'">
                        <FindPassword />
                    </div> -->
                </div>
                <div class="navFooter">

                </div>
            </div>
        </div>
    </div>

</template>
<style scoped lang="less">
.containerRight {
    box-shadow: 10px 20px 40px rgba(0, 0, 0, 0.6);
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