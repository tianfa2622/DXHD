<template>
  <el-dialog :title="title" :visible.sync="show" center @close="close">
    <el-form ref="form" :model="form" label-width="auto">
      <el-form-item :label="item.label" v-for="(item, index) in dialogs" :key="index">
        <el-input v-model="form.name" :readonly="readOnly" :type="item.type"></el-input>
      </el-form-item>
    </el-form>
    <Eltable v-if="tableShow" :tableHead="tableHead" :tableSettings="tableSettings" :tableDatas="tableDatas"></Eltable>
  </el-dialog>
</template>
<script>
import Eltable from '@/components/table'
export default {
  props: ['title', 'isShow', 'readOnly', 'dialogs', 'tableHead', 'tableSettings', 'tableDatas'],
  data: () => ({
    show: false,
    tableShow: false,
    form: {}
  }),
  created () {
    this.isTable()
  },
  methods: {
    close (e) {
      this.$emit('close', false)
    },
    isTable () {
      if (this.tableHead !== undefined) {
        this.tableShow = true
      } else {
        this.tableShow = false
      }
    }
  },
  watch: {
    isShow () {
      this.show = this.isShow
    }
  },
  components: { Eltable }
}
</script>
<style lang="scss">
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
        display: flex;
        flex-wrap: wrap;
        justify-content: space-between;
        height: auto;
        .el-form-item {
          width: 40% !important;
          margin-right: 0;
          margin-bottom: 0.2rem;
          .el-form-item__label {
            color: #fff;
          }
          .el-form-item__content {
            width: auto;
            .el-input {
              width: 100%;
              input {
                background-color: rgb(5, 33, 73);
                border: none;
              }
            }
          }
        }
      }
    }
  }
}
</style>
