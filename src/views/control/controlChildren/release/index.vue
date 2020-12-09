<template>
  <div class="release">
    <div class="release_btn">
      <el-button type="primary" @click="$router.push('/control/release/releaseCar')">车辆布控解控</el-button>
      <el-button type="primary" @click="$router.push('/control/release/releasePeople')">人员布控解控</el-button>
      <el-button type="primary" @click="$router.push('/control/release/releaseRegion')">区域布控解控</el-button>
    </div>
    <router-view></router-view>
  </div>
</template>
<script>
export default {
  data: () => ({}),
  created () { },
  methods: {}
}
</script>
<style lang="scss">
.release {
  width: 100%;
  .release_btn {
    width: 100%;
    .el-button {
      background-color: #00031d;
      border-color: #797979;
    }
  }
}
</style>
