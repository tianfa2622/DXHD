<template>
  <div class="stressCar">
    <div class="stressCar_titleBtn">
      <el-button type="primary" @click="$router.push('/management/stressCar/statisticsCar')">重点车辆统计信息</el-button>
      <el-button type="primary" @click="$router.push('/management/stressCar/positionCar')">重点车辆位置信息</el-button>
    </div>
    <router-view></router-view>
    <div class="b">
      <div class="stressCar_left">
        <h3>重点车辆统计图</h3>
        <div class="stressCar_bar">
          <StressCarBar></StressCarBar>
        </div>
      </div>
      <div class="stressCar_right">
        <h3>车辆所在位置信息</h3>
        <div class="stressCar_map">
          <BdMap :center="center" :zoom="zoom"></BdMap>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import StressCarBar from '@/components/management_com/stressCar'
import BdMap from '@/components/management_com/map'
export default {
  data: () => ({
    center: '长沙',
    zoom: 12
  }),
  created () { },
  methods: {},
  components: { StressCarBar, BdMap }
}
</script>
<style lang="scss">
.stressCar {
  padding-right: 0.3rem;
  box-sizing: border-box;
  width: 100%;
  .stressCar_titleBtn {
    width: 100%;
    .el-button {
      background-color: #030923;
      border-color: #797979;
    }
  }
  .b {
    width: 100%;
    display: flex;
    justify-content: space-between;
    margin-top: 0.2rem;
    height: 4rem;
    .stressCar_left,
    .stressCar_right {
      h3 {
        color: #fff;
        background-color: #07275b;
        width: 2rem;
        height: 0.4rem;
        text-align: center;
        line-height: 0.4rem;
      }
    }
    .stressCar_left {
      width: 45%;
      .stressCar_bar {
        margin-top: 0.2rem;
        width: 100%;
        height: calc(100% - 0.6rem);
        border: 0.02rem solid #797979;
        border-radius: 20px;
      }
    }
    .stressCar_right {
      width: 45%;
      .stressCar_map {
        margin-top: 0.2rem;
        width: 100%;
        height: calc(100% - 0.6rem);
        border-radius: 20px;
        border: 1px solid #ccc;
        overflow: auto;
      }
    }
  }
}
</style>
