<template>
  <div id="usetool">
  <bar></bar>
  <el-container>
    <el-main class="main">
      <div class="i">
        <p style="text-align: left;padding-top:50px;margin-top: 0;margin-bottom: 10px; margin-left: 200px;color:white;font-size:30px; ">项目简介</p>
        <p style="text-align: left;padding-top:0;margin-top: 0; margin-left: 200px;color:white;font-size:18px;">项目简介</p>
      </div>
      <div class="intro">
        <p class=" p-1 wow swing"  data-wow-delay="0.5s" data-wow-offset="1" style="color:#17a2b8;">项目简介</p><br>
        <p class="p-2 wow flipInY" data-wow-delay="1.5s" data-wow-offset="1">-小济智能家居系统简介-</p>
        <p class="p-3 wow fadeInLeft" data-wow-delay="1s" data-wow-offset="1">一、项目简介小济智能(xiaoj-smart)]是一套智能家居系统，可用于快速搭建自己的智能家居系统。硬件工程师可以把自己的设备集成到系统；软件工程师可以使用项目中的设备熟悉软硬件交互。演示视频 >>服务端使用spring boot、数据库mysql和redis、前端vue、移动端android、硬件端ESP-IDF</p>
      </div>
    </el-main>
    <el-footer>
      <foot></foot>
    </el-footer>
  </el-container>
  </div>
</template>

<script>
import bar from "./bar.vue"
import foot from "./foot.vue"
export default {
  name: "usetool",
  components: {
    bar,foot
  },
  mounted(){
    new  this.$wow.WOW().init()
  },
}
</script>

<style scoped>
.main {
  background-color: #ffffff;
  color: #333;
  text-align: center;
  margin-top: 80px;
  padding: 0px;
}
.intro{
  padding-left: 200px;
  padding-right: 200px;
  padding-bottom: 3rem;
  padding-top: 3rem;
  background-color: #f8f9fa
}
.i{
  width: 100%;
  height:160px;
  background-image:url("../image/bk.png");
  background-repeat:no-repeat;
  background-size:100% 100%;

}
</style>
