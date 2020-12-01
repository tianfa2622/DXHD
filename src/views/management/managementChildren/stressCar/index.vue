<template>
  <div class="stressCar">
    <div class="stressCar_head">
      <Elsearch :searchSettings="searchSettings" @add="add"></Elsearch>
    </div>
    <div class="stressCar_table">
      <Eltable :tableHead="tableHead" :tableDatas="tableDatas" @modify="modify" @del="del" @detailed="detailed"></Eltable>
    </div>
    <Dialog :title="title" :isShow="isShow" :readOnly="readOnly" :dialogs="dialogs" @close="close"></Dialog>
    <div class="stressCar_left">
      <h3>重点车辆统计图</h3>
      <div class="stressCar_bar">
        <StressCarBar></StressCarBar>
      </div>
    </div>
    <div class="stressCar_right">
      <h3>车辆所在位置信息</h3>
      <div class="stressCar_map">
        <BdMap :center="center" :zoom="zoom"></BdMap>
      </div>
    </div>
  </div>
</template>
<script>
import Elsearch from '@/components/search'
import Eltable from '@/components/table'
import Dialog from '@/components/dialog'
import StressCarBar from '@/components/management_com/stressCar'
import BdMap from '@/components/management_com/map'
export default {
  data: () => ({
    input: '',
    title: '',
    center: '长沙',
    zoom: 12,
    isShow: false,
    readOnly: true,
    searchSettings: [
      { placeholder: '车辆种类', type: 'input' },
      { placeholder: '机动车车牌号码', type: 'input' }
    ],
    tableHead: [
      { label: '重点车辆统计信息', prop: 'input' },
      { label: '入库时间', prop: 'input' },
      { label: '车辆种类', prop: 'input' },
      { label: '机动车车牌号码', prop: 'input' }
    ],
    tableDatas: Array(5).fill({
      input: '123'
    }),
    dialogs: [
      { label: '重点车辆统计信息', type: 'input' },
      { label: '车辆种类', type: 'input' },
      { label: '机动车车牌', type: 'input' },
      { label: '入库时间', type: 'input' }
    ]
  }),
  created () { },
  methods: {
    add (row) {
      console.log(row)
      this.readOnly = false
      this.title = '重点车辆统计信息新增'
      this.isShow = true
    },
    modify (row) {
      console.log(row)
      this.readOnly = false
      this.title = '重点车辆统计信息修改'
      this.isShow = true
    },
    del (row) {
      console.log(row)
    },
    detailed (row) {
      console.log(row)
      this.readOnly = true
      this.title = '重点车辆统计信息详情'
      this.isShow = true
    },
    close () {
      this.isShow = false
    }
  },
  components: { Elsearch, Eltable, Dialog, StressCarBar, BdMap }
}
</script>
<style lang="scss">
.stressCar {
  border: 1px solid rgb(62, 85, 104);
  margin: 0.7rem auto 0;
  width: 98%;
  padding: 0.3rem 0.2rem;
  box-sizing: border-box;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  .stressCar_head {
    width: 50%;
    height: 0.4rem;
    display: flex;
  }
  .stressCar_table {
    margin-top: 0.2rem;
    width: 100%;
  }
  .el-dialog__wrapper {
    .el-dialog {
      .el-dialog__body {
        .el-form {
          .el-form-item {
            width: 50%;
            .el-form-item__label {
              width: 1.4rem !important;
            }
            .el-form-item__content {
              margin-left: 1.4rem !important;
            }
          }
        }
      }
    }
  }
  .stressCar_left {
    width: 50%;
    height: 4rem;
    margin-top: 0.2rem;
    h3 {
      color: #fff;
      background-color: #07275b;
      width: 2rem;
      height: 0.4rem;
      text-align: center;
      line-height: 0.4rem;
    }
    .stressCar_bar {
      margin-top: 0.2rem;
      width: 100%;
      height: calc(100% - 0.6rem);
      border: 0.04rem solid #797979;
      border-radius: 20px;
    }
  }
  .stressCar_right {
    width: 45%;
    height: 4rem;
    margin-top: 0.2rem;
    h3 {
      color: #fff;
      width: 2rem;
      height: 0.4rem;
      text-align: center;
      line-height: 0.4rem;
      background-color: #07275b;
    }
    .stressCar_map {
      margin-top: 0.2rem;
      width: 100%;
      height: calc(100% - 0.6rem);
      border-radius: 20px;
      border: 1px solid #ccc;
      overflow: auto;
    }
  }
}
</style>
