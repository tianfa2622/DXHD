<template>
  <div class="watchman">
    <Eltable :tableHead="tableHead" :operateShow="false" :tableDatas="tableDatas"></Eltable>
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
import Eltable from '@/components/table'
import ElLine from '@/components/activity_com/statistics/line'
import BdMap from '@/components/management_com/map'
export default {
  data: () => ({
    center: '长沙',
    zoom: 12,
    tableHead: [
      { label: '时间点', prop: 'input' },
      { label: '巡防次数', prop: 'input' },
      { label: '异常次数', prop: 'input' },
      { label: '巡防人员个数', prop: 'input' }
    ],
    tableDatas: Array(5).fill({
      input: '123'
    })
  }),
  created () { },
  methods: {},
  components: { Eltable, ElLine, BdMap }
}
</script>
<style lang="scss">
.watchman {
  width: 100%;
  .table {
    width: 100%;
    margin-top: 0.2rem;
  }
  .line {
    width: 50%;
    height: 3rem;
    float: left;
  }
  .map {
    width: 50%;
    height: 3rem;
    float: right;
  }
  .line,
  .map {
    margin-top: 0.1rem;
    h3 {
      width: 1rem;
      color: #fff;
      border-bottom: 1px solid #ccc;
      text-align: center;
    }
  }
}
</style>
