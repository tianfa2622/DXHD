<template>
  <div class="policeRoute">
    <Elsearch :searchSettings="searchSettings" :searchBtn="searchBtn" @add="add"></Elsearch>
    <Eltable :tableHead="tableHead" :tableDatas="tableDatas" :tableSettings="tableSettings" @modify="modify" @del="del" @detailed="detailed"></Eltable>
    <BdMap :center="center" :zoom="zoom"></BdMap>
    <Dialog :title="title" :isShow="isShow" :readOnly="readOnly" :dialogs="dialogs" @close="close"></Dialog>
  </div>
</template>
<script>
import Elsearch from '@/components/search'
import Eltable from '@/components/table'
import Dialog from '@/components/dialog'
import BdMap from '@/components/management_com/map'
export default {
  data: () => ({
    title: '',
    isShow: false,
    readOnly: true,
    searchSettings: [
      { placeholder: '安保路线编号', type: 'select' },
      { placeholder: '公安机关机构代码', type: 'input' },
      { placeholder: '公安机关名称', type: 'input' }
    ],
    searchBtn: [
      { name: '查询', type: 'search' },
      { name: '新增', type: 'add' }
    ],
    tableHead: [
      { label: '信息主键编号', prop: 'input' },
      { label: '安保路线', prop: 'input' },
      { label: '安保路线编号', prop: 'input' },
      { label: '公安机关机构代码', prop: 'input' },
      { label: '公安机关名称', prop: 'input' },
      { label: '开始时间', prop: 'input' },
      { label: '结束时间', prop: 'input' }
    ],
    tableDatas: Array(5).fill({
      input: '123'
    }),
    tableSettings: [
      { name: '修改', type: 'modify' },
      { name: '删除', type: 'delete' },
      { name: '详情', type: 'detailed' },
      { name: '查看新增路线', type: 'download' }
    ],
    dialogs: [
      { label: '信息主键编号', type: 'input' },
      { label: '公安机关名称', type: 'input' },
      { label: '安保路线', type: 'input' },
      { label: '开始时间', type: 'input' },
      { label: '安保路线编号', type: 'input' },
      { label: '结束时间', type: 'input' },
      { label: '公安机关机构代码', type: 'input' }
    ],
    center: { lng: 112.98941034779713, lat: 28.18392487724562 },
    zoom: 17
  }),
  created () { },
  components: { Elsearch, Eltable, Dialog, BdMap },
  methods: {
    add (row) {
      this.title = '安保路线新增'
      this.readOnly = false
      this.isShow = true
    },
    modify () {
      this.title = '安保路线修改'
      this.readOnly = false
      this.isShow = true
    },
    del (row) {
      console.log(row)
    },
    detailed () {
      this.title = '安保路线详情'
      this.readOnly = true
      this.isShow = true
    },
    close () {
      this.isShow = false
    }
  }
}
</script>
<style lang="scss">
.policeRoute {
  width: 100%;
  border: 1px solid #3e5568;
  padding: 0.2rem;
  box-sizing: border-box;
  .table {
    margin: 0.2rem 0;
  }
  .bm-view {
    width: 50%;
    height: 4rem;
  }
}
</style>
