<template>
  <div class="pointPeople">
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
    <el-dialog :title="title" :visible.sync="isShow" center>
      <h3>基础信息</h3>
      <el-form ref="form" :model="form" label-width="auto">
        <el-form-item :label="item.label" v-for="(item, index) in dialogs[0]" :key="index">
          <el-input v-model="form.name" :readonly="readOnly" :type="item.type"></el-input>
        </el-form-item>
      </el-form>
      <h3>民航出行</h3>
      <el-form ref="form" :model="form" label-width="auto">
        <el-form-item :label="item.label" v-for="(item, index) in dialogs[1]" :key="index">
          <el-input v-model="form.name" :readonly="readOnly" :type="item.type"></el-input>
        </el-form-item>
      </el-form>
      <h3>铁路出行</h3>
      <el-form ref="form" :model="form" label-width="auto">
        <el-form-item :label="item.label" v-for="(item, index) in dialogs[2]" :key="index">
          <el-input v-model="form.name" :readonly="readOnly" :type="item.type"></el-input>
        </el-form-item>
      </el-form>
      <h3>公路客运</h3>
      <el-form ref="form" :model="form" label-width="auto">
        <el-form-item :label="item.label" v-for="(item, index) in dialogs[3]" :key="index">
          <el-input v-model="form.name" :readonly="readOnly" :type="item.type"></el-input>
        </el-form-item>
      </el-form>
      <h3>轮渡出行</h3>
      <el-form ref="form" :model="form" label-width="auto">
        <el-form-item :label="item.label" v-for="(item, index) in dialogs[4]" :key="index">
          <el-input v-model="form.name" :readonly="readOnly" :type="item.type"></el-input>
        </el-form-item>
      </el-form>
      <h3>公安检查站</h3>
      <el-form ref="form" :model="form" label-width="auto">
        <el-form-item :label="item.label" v-for="(item, index) in dialogs[5]" :key="index">
          <el-input v-model="form.name" :readonly="readOnly" :type="item.type"></el-input>
        </el-form-item>
      </el-form>
      <h3>旅馆住宿</h3>
      <el-form ref="form" :model="form" label-width="auto">
        <el-form-item :label="item.label" v-for="(item, index) in dialogs[6]" :key="index">
          <el-input v-model="form.name" :readonly="readOnly" :type="item.type"></el-input>
        </el-form-item>
      </el-form>
      <h3>网吧上网</h3>
      <el-form ref="form" :model="form" label-width="auto">
        <el-form-item :label="item.label" v-for="(item, index) in dialogs[7]" :key="index">
          <el-input v-model="form.name" :readonly="readOnly" :type="item.type"></el-input>
        </el-form-item>
      </el-form>
      <h3>人像识别</h3>
      <el-form ref="form" :model="form" label-width="auto">
        <el-form-item :label="item.label" v-for="(item, index) in dialogs[8]" :key="index">
          <el-input v-model="form.name" :readonly="readOnly" :type="item.type"></el-input>
        </el-form-item>
      </el-form>
    </el-dialog>
  </div>
</template>
<script>
import Elsearch from '@/components/search'
import Eltable from '@/components/table'
import Ring from '@/components/management_com/pointPeople/ring'
import BrokenLine from '@/components/management_com/pointPeople/line'
export default {
  data: () => ({
    title: '',
    isShow: false,
    readOnly: true,
    searchSettings: [
      { placeholder: '公民身份证号码', type: 'input' },
      { placeholder: '姓名', type: 'input' }
    ],
    searchBtn: [
      { name: '查询', type: 'search' },
      { name: '新增', type: 'add' }
    ],
    tableHead: [
      { label: '常用证件号码', prop: 'input' },
      { label: '证件号码', prop: 'input' },
      { label: '公民身份证号码', prop: 'input' },
      { label: '姓名', prop: 'input' },
      { label: '性别代码', prop: 'input' },
      { label: '民航出行', prop: 'input' }
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
      [
        { label: '常用证件代码', type: 'input' },
        { label: '证件号码', type: 'input' },
        { label: '公民身份证号码', type: 'input' },
        { label: '姓名', type: 'input' },
        { label: '性别代码', type: 'input' },
        { label: '国籍代码', type: 'input' },
        { label: '民族代码', type: 'input' },
        { label: '动态信息类型', type: 'select' }
      ],
      [
        { label: '民航出行', type: 'input' },
        { label: '航班号', type: 'input' },
        { label: '座位号', type: 'input' },
        { label: '出发日期', type: 'input' },
        { label: '出发时间', type: 'input' },
        { label: '机场代码', type: 'input' },
        { label: '到达日期', type: 'input' },
        { label: '到达时间', type: 'input' },
        { label: '机场代码', type: 'input' }
      ],
      [
        { label: '铁路出行', type: 'input' },
        { label: '车次', type: 'input' },
        { label: '车厢号', type: 'input' },
        { label: '座位号', type: 'input' },
        { label: '出发日期', type: 'input' },
        { label: '出发时间', type: 'input' },
        { label: '出发车站', type: 'input' },
        { label: '到达日期', type: 'input' },
        { label: '到达时间', type: 'input' },
        { label: '到达车站', type: 'input' }
      ],
      [
        { label: '公路客运', type: 'input' },
        { label: '客运站', type: 'input' },
        { label: '客运编号', type: 'input' },
        { label: '座位号', type: 'input' },
        { label: '出发日期', type: 'input' },
        { label: '出发时间', type: 'input' },
        { label: '客运站', type: 'input' },
        { label: '到达日期', type: 'input' },
        { label: '到达时间', type: 'input' },
        { label: '客运站', type: 'input' }
      ],
      [
        { label: '轮渡出行', type: 'input' },
        { label: '轮渡号', type: 'input' },
        { label: '出发日期', type: 'input' },
        { label: '出发时间', type: 'input' },
        { label: '出发码头', type: 'input' },
        { label: '到达日期', type: 'input' },
        { label: '到达时间', type: 'input' },
        { label: '到达码头', type: 'input' }
      ],
      [
        { label: '公安检查站', type: 'input' },
        { label: '检查站编码', type: 'input' },
        { label: '检查站位置', type: 'input' },
        { label: '查验时间', type: 'input' },
        { label: '出入类型', type: 'input' }
      ],
      [
        { label: '旅馆住宿', type: 'input' },
        { label: '旅馆编号', type: 'input' },
        { label: '旅馆名称', type: 'input' },
        { label: '入住房号', type: 'input' },
        { label: '入住时间', type: 'input' },
        { label: '退房时间', type: 'input' }
      ],
      [
        { label: '网吧上网', type: 'input' },
        { label: '营业场所代码', type: 'input' },
        { label: '营业场所', type: 'input' },
        { label: '单位名称', type: 'input' },
        { label: '地址名称', type: 'input' },
        { label: '开始时间', type: 'input' },
        { label: '结束时间', type: 'input' }
      ],
      [
        { label: '人像识别', type: 'input' },
        { label: '设备类型', type: 'input' },
        { label: '视屏设备编码', type: 'input' },
        { label: '设备名称', type: 'input' },
        { label: '监视方向', type: 'input' },
        { label: '设备地址', type: 'input' },
        { label: '抓拍时间', type: 'input' },
        { label: '图片URL', type: 'input' },
        { label: '地球经度', type: 'input' },
        { label: '地球纬度', type: 'input' },
        { label: '采集时间', type: 'input' },
        { label: '信息入库时间', type: 'input' }
      ]
    ],
    form: {}
  }),
  created () { },
  methods: {
    add (row) {
      this.title = '重点人员信息新增'
      this.readOnly = false
      this.isShow = true
    },
    modify () {
      this.title = '重点人员信息修改'
      this.readOnly = false
      this.isShow = true
    },
    del (row) {
      console.log(row)
    },
    detailed () {
      this.title = '重点人员信息详情'
      this.readOnly = true
      this.isShow = true
    }
  },
  components: { Elsearch, Eltable, Ring, BrokenLine }
}
</script>
<style lang="scss">
.pointPeople {
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
  .table {
    border: 1px solid #797979;
    padding: 0.2rem;
    box-sizing: border-box;
  }
  .el-dialog__wrapper {
    .el-dialog {
      .el-dialog__body {
        h3 {
          color: #fff;
        }
        .el-form {
          margin-top: 0;
          border: 1px solid #ccc;
          margin-bottom: 0.1rem;
          padding: 0.1rem;
          box-sizing: border-box;
          justify-content: flex-start;
          .el-form-item {
            width: 30% !important;
            .el-form-item__label-wrap {
              .el-form-item__label {
                width: 1.4rem !important;
              }
            }
          }
        }
      }
    }
  }
}
</style>
