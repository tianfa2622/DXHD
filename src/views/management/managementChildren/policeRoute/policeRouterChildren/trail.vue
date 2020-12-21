<template>
  <div class="trail">
    <Elsearch :searchSettings="searchSettings" @add="add" :searchBtn="searchBtn"></Elsearch>
    <Eltable :tableHead="tableHead" :tableSettings="tableSettings" :tableDatas="tableDatas" @modify="modify" @del="del"></Eltable>
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
      { label: '信息主键编号', prop: 'input' },
      { label: '安保路线编号', prop: 'input' },
      { label: '路线顶点信息', prop: 'input' },
      { label: '顶点编号', prop: 'input' },
      { label: '地球经度', prop: 'input' },
      { label: '地球纬度', prop: 'input' }
    ],
    tableDatas: Array(5).fill({
      input: '123'
    }),
    searchSettings: [
      { placeholder: '安保路线编号', type: 'select' },
      { placeholder: '顶点编号', type: 'input' },
      { placeholder: '地球经度', type: 'input' },
      { placeholder: '地球纬度', type: 'input' }
    ],
    searchBtn: [
      { name: '查询', type: 'search' },
      { name: '新增', type: 'add' }
    ],
    tableSettings: [
      { name: '修改', type: 'modify' },
      { name: '删除', type: 'delete' }
    ],
    dialogs: [
      { label: '信息主键编号', type: 'input' },
      { label: '安保路线编号', type: 'input' },
      { label: '路线顶点信息', type: 'input' },
      { label: '顶点编号', type: 'input' },
      { label: '地球经度', type: 'input' },
      { label: '地球纬度', type: 'input' }
    ],
    form: {}
  }),
  created () { },
  methods: {
    add (row) {
      console.log(row)
      this.readOnly = false
      this.title = '安保路线轨迹信息新增'
      this.isShow = true
    },
    modify (row) {
      console.log(row)
      this.readOnly = false
      this.title = '安保路线轨迹信息修改'
      this.isShow = true
    },
    del (row) {
      console.log(row)
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
.trail {
  .table {
    margin-top: 0.2rem;
  }
}
</style>
