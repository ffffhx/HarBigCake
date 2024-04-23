<template>
  <div class="homeContainer">
    <div class="homeLeft">
      <div @click="pushToCommodity" class="logo"> 哈大饼<br>管理平台</div>
      <div class="nav">
        <ul class="ulone">
          <li>
            <el-icon :size="25" color="black" class="is-loading">
              <Discount />
            </el-icon>
            <router-link to="/main" class="extend" v-show="show">首页</router-link>
          </li>
          <li>
            <el-icon :size="25" color="black" class="is-loading">
              <Collection />
            </el-icon>
            <router-link to="/material" v-show="show">物料管理</router-link>
          </li>
          <li>
            <el-icon :size="25" color="black" class="is-loading">
              <Collection />
            </el-icon><router-link to="/commodity" v-show="show">商品管理</router-link>
          </li>
          <li>
            <el-icon :size="25" color="black" class="is-loading">
              <Collection />
            </el-icon><router-link to="/orders" v-show="show">订单管理</router-link>
          </li>
          <li>
            <el-icon :size="25" color="black" class="is-loading">
              <Collection />
            </el-icon><router-link to="/employee" v-show="show">员工管理</router-link>
          </li>
          <li>
            <el-icon :size="25" color="black" class="is-loading">
              <Collection />
            </el-icon><router-link to="/finance" v-show="show">财务管理</router-link>
          </li>
        </ul>
          <switchele @click="changeShow"></switchele>
        
        <!-- <ul class="ultwo">
          <li><router-link to="/main">首页</router-link></li>
          <li><router-link to="/material">物料管理</router-link></li>
          <li><router-link to="/commodity">商品管理</router-link></li>
          <li><router-link to="/orders">订单管理</router-link></li>
          <li><router-link to="/employee">员工管理</router-link></li>
          <li><router-link to="/finance">财务管理</router-link></li>
        </ul> -->
      </div>
    </div>
    <div class="homeRight">
      <RouterView></RouterView>
    </div>
  </div>



</template>

<script setup>
import { getCurrentInstance, onMounted, ref } from 'vue';
import { RouterLink, RouterView, createRouter, createWebHistory, useRouter } from 'vue-router'
import switchele from '@/components/switchele.vue';

let show = ref(true);
const ulone = ref(null);
// console.log(ulone.value);
// onMounted(() => {
//   ulone.value?.addEventListener('click', () => {
//     show.value = true;
//   })
// })
function changeShow() {
  show.value = !show.value;
}

</script>
<style>
@font-face {
  font-family: '阿里妈妈刀隶体 Regular';
  src: url('iconfont/dlt.woff') format('truetype');
}


.logo {
  font-family: "阿里妈妈刀隶体 Regular";
  /* color: #eee; */
}

ul li {
  font-family: "阿里妈妈刀隶体 Regular";
  /* color: #eee; */
}

template {
  display: flex;
  margin: 0;
  padding: 0;
  width: 100vw;
  height: 100vh;
}

.homeContainer {
  margin: 0;
  padding: 0;
  border-radius: 20px;
  background-image: url('homeContainer.png');
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: flex-start;
  border-bottom: 1px solid #eee;
  height: 100%;
}

.homeLeft {
  background: rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(15px);
  border: 2px solid rgba(255, 255, 255, 0.1);
  box-shadow: 0 0 80px rgba(0, 0, 0, 0.25);
  justify-content: center;
  align-items: center;
  width: 15%;
  margin-right: 20px;
  height: 100vh;
}

.homeLeft div:first-child {
  font-size: 30px;
  font-weight: bold;
}

.nav {
  display: flex;
  height: 400px;
  flex-direction: column;
  align-items: flex-start;

}

.nav .ulone {
  list-style: none;
  padding: 0;
  animation: move 5s ease-in-out infinite;
}
@keyframes move {
  0% {
    transform: translateY(0);
  }
  50% {
    transform: translateY(-20px);
  }
  100% {
    transform: translateY(0);
  }
}

.nav .ulone li {
  /* margin-bottom: 20px; */
  /* background-color: rgb(135, 235, 165); */
  width: 150px;
  height: 60px;
  border-radius: 10%;
}

.nav .ulone li a {
  text-decoration: none;
  color: black;
  font-size: 30px;
}

.nav .ulone li a:hover {
  color: #66ccff;
}

.homeRight {
  display: flex;
  /* background-color: pink; */
  width: 90%;
}
</style>