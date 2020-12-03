<template>
  <div class="venueArchives">
    <div class="gd">
      <el-button type="primary" @click="openGd">开始归档</el-button>
    </div>
    <Eltable :tableHead="tableHead" :operateShow="false" :tableDatas="tableDatas"></Eltable>
    <Dialog :title="title" :isShow="isShow" :readOnly="readOnly" :dialogs="dialogs" @close="close"></Dialog>
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
      { label: '场馆名称', prop: 'input' },
      { label: '地址名称', prop: 'input' },
      { label: '建成日期', prop: 'input' },
      { label: '活动人数上限', prop: 'input' },
      { label: '支持活动类型', prop: 'input' }
    ],
    tableDatas: [],
    dialogs: [
      { label: '场馆名称', type: 'input' },
      { label: '地址名称', type: 'input' },
      { label: '建成日期', type: 'input' },
      { label: '活动人数上限', type: 'input' }
    ]
  }),
  created () { },
  methods: {
    close () {
      this.isShow = false
    },
    openGd () {
      this.title = '场馆归档'
      this.isShow = true
    }
  },
  components: { Eltable, Dialog }
}
</script>
<style lang="scss">
.venueArchives {
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
