<template>
  <div class="peopleTrial">
    <Elsearch :searchSettings="searchSettings" :searchBtn="searchBtn" @add="add"></Elsearch>
    <div class="peopleTrial_table">
      <h3>参加活动人员背审信息</h3>
      <Eltable :tableHead="tableHead" :tableDatas="tableDatas" :tableSettings="tableSettings" @modify="modify" @del="del" @detailed="detailed"></Eltable>
    </div>
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
      { placeholder: '所属分局', type: 'select' },
      { placeholder: '举办日期', type: 'input' },
      { placeholder: '活动类型', type: 'input' },
      { placeholder: '人员类型', type: 'input' },
      { placeholder: '请输入活动编码、活动名称、场馆名称', type: 'input' }
    ],
    searchBtn: [
      { name: '查询', type: 'search' },
      { name: '新增', type: 'add' }
    ],
    tableHead: [
      { label: '序号', prop: 'input' },
      { label: '姓名', prop: 'input' },
      { label: '性别', prop: 'input' },
      { label: '证件号码', prop: 'input' },
      { label: '参加活动名称', prop: 'input' }
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
      { label: '姓名', type: 'input' },
      { label: '曾用名', type: 'input' },
      { label: '常用证件代码', type: 'input' },
      { label: '常用证件代码', type: 'input' },
      { label: '证件号码', type: 'input' },
      { label: '性别代码', type: 'input' },
      { label: '民族代码', type: 'input' },
      { label: '国籍代码', type: 'input' },
      { label: '籍贯/地区代码', type: 'input' },
      { label: '职业', type: 'input' },
      { label: '服务处所', type: 'input' },
      { label: '地址名称', type: 'input' },
      { label: '移动电话', type: 'input' },
      { label: '是否前科人员', type: 'input' },
      { label: '是否在逃人员', type: 'input' },
      { label: '是否极端分子', type: 'input' },
      { label: '是否非访人员', type: 'input' },
      { label: '是否涉恐人员', type: 'input' },
      { label: '是否吸毒人员', type: 'input' },
      { label: '是否精神病人', type: 'input' },
      { label: '重点人员编号', type: 'input' },
      { label: '审查时间', type: 'input' }
    ]
  }),
  created () { },
  methods: {
    add (row) {
      this.title = '人员背审信息新增'
      this.readOnly = false
      this.isShow = true
    },
    modify () {
      this.title = '人员背审信息修改'
      this.readOnly = false
      this.isShow = true
    },
    del (row) {
      console.log(row)
    },
    detailed () {
      this.title = '人员背审信息详情'
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
.peopleTrial {
  width: 100%;
  padding-right: 0.2rem;
  box-sizing: border-box;
  .peopleTrial_table {
    margin-top: 0.2rem;
    border: 1px solid #3e5568;
    padding: 0.2rem;
    box-sizing: border-box;
    h3 {
      color: #00ffff;
      font-size: 0.18rem;
    }
    .table {
      margin-top: 0.2rem;
    }
  }
}
</style>
