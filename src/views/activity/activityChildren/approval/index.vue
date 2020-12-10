<template>
  <div class="approval">
    <Elsearch :searchSettings="searchSettings" :searchBtn="searchBtn" @add="add"></Elsearch>
    <div class="approval_body">
      <Eltable :tableHead="tableHead" :tableSettings="tableSettings" :tableDatas="tableDatas" @detailed="detailed"></Eltable>
    </div>
    <Dialog
      :title="title"
      :isShow="isShow"
      :elFormShow="true"
      :tableHead="dialogsTableHead"
      :tableSettings="dialogsTableSettings"
      :tableDatas="dialogsTableDatas"
      :readOnly="readOnly"
      :dialogs="dialogs"
      @close="close"
    ></Dialog>
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
      { placeholder: '所属分局', type: 'select' },
      { placeholder: '申请时间', type: 'data' },
      { placeholder: '活动类型', type: 'select' },
      { placeholder: '审批状态', type: 'select' },
      { placeholder: '请输入活动编码、活动名称、场馆名称', type: 'input' }
    ],
    searchBtn: [
      { name: '查询', type: 'search' }
    ],
    tableHead: [
      { label: '所属分局', prop: 'input' },
      { label: '活动编号', prop: 'input' },
      { label: '活动名称', prop: 'input' },
      { label: '活动类型', prop: 'input' },
      { label: '人数', prop: 'input' },
      { label: '场馆名称', prop: 'input' },
      { label: '主办单位', prop: 'input' },
      { label: '举办日期', prop: 'input' },
      { label: '审批状态', prop: 'input' }
    ],
    dialogsTableHead: [
      { label: '序号', prop: 'input' },
      { label: '文件名称', prop: 'input' },
      { label: '文件格式', prop: 'input' },
      { label: '文件大小', prop: 'input' }
    ],
    dialogs: [
      { label: '所属分局', type: 'input' },
      { label: '所属派出所', type: 'input' },
      { label: '活动编号', type: 'input' },
      { label: '活动名称', type: 'input' },
      { label: '活动类型', type: 'input' },
      { label: '人数', type: 'input' },
      { label: '场馆编码', type: 'input' },
      { label: '场馆名称', type: 'input' },
      { label: '主办单位', type: 'input' },
      { label: '承办单位', type: 'input' },
      { label: '安保单位', type: 'input' },
      { label: '举办日期', type: 'input' },
      { label: '举办地点', type: 'input' },
      { label: '申请人姓名', type: 'input' },
      { label: '联系人', type: 'input' },
      { label: '联系人电话', type: 'input' },
      { label: '活动内容', type: 'input' }
    ],
    tableDatas: Array(5).fill({
      input: '123'
    }),
    dialogsTableDatas: Array(5).fill({
      input: '123'
    }),
    tableSettings: [
      { name: '详情', type: 'detailed' }
    ],
    dialogsTableSettings: [
      { name: '下载', type: 'download' }
    ]
  }),
  created () { },
  methods: {
    add (row) {
      console.log(row)
      this.readOnly = false
      this.title = '情报判研信息新增'
      this.isShow = true
    },
    modify (row) {
      console.log(row)
      this.readOnly = false
      this.title = '情报判研信息修改'
      this.isShow = true
    },
    del (row) {
      console.log(row)
    },
    detailed (row) {
      console.log(row)
      this.readOnly = true
      this.title = '审批详情'
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
.approval {
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  padding-right: 0.2rem;
  box-sizing: border-box;
  .el-form {
    height: 0.4rem;
  }
  .approval_body {
    width: 100%;
    padding: 0.2rem;
    box-sizing: border-box;
    border: 1px solid #3e5568;
    margin-top: 0.2rem;
  }
  .el-dialog__wrapper {
    .el-dialog {
      background-color: rgb(2, 16, 47);
      .el-dialog__header {
        background-color: rgb(2, 25, 60);
        .el-dialog__title {
          color: rgb(106, 239, 244);
        }
      }
      .el-dialog__body {
        .el-form {
          .el-form-item:last-child {
            width: 100% !important;
          }
        }
        .elFormDialog {
          margin-top: 0.2rem;
          .el-form-item:last-child {
            margin-bottom: 0;
            .el-form-item__content {
              display: flex;
              height: 0.4rem;
              .el-textarea {
                margin-left: 0.2rem;
                height: 100%;
                textarea {
                  height: 100%;
                }
              }
            }
          }
        }
      }
    }
  }
}
</style>
