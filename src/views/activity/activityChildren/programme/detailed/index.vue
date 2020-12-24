<template>
  <div class="detailed">
    <div class="detailed_titleDiv">
      <h3 class="detailed_title divTitle">
        <img src="@/assets/business/u2785.svg" alt="" />
        <span>安保方案</span>
      </h3>
      <img class="titleDivImg" @click="$router.go(-1)" src="@/assets/activity/fh.png" alt="" />
    </div>
    <Elsearch :searchSettings="searchSettings[0]" :searchLabelWidth="searchLabelWidth"></Elsearch>
    <h3 class="detailed_title body_title">
      <span>安保任务基本信息</span>
    </h3>
    <Elsearch :searchSettings="searchSettings[1]" :searchLabelWidth="searchLabelWidth"></Elsearch>
    <div class="detailed_table">
      <h3>任务执行区列表</h3>
      <Eltable :tableHead="tableHead[0]" :operateShow="false" :tableDatas="tableDatas"></Eltable>
    </div>
    <div class="detailed_table">
      <h3>执行警力列表</h3>
      <Eltable :tableHead="tableHead[1]" :operateShow="false" :tableDatas="tableDatas"></Eltable>
    </div>
    <Elsearch class="policeSearch" :searchSettings="searchSettings[2]" :searchLabelWidth="searchLabelWidth"></Elsearch>
    <h3 class="detailed_title body_title">
      <span>应急处置预案</span>
    </h3>
    <Elsearch :searchSettings="searchSettings[3]" :searchLabelWidth="searchLabelWidth"></Elsearch>
    <div class="addDiv" v-if="isAdd">
      <h3 class="detailed_title body_title">
        <span>上传文件</span>
      </h3>
      <p>(上传安保活动方案及突发事件应急救援预案文档)</p>
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
      <p class="footP" style="text-align: center">
        <el-button type="text">提交</el-button>
      </p>
    </div>
    <div v-else>
      <div class="addDiv" v-if="isModify">
        <h3 class="detailed_title body_title">
          <span>上传文件</span>
        </h3>
        <p>(上传安保活动方案及突发事件应急救援预案文档)</p>
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
      </div>
      <h3 class="detailed_title body_title">
        <span>查看文件</span>
      </h3>
      <Eltable class="downloadTable" :tableHead="tableHead[2]" :tableSettings="tableSettings" :tableDatas="tableDatas" @del="del" @handleDownload="handleDownload"></Eltable>
    </div>
  </div>
</template>
<script>
import Elsearch from '@/components/search'
import Eltable from '@/components/table'
export default {
  data: () => ({
    isAdd: false,
    isModify: false,
    searchLabelWidth: '1.2rem',
    fileList: [],
    searchSettings: [
      [
        { placeholder: '活动编码', type: 'input', label: '活动编码' },
        { placeholder: '活动名称', type: 'input', label: '活动名称' },
        { placeholder: '活动日程', type: 'input', label: '活动日程' },
        { placeholder: '场馆名称', type: 'input', label: '场馆名称' }
      ],
      [
        { placeholder: '任务编号', type: 'input', label: '任务编号' },
        { placeholder: '任务名称', type: 'input', label: '任务名称' },
        { placeholder: '任务类型', type: 'select', label: '任务类型' },
        { placeholder: '任务开始时间', type: 'datas', label: '任务开始时间' }
      ],
      [
        { placeholder: '任务内容', type: 'textarea', label: '任务内容' },
        { placeholder: '任务类型', type: 'input', label: '任务类型' },
        { placeholder: '数据更新时间', type: 'input', label: '数据更新时间' }
      ],
      [
        { placeholder: '预案编号标识', type: 'input', label: '预案编号标识' },
        { placeholder: '预案名称', type: 'input', label: '预案名称' },
        { placeholder: '预案类型', type: 'input', label: '预案类型' },
        { placeholder: '预案内容', type: 'textarea', label: '预案内容' },
        { placeholder: '预案处置任务', type: 'input', label: '预案处置任务' },
        { placeholder: '数据更新时间', type: 'input', label: '数据更新时间' }
      ]
    ],
    tableHead: [
      [
        { label: '任务执行区标识', prop: 'input' },
        { label: '巡逻区域名称', prop: 'input' },
        { label: '公安机关机构代码', prop: 'input' },
        { label: '公安机关名称', prop: 'input' },
        { label: '巡逻区域边界坐标', prop: 'input' },
        { label: '巡区行政区代码', prop: 'input' },
        { label: '必巡点存在标识', prop: 'input' },
        { label: '巡区类型', prop: 'input' }
      ],
      [
        { label: '人员标识', prop: 'input' },
        { label: '警力类型', prop: 'input' },
        { label: '姓名', prop: 'input' },
        { label: '行政区域代码', prop: 'input' },
        { label: '巡逻人员类别代码', prop: 'input' },
        { label: '警员编号', prop: 'input' },
        { label: '警龄', prop: 'input' },
        { label: '文职级别', prop: 'input' },
        { label: '是否工作组负责人', prop: 'input' }
      ],
      [
        { label: '序号', prop: 'input' },
        { label: '文件名称', prop: 'input' },
        { label: '文件格式', prop: 'input' },
        { label: '文件大小', prop: 'input' }
      ]
    ],
    tableDatas: Array(5).fill({
      input: '123'
    }),
    tableSettings: [
      { name: '下载', type: 'download' },
      { name: '删除', type: 'delete' }
    ]
  }),
  created () {
    this.init(this.$route.params)
  },
  methods: {
    init (params) {
      if (params.status === 'add') {
        this.isAdd = true
      } else if (params.status === 'modify') {
        this.isModify = true
      } else if (params.status === 'detailed') {
        console.log(params.id)
      } else {
        this.$message.error('数据获取失败')
        setTimeout(() => {
          this.$router.push('/activity/programme')
        }, 888)
      }
    },
    del (row) {
      console.log(row)
    },
    handleDownload (row) {
      console.log(row)
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
    }
  },
  components: { Elsearch, Eltable }
}
</script>
<style lang="scss">
.detailed {
  width: 100%;
  height: 100%;
  border: 0.01rem solid #3e5568;
  padding: 0.1rem;
  box-sizing: border-box;
  overflow: auto;
  .detailed_titleDiv {
    width: 98%;
    margin: 0 auto;
    display: flex;
    justify-content: space-between;
    border-bottom: 0.01rem solid #3e5568;
    .divTitle {
      border-bottom: none;
    }
    .titleDivImg {
      width: 0.8rem;
      height: 0.6rem;
      cursor: pointer;
      padding: 0.1rem;
      box-sizing: border-box;
    }
  }
  .detailed_title {
    width: 98%;
    margin: 0 auto;
    line-height: 0.4rem;
    border-bottom: 0.01rem solid #3e5568;
    color: #fff;
    display: flex;
    padding: 0.1rem;
    box-sizing: border-box;
    img {
      width: 0.4rem;
      height: 0.4rem;
    }
    span {
      height: 100%;
      display: block;
      margin-left: 0.2rem;
      color: #6aeff4;
      font-size: 0.18rem;
    }
  }
  .body_title {
    border-top: 0.01rem solid #3e5568;
  }
  .policeSearch {
    .el-form-item:first-child {
      width: 100% !important;
    }
  }
  .el-form {
    margin-top: 0.2rem;
    justify-content: space-between;
    flex-wrap: wrap;
    padding: 0 0.2rem;
    box-sizing: border-box;
    .el-form-item {
      width: 40%;
      margin-bottom: 0.2rem;
      .el-form-item__label {
        color: #fff;
      }
      .el-form-item__content {
        width: auto;
      }
    }
  }
  .detailed_table {
    width: 90%;
    margin: 0.1rem auto;
    justify-content: space-between;
    h3 {
      color: #fff;
      font-size: 0.18rem;
      white-space: nowrap;
    }
    .table {
      margin-top: 0.1rem;
      width: 100%;
    }
  }
  .addDiv {
    p {
      color: #fff;
      margin: 0.2rem;
    }
    .upload-demo {
      width: 30%;
      margin: 0.2rem;
    }
    .footP {
      border-top: 1px solid #3e5568;
      .el-button {
        span {
          color: #fff;
        }
      }
    }
  }
  .downloadTable {
    margin-top: 0.2rem;
    width: 90%;
    margin: 0.1rem auto;
  }
}
</style>
