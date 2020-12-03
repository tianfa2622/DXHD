<template>
  <div class="activityJournal">
    <Eltable :tableHead="tableHead" :operateShow="false" :tableDatas="tableDatas"></Eltable>
  </div>
</template>
<script>
import Eltable from '@/components/table'
export default {
  data: () => ({
    tableHead: [
      { label: '序号', prop: 'input' },
      { label: '活动名称', prop: 'input' },
      { label: '操作内容', prop: 'input' },
      { label: '操作时间', prop: 'input' },
      { label: '操作账号', prop: 'input' },
      { label: '备注', prop: 'input' }
    ],
    tableDatas: []
  }),
  created () { },
  methods: {

  },
  components: { Eltable }
}
</script>
<style lang="scss">
.activityJournal {
  .table {
    margin-top: 0.2rem;
  }
}
</style>
