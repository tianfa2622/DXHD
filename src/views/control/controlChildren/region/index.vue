<template>
  <div class="region">
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
      { placeholder: '所属区域', type: 'input' },
      { placeholder: '布控人', type: 'input' },
      { placeholder: '布控事件', type: 'input' },
      { placeholder: '请输入布控电话，地球经度及纬度', type: 'input' }
    ],
    searchBtn: [
      { name: '查询', type: 'search' },
      { name: '新增', type: 'add' }
    ],
    tableHead: [
      { label: '所属区域', prop: 'input' },
      { label: '布控人', prop: 'input' },
      { label: '布控人电话', prop: 'input' },
      { label: '布控事件', prop: 'input' },
      { label: '地球经度', prop: 'input' },
      { label: '地球纬度', prop: 'input' }
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
      { label: '所属区域', type: 'input' },
      { label: '区域名称', type: 'input' },
      { label: '布控开始时间', type: 'input' },
      { label: '布控结束时间', type: 'input' },
      { label: '布控事件', type: 'input' },
      { label: '布控人', type: 'input' },
      { label: '布控人电话', type: 'input' },
      { label: '联系人一', type: 'input' },
      { label: '联系人电话一', type: 'input' },
      { label: '联系人二', type: 'input' },
      { label: '联系人电话二', type: 'input' },
      { label: '事由详情', type: 'input' },
      { label: '地球经度', type: 'input' },
      { label: '地球纬度', type: 'input' }
    ]
  }),
  created () { },
  methods: {
    add (row) {
      this.title = '民警信息新增'
      this.readOnly = false
      this.isShow = true
    },
    modify () {
      this.title = '民警信息修改'
      this.readOnly = false
      this.isShow = true
    },
    del (row) {
      console.log(row)
    },
    detailed () {
      this.title = '民警信息详情'
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
.region {
  width: 100%;
  padding-right: 0.2rem;
  box-sizing: border-box;
  .table {
    margin-top: 0.2rem;
  }
}
</style>
