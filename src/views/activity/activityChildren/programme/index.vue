<template>
  <div class="programme">
    <Elsearch :searchSettings="searchSettings" :searchBtn="searchBtn"></Elsearch>
    <Eltable :tableHead="tableHead" :tableSettings="tableSettings" :tableDatas="tableDatas" @detailed="detailed"></Eltable>
  </div>
</template>
<script>
import Elsearch from '@/components/search'
import Eltable from '@/components/table'
export default {
  data: () => ({
    searchSettings: [
      { placeholder: '所属分局', type: 'select' },
      { placeholder: '申请时间', type: 'data' },
      { placeholder: '活动类型', type: 'select' },
      { placeholder: '活动状态', type: 'select' },
      { placeholder: '请输入活动编码、活动名称、场馆名称', type: 'input' }
    ],
    searchBtn: [
      { name: '查询', type: 'search' }
    ],
    tableHead: [
      { label: '所属分局', prop: 'input' },
      { label: '活动编号', prop: 'input' },
      { label: '活动名称', prop: 'input' },
      { label: '活动类型', prop: 'input' },
      { label: '人数', prop: 'input' },
      { label: '场馆名称', prop: 'input' },
      { label: '主办单位', prop: 'input' },
      { label: '举办日期', prop: 'input' },
      { label: '活动状态', prop: 'input' }
    ],
    tableDatas: Array(5).fill({
      input: '123'
    }),
    tableSettings: [
      { name: '详情', type: 'detailed' }
    ]
  }),
  created () { },
  methods: {
    detailed (row) {
      this.$router.push({
        path: `/activity/programme/${row}`
      })
    }
  },
  components: { Elsearch, Eltable }
}
</script>
<style lang="scss">
.programme {
  width: 100%;
  .table {
    margin-top: 0.2rem;
    width: 100%;
    padding: 0.2rem;
    box-sizing: border-box;
    border: 1px solid #3e5568;
  }
}
</style>
