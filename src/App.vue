<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
import { useDark, useToggle, useColorMode } from '@vueuse/core'

const isDark = useDark() //true or false
const colorMode = useColorMode({
  modes: {
    dim: 'dim',
    cafe: 'cafe'
  },
});//'light' or 'dark'
const toggleDark = useToggle(isDark)

</script>

<template>
  {{ isDark }}
  <br>
  <button @click="toggleDark()">Toggle Daek Mode</button>
  <br>
  {{ colorMode }}
  <button @click="colorMode = 'dark'">Dark Mode</button>
  <button @click="colorMode = 'light'">light Mode</button>
  <button @click="colorMode = 'dim'">Dim Mode</button>
  <button @click="colorMode = 'cafe'">cafe Mode</button>
  <br>
  <RouterLink to="/">Home</RouterLink> |
  <RouterLink to="/about">About</RouterLink>
  <RouterView />
  <p>1515656</p>
  <p>8447845621</p>
  <p>527456254</p>
</template>

<style scoped lang="less">

.dark {
  background: gray;
  color: pink
}

.dim {
  background: aqua;
}


</style>
