<template>
  <div id="introduce">
  <el-container>
    <bar></bar>
    <el-main class="main">
      <el-carousel :interval="5000" indicator-position="none" style="margin-top:20px" type="card" arrow="always" >
        <el-carousel-item v-for="(img,index) in imgList" :key="index" >
          <el-image :src="img.url" style="height: 400px;width:700px; object-fit: cover"></el-image>
        </el-carousel-item>
      </el-carousel>

      <div class="intro">
        <p class=" p-1 wow fadeInDown"  data-wow-delay="0.5s" data-wow-offset="1" style="color:#17a2b8;">项目简介</p><br>
        <p class="p-2 wow fadeInUp" data-wow-delay="1.5s" data-wow-offset="1">-小济智能家居系统简介-</p>
        <p class="p-3 wow fadeInDown" data-wow-delay="1s" data-wow-offset="1">一、项目简介小济智能(xiaoj-smart)]是一套智能家居系统，可用于家庭使用，快速搭建自己的智能家居系统。硬件工程师可以把自己的设备集成到系统；软件工程师可以使用项目中的设备熟悉软硬件交互。演示视频 >>服务端使用spring boot、数据库mysql和redis、前端vue、移动端android、硬件端ESP-IDF</p>
        <a class="a-1 wow fadeInDown" data-wow-delay="1.5s" data-wow-offset="1" href="https://gitee.com/xiao-ji-smart-home">查看更多</a>
      </div>
      <div class="doc" >
        <p class=" p-1 wow fadeInDown"  data-wow-delay="0.5s" data-wow-offset="1" style="color:#ffc107;">在线体验</p><br>
        <p class="p-2 wow fadeInUp" data-wow-delay="1.5s" data-wow-offset="1">-在线体验-</p>
        <p class="p-3 wow fadeInDown" data-wow-delay="1s" data-wow-offset="1">小济智能家居系统支持PC、微信小程序以及APP使用</p>
        <a class="a-1 wow fadeInDown" data-wow-delay="1.5s" data-wow-offset="1" href="https://gitee.com/xiao-ji-smart-home">查看说明</a>
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
  name: "introduce",
  components: {
    bar,
    foot
  },
  data() {
    return {
      url: "assets/login-background.jpg",
      imgList: [
        {
          url: require('@/image/k1.jpg'), //url: '../assets/lake.jpg',
        },
        {
          url: require('@/image/k2.jpg') //url: '../assets/build.jpg'
        },
        {
          url: require('@/image/k3.jpg') //url: '../assets/build.jpg'
        }
      ]
    }
  },
  mounted(){
    new  this.$wow.WOW().init()
  },
}
</script>

<style scoped>
.head{
  position: fixed;
  top: 0;
  right: 0;
  left: 0;
  z-index: 1000;
  background-color: #ffffff;
  line-height: 80px;
  height: 80px;
  white-space: nowrap;
  padding: 0;
  margin: 0 auto;
}
.logo{
  height: 35px;
  vertical-align:middle;
  z-index: 1600;
}
.el-link{
  padding-right: 1.2rem;
  padding-left: 1.2rem;
  font-size: 14px;
}
.el-divider--horizontal {
  display: block;
  height: 1px;
  width: 100%;
  margin: 0 0;
}
.main {
  background-color: #ffffff;
  color: #333;
  text-align: center;
  margin-top: 80px;
  padding: 0px;
}
.el-carousel__item h3 {
  color: #475669;
  font-size: 18px;
  opacity: 0.75;
  line-height: 400px;
  margin: 0;
}
.el-carousel__container {
  height: 400px;
}
.el-carousel-item {
  height:400px;
}
.el-carousel__arrow {
  position: center;
  top:65%;
  font-size: 30px;
}
.intro{
  padding-left: 200px;
  padding-right: 200px;
  padding-bottom: 3rem;
  padding-top: 3rem;
  background-color: #f8f9fa
}
.doc{
  padding-left: 200px;
  padding-right: 200px;
  padding-bottom: 3rem;
  padding-top: 3rem;
  background-color: #ffffff
}
.p-1{
  font-size:30px;
  line-height: 2;
  position:relative;
  margin:0;
}
.p-2{
  position:relative;
  margin:0;
  top:-20px;
}
.p-3{
  line-height: 2;
  text-indent: 30px;
  position:relative;
  text-align: left;
  margin:0;
}
.a-1{
  line-height: 2;
  position:relative;
  margin:0;
  color:#333333;
  text-decoration:none;
}
a:hover {color:#17a2b8;}
@keyframes fadeInDown {
  0%   { opacity:0;top:-50px;}
  100% { opacity:1;top:0;}
}
@keyframes fadeInUp
{
  0%   { opacity:0;top:20px;}
  100% { opacity:1;top:-20px;}
}
</style>
