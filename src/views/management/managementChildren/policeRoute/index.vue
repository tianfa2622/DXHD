<template>
  <div class="policeRoutes">
    <div class="policeRoute_titleBtn">
      <el-button type="primary" @click="goRoute">安保路线信息管理</el-button>
      <el-button type="primary" @click="goTrail">安保路线轨迹信息管理</el-button>
    </div>
    <div class="policeRoute_body">
      <router-view></router-view>
    </div>
  </div>
</template>
<script>
export default {
  data: () => ({}),
  created () { },
  methods: {
    goRoute () {
      this.$router.push('/management/policeRoutes/policeRoute')
    },
    goTrail () {
      this.$router.push('/management/policeRoutes/policeRouteTrail')
    }
  }
}
</script>
<style lang="scss">
.policeRoutes {
  padding-right: 0.3rem;
  box-sizing: border-box;
  width: 100%;
  .policeRoute_titleBtn {
    width: 100%;
    margin-bottom: 0.2rem;
    .el-button {
      background-color: #030923;
      border-color: #797979;
    }
  }
  .policeRoute_body {
    width: 100%;
  }
}
</style>
