<template>
  <div class="policeMan">
    <div class="policeMan_left">
      <div class="policeMan_head">
        <Elsearch :searchSettings="searchSettings" :searchBtn="searchBtn" @add="add"></Elsearch>
      </div>
      <div class="policeMan_table">
        <Eltable :tableHead="tableHead" :tableSettings="tableSettings" :tableDatas="tableDatas" @modify="modify" @del="del" @detailed="detailed"></Eltable>
      </div>
    </div>
    <div class="policeMan_right">
      <Ring></Ring>
    </div>
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
import Eltable from '@/components/table'
import Elsearch from '@/components/search'
import Ring from '@/components/management_com/policeMan'
export default {
  data: () => ({
    input: '',
    title: '',
    imageUrl: '',
    isShow: false,
    readOnly: true,
    tableHead: [
      { label: '信息标识', prop: 'input' },
      { label: '姓名', prop: 'input' },
      { label: '曾用名', prop: 'input' },
      { label: '性别代码', prop: 'input' },
      { label: '单位名称', prop: 'input' },
      { label: '常用证件代码', prop: 'input' },
      { label: '证件号码', prop: 'input' }
    ],
    tableSettings: [
      { name: '修改', type: 'modify' },
      { name: '删除', type: 'delete' },
      { name: '详情', type: 'detailed' }
    ],
    tableDatas: Array(5).fill({
      input: '123'
    }),
    searchSettings: [
      { placeholder: '姓名', type: 'input' },
      { placeholder: '证件号码', type: 'input' },
      { placeholder: '联系电话', type: 'input' },
      { placeholder: '请输入曾用名，单位名称，联系电话', type: 'input' }
    ],
    searchBtn: [
      { name: '查询', type: 'search' },
      { name: '新增', type: 'add' }
    ],
    dialogs: [
      { label: '信息标识', type: 'input' },
      { label: '省市县（区）', type: 'input' },
      { label: '安保人员照片', upload: 'upload' },
      { label: '出生日期', type: 'input' },
      { label: '姓名', type: 'input' },
      { label: '', type: '' },
      { label: '区划内详细地址', type: 'input' },
      { label: '联系电话', type: 'input' },
      { label: '', type: '' },
      { label: '曾用名', type: 'input' },
      { label: '实际居住地', type: 'input' },
      { label: '', type: '' },
      { label: '婚姻状态代码', type: 'input' },
      { label: '性别代码', type: 'input' },
      { label: '', type: '' },
      { label: '地址编码', type: 'input' },
      { label: '宗教信仰代码', type: 'input' },
      { label: '', type: '' },
      { label: '单位名称', type: 'input' },
      { label: '省市县（区）', type: 'input' },
      { label: '', type: '' },
      { label: '政治面貌代码', type: 'input' },
      { label: '常用证件代码', type: 'input' },
      { label: '', type: '' },
      { label: '区划内详细地址', type: 'input' },
      { label: '配偶', type: 'input' },
      { label: '', type: '' },
      { label: '证件号码', type: 'input' },
      { label: '保安证件', type: 'input' },
      { label: '', type: '' },
      { label: '姓名', type: 'input' }
    ],
    form: {}
  }),
  created () { },
  methods: {
    add (row) {
      console.log(row)
      this.readOnly = false
      this.title = '安保人员信息新增'
      this.isShow = true
    },
    modify (row) {
      console.log(row)
      this.readOnly = false
      this.title = '安保人员信息修改'
      this.isShow = true
    },
    del (row) {
      console.log(row)
    },
    detailed (row) {
      console.log(row)
      this.readOnly = true
      this.title = '安保人员信息详情'
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
  components: {
    Eltable, Ring, Elsearch
  }
}
</script>
<style lang="scss">
.policeMan {
  border: 1px solid rgb(62, 85, 104);
  width: 98%;
  padding: 0.3rem 0.2rem;
  box-sizing: border-box;
  display: flex;
  .policeMan_left {
    width: 80%;
    height: 100%;
    .policeMan_head {
      width: 100%;
      height: 0.4rem;
      display: flex;
    }
    .policeMan_table {
      margin-top: 0.2rem;
    }
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
  .policeMan_right {
    width: 20%;
    height: 4rem;
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
