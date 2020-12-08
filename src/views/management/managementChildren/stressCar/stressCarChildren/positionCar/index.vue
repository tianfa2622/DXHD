<template>
  <div class="positionCar">
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
      { placeholder: '重点车辆编号', type: 'input' },
      { placeholder: '重点车辆牌号', type: 'input' },
      { placeholder: '请输人地球经度，地球纬度', type: 'input' }
    ],
    searchBtn: [
      { name: '查询', type: 'search' },
      { name: '新增', type: 'add' }
    ],
    tableHead: [
      { label: '编号', prop: 'input' },
      { label: '入库时间', prop: 'input' },
      { label: '重点车辆编号', prop: 'input' },
      { label: '重点车辆牌号', prop: 'input' },
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
      { label: '编号', type: 'input' },
      { label: '入库时间', type: 'input' },
      { label: '重点车辆编号', type: 'input' },
      { label: '重点车辆牌号', type: 'input' },
      { label: '地球经度', type: 'input' },
      { label: '地球纬度', type: 'input' }
    ]
  }),
  created () { },
  methods: {
    add (row) {
      this.title = '重点车辆位置信息新增'
      this.readOnly = false
      this.isShow = true
    },
    modify () {
      this.title = '重点车辆位置信息修改'
      this.readOnly = false
      this.isShow = true
    },
    del (row) {
      console.log(row)
    },
    detailed () {
      this.title = '重点车辆位置信息详情'
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
.positionCar {
  width: 100%;
  margin-top: 0.2rem;
  border: 1px solid #3e5568;
  padding: 0.2rem;
  box-sizing: border-box;
  .table {
    margin-top: 0.2rem;
  }
}
</style>
