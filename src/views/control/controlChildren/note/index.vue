<template>
  <div class="note">
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
      { placeholder: '请选择被布控人姓名', type: 'input' },
      { placeholder: '请输入民族', type: 'input' },
      { placeholder: '请输入证件号码', type: 'input' }
    ],
    searchBtn: [
      { name: '查询', type: 'search' },
      { name: '新增', type: 'add' }
    ],
    tableHead: [
      { label: '被布控人姓名', prop: 'input' },
      { label: '民族', prop: 'input' },
      { label: '出生日期', prop: 'input' },
      { label: '证件号码', prop: 'input' },
      { label: '籍贯', prop: 'input' },
      { label: '住址', prop: 'input' }
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
      { label: '被布控人姓名', type: 'input' },
      { label: '证件号码', type: 'input' },
      { label: '证件类型', type: 'input' },
      { label: '民族', type: 'input' },
      { label: '籍贯', type: 'input' },
      { label: '性别', type: 'input' },
      { label: '出生日期', type: 'input' },
      { label: '住址', type: 'input' },
      { label: '电话', type: 'input' },
      { label: '身高', type: 'input' },
      { label: '体型特征', type: 'input' },
      { label: '口音', type: 'input' },
      { label: '绰号', type: 'input' },
      { label: '化名', type: 'input' }
    ]
  }),
  created () { },
  methods: {
    add (row) {
      this.title = '被布控人基础信息新增'
      this.readOnly = false
      this.isShow = true
    },
    modify () {
      this.title = '被布控人基础信息修改'
      this.readOnly = false
      this.isShow = true
    },
    del (row) {
      console.log(row)
    },
    detailed () {
      this.title = '被布控人基础信息详情'
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
.note {
  width: 100%;
  padding-right: 0.2rem;
  box-sizing: border-box;
  .table {
    margin-top: 0.2rem;
  }
}
</style>
