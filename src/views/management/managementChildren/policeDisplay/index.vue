<template>
  <div class="policDisplay">
    <div class="policDisplay_titleBtn">
      <el-button type="primary" @click="goCar">警车基本数据信息</el-button>
      <el-button type="primary" @click="goPolic">民警数据信息</el-button>
    </div>
    <div class="policDisplay_body">
      <router-view></router-view>
    </div>
  </div>
</template>
<script>
export default {
  data: () => ({}),
  created () { },
  methods: {
    goCar () {
      this.$router.push('/management/policeDisplay/policeDisplayCar')
    },
    goPolic () {
      this.$router.push('/management/policeDisplay/policeDisplayPolic')
    }
  }
}
</script>
<style lang="scss">
.policDisplay {
  padding-right: 0.3rem;
  box-sizing: border-box;
  width: 100%;
  .policDisplay_titleBtn {
    width: 100%;
    .el-button {
      background-color: #030923;
      border-color: #797979;
    }
  }
  .policDisplay_body {
    width: 100%;
  }
}
</style>
