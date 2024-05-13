/*
 * @Author: ffffhx 17862926305@163.com
 * @Date: 2024-05-08 17:05:54
 * @LastEditors: ffffhx 17862926305@163.com
 * @LastEditTime: 2024-05-08 17:29:30
 * @FilePath: \HarBigCake\tailwind.config.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
// export default {
//   content: ["./src/**/*.{html,js}"],
//   theme: {
//     extend: {},
//   },
//   plugins: [],
// }

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,vue,html,css,less}",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}