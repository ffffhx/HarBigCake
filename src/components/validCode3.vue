
<template>
    <div>
      <drag-verify-rotate
        ref="sss"
        :imgsrc="imgsrc"
        :isPassing.sync="isPassing"
        text="请按住滑块拖动"
        successText="验证通过"
        handlerIcon="el-icon-d-arrow-right"
        successIcon="el-icon-circle-check"
        @refresh="reimg"
        @passcallback="pass"
        @passfail="passfail"
      >
      </drag-verify-rotate>
    </div>
  </template>
  
  <script>
  import dragVerifyRotate from "vue-drag-verify-img-rotate";
  export default {
    data() {
      return {
        //验证状态，是否通过
        isPassing: false,
        value: "",
        // 图片1:1
        imgsrc:
          "https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fc-ssl.duitang.com%2Fuploads%2Fitem%2F202005%2F02%2F20200502005417_fh4P4.thumb.1000_0.jpeg&refer=http%3A%2F%2Fc-ssl.duitang.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=auto?sec=1665907837&t=4cc1cea78e3271d2ef86d8ad6d4481c3",
      };
    },
    components: {
      dragVerifyRotate,
    },
    methods: {
      //刷新
      reimg() {
        console(1);
      },
      //通过验证
      pass() {
        this.$message({
          message: "验证通过了",
          type: "success",
        });
      },
      //验证失败
      passfail() {
        this.$message.error("验证失败了");
      },
      //   reset() {
      //     this.isPassing = false;
      //     this.$refs.dragVerify.reset()
      //   },
    },
  };
  </script>
  <style>
  .verifybox {
    display: flex;
  }
  </style>
  
  