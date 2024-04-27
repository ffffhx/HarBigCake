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
import switchele from '@/components/el-components/switchele.vue';
import threejs from '@/components//ThreeJsDemo/threejs.vue';
let show = ref(true);
const ulone = ref(null);
function changeShow() {
  show.value = !show.value;
}

</script>
<style lang="less" scoped>



</style>