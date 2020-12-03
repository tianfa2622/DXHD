<template>
  <div class="checkpoint">
    <Eltable :tableHead="tableHead" :operateShow="false" :tableDatas="tableDatas"></Eltable>
    <div class="bar">
      <Bar></Bar>
    </div>
  </div>
</template>
<script>
import Eltable from '@/components/table'
import Bar from '@/components/activity_com/statistics/bar'
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
  components: { Eltable, Bar }
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
  }
}
</style>
