<template>
  <div class="activityArchives">
    <div class="gd">
      <el-button type="primary" @click="openGd">开始归档</el-button>
    </div>
    <Eltable :tableHead="tableHead" :tableSettings="tableSettings" :tableDatas="tableDatas"></Eltable>
    <Dialog :title="title" :uploadBtn="true" :isShow="isShow" :readOnly="readOnly" :dialogs="dialogs" @close="close"></Dialog>
  </div>
</template>
<script>
import Eltable from '@/components/table'
import Dialog from '@/components/dialog'
export default {
  data: () => ({
    title: '',
    isShow: false,
    readOnly: false,
    tableHead: [
      { label: '序号', prop: 'input' },
      { label: '活动名称', prop: 'input' },
      { label: '交档人', prop: 'input' },
      { label: '收档人', prop: 'input' },
      { label: '归档时间', prop: 'input' }
    ],
    tableDatas: [],
    tableSettings: [
      { name: '查看', type: 'detailed' },
      { name: '删除', type: 'delete' }
    ],
    dialogs: [
      { label: '档案名称', type: 'input' },
      { label: '收档时间', type: 'input' },
      { label: '交档人', type: 'input' },
      { label: '收档人', type: 'input' }
    ]
  }),
  created () { },
  methods: {
    close () {
      this.isShow = false
    },
    openGd () {
      this.title = '活动归档'
      this.isShow = true
    }
  },
  components: { Eltable, Dialog }
}
</script>
<style lang="scss">
.activityArchives {
  .gd {
    display: flex;
    justify-content: flex-end;
  }
  .table {
    margin-top: 0.2rem;
  }
  .el-dialog__wrapper {
    .el-dialog {
      .el-dialog__body {
        .el-form {
          .el-form-item {
            width: 100% !important;
          }
        }
      }
    }
  }
}
</style>
