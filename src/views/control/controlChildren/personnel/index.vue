<template>
  <div class="personnel">
    <Elsearch :searchSettings="searchSettings" :searchBtn="searchBtn" @add="add"></Elsearch>
    <Eltable :tableHead="tableHead" :tableDatas="tableDatas" :tableSettings="tableSettings" @modify="modify" @del="del" @detailed="detailed"></Eltable>
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
      { placeholder: '选择所属分局', type: 'input' },
      { placeholder: '请选择派出所', type: 'input' },
      { placeholder: '请输入预警类型', type: 'input' },
      { placeholder: '请输入姓名', type: 'input' },
      { placeholder: '请输入手机号', type: 'input' }
    ],
    searchBtn: [
      { name: '查询', type: 'search' },
      { name: '新增', type: 'add' }
    ],
    tableHead: [
      { label: '所属分局', prop: 'input' },
      { label: '所属派出所', prop: 'input' },
      { label: '预警类型', prop: 'input' },
      { label: '姓名', prop: 'input' },
      { label: '手机号码', prop: 'input' },
      { label: '备注', prop: 'input' }
    ],
    tableDatas: Array(5).fill({
      input: '123'
    }),
    tableSettings: [
      { name: '修改', type: 'modify' },
      { name: '删除', type: 'delete' },
      { name: '详情', type: 'detailed' }
    ],
    dialogs: [
      { label: '所属分局', type: 'input' },
      { label: '所属派出所', type: 'input' },
      { label: '预警类型', type: 'input' },
      { label: '姓名', type: 'input' },
      { label: '手机号', type: 'input' },
      { label: '备注', type: 'input' }
    ]
  }),
  created () { },
  methods: {
    add (row) {
      this.title = '预警信息新增'
      this.readOnly = false
      this.isShow = true
    },
    modify () {
      this.title = '预警信息修改'
      this.readOnly = false
      this.isShow = true
    },
    del (row) {
      console.log(row)
    },
    detailed () {
      this.title = '预警信息详情'
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
.personnel {
  width: 100%;
  padding-right: 0.2rem;
  box-sizing: border-box;
  .table {
    margin-top: 0.2rem;
  }
}
</style>
