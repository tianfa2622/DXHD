<template>
  <div class="apply">
    <div class="apply_title">
      <img src="@/assets/business/u2785.svg" alt="" />
      <h3>活动基本信息</h3>
    </div>
    <div class="apply_body">
      <Elsearch :searchSettings="searchSettings"></Elsearch>
      <div class="apply_upload">
        <img src="@/assets/business/u2840.svg" alt="" />
        <h3>上传文件</h3>
        <span>（上传活动申请书、安全许可申请表，以及相关证件扫描件等相关材料）</span>
      </div>
      <div class="upload_table">
        <el-upload class="upload-demo" action="https://jsonplaceholder.typicode.com/posts/" :on-change="handleChange" :file-list="fileList">
          <el-button size="small" type="primary">点击上传</el-button>
        </el-upload>
        <Eltable :tableHead="tableHead" :tableSettings="tableSettings" :tableDatas="tableDatas" @del="del" @handleDownload="handleDownload"></Eltable>
        <div class="submit">
          <el-button type="text">提交</el-button>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import Elsearch from '@/components/search'
import Eltable from '@/components/table'
export default {
  data: () => ({
    searchSettings: [
      { placeholder: '所属分局', type: 'select', label: '所属分局' },
      { placeholder: '所属派出所', type: 'select', label: '所属派出所' },
      { placeholder: '活动编号', type: 'select', label: '活动编号' },
      { placeholder: '活动名称', type: 'input', label: '活动名称' },
      { placeholder: '活动类型', type: 'input', label: '活动类型' },
      { placeholder: '参加活动的人数', type: 'input', label: '人数' },
      { placeholder: '场馆编码', type: 'input', label: '场馆编码' },
      { placeholder: '地址名称', type: 'input', label: '地址名称' },
      { placeholder: '主办单位', type: 'input', label: '主办单位' },
      { placeholder: '承办单位', type: 'input', label: '承办单位' },
      { placeholder: '安保单位', type: 'input', label: '安保单位' },
      { placeholder: '举办日期', type: 'datas', label: '举办日期' },
      { placeholder: '举办地点', type: 'input', label: '举办地点' },
      { placeholder: '申请人姓名', type: 'input', label: '申请人姓名' },
      { placeholder: '联系人', type: 'input', label: '联系人' },
      { placeholder: '联系人电话', type: 'input', label: '联系人电话' },
      { placeholder: '活动内容', type: 'textarea', label: '活动内容' }
    ],
    tableHead: [
      { label: '序号', prop: 'input' },
      { label: '文件名称', prop: 'input' },
      { label: '文件格式', prop: 'input' },
      { label: '文件大小', prop: 'input' }
    ],
    tableDatas: Array(5).fill({
      input: '123'
    }),
    tableSettings: [
      { name: '下载', type: 'download' },
      { name: '删除', type: 'delete' }
    ],
    fileList: []
  }),
  created () { },
  methods: {
    handleChange (file, fileList) {
      this.fileList = fileList.slice(-3)
    },
    del (row) {
      console.log(row)
    },
    handleDownload (row) {
      console.log(row)
    }
  },
  components: { Elsearch, Eltable }
}
</script>
<style lang="scss">
.apply {
  width: 100%;
  height: 100%;
  margin: 0 auto;
  border: 0.01px solid #3e5568;
  padding: 0.1rem;
  padding-bottom: 1rem;
  box-sizing: border-box;
  overflow: auto;
  .apply_title {
    width: 100%;
    margin: 0 auto 0.2rem;
    line-height: 0.3rem;
    color: #fff;
    display: flex;
    padding: 0.1rem;
    box-sizing: border-box;
    border-bottom: 1px solid #20324c;
    img {
      width: 0.3rem;
      height: 0.3rem;
    }
    h3 {
      color: #34e1f4;
      margin-left: 0.1rem;
    }
  }
  .apply_body {
    width: 100%;
    .el-form {
      width: 80%;
      margin: 0 auto;
      flex-wrap: wrap;
      justify-content: space-between;
      .el-form-item {
        width: 40%;
        margin-right: 0;
        margin-bottom: 0.2rem;
        .el-form-item__content {
          width: auto;
        }
      }
      .el-form-item:last-child{
        width: 100%;
      }
    }
    .apply_upload {
      width: 100%;
      margin: 0 auto 0.2rem;
      line-height: 0.3rem;
      color: #fff;
      display: flex;
      padding: 0.1rem;
      box-sizing: border-box;
      border-top: 1px solid #20324c;
      border-bottom: 1px solid #20324c;
      img {
        width: 0.3rem;
        height: 0.3rem;
      }
      h3 {
        color: #34e1f4;
        margin-left: 0.1rem;
        margin-right: 0.1rem;
      }
    }
    .upload_table {
      width: 100%;
      .table {
        width: 100%;
        margin-top: 0.2rem;
      }
      .submit {
        width: 100%;
        margin-top: 0.2rem;
        border-bottom: 1px solid #20324c;
        border-top: 1px solid #20324c;
        text-align: center;
        .el-button {
          width: 100%;
          height: 100%;
          span {
            color: #fff;
          }
        }
      }
    }
  }
}
</style>
