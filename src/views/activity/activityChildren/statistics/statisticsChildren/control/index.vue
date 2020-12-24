<template>
  <div class="control">
    <div class="control_l">
      <div class="bar">
        <Bar></Bar>
        <h3>A区出现异常次数<span>0</span>次</h3>
      </div>
    </div>
    <div class="control_r">
      <div class="map">
        <BdMap :center="center" :zoom="zoom"></BdMap>
      </div>
    </div>
  </div>
</template>
<script>
import Bar from '@/components/activity_com/statistics/control/bar'
import BdMap from '@/components/management_com/map'
export default {
  data: () => ({
    center: '长沙',
    zoom: 12
  }),
  created () { },
  methods: {},
  components: { Bar, BdMap }
}
</script>
<style lang="scss">
.control {
  width: 100%;
  display: flex;
  border: 1px solid rgb(62, 85, 104);
  padding: 0.2rem;
  box-sizing: border-box;
  margin-top: 0.2rem;
  .control_l,
  .control_r {
    width: 50%;
    height: 100%;
  }
  .control_l {
    .bar {
      height: 3rem;
      h3 {
        width: 100%;
        color: #fff;
        text-align: center;
        font-size: 0.2rem;
        span {
          border-bottom: 1px solid #ccc;
        }
      }
    }
  }
  .control_r {
    .map {
      height: 3rem;
    }
  }
}
</style>
