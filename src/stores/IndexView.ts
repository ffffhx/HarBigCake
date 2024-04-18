import { ref, markRaw } from "vue";
import { defineStore } from "pinia";

// localStorage.setItem("data", [0,"Login"].toString());
export const useIndexView = defineStore("IndexView", () => {
  // 使用 markRaw 标记为原始对象
  // const nowpic = ref(0);
  // let Nowpage = ref("Login");
  let data = ref([0, "Login"])
  // 加载数据从 localStorage
  function loadFromLocalStorage() {
    const saveddata = localStorage.getItem("data");
    if (saveddata) {
      console.log(saveddata);
      
      data.value = saveddata.split(','); // 将字符串解析成数组
      console.log("data loaded from localStorage", data.value);
    }
  }

  // 保存数据到 localStorage
  function saveToLocalStorage() {
    console.log("nowpic saved to localStorage", data.value);
    localStorage.setItem("data", data.value.toString()); // 将数字转换为字符串
  }

  // 初始化时加载和保存数据
  loadFromLocalStorage();

  return {
    data,
    // 提供方法来更新和保存 nowpic 的值
    updateNowpic: function(newValue: number) {
      data.value[0] = newValue;
      console.log("nowpic changed in store", data.value[0]);
      saveToLocalStorage();
    },
    UpdateLogin: function(newValue: string) {
      data.value[1] = newValue;
      saveToLocalStorage();
    }
  };
});
