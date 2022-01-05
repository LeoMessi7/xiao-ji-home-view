<template>
  <div id="introduce">
  <el-container>
    <bar></bar>
    <el-main class="main">
      <el-carousel :interval="5000" indicator-position="none" style="margin-top:20px" type="card" arrow="always" >
        <el-carousel-item v-for="(img,index) in imgList" :key="index" >

         <div style="height: 400px;"> <el-image :src="img.url" style="height: 100%; vertical-align: middle; object-fit:cover;"></el-image></div>
        </el-carousel-item>
      </el-carousel>

      <div class="intro">
        <p class=" p-1 wow fadeInDown"  data-wow-delay="0.5s" data-wow-offset="1" style="color:#17a2b8;">项目简介</p><br>
        <p class="p-2 wow fadeInUp" data-wow-delay="1.5s" data-wow-offset="1">-小济智能家居系统简介-</p>
        <p class="p-3 wow fadeInDown" data-wow-delay="1s" data-wow-offset="1">随着嵌入式系统与物联网技术的不断发展，智能家居的概念逐渐普及。所谓智能家居，是利用先进的计算机技术、网络通信技术、综合布线技术、医疗电子技术依照人体工程学原理，融合个性需求，将与家居生活有关的各个子系统如安防、灯光控制、窗帘控制、煤气阀控制、信息家电、场景联动、地板采暖、健康保健、卫生防疫、安防保安等有机地结合在一起，通过网络化综合智能控制和管理，实现“以人为本”的全新家居生活体验 · · · · · ·</p>
        <div style="height: 30px"></div>
        <a class="a-1 wow fadeInDown" data-wow-delay="1.5s" data-wow-offset="1" @click="gotoInfo(1)">查看更多</a>
      </div>
      <div class="doc" >
        <p class=" p-1 wow fadeInDown"  data-wow-delay="0.5s" data-wow-offset="1" style="color:#ffc107;">在线体验</p><br>
        <p class="p-2 wow fadeInUp" data-wow-delay="1.5s" data-wow-offset="1">-在线体验-</p>
        <p class="p-3 wow fadeInDown" data-wow-delay="1s" data-wow-offset="1">小济智能家居系统支持PC、微信小程序以及APP使用</p>
        <p class="p-3 wow fadeInDown" data-wow-delay="1s" data-wow-offset="1">小济智能后台管理系统是小济科技(智能家居软件公司)内部人员使用的系统、小济智能移动应用系统是小济智能科技为用户提供使用智能设备的接口。其中包括五大模块。</p>
        <div style="height: 30px"></div>
        <a class="a-1 wow fadeInDown" data-wow-delay="1.5s" data-wow-offset="1" @click="gotoInfo(2)">查看详情</a>
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
    document.body.scrollTop = 0
    document.documentElement.scrollTop = 0
  },
  methods:{
    gotoInfo(index){
      if(index===1)
      this.$router.push('/introduce');
      else  this.$router.push('/download');
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
  height: 100px;
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
