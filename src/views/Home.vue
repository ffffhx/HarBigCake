<!--
 * @Author: ffffhx 17862926305@163.com
 * @Date: 2024-04-19 12:56:09
 * @LastEditors: ffffhx 17862926305@163.com
 * @LastEditTime: 2024-04-28 10:38:07
 * @FilePath: \HarBigCake\src\views\Home.vue
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
-->
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