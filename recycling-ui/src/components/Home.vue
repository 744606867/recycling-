<template>

  <el-container class="home-Container">
    <el-header>
      <div>
        <img src="http://static.mayikt.com/2020_logo.png" alt="">
        <span>管理系统</span>
      </div>

      <el-button type="info" @click="logout">退出</el-button>
    </el-header>

    <el-container>
      <!-- 侧边栏 -->
      <el-aside :width="isCollapse ? '64px':'180px'">

        <div class="button-toggle" @click="toggleStyle">|||</div>
        <el-menu background-color="#333744" text-color="#fff" active-text-color="#409eff" unique-opened
          :collapse="isCollapse" :collapse-transition="false" :router="true"  :default-active="activePath">
          <!-- 一级菜单 -->
          <el-submenu :index="item.id+''" v-for="item in MenuList" :key="item.id">
            <!-- 一级菜单模板区域 -->
            <template slot="title">
              <!-- 图标 -->
              <i :class="item.iconPic"></i>
              <!-- 文本 -->
              <span>{{item.authName}}</span>
            </template>

            <!-- 二级菜单 -->
            <el-menu-item :index="'/'+subItem.path" v-for="subItem in item.children" :key="subItem.id"
               @click="saveActivePath('/'+subItem.path)">
              <template slot="title">
                <i class="el-icon-menu"></i>
                <span>{{subItem.authName}}</span>
              </template>
            </el-menu-item>

          </el-submenu>
        </el-menu>

      </el-aside>
      <el-main>
        <router-view></router-view>
      </el-main>
    </el-container>
  </el-container>

</template>

<script>
  export default {
    created() {
      this.getMenuList()
      this.activePath = window.sessionStorage.getItem("activePath")
    },
    data() {
      return {
        MenuList: [],
        isCollapse: false,
        activePath: ''
      }
    },
    methods: {
      logout() {
        window.sessionStorage.clear()
        this.$router.push("/login")
      },
      getMenuList() {
        this.$http.get("getMenuList").then(res => {
          console.log(res.data.data)
          if (res.data.meta.status != 200) this.$message.error(res.data.meta.msg);
          this.MenuList = res.data.data
        })
      },
      //
      toggleStyle() {
        this.isCollapse = !this.isCollapse
      },
      //保存点击菜单效果
      saveActivePath(flag) {
        window.sessionStorage.setItem("activePath", flag)
        this.activePath = flag
      }
    }
  }

</script>
<style lang="less">
  .home-Container {
    height: 100vh;
  }

  .el-header {
    background-color: #808080;
    display: flex;
    justify-content: space-between;
    padding-left: 0px;
    align-items: center;
    font-size: 20px;

    >div {
      display: flex;
      align-items: center;

      >span {
        margin-left: 20px;

      }

      img {
        width: 90px;
        height: 40px;
      }
    }

  }

  .el-aside {
    background-color: #333744;
  }

  .el-main {
    background-color: #eaedf1;
  }

  .el-menu {
    border-right: none;
  }

  .button-toggle {
    background-color: #4a5064;
    font-size: 10px;
    line-height: 24px;
    color: #fff;
    text-align: center;
    letter-spacing: 0.2em;
    cursor: pointer;
  }

</style>
