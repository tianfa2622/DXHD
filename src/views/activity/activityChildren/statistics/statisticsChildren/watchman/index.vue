<template>
  <div class="watchman">
    <div class="line">
      <h3>今日巡防次数</h3>
      <ElLine></ElLine>
    </div>
    <div class="map">
      <h3>街面巡防路线图</h3>
      <BdMap :center="center" :zoom="zoom"></BdMap>
    </div>
  </div>
</template>
<script>
import ElLine from '@/components/activity_com/statistics/line'
import BdMap from '@/components/management_com/map'
export default {
  data: () => ({
    center: '长沙',
    zoom: 12
  }),
  created () { },
  methods: {},
  components: { ElLine, BdMap }
}
</script>
<style lang="scss">
.watchman {
  width: 100%;
  border: 1px solid rgb(62, 85, 104);
  padding: 0.2rem;
  box-sizing: border-box;
  display: flex;
  margin-top: 0.2rem;
  .line {
    width: 50%;
    height: 3rem;
  }
  .map {
    width: 50%;
    height: 3rem;
  }
  .line,
  .map {
    margin-top: 0.1rem;
    h3 {
      width: 1.2rem;
      height: 0.2rem;
      color: #fff;
      border-bottom: 1px solid #ccc;
      text-align: center;
      font-size: 0.16rem;
    }
    #Line {
      height: calc(100% - 0.21rem) !important;
    }
    .bm-view {
      height: calc(100% - 0.21rem) !important;
      margin-top: 0.2rem;
    }
  }
}
</style>
