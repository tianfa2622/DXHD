<template>
  <div class="polic">
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
      { placeholder: '执勤民警标识', type: 'input' },
      { placeholder: '姓名', type: 'input' },
      { placeholder: '请输入公安机关机构代码，公安机关名称，公民身份证号码', type: 'input' }
    ],
    searchBtn: [
      { name: '查询', type: 'search' },
      { name: '新增', type: 'add' }
    ],
    tableHead: [
      { label: '执勤民警标识', prop: 'input' },
      { label: '姓名', prop: 'input' },
      { label: '警员编号', prop: 'input' },
      { label: '公安机关机构代码', prop: 'input' },
      { label: '公安机关名称', prop: 'input' },
      { label: '公民身份证号码', prop: 'input' }
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
      { label: '执勤民警标识', type: 'input' },
      { label: '民警姓名', type: 'input' },
      { label: '执勤区域', type: 'input' },
      { label: '民警类别代码', type: 'input' },
      { label: '警员编号', type: 'input' },
      { label: '警龄', type: 'input' },
      { label: '警衔与文职级别代码', type: 'input' },
      { label: '勤务装备类型', type: 'input' },
      // { label: '勤务装备', type: 'input' },
      { label: '勤务装备纬度', type: 'input' },
      { label: '勤务装备经度', type: 'input' },
      { label: '公安机关名称', type: 'input' },
      { label: '公安机构代码', type: 'input' },
      { label: '身份证号码', type: 'input' },
      { label: '公安部门类别代码', type: 'input' },
      { label: '民族代码', type: 'input' },
      { label: '年龄', type: 'input' },
      { label: '性别代码', type: 'input' },
      { label: '籍贯代码', type: 'input' },
      { label: '学历代码', type: 'input' },
      { label: '地址名称', type: 'input' },
      { label: '政治面貌', type: 'input' },
      { label: '婚姻状况', type: 'input' }
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
.polic {
  width: 100%;
  margin-top: 0.2rem;
  .table {
    margin-top: 0.2rem;
  }
}
</style>
