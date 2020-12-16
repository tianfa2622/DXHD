<template>
  <div class="sociologyCar">
    <div class="sociologyCar_head">
      <Elsearch :searchSettings="searchSettings" @add="add" :searchBtn="searchBtn"></Elsearch>
    </div>
    <div class="sociologyCar_table">
      <Eltable :tableHead="tableHead" :tableSettings="tableSettings" :tableDatas="tableDatas" @modify="modify" @del="del" @detailed="detailed"></Eltable>
    </div>
    <Dialog :title="title" :isShow="isShow" :readOnly="readOnly" :dialogs="dialogs" @close="close"></Dialog>
  </div>
</template>
<script>
import Eltable from '@/components/table'
import Elsearch from '@/components/search'
import Dialog from '@/components/dialog'
export default {
  data: () => ({
    title: '',
    isShow: false,
    readOnly: true,
    tableHead: [
      { label: '编号', prop: 'input' },
      { label: '机动车信息', prop: 'input' },
      { label: '机动车车牌号码', prop: 'input' },
      { label: '中文品牌名称', prop: 'input' },
      { label: '英文品牌名称', prop: 'input' },
      { label: '机动车车身颜色代码', prop: 'input' }
    ],
    tableDatas: Array(5).fill({
      input: '123'
    }),
    searchSettings: [
      { placeholder: '机动车车牌号', type: 'input' },
      { placeholder: '车辆负责人', type: 'input' },
      { placeholder: '车辆司机', type: 'input' },
      { placeholder: '请输人机动车车牌号码，车辆型号', type: 'input' }
    ],
    searchBtn: [
      { name: '查询', type: 'search' },
      { name: '新增', type: 'add' }
    ],
    tableSettings: [
      { name: '修改', type: 'modify' },
      { name: '删除', type: 'delete' },
      { name: '详情', type: 'detailed' }
    ],
    dialogs: [
      { label: '编号', type: 'input' },
      { label: '车辆用途', type: 'input' },
      { label: '机动车信息', type: 'input' },
      { label: '车辆负责人', type: 'input' },
      { label: '机动车车牌号码', type: 'input' },
      { label: '车辆司机', type: 'input' },
      { label: '中文品牌名称', type: 'input' },
      { label: '车辆出发时间', type: 'input' },
      { label: '英文品牌名称', type: 'input' },
      { label: '车辆出发地', type: 'input' },
      { label: '机动车车身代码', type: 'input' },
      { label: '车辆目的地', type: 'input' },
      { label: '车辆型号', type: 'input' }
    ],
    form: {}
  }),
  created () { },
  methods: {
    add (row) {
      console.log(row)
      this.readOnly = false
      this.title = '社会车辆管理新增'
      this.isShow = true
    },
    modify (row) {
      console.log(row)
      this.readOnly = false
      this.title = '社会车辆管理修改'
      this.isShow = true
    },
    del (row) {
      console.log(row)
    },
    detailed (row) {
      console.log(row)
      this.readOnly = true
      this.title = '社会车辆管理详情'
      this.isShow = true
    },
    close () {
      this.isShow = false
    }
  },
  components: {
    Eltable, Elsearch, Dialog
  }
}
</script>
<style lang="scss">
.sociologyCar {
  width: 100%;
  padding-right: 0.2rem;
  box-sizing: border-box;
  display: flex;
  flex-wrap: wrap;
  .sociologyCar_head {
    width: 80%;
    height: 0.4rem;
    display: flex;
  }
  .sociologyCar_table {
    margin-top: 0.2rem;
    width: 100%;
  }
  .sociologyCar_ring {
    width: 100%;
    height: 4rem;
    padding-top: 0.2rem;
    box-sizing: border-box;
    h3 {
      color: #fff;
      width: 2rem;
      height: 0.5rem;
      line-height: 0.5rem;
      text-align: center;
      font-size: 0.18rem;
      border-bottom: 1px solid#797979;
    }
    .ring {
      width: 100%;
      height: calc(100% - 0.5rem);
    }
  }
}
</style>
