<template>
  <div class="approval">
    <Elsearch :searchSettings="searchSettings" :searchBtn="searchBtn" @add="add"></Elsearch>
    <div class="approval_body">
      <Eltable :tableHead="tableHead" :tableSettings="tableSettings" :tableDatas="tableDatas" @detailed="detailed"></Eltable>
    </div>
    <el-dialog :title="title" :visible.sync="isShow" center>
      <div class="approval_title">
        <img src="@/assets/business/u2785.svg" alt="" />
        <h3>活动基本信息</h3>
      </div>
      <Elsearch class="elDialogElsearchZero" :searchSettings="dialogs[0]"></Elsearch>
      <div class="approval_title">
        <img src="@/assets/business/u2968.png" alt="" />
        <h3>活动安保单位信息</h3>
      </div>
      <Elsearch :searchSettings="dialogs[1]"></Elsearch>
      <div class="approval_title">
        <img src="@/assets/business/u3090.png" alt="" />
        <h3>活动参与人员</h3>
      </div>
      <Elsearch :searchSettings="dialogs[2]"></Elsearch>
      <div class="approval_title">
        <img src="@/assets/business/u3100.png" alt="" />
        <h3>活动任务</h3>
      </div>
      <Elsearch :searchSettings="dialogs[3]"></Elsearch>
      <div class="approval_title">
        <img src="@/assets/business/u3026.png" alt="" />
        <h3>售票信息</h3>
      </div>
      <Elsearch :searchSettings="dialogs[4]"></Elsearch>
      <div class="approval_title">
        <img src="@/assets/business/u3037.png" alt="" />
        <h3>制证信息</h3>
      </div>
      <Elsearch :searchSettings="dialogs[5]"></Elsearch>
      <Eltable :tableHead="dialogsTableHead" :tableSettings="dialogsTableSettings" :tableDatas="dialogsTableDatas" @download="download"></Eltable>
      <el-form class="elFormDialog" ref="form" :model="form" label-width="auto">
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
    </el-dialog>
  </div>
</template>
<script>
import Elsearch from '@/components/search'
import Eltable from '@/components/table'
export default {
  data: () => ({
    title: '',
    form: {},
    isShow: false,
    readOnly: true,
    searchSettings: [
      { placeholder: '所属分局', type: 'select' },
      { placeholder: '申请时间', type: 'data' },
      { placeholder: '活动类型', type: 'select' },
      { placeholder: '审批状态', type: 'select' },
      { placeholder: '请输入活动编码、活动名称、场馆名称', type: 'input' }
    ],
    searchBtn: [
      { name: '查询', type: 'search' }
    ],
    tableHead: [
      { label: '所属分局', prop: 'input' },
      { label: '活动编号', prop: 'input' },
      { label: '活动名称', prop: 'input' },
      { label: '活动类型', prop: 'input' },
      { label: '人数', prop: 'input' },
      { label: '场馆名称', prop: 'input' },
      { label: '主办单位', prop: 'input' },
      { label: '举办日期', prop: 'input' },
      { label: '审批状态', prop: 'input' }
    ],
    dialogsTableHead: [
      { label: '序号', prop: 'input' },
      { label: '文件名称', prop: 'input' },
      { label: '文件格式', prop: 'input' },
      { label: '文件大小', prop: 'input' }
    ],
    dialogs: [
      [
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
        { placeholder: '举办日期', type: 'datas', label: '举办日期' },
        { placeholder: '申请日期', type: 'datas', label: '申请日期' },
        { placeholder: '地点名称', type: 'input', label: '地点名称' },
        { placeholder: '活动日程编码', type: 'input', label: '活动日程编码' },
        { placeholder: '申请人姓名', type: 'input', label: '申请人姓名' },
        { placeholder: '更新时间', type: 'datas', label: '更新时间' },
        { placeholder: '联系人姓名', type: 'input', label: '联系人姓名' },
        { placeholder: '联系电话', type: 'input', label: '联系电话' },
        { placeholder: '活动日程', type: 'input', label: '活动日程' },
        { placeholder: '活动内容', type: 'textarea', label: '活动内容' }
      ],
      [
        { placeholder: '单位名称', type: 'input', label: '单位名称' },
        { placeholder: '公安机关机构代码', type: 'input', label: '公安机关机构代码' }
      ],
      [
        { placeholder: '活动参与人员类型', type: 'input', label: '活动参与人员类型' },
        { placeholder: '活动参与人员编号', type: 'input', label: '活动参与人员编号' }
      ],
      [
        { placeholder: '活动任务类型', type: 'input', label: '活动任务类型' },
        { placeholder: '活动任务编号', type: 'input', label: '活动任务编号' }
      ],
      [
        { placeholder: '可发售票总数', type: 'input', label: '可发售票总数' },
        { placeholder: '实际发售票总数', type: 'input', label: '实际发售票总数' },
        { placeholder: '实际入场购票人总数', type: 'input', label: '实际入场购票人总数' }
      ],
      [
        { placeholder: '可发制证总数', type: 'input', label: '可发制证总数' },
        { placeholder: '实际制证总数', type: 'input', label: '实际制证总数' },
        { placeholder: '实际入场持证人总数', type: 'input', label: '实际入场持证人总数' }
      ]
    ],
    tableDatas: Array(5).fill({
      input: '123'
    }),
    dialogsTableDatas: Array(5).fill({
      input: '123'
    }),
    tableSettings: [
      { name: '详情', type: 'detailed' }
    ],
    dialogsTableSettings: [
      { name: '下载', type: 'download' }
    ]
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
      this.title = '审批详情'
      this.isShow = true
    },
    close () {
      this.isShow = false
    },
    download (row) {
      console.log(row)
    },
    examineNo () {
      this.$refs.textarea.focus()
    }
  },
  components: { Elsearch, Eltable }
}
</script>
<style lang="scss">
.approval {
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  padding-right: 0.2rem;
  box-sizing: border-box;
  .el-form {
    height: 0.4rem;
    .btn {
      margin-right: 0;
    }
  }
  .approval_body {
    width: 100%;
    margin-top: 0.2rem;
  }
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
        .approval_title {
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
        .elDialogElsearchZero {
          .el-form-item:last-child {
            width: 100% !important;
          }
        }
        .el-form {
          .el-form-item {
            .el-form-item__label-wrap {
              .el-form-item__label {
                width: 1.4rem !important;
              }
            }
          }
        }
        .elFormDialog {
          margin-top: 0.2rem;
          .el-form-item:last-child {
            width: 100% !important;
            margin-bottom: 0;
            .el-form-item__content {
              display: flex;
              height: 0.4rem;
              .el-textarea {
                margin-left: 0.2rem;
                height: 100%;
                textarea {
                  height: 100%;
                }
              }
            }
          }
        }
      }
    }
  }
}
.el-date-picker {
  .el-picker-panel__body-wrapper {
    .el-picker-panel__body {
      .el-date-picker__time-header {
        .el-date-picker__editor-wrap {
          .el-input {
            input {
              color: #000 !important;
            }
          }
        }
      }
    }
  }
}
</style>
