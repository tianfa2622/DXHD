<template>
  <div class="trial">
    <Elsearch :searchSettings="searchSettings" :searchBtn="searchBtn"></Elsearch>
    <Eltable :tableHead="tableHead" :operateShow="false" :tableDatas="tableDatas"></Eltable>
  </div>
</template>
<script>
import Elsearch from '@/components/search'
import Eltable from '@/components/table'
export default {
  data: () => ({
    searchSettings: [
      { placeholder: '活动编码', type: 'input' },
      { placeholder: '活动类型', type: 'select' },
      { placeholder: '请输入活动编码、活动名称', type: 'input' }
    ],
    searchBtn: [
      { name: '查询', type: 'search' }
    ],
    tableHead: [
      { label: '活动编号', prop: 'input' },
      { label: '活动名称', prop: 'input' },
      { label: '活动类型', prop: 'input' },
      { label: '场馆名称', prop: 'input' },
      { label: '举办日期', prop: 'input' },
      { label: '参加活动人员', prop: 'input' },
      { label: '活动安保人员', prop: 'input' },
      { label: '活动工作人员', prop: 'input' }
    ],
    tableDatas: Array(5).fill({
      input: '123'
    })
  }),
  created () { },
  methods: {},
  components: { Elsearch, Eltable }
}
</script>
<style lang="scss">
.trial {
  width: 100%;
  .el-form {
    margin-bottom: 0.2rem;
  }
  .table {
    margin-top: 0.2rem;
    width: 100%;
    padding: 0.2rem;
    box-sizing: border-box;
    border: 1px solid #3e5568;
  }
}
</style>
