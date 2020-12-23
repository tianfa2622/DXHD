<template>
  <div class="Login">
    <div class="LoginForm">
      <h1>大型活动安保系统</h1>
      <el-form ref="form" :model="form" label-width="0">
        <el-form-item label="">
          <el-input v-model="form.name" placeholder="请输入用户名"></el-input>
        </el-form-item>
        <el-form-item label="">
          <el-input v-model="form.pwd" placeholder="请输入密码"></el-input>
        </el-form-item>
        <el-form-item>
          <el-button @click="onSubmit">登录</el-button>
        </el-form-item>
        <el-radio v-model="radio" label="true" @click.native.prevent="clickRadio('true')">记住密码</el-radio>
      </el-form>
    </div>
  </div>
</template>
<script>
export default {
  data: () => ({
    form: {},
    radio: ''
  }),
  created () { },
  methods: {
    onSubmit () {
      this.$router.push('/home')
    },
    clickRadio (e) {
      if (this.radio === e) {
        this.radio = ''
        return
      }
      // 不是选中，选中当前点击 Radio
      this.radio = e
      // 选中操作
    }
  }
}
</script>
<style lang="scss">
.Login {
  width: 100%;
  height: 100%;
  background: url(~@/assets/login/login.png) no-repeat center center;
  background-size: 100% 100%;
  position: relative;
  .LoginForm {
    width: 40%;
    height: 50%;
    position: absolute;
    right: 0;
    top: 50%;
    transform: translateY(-50%);
    padding: 0.2rem;
    box-sizing: border-box;
    h1 {
      color: #fff;
      font-size: 0.4rem;
      margin-bottom: 0.2rem;
    }
    .el-form {
      width: 50%;
      flex-wrap: wrap;
      .el-form-item {
        width: 100%;
        margin-bottom: 0.1rem;
        .el-button {
          width: 100%;
        }
        .el-form-item__content {
          .el-input {
            input {
              background-color: #fff;
            }
            input::placeholder {
              color: #797979 !important;
            }
          }
        }
      }
    }
  }
}
</style>
