<template>
  <div class="situation">
    <h3>态势感知</h3>
    <router-view @isClick="click" :initCenter="center" :policesShows="policesShows" :security="isSecurity" @close="close"></router-view>
    <div class="situation_foot" v-show="isClick">
      <el-row :gutter="20">
        <el-col :span="4">
          <div @click="go1">
            <img src="@/assets/situation/u517.svg" alt="" />
            <span>全部活动</span>
          </div>
        </el-col>
        <el-col :span="4">
          <div @click="go2">
            <img src="@/assets/situation/4.png" alt="" />
            <span>安保路线</span>
          </div>
        </el-col>
        <el-col :span="4">
          <div @click="go3">
            <img src="@/assets/situation/2.png" alt="" />
            <span>警力态势</span>
          </div>
        </el-col>
        <el-col :span="4">
          <img src="@/assets/situation/3.png" alt="" />
          <span>人员态势</span>
        </el-col>
        <el-col :span="4">
          <img src="@/assets/situation/1.png" alt="" />
          <span>车辆态势</span>
        </el-col>
        <el-col :span="4">
          <img src="@/assets/situation/5.png" alt="" />
          <span>事件态势</span>
        </el-col>
      </el-row>
    </div>
  </div>
</template>
<script>
export default {
  data: () => ({
    isClick: false,
    isSecurity: false,
    policesShows: true,
    center: {}
  }),
  created () { },
  methods: {
    click (e) {
      this.isClick = true
    },
    go1 () {
      this.center = {
        lng: 112.96819817184979,
        lat: 28.191863196869612
      }
      this.isClick = false
    },
    go2 () {
      this.isSecurity = true
    },
    go3 () {
      this.policesShows = true
    },
    close (e) {
      console.log(e)
      this.isSecurity = false
    }
  }
}
</script>
<style lang="scss">
.situation {
  width: 100%;
  height: 100%;
  padding: 0.2rem;
  box-sizing: border-box;
  h3 {
    color: #fff;
    width: 1rem;
    text-align: center;
    border-bottom: 1px solid #ccc;
    height: 0.4rem;
    line-height: 0.4rem;
  }
  .situation_foot {
    width: 50%;
    height: 1rem;
    position: fixed;
    bottom: 0;
    left: 0;
    right: 0;
    margin-left: auto;
    margin-right: auto;
    background: url('~@/assets/situation/u510.png') no-repeat center center;
    background-size: 100% 100%;
    padding: 0 0.4rem;
    box-sizing: border-box;
    .el-row {
      width: 100%;
      padding: 0.1rem 0;
      box-sizing: border-box;
      .el-col:first-child {
        padding: 0;
        img {
          height: 0.6rem;
        }
      }
      .el-col {
        text-align: center;
        padding-top: 0.16rem;
        box-sizing: border-box;
        cursor: pointer;
        img {
          height: 0.4rem;
          width: 0.6rem;
        }
        span {
          margin-top: 0.02rem;
          color: #fff;
          width: 100%;
          display: block;
        }
      }
    }
  }
}
</style>
