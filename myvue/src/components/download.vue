<template>
  <div id="introduce">
    <el-container>
      <bar></bar>
      <el-main class="main">
        <div class="i">
          <p style="text-align: left;padding-top:50px;margin-top: 0;margin-bottom: 10px; margin-left: 200px;color:white;font-size:30px;font-weight: bold ">在线体验</p>
          <p style="text-align: left;padding-top:0;margin-top: 0; margin-left: 200px;color:white;font-size:18px;">web&app</p>
        </div>
        <div class="intro">
          <p class="wow fadeInDown" data-wow-delay="0s" data-wow-offset="1" style="font-size: 28px;color: #32393a;font-weight: bold">小济后台管理系统</p>
          <p class="wow fadeInDown" data-wow-delay="0s" data-wow-offset="1" style=" text-align:left;font-size: 20px;color: #40485b;font-weight: bolder">一、链接地址</p>
          <div style="width: 100%;text-align: left"><el-link type="primary" :underline="false" style="font-size: 16px!important;">前往体验</el-link>
            <p style="margin-left: 20px">测试账号：wumei   密码：admin123</p>
          </div>
          <p class="wow fadeInDown" data-wow-delay="0.25s" data-wow-offset="1" style=" text-align:left;font-size: 20px;color: #40485b;font-weight: bolder">二、部分界面展示</p>
          <img class="wow fadeInUp" data-wow-delay="0.25s" data-wow-offset="1" src="../image/web/bk2.png" style="width: 48%">
          <img class="wow fadeInUp" data-wow-delay="0.5s" data-wow-offset="1" src="../image/web/bk6.png" style="width: 48%">
          <img class="wow fadeInUp" data-wow-delay="0.75s" data-wow-offset="1" src="../image/web/bk3.png" style="width: 48%">
          <img class="wow fadeInUp" data-wow-delay="1s" data-wow-offset="1" src="../image/web/bk1.png" style="width: 48%">
          <img class="wow fadeInUp" data-wow-delay="1.25s" data-wow-offset="1" src="../image/web/bk4.png" style="width: 48%">
          <img class="wow fadeInUp" data-wow-delay="1.5s" data-wow-offset="1" src="../image/web/bk5.png" style="width: 48%">
         </div>
        <div class="intro">
          <p class="wow fadeInDown" data-wow-delay="1s" data-wow-offset="1" style="font-size: 28px;color: #373f41;font-weight: bold">小济移动端App</p>
          <p class="wow fadeInDown" data-wow-delay="1s" data-wow-offset="1" style=" text-align:left;font-size: 20px;color: #40485b;font-weight: bolder">一、链接地址</p>
          <div style="width: 100%;text-align: left">
            <p style="margin-left: 20px">扫码下载APP安装,打开APP即可体验</p>
            <img src="../image/code.png" />
            <p style="margin-left: 20px">测试账号：wumei   密码：admin123</p>
          </div>
          <p class="wow fadeInDown" data-wow-delay="1s" data-wow-offset="1" style=" text-align:left;font-size: 20px;color: #40485b;font-weight: bolder">二、部分界面展示</p>
          <img class="wow fadeInUp" data-wow-delay="0.25s" data-wow-offset="1" src="../image/app/fd1.png" style="width: 24%;margin-left: 8%;margin-right: 2%">
          <img class="wow fadeInUp" data-wow-delay="0.25s" data-wow-offset="1" src="../image/app/fd2.png" style="width: 24%;margin-left: 2%;margin-right: 2%">
          <img class="wow fadeInUp" data-wow-delay="0.25s" data-wow-offset="1" src="../image/app/fd3.png" style="width: 24%;margin-left: 2%;margin-right: 8%">
          <img class="wow fadeInUp" data-wow-delay="0.25s" data-wow-offset="1" src="../image/app/fd4.png" style="width: 24%;margin-left: 8%;margin-right: 2%">
          <img class="wow fadeInUp" data-wow-delay="0.25s" data-wow-offset="1" src="../image/app/fd5.png" style="width: 24%;margin-left: 2%;margin-right: 2%">
          <img class="wow fadeInUp" data-wow-delay="0.25s" data-wow-offset="1" src="../image/app/fd6.png" style="width: 24%;margin-left: 2%;margin-right: 8%">
          <img class="wow fadeInUp" data-wow-delay="0.25s" data-wow-offset="1" src="../image/app/fd7.png" style="width: 24%;margin-left: 8%;margin-right: 2%">
          <img class="wow fadeInUp" data-wow-delay="0.25s" data-wow-offset="1" src="../image/app/fd8.png" style="width: 24%;margin-left: 2%;margin-right: 2%">
          <img class="wow fadeInUp" data-wow-delay="0.25s" data-wow-offset="1" src="../image/app/fd9.png" style="width: 24%;margin-left: 2%;margin-right: 8%">


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
  name: "download",
  components: {
    bar,
    foot
  },
  data() {
    return {
      url: "assets/login-background.jpg",
      imgList: [
        {
          url: require('@/image/k1.jpg')
        },
        {
          url: require('@/image/k2.jpg')
        },
        {
          url: require('@/image/k3.jpg')
        }
      ]
    }
  },
  mounted(){
    new  this.$wow.WOW().init()
    document.body.scrollTop = 0
    document.documentElement.scrollTop = 0
  },
  methods:{
    gotoInfo(){
      this.$router.push('/usetool');
    }
  }
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
.i{
  width: 100%;
  height:160px;
  background:linear-gradient(to right, #7f7fd5, #86a8e7, #91eae4) no-repeat;
  background-size:100% 100%;

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
