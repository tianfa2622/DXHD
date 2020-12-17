<template>
  <div class="policeDatas">
    <div class="t">
      <div class="ring">
        <Ring></Ring>
      </div>
      <div class="line">
        <BrokenLine></BrokenLine>
      </div>
    </div>
    <Elsearch :searchSettings="searchSettings" :searchBtn="searchBtn" @add="add"></Elsearch>
    <Eltable :tableHead="tableHead" :tableDatas="tableDatas" :tableSettings="tableSettings" @modify="modify" @del="del" @detailed="detailed"></Eltable>
    <Dialog :title="title" :isShow="isShow" :readOnly="readOnly" :dialogs="dialogs" @close="close"></Dialog>
  </div>
</template>
<script>
import Elsearch from '@/components/search'
import Eltable from '@/components/table'
import Dialog from '@/components/dialog'
import Ring from '@/components/management_com/policeDatas/ring'
import BrokenLine from '@/components/management_com/policeDatas/line'
export default {
  data: () => ({
    title: '',
    isShow: false,
    readOnly: true,
    searchSettings: [
      { placeholder: '警情标识', type: 'input' },
      { placeholder: '警情名称', type: 'input' },
      { placeholder: '请输入报警人姓名，联系电话，处理人姓名', type: 'input' }
    ],
    searchBtn: [
      { name: '查询', type: 'search' },
      { name: '新增', type: 'add' }
    ],
    tableHead: [
      { label: '警情标识', prop: 'input' },
      { label: '警情名字', prop: 'input' },
      { label: '警情数据来源', prop: 'input' },
      { label: '警情级别', prop: 'input' },
      { label: '案事件发生开始时间', prop: 'input' },
      { label: '治安警情代码', prop: 'input' }
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
      { label: '警情标识', type: 'input' },
      { label: '警情名称', type: 'input' },
      { label: '警情数据来源', type: 'input' },
      { label: '警情级别', type: 'input' },
      { label: '案事件发生开始时间', type: 'input' },
      { label: '治安警情代码', type: 'input' },
      { label: '涉案场所类别代码', type: 'input' },
      { label: '涉案场所', type: 'input' },
      { label: '地址名称', type: 'input' },
      { label: '地区经度', type: 'input' },
      { label: '地球纬度', type: 'input' },
      { label: '案由', type: 'input' },
      { label: '备注', type: 'input' },
      { label: '公安机关机构代码', type: 'input' },
      { label: '报警人', type: 'input' },
      { label: '姓名', type: 'input' },
      { label: '联系电话', type: 'input' },
      { label: '报警时间', type: 'input' },
      { label: '处理人', type: 'input' },
      { label: '姓名', type: 'input' },
      { label: '接警时间', type: 'input' },
      { label: '到达时间', type: 'input' },
      { label: '处理', type: 'input' },
      { label: '处理时间', type: 'input' },
      { label: '警情处理结果代码', type: 'input' },
      { label: '备注', type: 'input' },
      { label: '处理图片', type: 'input' },
      { label: '数据来源_行政区划代码', type: 'input' },
      { label: '嫌疑人标记列表', type: 'input' },
      { label: '警情视频标记列表', type: 'input' },
      { label: '警情视频信息', type: 'input' },
      { label: '视屏设备编码', type: 'input' },
      { label: '视频文件格式代码', type: 'input' },
      { label: '开始时间', type: 'input' },
      { label: '结束时间', type: 'input' },
      { label: '警情音频信息', type: 'input' },
      { label: '音频设备编码', type: 'input' },
      { label: '音频编码格式代码', type: 'input' },
      { label: '开始时间', type: 'input' },
      { label: '结束时间', type: 'input' }
    ]
  }),
  created () { },
  methods: {
    add (row) {
      this.title = '民警信息新增'
      this.readOnly = false
      this.isShow = true
    },
    modify () {
      this.title = '民警信息修改'
      this.readOnly = false
      this.isShow = true
    },
    del (row) {
      console.log(row)
    },
    detailed () {
      this.title = '民警信息详情'
      this.readOnly = true
      this.isShow = true
    },
    close () {
      this.isShow = false
    }
  },
  components: { Elsearch, Eltable, Dialog, Ring, BrokenLine }
}
</script>
<style lang="scss">
.policeDatas {
  width: 100%;
  padding-right: 0.2rem;
  box-sizing: border-box;
  .t {
    width: 100%;
    height: 4rem;
    display: flex;
    justify-content: space-between;
    .ring {
      width: 45%;
      border: 1px solid #797979;
    }
    .line {
      width: 45%;
    }
  }
  .el-form,
  .table {
    margin-top: 0.2rem;
  }
  .el-dialog__wrapper {
    .el-dialog {
      .el-dialog__body {
        .el-form {
          margin-top: 0;
        }
      }
    }
  }
}
</style>
