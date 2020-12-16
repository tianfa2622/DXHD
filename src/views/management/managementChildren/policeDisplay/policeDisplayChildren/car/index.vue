<template>
  <div class="car">
    <Elsearch :searchSettings="searchSettings" :searchBtn="searchBtn" @add="addCar"></Elsearch>
    <Eltable :tableHead="tableHead" :tableDatas="tableDatas" :tableSettings="tableSettings" @modify="modifyCar" @del="del" @detailed="detailedCar"></Eltable>
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
      { placeholder: '巡逻车标识', type: 'input' },
      { placeholder: '机动车车牌号码', type: 'input' },
      { placeholder: '请输入公安机关机构代码，公安机关名称', type: 'input' }
    ],
    searchBtn: [
      { name: '查询', type: 'search' },
      { name: '新增', type: 'add' }
    ],
    tableHead: [
      { label: '巡逻车标识', prop: 'input' },
      { label: '机动车车牌号码', prop: 'input' },
      { label: '行政区划代码', prop: 'input' },
      { label: '公安机关机构代码', prop: 'input' },
      { label: '公安机关名称', prop: 'input' },
      { label: '机动车车辆类型代码', prop: 'input' }
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
      { label: '巡逻车标识', type: 'input' },
      { label: '公安机关机构代码', type: 'input' },
      { label: '机动车车牌号码', type: 'input' },
      { label: '公安机关名称', type: 'input' },
      { label: '行政区划代码', type: 'input' },
      { label: '机动车车辆类型代码', type: 'input' }
    ]
  }),
  created () { },
  methods: {
    addCar (row) {
      this.title = '警车基本数据信息新增'
      this.readOnly = false
      this.isShow = true
    },
    modifyCar () {
      this.title = '警车基本数据信息修改'
      this.readOnly = false
      this.isShow = true
    },
    del (row) {
      console.log(row)
    },
    detailedCar () {
      this.title = '警车基本数据信息详情'
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
.car {
  width: 100%;
  margin-top: 0.2rem;
  .table {
    margin-top: 0.2rem;
  }
}
</style>
