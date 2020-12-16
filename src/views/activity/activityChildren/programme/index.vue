<template>
  <div class="programme">
    <Elsearch :searchSettings="searchSettings" :searchBtn="searchBtn" @add="add"></Elsearch>
    <Eltable :tableHead="tableHead" :tableSettings="tableSettings" :tableDatas="tableDatas" @detailed="detailed" @modify="modify" @del="del"></Eltable>
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
      { name: '查询', type: 'search' },
      { name: '新增', type: 'add' }
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
      { name: '修改', type: 'modify' },
      { name: '删除', type: 'delete' },
      { name: '详情', type: 'detailed' }
    ]
  }),
  created () { },
  methods: {
    detailed (row) {
      this.$router.push({
        name: 'programmes',
        params: {
          status: 'detailed',
          id: row.input
        }
      })
    },
    add () {
      this.$router.push({
        name: 'programmes',
        params: {
          status: 'add'
        }
      })
    },
    modify (row) {
      this.$router.push({
        name: 'programmes',
        params: {
          status: 'modify',
          id: row.input
        }
      })
    },
    del (row) {
      console.log(row)
    }
  },
  components: { Elsearch, Eltable }
}
</script>
<style lang="scss">
.programme {
  width: 100%;
  padding-right: 0.2rem;
  box-sizing: border-box;
  .el-form {
    .btn:last-child {
      margin-right: 0;
    }
  }
  .table {
    margin-top: 0.2rem;
    width: 100%;
  }
}
</style>
