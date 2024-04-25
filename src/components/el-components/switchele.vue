<!--
 * @Author: ffffhx 17862926305@163.com
 * @Date: 2024-04-23 11:35:59
 * @LastEditors: ffffhx 17862926305@163.com
 * @LastEditTime: 2024-04-25 10:53:02
 * @FilePath: \HarBigCake\src\components\el-components\switchele.vue
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
-->
<template>
    <el-switch
      v-model="value1"
      :active-action-icon="View"
      :inactive-action-icon="Hide"
    />
  </template>
  
  <script setup lang="ts">
  import { ref } from 'vue'
  import { Hide, View } from '@element-plus/icons-vue'
  
  const value1 = ref(true)
  </script>
  