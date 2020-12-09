<template>
  <div class="study">
    <Elsearch :searchSettings="searchSettings" :searchBtn="searchBtn" @add="add"></Elsearch>
    <Eltable :tableHead="tableHead" :tableSettings="tableSettings" :tableDatas="tableDatas" @modify="modify" @del="del" @detailed="detailed"></Eltable>
    <div class="study_t">
      <div class="l">
        <PieL1></PieL1>
      </div>
      <div class="r"><PieR1></PieR1></div>
    </div>
    <div class="study_t">
      <div class="l">
        <PieL2></PieL2>
      </div>
      <div class="r"><PieR2></PieR2></div>
    </div>
    <Dialog :title="title" :isShow="isShow" :readOnly="readOnly" :dialogs="dialogs" @close="close"></Dialog>
  </div>
</template>
<script>
import Eltable from '@/components/table'
import Elsearch from '@/components/search'
import Dialog from '@/components/dialog'
import PieL1 from '@/components/business_com/study/pieL1'
import PieL2 from '@/components/business_com/study/pieL2'
import PieR1 from '@/components/business_com/study/pieR1'
import PieR2 from '@/components/business_com/study/pieR2'
export default {
  data: () => ({
    input: '',
    title: '',
    isShow: false,
    readOnly: true,
    tableHead: [
      { label: '活动编号', prop: 'input' },
      { label: '情报信息', prop: 'input' },
      { label: '情报来源', prop: 'input' },
      { label: '情报类型', prop: 'input' },
      { label: '情报条目', prop: 'input' },
      { label: '情报时间', prop: 'input' },
      { label: '公安机关机构代码', prop: 'input' }
    ],
    tableDatas: Array(5).fill({
      input: '123'
    }),
    tableSettings: [
      { name: '修改', type: 'modify' },
      { name: '删除', type: 'delete' },
      { name: '详情', type: 'detailed' }
    ],
    searchSettings: [
      { placeholder: '活动编号', type: 'input' },
      { placeholder: '情报类型', type: 'select' },
      { placeholder: '请输入情报条目，公安机关机构代码', type: 'input' }
    ],
    searchBtn: [
      { name: '查询', type: 'search' },
      { name: '新增', type: 'add' }
    ],
    dialogs: [
      { label: '活动编码', type: 'input' },
      { label: '情报信息', type: 'input' },
      { label: '情报来源', type: 'input' },
      { label: '情报类型', type: 'input' },
      { label: '情报条目', type: 'input' },
      { label: '情报信息', type: 'input' },
      { label: '情报时间', type: 'input' },
      { label: '公安机关机构代码', type: 'input' }
    ],
    form: {}
  }),
  created () { },
  methods: {
    add (row) {
      console.log(row)
      this.readOnly = false
      this.title = '情报研判新增'
      this.isShow = true
    },
    modify (row) {
      console.log(row)
      this.readOnly = false
      this.title = '情报研判修改'
      this.isShow = true
    },
    del (row) {
      console.log(row)
    },
    detailed (row) {
      console.log(row)
      this.readOnly = true
      this.title = '情报研判详情'
      this.isShow = true
    },
    close () {
      this.isShow = false
    }
  },
  components: {
    Eltable, Elsearch, Dialog, PieL1, PieR1, PieL2, PieR2
  }
}
</script>
<style lang="scss">
.study {
  width: 100%;
  box-sizing: border-box;
  display: flex;
  flex-wrap: wrap;
  padding-right: 0.2rem;
  box-sizing: border-box;
  .table {
    margin-top: 0.2rem;
  }
  .study_t {
    width: 100%;
    display: flex;
    justify-content: space-between;
    height: 4rem;
    margin-top: 0.2rem;
    .l,
    .r {
      width: 45%;
    }
  }
}
</style>
