<template>
  <div class="ActivityPoliceMan">
    <div class="ActivityPoliceManTitle">
      <Elsearch :searchSettings="searchSettings" :searchBtn="searchBtn"></Elsearch>
      <div class="titleImg">
        <img @click="$router.go(-1)" src="@/assets/activity/fh.png" alt="" />
      </div>
    </div>
    <Eltable :tableHead="tableHead" :tableDatas="tableDatas" :tableSettings="tableSettings" @detailed="detailed"></Eltable>
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
      { placeholder: '姓名', type: 'input' },
      { placeholder: '证件号码', type: 'input' },
      { placeholder: '联系电话', type: 'input' },
      { placeholder: '请输入曾用名，单位名称，联系电话', type: 'input' }
    ],
    searchBtn: [
      { name: '查询', type: 'search' }
    ],
    tableHead: [
      { label: '信息标识', prop: 'input' },
      { label: '姓名', prop: 'input' },
      { label: '曾用名', prop: 'input' },
      { label: '性别代码', prop: 'input' },
      { label: '单位名称', prop: 'input' },
      { label: '常用证件代码', prop: 'input' },
      { label: '证件号码', prop: 'input' }
    ],
    tableDatas: Array(5).fill({
      input: '123'
    }),
    tableSettings: [
      { name: '详情', type: 'detailed' }
    ],
    dialogs: [
      { label: '姓名', type: 'input' },
      { label: '曾用名', type: 'input' },
      { label: '照片', upload: 'upload' },
      { label: '常用证件代码', type: 'input' },
      { label: '证件号码', type: 'input' },
      { label: '', type: '' },
      { label: '性别代码', type: 'input' },
      { label: '民族代码', type: 'input' },
      { label: '', type: '' },
      { label: '国籍代码', type: 'input' },
      { label: '籍贯/地区代码', type: 'input' },
      { label: '', type: '' },
      { label: '职业', type: 'input' },
      { label: '服务处所', type: 'input' },
      { label: '', type: '' },
      { label: '地址名称', type: 'input' },
      { label: '移动电话', type: 'input' },
      { label: '', type: '' },
      { label: '是否前科人员', type: 'input' },
      { label: '是否在逃人员', type: 'input' },
      { label: '', type: '' },
      { label: '是否极端分子', type: 'input' },
      { label: '是否非访人员', type: 'input' },
      { label: '', type: '' },
      { label: '是否涉恐人员', type: 'input' },
      { label: '是否吸毒人员', type: 'input' },
      { label: '', type: '' },
      { label: '是否精神病人', type: 'input' },
      { label: '重点人员编号', type: 'input' },
      { label: '', type: '' },
      { label: '审查时间', type: 'input' },
      { label: '案件编号', type: 'input' },
      { label: '', type: '' }
    ],
    form: {}
  }),
  created () { },
  methods: {
    detailed () {
      this.title = '安保人员信息背审'
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
.ActivityPoliceMan {
  width: 100%;
  padding-right: 0.2rem;
  box-sizing: border-box;
  .table {
    margin-top: 0.2rem;
  }
  .ActivityPoliceManTitle {
    display: flex;
    .titleImg {
      cursor: pointer;
      width: 0.6rem;
      height: 0.4rem;
      overflow: hidden;
      border-radius: 4px;
      img {
        width: 120%;
        height: 120%;
        display: block;
      }
    }
  }
  .el-dialog__wrapper {
    .el-dialog {
      width: 60%;
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
