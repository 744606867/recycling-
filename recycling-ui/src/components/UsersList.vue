<template>
  <div>
    <!-- 面包屑导航区 -->
    <el-breadcrumb separator-class="el-icon-arrow-right">
      <el-breadcrumb-item :to="{ path: '/home' }">首页</el-breadcrumb-item>
      <el-breadcrumb-item>用户管理</el-breadcrumb-item>
      <el-breadcrumb-item>用户列表</el-breadcrumb-item>
    </el-breadcrumb>

    <!-- 卡片内容 -->
    <el-card class="box-card">
      <!-- 搜索框 -->
      <div class="text item">
        <el-row :gutter="20">
          <el-col :span="6">
            <el-input placeholder="请输入内容">
              <el-button slot="append" icon="el-icon-search"></el-button>
            </el-input>
          </el-col>

          <el-col :span="4">
            <el-button type="primary">添加数据</el-button>
          </el-col>
        </el-row>
      </div>

      <el-table :data="UserList" style="width: 100%">idid
        <el-table-column type="index" label="序号" width="100">
        </el-table-column>
        <el-table-column prop="role_name" label="角色名称" width="200">
        </el-table-column>
        <el-table-column prop="user_name" label="姓名" width="160">
        </el-table-column>
        <el-table-column prop="mobile" label="手机号" width="160">
        </el-table-column>
        <el-table-column prop="status" label="用户状态" width="160">
          <template slot-scope="scope">
            <el-switch v-model="scope.row.status" active-color="#13ce66" inactive-color="#ff4949">
            </el-switch>
          </template>
        </el-table-column>id
        <el-table-column prop="create" label="创建时间" width="160">
        </el-table-column>
        <el-table-column fixed="right" label="操作" width="230">
          <template slot-scope="scope">
            <el-button @click="lookUser(scope.row.id)" type="primary" size="small">查看</el-button>
            <el-button @click="updataUser(scope.row.id)" type="success" size="small">编辑</el-button>
            <el-button @click="deleteUser(scope.row.id)" type="danger" size="small">删除</el-button>
          </template>
        </el-table-column>


      </el-table>
    </el-card>
  </div>
</template>

<script>
  export default {
    created() {
      this.getUserList()
    },
    data() {
      return {
        UserParam: {
          query: '',
          pagenum: 1,
          pagesize: 2
        },
        UserList: [],
        total: 0
      }
    },
    methods: {
      getUserList() {
        this.$http.get("getUserList", {
          params: this.UserParam
        }).then(res => {
          console.log(res.data)
          this.UserList = res.data
        })
      }
    }

  }

</script>
<style scoped>
  .box-card {
    box-shadow: 0 1px 1px rgb(0, 0, 0, 0.15);
  }

  .el-table {
    margin-top: 15px;
  }

</style>
