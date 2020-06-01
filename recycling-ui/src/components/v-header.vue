<template>
  <div>
    <el-row>
      <el-col :span="16" :push=4>
        <div class="grid-content bg-purple-dark">
          <el-image style="width: 115px; height: 50px" :src="url"></el-image>
          <el-menu :default-active="activeIndex" class="el-menu-demo" mode="horizontal">
            <el-menu-item index="1">首页</el-menu-item>
            <el-menu-item index="2">社区</el-menu-item>
            <el-menu-item index="3">历程</el-menu-item>
            <el-menu-item index="4">路线</el-menu-item>
            <el-menu-item index="5">消息中心</el-menu-item>
            <el-menu-item index="6"><a href="https://www.ele.me" target="_blank">订单管理</a></el-menu-item>
            <!-- 搜索框 -->
            <el-menu-item>
              <el-input placeholder="请输入内容"  class="input-with-select">
                <el-button slot="append" icon="el-icon-search"></el-button>
              </el-input>
            </el-menu-item>
            <!-- 搜索框。。。。 -->
          </el-menu>
        </div>
      </el-col>
    </el-row>
  </div>
</template>

<script>
  export default {
    name: 'v-header',
    data() {
      return {
        activeIndex: '1',
        activeIndex2: '1',
        url: 'http://static.mayikt.com/2020_logo.png',
      
      }
    },
    methods: {

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
