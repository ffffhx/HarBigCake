/*
 * @Author: ffffhx 17862926305@163.com
 * @Date: 2024-04-19 12:56:09
 * @LastEditors: ffffhx 17862926305@163.com
 * @LastEditTime: 2024-05-13 19:07:00
 * @FilePath: \HarBigCake\src\stores\IndexView.ts
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import { ref, markRaw } from "vue";
import { defineStore } from "pinia";

// localStorage.setItem("data", [0,"Login"].toString());
export const useIndexView = defineStore("IndexView", () => {
  let isLoggedIn = ref(false);
  let data = ref([4, "Login"])
  // 加载数据从 localStorage
  function loadFromLocalStorage() {
    const saveddata = localStorage.getItem("data");
    if (saveddata) {
      data.value = saveddata.split(','); // 将字符串解析成数组
    }
  }

  // 保存数据到 localStorage
  function saveToLocalStorage() {
    localStorage.setItem("data", data.value.toString()); // 将数字转换为字符串
  }

  // 初始化时加载和保存数据
  loadFromLocalStorage();

  return {
    data,
    // 提供方法来更新和保存 nowpic 的值
    updateNowpic: function(newValue: number) {
      data.value[0] = newValue;
      // console.log("nowpic changed in store", data.value[0]);
      saveToLocalStorage();
    },
    UpdateLogin: function(newValue: string) {
      data.value[1] = newValue;
      saveToLocalStorage();
    },
    isLoggedIn
  };
});
