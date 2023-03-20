<template>
  <div class="bg">
    <div class="top-bg"></div>
    <div class="central-bg">
      <div class="contain">
        <div class="box">
          <div class="box1"></div>
          <div class="box2">
            <div class="left">
              <el-tabs
                v-model="activeName"
                type="card"
                @tab-click="handleClick"
              >
                <!-- 登录 -->
                <el-tab-pane label="登录" name="first">
                  <el-form
                    ref="userForm"
                    :model="user"
                    :rules="rules"
                  >
                    <div class="left1">
                      <div>账号密码登录</div>

                        <el-form-item label="" prop="useName">
                          <el-input
                          type="text"
                            v-model="user.useName"
                            placeholder="请输入账号"
                          ></el-input>
                        </el-form-item>

                        <el-form-item label="" prop="usePwd">
                          <el-input
                          type="password"
                            v-model="user.usePwd"
                            placeholder="请输入密码"
                          ></el-input>
                        </el-form-item>

                        <el-form-item label="" prop="yanzhengma">
                          <el-input
                          type="text"
                            v-model="user.yanzhengma"
                            placeholder="请输入验证码"
                            class="el-input1"
                          ></el-input>
                        </el-form-item>


                        <el-form-item label="" prop="resource">
                          <el-radio-group v-model="user.resource">
                            <el-radio label="记住密码"></el-radio>
                            <el-radio label="记住账号"></el-radio>
                          </el-radio-group>
                        </el-form-item>

                      <el-form-item prop="type">
                        <el-checkbox-group v-model="user.type">
                          <el-checkbox
                            label=""
                            name="type"
                          ><span class="ab">同意<a>xxxx隐私政策</a></span>
                          </el-checkbox>
                        </el-checkbox-group>
                      </el-form-item>

                        <el-button type="primary" class="btn-login" @click="login">登录</el-button>
                    </div>
                  </el-form>
                </el-tab-pane>
                <!-- 二维码 -->
                <el-tab-pane label="二维码" name="second" ><span @click="ewmLogin"> 二维码</span></el-tab-pane>
              </el-tabs>
            </div>
            <!-- 右边 -->
            <div class="right">
              <div class="text1">
                第三方登录
              </div>
              <div class="btn1">
                <el-button round>圆角按钮</el-button>
              </div>
              <div class="btn1">
                <el-button round>圆角按钮</el-button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="footer-bg"></div>
  </div>
</template>

<script>
export default {
  name: "login",
  data() {
    return {
      user: {
        useName: "",
        usePwd: "",
        yanzhengma: "",
        resource: "",
        type:''
      },
      cookie:'',

      rules: {
        useName: [
          {
            required: true,
            message: "请输入用户名",
            trigger: "blur",
          },
        ],
        usePwd: [
          {
            required: true,
            message: "请输入密码",
            trigger: "blur",
          },
        ],
      },
    };
  },
  methods:{
    login(){
      this.$refs.userForm.validate((v)=>{
        console.log(v)
        if(v){
          this.$axios.get('/register/anonimous', {
            // get请求添加cookie参数
            params: {
              cookie: localStorage.getItem('token')
            }
            // post请求添加cookie参数
            // data: {
            //   cookie: localStorage.getItem('token')
            // }
          }).then((res)=>{
              console.log(res)
              console.log(res.data)
              this.cookie = res.data.cookie
              localStorage.setItem('token',res.data.cookie)
              this.$router.push("/");

              this.$axios.get('/login/qr/key').then((res)=>{
        console.log(res,'21212112121')
      })
          })
        }
      })
    },
    ewmLogin(){

    }
  },
  mounted(){

  }
};
</script>
<style lang="less" scoped>
.top-bg {
  width: 100vw;
  height: 32px;
  background-color: #0689c3;
}
.central-bg {
  width: 100vw;
  height: 937px;
  /* background-color: red; */
  background: url("../assets/img/beijing.png") no-repeat;
  background-size: 100% 100%;
}
.footer-bg {
  width: 100vw;
  height: 31px;
  background-color: #0689c3;
}
.contain {
  position: absolute;
}
.box {
  width: 576px;
  height: 474px;
  background-color: #fff;
  position: relative;
  margin-left: 711px;
  margin-top: 191px;
  .box1 {
    width: 100%;
    height: 16px;
    background-color: #0689c3;
  }
  .box2 {
    display: flex;
    height: 458px;
    width: 100%;
    .left {
      padding-top: 30px;
      width: 60%;
      height: 100%;
      // background-color: red;
      .left1 {
        width: 100%;
        height: 360px;
        // padding: 20px;
        padding-left: 20px;
        /deep/ .el-input {
          width: 300px;
          // padding-top: 10px;
        }
        /deep/ .el-input1 {
          width: 200px;
        }
        .ab{
          width: 60px;
          height: 30px;
          color: black;
        }
        .btn-login{
          margin-top: -30px;
          margin-left: 80px;
        }
      }
    }
  }
}
.right {
  width: 40%;
  height: 100%;
  // background-color: red;
  .text1 {
    text-align: center;
    margin-top: 60px;
  }
  .btn1 {
    text-align: center;
    margin-top: 15px;
  }
}
</style>
