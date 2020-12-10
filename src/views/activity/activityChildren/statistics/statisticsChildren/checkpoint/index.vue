<template>
  <div class="checkpoint">
    <Eltable :tableHead="tableHead" :operateShow="false" :tableDatas="tableDatas"></Eltable>
    <div class="bar">
      <h3>危险品数量</h3>
      <Bar></Bar>
    </div>
    <div class="pie bar">
      <h3>危险品总数统计</h3>
      <Pie></Pie>
    </div>
  </div>
</template>
<script>
import Eltable from '@/components/table'
import Bar from '@/components/activity_com/statistics/bar'
import Pie from '@/components/activity_com/statistics/pie'
export default {
  data: () => ({
    tableHead: [
      { label: '时间', prop: 'input' },
      { label: '警报次数', prop: 'input' },
      { label: '在线设备', prop: 'input' },
      { label: '离线设备', prop: 'input' }
    ],
    tableDatas: []
  }),
  created () { },
  methods: {

  },
  components: { Eltable, Bar, Pie }
}
</script>
<style lang="scss">
.checkpoint {
  width: 100%;
  .table {
    margin-top: 0.2rem;
  }
  .bar {
    width: 50%;
    height: 4rem;
    margin-top: 0.2rem;
    float: left;
    h3 {
      color: #fff;
      width: 2rem;
      height: 0.4rem;
      line-height: 0.4rem;
      text-align: center;
      border-bottom: 1px solid #ccc;
    }
  }
  .pie {
    float: right;
  }
}
</style>
