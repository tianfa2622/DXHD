<template>
  <div class="releaseRegion">
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
      { placeholder: '所属区域', type: 'select' },
      { placeholder: '布控人', type: 'input' },
      { placeholder: '布控事件', type: 'input' },
      { placeholder: '请输入布控电话，地球经度及纬度', type: 'input' }
    ],
    searchBtn: [
      { name: '查询', type: 'search' }
    ],
    tableHead: [
      { label: '序号', prop: 'input' },
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
      { name: '解控', type: 'delete' }
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
      { label: '地球纬度', type: 'input' },
      { label: '请输入被布控区域解控原因', type: 'textarea' }
    ]
  }),
  created () { },
  methods: {
    del (row) {
      console.log(row)
      this.title = '区域布控解控'
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
.releaseRegion {
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
