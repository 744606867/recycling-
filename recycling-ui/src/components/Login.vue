<template>
  <div class="login_container">
    <div class="login_box">
      <!-- 头像 -->
      <div class="avatar_box">
        <img src="../assets/logo.png" alt="">
      </div>
      <!-- 表单 -->
      <el-form label-width="0px" class="login_form" :model="loginForm" :rules="loginRules" ref="loginFormRef">

        <!-- 用户名 -->
        <el-form-item prop="username">
          <el-input prefix-icon="el-icon-s-custom" v-model="loginForm.username"></el-input>
        </el-form-item>

        <!-- 密码 -->
        <el-form-item prop="password">
          <el-input prefix-icon="el-icon-lock" v-model="loginForm.password" type="password"></el-input>
        </el-form-item>

        <el-form-item class="btns">
          <el-button type="primary" @click="login">登录</el-button>
          <el-button type="info" @click="resetForm('loginFormRef')">重置</el-button>
        </el-form-item>
      </el-form>
    </div>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        loginForm: {
          username: "admin",
          password: "123456"
        },
        loginRules: {
          username: [
            { required: true, message: '请输入用户名', trigger: 'blur' },
            { min: 5, max: 12, message: '长度在 5 到 12 个字符', trigger: 'blur' }
          ],
          password: [
            { required: true, message: '请输入密码', trigger: 'change' },
            { min: 6, max: 12, message: '长度在 6 到 12 个字符', trigger: 'blur' }
          ]
          }
      }
    },
    methods: {
      // 重置
       resetForm(formName) {
         this.$refs[formName].resetFields();
       },
       login(){
         //登录前总校验
         this.$refs.loginFormRef.validate((valid =>{
              if(!valid) return;
              //'http://127.0.0.1:8080/api/login
              this.$http.post("login",this.loginForm).then(res =>{
                   //console.log(res.data.data.data)
                  if(res.data.meta.status !== 200){
                    this.$message.error('用户名或密码错误');
                    return;
                  }else{
                     this.$message({
                      message: '登陆成功',
                      type: 'success'
                    });
                  }
                 
                  //存储到sessionStorage中
                  window.sessionStorage.setItem("token",res.data.data.data.token)
                  //跳转到主页面
                  this.$router.push("/Home")
                
              })
              
         }));
       }
    }
  }

</script>
<style lang="less" scoped>
  .login_container {
    background-color: aquamarine;
    height: 100%;
  }

  .login_box {
    width: 450px;
    height: 300px;
    background-color: aliceblue;
    position: absolute;
    left: 50%;
    top: 40%;
    transform: translate(-50%, -50%);
  }

  .avatar_box {
    height: 130px;
    width: 130px;
    border: 1px solid #eee;
    border-radius: 50%;
    box-shadow: 0 0 20px #00ff01;
    position: absolute;
    left: 50%;
    transform: translate(-50%, -50%);

    img {
      width: 100%;
      height: 100%;
      border-radius: 50%;
      background-color: aliceblue;
    }

  }

  .btns {
    display: flex;
    justify-content: flex-end;
  }

  .login_form {
    position: absolute;
    bottom: 0px;
    width: 100%;
    padding: 0 25px;
    box-sizing: border-box;
  }

</style>
