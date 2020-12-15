<template>
  <div class="releasePeople">
    <Elsearch :searchSettings="searchSettings" :searchBtn="searchBtn"></Elsearch>
    <Eltable :tableHead="tableHead" :tableDatas="tableDatas" :tableSettings="tableSettings" @del="del"></Eltable>
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
    readOnly: false,
    searchSettings: [
      { placeholder: '请输入被布控人姓名', type: 'input' },
      { placeholder: '', type: 'datas' },
      { placeholder: '请输被布控人证件号码', type: 'input' },
      { placeholder: '请输入布控姓名', type: 'input' }
    ],
    searchBtn: [
      { name: '查询', type: 'search' }
    ],
    tableHead: [
      { label: '序号', prop: 'input' },
      { label: '被布控人姓名', prop: 'input' },
      { label: '被布控人证件号', prop: 'input' },
      { label: '布控时间', prop: 'input' },
      { label: '布控人姓名', prop: 'input' }
    ],
    tableDatas: Array(5).fill({
      input: '123'
    }),
    tableSettings: [
      { name: '解控', type: 'delete' }
    ],
    dialogs: [
      { label: '被布控人姓名', type: 'input' },
      { label: '证件号码', type: 'input' },
      { label: '证件类型', type: 'input' },
      { label: '民族', type: 'input' },
      { label: '籍贯', type: 'input' },
      { label: '性别', type: 'input' },
      { label: '出生日期', type: 'input' },
      { label: '住址', type: 'input' },
      { label: '电话', type: 'input' },
      { label: '身高', type: 'input' },
      { label: '体型特征', type: 'input' },
      { label: '口音', type: 'input' },
      { label: '绰号', type: 'input' },
      { label: '化名', type: 'input' },
      { label: '取消人员布控原因', type: 'textarea' }
    ]
  }),
  created () { },
  methods: {
    del (row) {
      console.log(row)
      this.title = '人员布控解控'
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
.releasePeople {
  width: 100%;
  margin-top: 0.2rem;
  .table {
    margin-top: 0.2rem;
  }
  .el-dialog__wrapper {
    .el-dialog {
      .el-dialog__body {
        .el-form {
          .el-form-item:last-child {
            width: 100% !important;
          }
        }
      }
    }
  }
}
</style>
