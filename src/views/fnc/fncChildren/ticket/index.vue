<template>
  <div class="ticket">
    <Elsearch :searchSettings="searchSettings" :searchBtn="searchBtn"></Elsearch>
    <Eltable :tableHead="tableHead" :tableDatas="tableDatas" :tableSettings="tableSettings" @del="del" @detailed="detailed"></Eltable>
    <Dialog :title="title" :isShow="isShow" :readOnly="readOnly" :dialogs="dialogs" @close="close"></Dialog>
  </div>
</template>
<script>
import Elsearch from '@/components/search'
import Eltable from '@/components/table'
import Dialog from '@/components/dialog'
export default {
  data: () => ({
    title: '',
    isShow: false,
    readOnly: true,
    searchSettings: [
      { placeholder: '姓名', type: 'input' },
      { placeholder: '购票编号', type: 'input' },
      { placeholder: '请输入份证号码', type: 'input' },
      { placeholder: '请输入活动编号，联系电话，入场时间', type: 'input' }
    ],
    searchBtn: [
      { name: '查询', type: 'search' }
    ],
    tableHead: [
      { label: '序号', prop: 'input' },
      { label: '活动编号', prop: 'input' },
      { label: '购票信息', prop: 'input' },
      { label: '购票编号', prop: 'input' },
      { label: '购票时间', prop: 'input' }
    ],
    tableDatas: Array(5).fill({
      input: '123'
    }),
    tableSettings: [
      { name: '详情', type: 'detailed' },
      { name: '删除', type: 'delete' }
    ],
    dialogs: [
      { label: '信息主键编号', type: 'input' },
      { label: '姓名', type: 'input' },
      { label: '活动编号', type: 'input' },
      { label: '公民身份号码', type: 'input' },
      { label: '购票信息', type: 'input' },
      { label: '联系电话', type: 'input' },
      { label: '购票编号', type: 'input' },
      { label: '是否入场', type: 'input' },
      { label: '购票时间', type: 'input' },
      { label: '入场时间', type: 'input' }
    ]
  }),
  created () { },
  methods: {
    del (row) {
      console.log(row)
    },
    detailed () {
      this.title = '详情'
      this.readOnly = true
      this.isShow = true
    },
    close () {
      this.isShow = false
    }
  },
  components: { Elsearch, Eltable, Dialog }
}
</script>
<style lang="scss">
.ticket {
  width: 100%;
  padding-right: 0.2rem;
  box-sizing: border-box;
  .table {
    border: 1px solid #3e5568;
    margin-top: 0.2rem;
    padding: 0.2rem;
    box-sizing: border-box;
  }
}
</style>
