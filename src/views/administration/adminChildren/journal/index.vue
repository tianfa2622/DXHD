<template>
  <div class="journal">
    <Elsearch :searchSettings="searchSettings" :searchBtn="searchBtn"></Elsearch>
    <Eltable :tableHead="tableHead" :tableDatas="tableDatas" :operateShow="false"></Eltable>
  </div>
</template>
<script>
import Elsearch from '@/components/search'
import Eltable from '@/components/table'
export default {
  data: () => ({
    searchSettings: [
      { placeholder: '请输入用户名', type: 'input' },
      { placeholder: '请输入操作内容', type: 'input' },
      { placeholder: '', type: 'datas' }
    ],
    searchBtn: [
      { name: '查询', type: 'search' }
    ],
    tableHead: [
      { label: '序号', prop: 'input' },
      { label: '日志时间', prop: 'input' },
      { label: '操作人', prop: 'input' },
      { label: '内容', prop: 'input' }
    ],
    tableDatas: Array(5).fill({
      input: '123'
    })
  }),
  created () { },
  methods: {

  },
  components: { Elsearch, Eltable }
}
</script>
<style lang="scss">
.journal {
  width: 100%;
  padding-right: 0.2rem;
  box-sizing: border-box;
  .table {
    margin-top: 0.2rem;
  }
}
</style>
