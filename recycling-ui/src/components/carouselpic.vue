<template>
  <div style="margin-top:120px;background-color:#7B68EE" >
   <el-row >
      <el-col :span="16" :push=4 >
        <el-carousel :height="imgHeight+'px'" >
          <el-carousel-item v-for="(item,index) in abc_img" :key="index">
             <img :src="item.src">
          </el-carousel-item>
        </el-carousel>
      </el-col>
    </el-row>
  </div>
</template>

<script>
  export default {

    data() {
      return {
        imgHeight: "",
        abc_img: [{
            src: "http://static.mayikt.com/SpringCloudAlibaba.jpg"
          },
          {
            src: "http://static.mayikt.com/banner0515.jpg"
          }
          ,
          {
            src: "http://static.mayikt.com/%E8%9A%82%E8%9A%81%E8%AF%BE%E5%A0%82banner0527.jpg"
          }
        ]
      }
    },
    methods: {
    imgLoad() {
      this.$nextTick(function() {
        // 获取窗口宽度*图片的比例，定义页面初始的轮播图高度
        this.imgHeight = document.body.clientWidth*1/4
      });
    }},
    mounted() {
    this.imgLoad();
    // 监听窗口变化，使得轮播图高度自适应图片高度
    window.addEventListener("resize", () => {
      this.imgHeight = this.$refs.image[0].height;
    });
  }

  }

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .el-menu {
    padding-left: 200px;
  }

  .grid-content {
    position: absolute;
  }

  .el-image {
    z-index: 20;
    position: relative;
    margin-bottom: -55px;
  }

</style>
