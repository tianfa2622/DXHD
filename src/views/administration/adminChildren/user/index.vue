<template>
  <div class="user">
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
      { placeholder: '请输入用户角色', type: 'input' },
      { placeholder: '请输入身份证号', type: 'input' },
      { placeholder: '请输入用户姓名', type: 'input' }
    ],
    searchBtn: [
      { name: '查询', type: 'search' },
      { name: '新增', type: 'add' }
    ],
    tableHead: [
      { label: '用户账号', prop: 'input' },
      { label: '所属角色', prop: 'input' },
      { label: '所属单位', prop: 'input' },
      { label: '警号', prop: 'input' }
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
      { label: '所属角色', type: 'input' },
      { label: '所属单位', type: 'input' },
      { label: '警号', type: 'input' },
      { label: '用户姓名', type: 'input' },
      { label: '身份证号', type: 'input' },
      { label: '联系电话', type: 'input' },
      { label: '用户密码', type: 'input' },
      { label: '确认密码', type: 'input' }
    ]
  }),
  created () { },
  methods: {
    add (row) {
      this.title = '用户新增'
      this.readOnly = false
      this.isShow = true
    },
    modify () {
      this.title = '用户修改'
      this.readOnly = false
      this.isShow = true
    },
    del (row) {
      console.log(row)
    },
    detailed () {
      this.title = '用户详情'
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
.user {
  width: 100%;
  padding-right: 0.2rem;
  box-sizing: border-box;
  .table {
    margin-top: 0.2rem;
  }
}
</style>
