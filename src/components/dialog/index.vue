<template>
  <el-dialog :title="title" :visible.sync="show" center @close="close">
    <el-form ref="form" :model="form" label-width="1.2rem">
      <el-form-item :label="item.label" v-for="(item, index) in dialogs" :key="index">
        <el-input v-model="form.name" :readonly="readOnly" :type="item.type"></el-input>
      </el-form-item>
    </el-form>
  </el-dialog>
</template>
<script>
export default {
  props: ['title', 'isShow', 'readOnly', 'dialogs'],
  data: () => ({
    show: false,
    form: {}
  }),
  created () {
  },
  methods: {
    close (e) {
      this.$emit('close', false)
    }
  },
  watch: {
    isShow () {
      this.show = this.isShow
    }
  }
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
        .el-form-item {
          width: 30%;
          .el-form-item__label {
            color: #fff;
          }
          .el-form-item__content {
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
