<template>
  <div id="usetool">
  <bar></bar>
  <el-container>
    <el-main class="main">
      <div class="i">
        <p style="text-align: left;padding-top:50px;margin-top: 0;margin-bottom: 10px; margin-left: 200px;color:white;font-size:30px;font-weight: bold ">项目简介</p>
        <p style="text-align: left;padding-top:0;margin-top: 0; margin-left: 200px;color:white;font-size:18px;">项目简介</p>
      </div>
      <div class="intro">
        <p class=" p-1 wow swing"  data-wow-delay="0.5s" data-wow-offset="1" style="color:#17a2b8;">项目简介</p><br>
        <p class="p-2 wow flipInY" data-wow-delay="1.5s" data-wow-offset="1">-小济智能家居系统简介-</p>
        <p class="p-3 wow fadeInLeft" data-wow-delay="1s" data-wow-offset="1">{{p1}}</p>
        <p class="p-3 wow fadeInLeft" data-wow-delay="1s" data-wow-offset="1">{{p2}}</p>
        <p class="p-3 wow fadeInLeft" data-wow-delay="1s" data-wow-offset="1">{{p3}}</p>
        <p class="p-3 wow fadeInLeft" data-wow-delay="1s" data-wow-offset="1">{{p4}}</p>
        <p class="p-3 wow fadeInLeft" data-wow-delay="1s" data-wow-offset="1">{{p5}}</p>
        <p class="p-4 wow fadeInLeft" data-wow-delay="1s" data-wow-offset="1" style="color: #008F7A;">以声音，唤起沉浸视界</p>
        <p class="p-4 wow fadeInLeft" data-wow-delay="1s" data-wow-offset="1" style="color: #008E9B;">让光影，营造温馨氛围</p>
        <p class="p-4 wow fadeInLeft" data-wow-delay="1s" data-wow-offset="1" style="color: #0089BA;">用感官，享受舒适环境</p>
        <p class="p-4 wow fadeInLeft" data-wow-delay="1s" data-wow-offset="1" style="color: #91EAE4;">...</p>
        <p class="p-4 wow fadeInLeft" data-wow-delay="1s" data-wow-offset="1" style="color: #0081CF;">每个角落，都有家的理想模样</p>
      </div>
      <el-divider style="margin-left: 10%!important;"></el-divider>
      <div class="intro" style="background-color: #ffffff">
        <p class="wow fadeInDown" data-wow-delay="1.5s" data-wow-offset="1" style="font-size: 28px;color: #ffc107">-项目主题扩展-</p>
        <img class="wow fadeInUp" data-wow-delay="1s" data-wow-offset="1" src="../image/1.png" style="width: 80%">
        <p class="p-3 wow fadeInLeft" data-wow-delay="1s" data-wow-offset="1">如上图所示，我们系统包括用于管理后台的Web系统和为用户提供智能家居设备控制的微信小程序/安卓应用系统。所谓小济智能家居生态系统可有系统环境图进行说明：</p>
        <img class="wow fadeInUp" data-wow-delay="1s" data-wow-offset="1" src="../image/UML.jpg" style="width: 80%">
        <p class="p-3 wow fadeInLeft" data-wow-delay="1s" data-wow-offset="1">目标系统是两个软件构成的小型生态系统：它通过使用下级系统各种智能设备硬件系统和服务器系统来提供具体的实例服务，而小济智能是通过软件管理和监控智能设备的软件产品生态圈：小济智能后台管理系统和小济智能安卓/微信小程序系统。</p>
        <p class="p-3 wow fadeInLeft" data-wow-delay="1s" data-wow-offset="1"> - 个人用户(房主)使用小济智能安卓系统(微信小程序系统)向房屋内的智能设备发送指令以控制其行为。小济智能安卓系统(微信小程序系统)通过向屋内已经配置连接的智能设备发送具体的操作指令来控制设备的行为，并将其反馈给房主。</p>
        <p class="p-3 wow fadeInLeft" data-wow-delay="1s" data-wow-offset="1"> - 公司人员使用小济后台管理系统协助应用的开发(各模块接口文档等)、监控和管理公司的资源(部署服务器等)以及管理智能设备和公司产品(安卓和微信小程序系统)的使用情况。</p>
      </div>
      <el-divider style="margin-left: 10%!important;"></el-divider>
      <div class="intro">
        <p class="wow fadeInDown" data-wow-delay="1s" data-wow-offset="1" style="font-size: 28px;color: #026880">-小济后台管理系统-</p>
        <img class="wow fadeInUp" data-wow-delay="0.25s" data-wow-offset="1" src="../image/web/bk1.png" style="width: 80%">
        <p class="p-3 wow fadeInLeft" data-wow-delay="0s" data-wow-offset="1">小济智能后台管理系统是小济科技(智能家居软件公司)内部人员使用的系统，其中包括五大模块：</p>
        <p class="p-5 wow fadeInLeft" data-wow-delay="0.25s" data-wow-offset="1"> 1. 万物互联：监控和管理用户使用的智能设备的状态、配置信息、连接信息等。</p>
        <p class="p-5 wow fadeInLeft" data-wow-delay="0.5s" data-wow-offset="1"> 2. 公司系统管理：管理公司内部人员，协助开发智能家居项目，包含人员的各个部门的管理以及系统字典设置、菜单设置等。</p>
        <p class="p-5 wow fadeInLeft" data-wow-delay="0.75s" data-wow-offset="1"> 3. 系统监控：监控在线用户、操作日志以及产品部署环境(各种服务器性能)。服务器包括产品部署服务器、缓存服务器、EMQ代理服务器、Nacos服务注册配置服务器等。</p>
        <p class="p-5 wow fadeInLeft" data-wow-delay="1s" data-wow-offset="1"> 4. 小济官网：是指向小济智能官网的链接。官网上是关于公司产品的介绍以及提供用户使用产品的接口(扫描使用微信小程序、下载安装安卓应用程序)。</p>
      </div>
      <el-divider style="margin-left: 10%!important;"></el-divider>
      <div class="intro" style="background-color: #ffffff">
        <p class="wow fadeInDown" data-wow-delay="0s" data-wow-offset="1" style="font-size: 28px;color: #03a68a">-小济智能移动端-</p>
        <img class="wow fadeInUp" data-wow-delay="0.25s" data-wow-offset="1" src="../image/app/fd1.png" style="width: 23%">
        <img class="wow fadeInUp" data-wow-delay="0.5s" data-wow-offset="1" src="../image/app/fd2.png" style="width: 23%">
        <img class="wow fadeInUp" data-wow-delay="1s" data-wow-offset="1" src="../image/app/fd3.png" style="width: 23%">
        <img class="wow fadeInUp" data-wow-delay="1.5s" data-wow-offset="1" src="../image/app/fd4.png" style="width: 23%">
        <p class="p-3 wow fadeInLeft" data-wow-delay="0s" data-wow-offset="1">小济智能移动应用系统是小济智能科技为用户提供使用智能设备的接口。其中包括五大模块：</p>
        <p class="p-5 wow fadeInLeft" data-wow-delay="0.1s" data-wow-offset="1"> 1. 个人中心：管理用户个人信息。</p>
        <p class="p-5 wow fadeInLeft" data-wow-delay="0.25s" data-wow-offset="1"> 2. 消息管理：接受系统公告、定时任务等。</p>
        <p class="p-5 wow fadeInLeft" data-wow-delay="0.5s" data-wow-offset="1"> 3. 配置管理：提供用户将智能设备接入到移动端服务，如MQTT服务配置、AP接入配置等。</p>
        <p class="p-5 wow fadeInLeft" data-wow-delay="0.75s" data-wow-offset="1"> 4. 设备管理：管理用户家庭内的智能设备，如控制灯光、调节温度等。</p>
        <p class="p-5 wow fadeInLeft" data-wow-delay="1s" data-wow-offset="1"> 5. 智能应用：供用户使用的智能小应用，比如虚拟化妆、情感检测、智能音乐播放等。</p>
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
  data(){
    return{
        p1:"随着嵌入式系统与物联网技术的不断发展，智能家居的概念逐渐普及。所谓智能家居，是利用先进的计算机技术、网络通信技术、综合布线技术、医疗电子技术依照人体工程学原理，融合个性需求，将与家居生活有关的各个子系统如安防、灯光控制、窗帘控制、煤气阀控制、信息家电、场景联动、地板采暖、健康保健、卫生防疫、安防保安等有机地结合在一起，通过网络化综合智能控制和管理，实现“以人为本”的全新家居生活体验。",
        p2:"我们的生活变得日益忙碌单调，但当家居科技连接到一个简单易用的系统之时，它将有助于消除一些工作或其他方面 带来的压力。 一套真正的智能家居能让我们的生活变得更便捷，也让家变得更安全、更舒适，带给我们更多享受。",
        p3:"本次项目我们小组将开发实现一个模拟智能家居管理系统，帮助我们随时掌握家中动态，智能控制多种设备，提高生活品质。",
        p4: "该项目的主要目标是借助SOA架构和Web服务技术，模拟开发一套家居系统来提高人们的生活质量,使家庭变得更舒适，提升个人幸福感。",
        p5: "当进入房间时该项目可以根据您的情绪状态为您献上最为舒适的感官环境，不仅如此，还支持多种情景模式，为枯燥无味的生活增添一抹色彩。当然，除了感官的舒适，安全也是该项目的一大特色，人脸识别、家居安防，让您住得安心、住得放心。",

    }
  },

  mounted(){
    new  this.$wow.WOW().init()
    document.body.scrollTop = 0
    document.documentElement.scrollTop = 0
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
  background:linear-gradient(to right,  #0089BA, #86a8e7, #91eae4) no-repeat;
  background-size:100% 100%;

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
.p-4{
  font-size: 30px;
  font-family: 幼圆;
  font-weight: bold;

}
.p-5{
  line-height: 2;
  position:relative;
  text-align: left;
  margin-left:50px;
}
.el-divider--horizontal {
  display: block;
  height: 1px;
  width: 80%;
  margin: 0 10% 0 10%;
}
</style>
