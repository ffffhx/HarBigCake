<template>
  <div class="homeContainer">
    <div class="homeLeft">
      <div @click="pushToCommodity">哈大饼管理平台</div>
      <div class="nav">
        <ul class="ulone">
          <li>
            <router-link to="/main">首页</router-link>
          </li>
          <li><router-link to="/material">物料管理</router-link></li>
          <li><router-link to="/commodity">商品管理</router-link></li>
          <li><router-link to="/orders">订单管理</router-link></li>
          <li><router-link to="/employee">员工管理</router-link></li>
          <li><router-link to="/finance">财务管理</router-link></li>
        </ul>
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
</script>
<style>

template{
  display: flex;
  margin: 0;
  padding: 0;
    width: 100vw;
  height: 100vh;
}

.homeContainer {
  margin: 0;
  padding: 0;
  /* width: 100vw;
  height: 100vh; */
  background-color: gray;
  display: flex ;
  flex-direction: row;
  justify-content: flex-start;
  align-items: flex-start;
  border-bottom: 1px solid #eee;
  
}

.homeLeft {
  justify-content: center;
  align-items: center;
  width:  15%;
  margin-right: 20px;
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
}

.nav .ulone li {
  /* margin-bottom: 20px; */
  background-color: rgb(135, 235, 165);
  width: 200px;
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
.homeRight{
  /* display: flex; */
  background-color: pink;
  width: 85%;
}
</style>