<template>
  <div class="app">
    <header v-if="!isLogin">
      <div class="header_left">
        <ul class="header_menu">
          <li class="menu_list">
            <span @click="goSituation" :class="{ li_hover: isSituation }">态势感知</span>
          </li>
          <li class="menu_list">
            <span @click="goActivity" :class="{ li_hover: isActivity }">活动管理</span>
          </li>
          <li class="menu_list">
            <span @click="goBusiness" :class="{ li_hover: isBusiness }">业务协同</span>
          </li>
          <li class="menu_list">
            <span @click="goManagement" :class="{ li_hover: isManagement }">数据管理</span>
          </li>
        </ul>
      </div>
      <div class="header_center">
        <div class="centerDiv">
          <img src="./assets/app_img/u32.svg" alt="" />
          <h1 class="title">大型活动安保平台</h1>
        </div>
      </div>
      <div class="header_right">
        <ul class="header_menu">
          <li class="menu_list">
            <span @click="goControl" :class="{ li_hover: isControl }">布控管理</span>
          </li>
          <li class="menu_list">
            <span @click="goFnc" :class="{ li_hover: isFnc }">接入功能</span>
          </li>
          <li class="menu_list">
            <span @click="goAdmin" :class="{ li_hover: isAdmin }">系统管理</span>
          </li>
          <li class="menu_list last_list">
            <div class="btn">
              <button class="btn_home" @click="goHome">
                <img src="./assets/app_img/u40.svg" alt="" />
              </button>
              <button class="btn_me" @click="userDataShow = true">
                <img src="./assets/app_img/u44.svg" alt="" />
              </button>
              <button class="btn_esc" @click="$router.push('/login')">
                <img src="./assets/app_img/u48.svg" alt="" />
              </button>
            </div>
          </li>
        </ul>
      </div>
    </header>
    <main :class="{ login: isLogin }">
      <router-view></router-view>
    </main>
    <el-dialog class="userDialog" title="个人信息" :visible.sync="userDataShow" center width="30%">
      <p v-for="(i, index) in userData" :key="index">
        <span>{{ i.label }}</span>
        <span>{{ i.value }}</span>
      </p>
    </el-dialog>
  </div>
</template>
<script>
export default {
  data () {
    return {
      isAdmin: false,
      isFnc: false,
      isControl: false,
      isBusiness: false,
      isManagement: false,
      isActivity: false,
      isSituation: false,
      isLogin: false,
      userDataShow: false,
      routerName: this.$store.state.routerName,
      userData: [
        {
          label: '所属角色', value: '02'
        },
        { label: '警号', value: '02' },
        { label: '用户名', value: '02' },
        { label: '登录时间', value: '02' }
      ]
    }
  },
  created () {
    this.whoClick(this.routerName)
  },
  methods: {
    goAdmin () {
      this.isFnc = false
      this.isControl = false
      this.isBusiness = false
      this.isManagement = false
      this.isActivity = false
      this.isSituation = false
      this.isAdmin = true
      this.$router.push('/admin/role')
    },
    goFnc () {
      this.isAdmin = false
      this.isControl = false
      this.isBusiness = false
      this.isManagement = false
      this.isActivity = false
      this.isSituation = false
      this.isFnc = true
      this.$router.push('/fnc/ticket')
    },
    goControl () {
      this.isFnc = false
      this.isAdmin = false
      this.isBusiness = false
      this.isManagement = false
      this.isActivity = false
      this.isSituation = false
      this.isControl = true
      this.$router.push('/control/note')
    },
    goManagement () {
      this.isFnc = false
      this.isAdmin = false
      this.isBusiness = false
      this.isControl = false
      this.isActivity = false
      this.isSituation = false
      this.isManagement = true
      this.$router.push('/management/policeDisplay/policeDisplayCar')
    },
    goBusiness () {
      this.isFnc = false
      this.isAdmin = false
      this.isControl = false
      this.isManagement = false
      this.isActivity = false
      this.isSituation = false
      this.isBusiness = true
      this.$router.push('/business/scene')
    },
    goActivity () {
      this.isFnc = false
      this.isAdmin = false
      this.isControl = false
      this.isManagement = false
      this.isBusiness = false
      this.isSituation = false
      this.isActivity = true
      this.$router.push('/activity/apply')
    },
    goSituation () {
      this.isFnc = false
      this.isAdmin = false
      this.isControl = false
      this.isManagement = false
      this.isBusiness = false
      this.isActivity = false
      this.isSituation = true
      this.$router.push('/situation/situationMap')
    },
    goHome () {
      this.$router.push('/home')
    },
    whoClick (name) {
      if (name === '系统管理') {
        this.isLogin = false
        this.isAdmin = true
      } else if (name === '接入功能') {
        this.isLogin = false
        this.isFnc = true
      } else if (name === '布控管理') {
        this.isLogin = false
        this.isControl = true
      } else if (name === '数据管理') {
        this.isLogin = false
        this.isManagement = true
      } else if (name === '业务协同') {
        this.isLogin = false
        this.isBusiness = true
      } else if (name === '首页') {
        this.isFnc = false
        this.isControl = false
        this.isBusiness = false
        this.isManagement = false
        this.isAdmin = false
        this.isSituation = false
        this.isActivity = false
        this.isLogin = false
      } else if (name === '活动管理') {
        this.isLogin = false
        this.isActivity = true
      } else if (name === '态势感知') {
        this.isLogin = false
        this.isSituation = true
      } else if (name === '登录') {
        this.isLogin = true
      }
    }
  },
  watch: {
    '$store.state.routerName': function (newVal) {
      this.whoClick(newVal)
    }
  }
}
</script>
<style lang="scss">
$hundred: 100%;
$pr: relative;
$pa: absolute;
.app {
  background: url('./assets/app_img/u19.png') no-repeat center center;
  background-size: $hundred $hundred;
  height: 100vh;
  width: 100vw;
  overflow: hidden;
  header {
    width: 100%;
    height: 0.94rem;
    display: flex;
    background: rgba(14, 16, 31, 1);
    margin: 0 auto;
    justify-content: space-around;
    .header_left {
      height: $hundred;
      width: 30%;
    }
    .header_center {
      position: relative;
      width: 33%;
      height: $hundred;
      background: url('./assets/app_img/u30.png') no-repeat center center;
      background-size: $hundred $hundred;
      .centerDiv {
        display: flex;
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        justify-content: space-between;
        img {
          width: 0.5rem;
          height: 0.5rem;
          display: block;
          margin-right: 0.2rem;
        }
        .title {
          font-size: 0.32rem;
          color: #ccc;
          font-family: 'Arial Negreta', 'Arial Normal', 'Arial';
          font-weight: bold;
          font-style: normal;
          white-space: nowrap;
        }
      }
    }
    .header_right {
      width: 30%;
      .header_menu {
        width: 100%;
        .last_list {
          line-height: 100% !important;
          .btn {
            padding-top: 0.3rem;
            box-sizing: border-box;
            button {
              width: 0.35rem;
              height: 0.33rem;
              border: none;
              background: #3e5568;
              img {
                width: 80%;
                height: 80%;
                display: block;
                margin: 0 auto;
              }
            }
            .btn_me {
              margin: 0 0.02rem;
            }
          }
        }
      }
    }
    .header_menu {
      display: flex;
      justify-content: space-between;
      .menu_list {
        list-style: none;
        cursor: pointer;
        white-space: nowrap;
        height: 0.94rem;
        span {
          font-family: 'Arial Negreta', 'Arial Normal', 'Arial';
          font-weight: bold;
          color: #6aeff4;
          font-size: 0.28rem;
          display: block;
          position: relative;
          top: 50%;
          transform: translateY(-50%);
          padding: 0.1rem;
          box-sizing: border-box;
        }
      }
    }
  }
  main {
    width: $hundred;
    box-sizing: border-box;
    height: calc(100% - 0.94rem);
  }
  .login {
    height: 100% !important;
  }
  .li_hover {
    background: rgb(31, 116, 194);
    border-radius: 0.1rem;
  }
  .userDialog {
    .el-dialog {
      .el-dialog__body {
        p {
          width: 50%;
          height: 0.4rem;
          line-height: 0.4rem;
          margin: 0 auto;
          display: flex;
          justify-content: space-around;
          span {
            color: #fff;
            width: 30%;
          }
          span:first-child {
            text-align: right;
          }
        }
      }
    }
  }
}
</style>
