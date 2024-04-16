import { ref, markRaw } from "vue";
import { defineStore } from "pinia";

export const useIndexView = defineStore("IndexView", () => {
  // 使用 markRaw 标记为原始对象
  const nowpic = ref(0);

  // 加载数据从 localStorage
  function loadFromLocalStorage() {
    const savedNowpic = localStorage.getItem("nowpic");
    if (savedNowpic) {
      console.log("nowpic loaded from localStorage", savedNowpic);
      nowpic.value = parseInt(savedNowpic, 10); // 将字符串转换为数字
    }
  }

  // 保存数据到 localStorage
  function saveToLocalStorage() {
    console.log("nowpic saved to localStorage", nowpic.value);
    localStorage.setItem("nowpic", nowpic.value.toString()); // 将数字转换为字符串
  }

  // 初始化时加载和保存数据
  loadFromLocalStorage();

  return {
    nowpic,
    // 提供方法来更新和保存 nowpic 的值
    updateNowpic: function(newValue: number) {
      nowpic.value = newValue;
      console.log("nowpic changed in store", nowpic.value);
      saveToLocalStorage();
    },
  };
});
