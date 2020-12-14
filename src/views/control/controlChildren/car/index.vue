<template>
  <div class="control_car">
    <Elsearch :searchSettings="searchSettings" :searchBtn="searchBtn" @add="add"></Elsearch>
    <Eltable :tableHead="tableHead" :tableDatas="tableDatas" :tableSettings="tableSettings" @modify="modify" @del="del" @detailed="detailed"></Eltable>
    <el-dialog :title="title" :visible.sync="isShow" center width="60%">
      <el-form ref="form" :model="form" label-width="auto">
        <el-form-item :label="item.label" v-for="(item, index) in dialogs" :key="index">
          <el-input v-if="item.type" v-model="form.name" :readonly="readOnly" :type="item.type"></el-input>
          <el-upload
            v-if="item.upload == 'upload'"
            class="avatar-uploader"
            action="https://jsonplaceholder.typicode.com/posts/"
            :show-file-list="false"
            :on-success="handleAvatarSuccess"
            :before-upload="beforeAvatarUpload"
          >
            <img v-if="imageUrl" :src="imageUrl" class="avatar" />
            <i v-else class="el-icon-plus avatar-uploader-icon"></i>
          </el-upload>
        </el-form-item>
      </el-form>
    </el-dialog>
  </div>
</template>
<script>
import Elsearch from '@/components/search'
import Eltable from '@/components/table'
export default {
  data: () => ({
    title: '',
    imageUrl: '',
    isShow: false,
    readOnly: true,
    searchSettings: [
      { placeholder: '车辆牌号', type: 'input' },
      { placeholder: '电话号码', type: 'input' },
      { placeholder: '姓名', type: 'input' },
      { placeholder: '请输入车辆牌号，车辆型号', type: 'input' }
    ],
    searchBtn: [
      { name: '查询', type: 'search' },
      { name: '新增', type: 'add' }
    ],
    tableHead: [
      { label: '车辆牌号', prop: 'input' },
      { label: '发动机型号', prop: 'input' },
      { label: '车身颜色', prop: 'input' },
      { label: '机动车品牌', prop: 'input' },
      { label: '车牌号码', prop: 'input' },
      { label: '车辆型号', prop: 'input' }
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
      { label: '车辆号码', type: 'input' },
      { label: '机动车品牌', type: 'input' },
      { label: '机动车照片', upload: 'upload' },
      { label: '发动机型号', type: 'input' },
      { label: '车牌号码', type: 'input' },
      { label: '', type: '' },
      { label: '车身颜色', type: 'input' },
      { label: '车辆型号', type: 'input' },
      { label: '', type: '' },
      { label: '布控开始时间', type: 'input' },
      { label: '布控结束时间', type: 'input' },
      { label: '', type: '' },
      { label: '布控事件', type: 'input' },
      { label: '布控人', type: 'input' },
      { label: '', type: '' },
      { label: '布控人电话', type: 'input' },
      { label: '联系人一', type: 'input' },
      { label: '', type: '' },
      { label: '联系人电话一', type: 'input' },
      { label: '联系人二', type: 'input' },
      { label: '', type: '' },
      { label: '联系人电话二', type: 'input' },
      { label: '绰号', type: 'input' },
      { label: '', type: '' }
    ],
    form: {}
  }),
  created () { },
  methods: {
    add (row) {
      this.title = '新增车辆布控'
      this.readOnly = false
      this.isShow = true
    },
    modify () {
      this.title = '车辆布控修改'
      this.readOnly = false
      this.isShow = true
    },
    del (row) {
      console.log(row)
    },
    detailed () {
      this.title = '车辆布控详情'
      this.readOnly = true
      this.isShow = true
    },
    close () {
      this.isShow = false
    },
    handleAvatarSuccess (res, file) {
      this.imageUrl = URL.createObjectURL(file.raw)
    },
    beforeAvatarUpload (file) {
      const isJPG = file.type === 'image/jpeg'
      const isLt2M = file.size / 1024 / 1024 < 2

      if (!isJPG) {
        this.$message.error('上传头像图片只能是 JPG 格式!')
      }
      if (!isLt2M) {
        this.$message.error('上传头像图片大小不能超过 2MB!')
      }
      return isJPG && isLt2M
    }
  },
  components: { Elsearch, Eltable }
}
</script>
<style lang="scss">
.control_car {
  width: 100%;
  padding-right: 0.2rem;
  box-sizing: border-box;
  .table {
    margin-top: 0.2rem;
  }
  .el-dialog__wrapper {
    .el-dialog {
      .el-dialog__body {
        .el-form {
          .el-form-item {
            width: 30% !important;
            position: relative;
            .el-form-item__content {
              .avatar-uploader {
                position: absolute;
                z-index: 100;
              }
            }
          }
        }
      }
    }
  }
  .avatar-uploader .el-upload {
    border: 1px dashed #d9d9d9;
    border-radius: 6px;
    cursor: pointer;
    position: relative;
    overflow: hidden;
  }
  .avatar-uploader .el-upload:hover {
    border-color: #409eff;
  }
  .avatar-uploader-icon {
    font-size: 28px;
    color: #8c939d;
    width: 178px;
    height: 178px;
    line-height: 178px;
    text-align: center;
  }
  .avatar {
    width: 178px;
    height: 178px;
    display: block;
  }
}
</style>
