<template>
  <div class="app">
    <header>
      <div class="header_left">
        <ul class="header_menu">
          <li class="menu_list">
            <span>态势感知</span>
          </li>
          <li class="menu_list">
            <span>活动管理</span>
          </li>
          <li class="menu_list">
            <span>业务协同</span>
          </li>
          <li class="menu_list">
            <span @click="goManagement">数据管理</span>
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
            <span @click="goControl">布控管理</span>
          </li>
          <li class="menu_list">
            <span @click="goFnc">接入功能</span>
          </li>
          <li class="menu_list" :class="{ li_hover: isClick }">
            <span @click="goAdmin">系统管理</span>
          </li>
          <li class="menu_list last_list">
            <div class="btn">
              <button class="btn_home">
                <img src="./assets/app_img/u40.svg" alt="" />
              </button>
              <button class="btn_me">
                <img src="./assets/app_img/u44.svg" alt="" />
              </button>
              <button class="btn_esc">
                <img src="./assets/app_img/u48.svg" alt="" />
              </button>
            </div>
          </li>
        </ul>
      </div>
    </header>
    <main>
      <router-view></router-view>
    </main>
  </div>
</template>
<script>
export default {
  data: () => ({
    isClick: false
  }),
  created () { },
  methods: {
    goAdmin () {
      this.isClick = true
      this.$router.push('/admin/role')
    },
    goFnc () {
      this.$router.push('/fnc/ticket')
    },
    goControl () {
      this.$router.push('/control/note')
    },
    goManagement () {
      this.$router.push('/management/policeDisplay')
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
            padding-top:0.3rem;
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
        line-height: 0.94rem;
        white-space: nowrap;
        height: 0.94rem;
        span {
          font-family: 'Arial Negreta', 'Arial Normal', 'Arial';
          font-weight: bold;
          color: #6aeff4;
          font-size: 0.28rem;
        }
      }
    }
  }
  main {
    width: $hundred;
    flex: auto;
    box-sizing: border-box;
    height: $hundred;
  }
  .li_hover {
    background: rgb(31, 116, 194);
    border-radius: 0.1rem;
  }
}
</style>
