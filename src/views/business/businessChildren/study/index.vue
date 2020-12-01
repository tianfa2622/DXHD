<template>
  <div class="study">
    <div class="study_head">
      <Elsearch :searchSettings="searchSettings" @add="add"></Elsearch>
    </div>
    <div class="study_table">
      <Eltable :tableHead="tableHead" :tableDatas="tableDatas" @modify="modify" @del="del" @detailed="detailed"></Eltable>
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
    searchSettings: [
      { placeholder: '活动编号', type: 'input' },
      { placeholder: '情报类型', type: 'select' },
      { placeholder: '请输入情报条目，公安机关机构代码', type: 'input' }
    ],
    dialogs: [
      { label: '活动编码', type: 'input' },
      { label: '情报条目', type: 'input' },
      { label: '活动情报', type: 'input' },
      { label: '情报时间', type: 'input' },
      { label: '情报来源', type: 'input' },
      { label: '情报时间', type: 'input' },
      { label: '情报类型', type: 'input' },
      { label: '公安机关机构代码', type: 'input' }
    ],
    form: {}
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
      this.title = '情报判研信息详情'
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
.study {
  border: 1px solid rgb(62, 85, 104);
  margin: 0.7rem auto 0;
  width: 98%;
  padding: 0.3rem 0.2rem;
  box-sizing: border-box;
  display: flex;
  flex-wrap: wrap;
  .study_head {
    width: 80%;
    height: 0.4rem;
    display: flex;
  }
  .study_table {
    margin-top: 0.2rem;
    width: 100%;
  }
  .el-dialog__wrapper {
    .el-dialog {
      .el-dialog__body {
        .el-form {
          .el-form-item {
            width: 50%;
            .el-form-item__label {
              width: 1.4rem !important;
            }
            .el-form-item__content {
              margin-left: 1.4rem !important;
            }
          }
        }
      }
    }
  }
  .study_ring {
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
