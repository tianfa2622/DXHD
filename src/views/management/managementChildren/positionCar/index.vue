<template>
  <div class="positionCar">
    <div class="positionCar_head">
      <Elsearch :searchSettings="searchSettings"></Elsearch>
    </div>
    <div class="positionCar_table">
      <Eltable :tableHead="tableHead" :tableDatas="tableDatas" @add="add" @modify="modify" @del="del" @detailed="detailed"></Eltable>
    </div>
    <Dialog :title="title" :isShow="isShow" :readOnly="readOnly" :dialogs="dialogs" @close="close"></Dialog>
    <div class="positionCar_map">
      <h3>车辆所在位置信息</h3>
      <div class="map">
        <BdMap :center="center" :zoom="zoom"></BdMap>
      </div>
    </div>
  </div>
</template>
<script>
import Eltable from '@/components/table'
import Elsearch from '@/components/search'
import Dialog from '@/components/dialog'
import BdMap from '@/components/management_com/map'
export default {
  data: () => ({
    input: '',
    title: '',
    center: '长沙',
    zoom: 12,
    isShow: false,
    readOnly: true,
    tableHead: [
      { label: '编号', prop: 'input' },
      { label: '入库时间', prop: 'input' },
      { label: '重点车辆编号', prop: 'input' },
      { label: '重点车辆牌号', prop: 'input' },
      { label: '地球经度', prop: 'input' },
      { label: '地球纬度', prop: 'input' }
    ],
    tableDatas: Array(5).fill({
      input: '123'
    }),
    searchSettings: [
      { placeholder: '重点车辆编号', type: 'input' },
      { placeholder: '重点车辆牌号', type: 'input' },
      { placeholder: '请输人地球经度，地球纬度', type: 'input' }
    ],
    dialogs: [
      { label: '编号', type: 'input' },
      { label: '入库时间', type: 'input' },
      { label: '重点车辆编号', type: 'input' },
      { label: '重点车辆牌号', type: 'input' },
      { label: '地球经度', type: 'input' },
      { label: '地球纬度', type: 'input' }
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
    }
  },
  components: {
    Eltable, Elsearch, Dialog, BdMap
  }
}
</script>
<style lang="scss">
.positionCar {
  border: 1px solid rgb(62, 85, 104);
  margin: 0.7rem auto 0;
  width: 98%;
  padding: 0.3rem 0.2rem;
  box-sizing: border-box;
  display: flex;
  flex-wrap: wrap;
  .positionCar_head {
    width: 50%;
    height: 0.4rem;
    display: flex;
  }
  .positionCar_table {
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
  .positionCar_map {
    width: 100%;
    height: 4rem;
    border: 0.04rem solid #052149;
    border-radius: 20px;
    margin-top: 0.2rem;
    padding: 0.2rem;
    box-sizing: border-box;
    h3 {
      color: #fff;
      height: 0.2rem;
    }
    .map {
      width: 80%;
      margin: 0 auto;
      height: calc(100% - 0.2rem);
      border-radius: 20px;
      border: 1px solid #ccc;
      overflow: auto;
    }
  }
}
</style>
