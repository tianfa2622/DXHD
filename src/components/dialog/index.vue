<template>
  <el-dialog :title="title" :visible.sync="show" center @close="close">
    <el-form ref="form" :model="form" label-width="auto">
      <el-form-item :label="item.label" v-for="(item, index) in dialogs" :key="index">
        <el-input v-model="form.name" :readonly="readOnly" :type="item.type"></el-input>
      </el-form-item>
      <el-form-item label="" v-if="uploadBtn == true ? true : false">
        <el-upload
          class="upload-demo"
          action="https://jsonplaceholder.typicode.com/posts/"
          :on-preview="handlePreview"
          :on-remove="handleRemove"
          :before-remove="beforeRemove"
          multiple
          :limit="3"
          :on-exceed="handleExceed"
          :file-list="fileList"
        >
          <el-button size="small" type="primary">点击上传</el-button>
        </el-upload>
      </el-form-item>
    </el-form>
    <Eltable v-if="tableShow" :tableHead="tableHead" :tableSettings="tableSettings" :tableDatas="tableDatas" @detailed="detailed"></Eltable>
    <el-form class="elFormDialog" v-if="elFormShow" ref="form" :model="form" label-width="auto">
      <el-form-item label="审批人">
        <el-input v-model="form.name" placeholder="请输入内容"></el-input>
      </el-form-item>
      <el-form-item label="审批时间">
        <el-date-picker v-model="form.time" type="datetime" placeholder="选择日期时间"> </el-date-picker>
      </el-form-item>
      <el-form-item label="审批意见">
        <el-button type="primary">审批通过</el-button>
        <el-button type="primary" @click="examineNo">审批不通过</el-button>
        <el-input type="textarea" v-model="form.name" placeholder="不通过原因" ref="textarea"></el-input>
      </el-form-item>
    </el-form>
    <el-dialog width="30%" center :title="innerVisibleTitle" :visible.sync="innerDialog" append-to-body @close="innerClose">
      <el-form ref="form" :model="form" label-width="auto">
        <el-form-item :label="item.label" v-for="(item, index) in innerVisibleDiologs" :key="index">
          <el-input v-model="form.name" :readonly="readOnly" :type="item.type"></el-input>
        </el-form-item>
      </el-form>
    </el-dialog>
  </el-dialog>
</template>
<script>
import Eltable from '@/components/table'
export default {
  props: ['title', 'isShow', 'readOnly', 'dialogs', 'tableHead', 'tableSettings', 'tableDatas', 'elFormShow', 'uploadBtn', 'innerVisible', 'innerVisibleDiologs', 'innerVisibleTitle'],
  data: () => ({
    show: false,
    innerDialog: false,
    tableShow: false,
    form: {},
    fileList: []
  }),
  created () {
    this.isTable()
  },
  methods: {
    close (e) {
      this.$emit('close', false)
    },
    innerClose (e) {
      this.$emit('innerClose', false)
    },
    isTable () {
      if (this.tableHead !== undefined) {
        this.tableShow = true
      } else {
        this.tableShow = false
      }
    },
    handleRemove (file, fileList) {
      console.log(file, fileList)
    },
    handlePreview (file) {
      console.log(file)
    },
    handleExceed (files, fileList) {
      this.$message.warning(`当前限制选择 3 个文件，本次选择了 ${files.length} 个文件，共选择了 ${files.length + fileList.length} 个文件`)
    },
    beforeRemove (file, fileList) {
      return this.$confirm(`确定移除 ${file.name}？`)
    },
    detailed (e) {
      this.$emit('detailed', e)
    }
  },
  watch: {
    isShow () {
      this.show = this.isShow
    },
    innerVisible (val) {
      this.innerDialog = this.innerVisible
    },
    innerVisibleDiologs (val) {
      console.log(val)
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
