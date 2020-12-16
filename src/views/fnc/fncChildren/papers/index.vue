<template>
  <div class="papers">
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
      { placeholder: '活动编号', type: 'input' },
      { placeholder: '身份证号码', type: 'input' },
      { placeholder: '姓名', type: 'input' },
      { placeholder: '请输入证件编号，联系电话', type: 'input' }
    ],
    searchBtn: [
      { name: '查询', type: 'search' }
    ],
    tableHead: [
      { label: '序号', prop: 'input' },
      { label: '活动编号', prop: 'input' },
      { label: '证件信息', prop: 'input' },
      { label: '证件编号', prop: 'input' },
      { label: '制证时间', prop: 'input' }
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
      { label: '联系电话', type: 'input' },
      { label: '证件信息', type: 'input' },
      { label: '公民身份证号码', type: 'input' },
      { label: '证件编号', type: 'input' },
      { label: '是否入场', type: 'input' },
      { label: '制证时间', type: 'input' },
      { label: '入场时间', type: 'input' }
    ]
  }),
  created () { },
  methods: {
    del (row) {
      console.log(row)
    },
    detailed () {
      this.title = '制证信息接入详情'
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
.papers {
  width: 100%;
  padding-right: 0.2rem;
  box-sizing: border-box;
  .table {
    margin-top: 0.2rem;
  }
}
</style>
