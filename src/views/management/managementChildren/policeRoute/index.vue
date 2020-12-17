<template>
  <div class="policeRoute">
    <Elsearch :searchSettings="searchSettings" :searchBtn="searchBtn" @add="add"></Elsearch>
    <Eltable :tableHead="tableHead" :tableDatas="tableDatas" :tableSettings="tableSettings" @modify="modify" @del="del" @detailed="detailed" @download="download"></Eltable>
    <div class="policeRoute_foot" v-show="isShow">
      <BdMap :center="center" :zoom="zoom" v-if="mapSHow" ref="bdMap"></BdMap>
      <div class="foot_table" v-if="tableShow">
        <h3>{{ title }}</h3>
        <Elsearch :searchSettings="dialogs" :readOnly="readOnly"></Elsearch>
        <el-button type="primary" v-show="!readOnly" @click="isShow = false">保存</el-button>
      </div>
    </div>
  </div>
</template>
<script>
import Elsearch from '@/components/search'
import Eltable from '@/components/table'
import BdMap from '@/components/management_com/map'
export default {
  data: () => ({
    title: '',
    isShow: false,
    readOnly: true,
    mapSHow: false,
    tableShow: false,
    searchSettings: [
      { placeholder: '安保路线编号', type: 'select' },
      { placeholder: '公安机关机构代码', type: 'input' },
      { placeholder: '公安机关名称', type: 'input' }
    ],
    searchBtn: [
      { name: '查询', type: 'search' },
      { name: '新增', type: 'add' }
    ],
    tableHead: [
      { label: '信息主键编号', prop: 'input' },
      { label: '安保路线', prop: 'input' },
      { label: '安保路线编号', prop: 'input' },
      { label: '公安机关机构代码', prop: 'input' },
      { label: '公安机关名称', prop: 'input' },
      { label: '开始时间', prop: 'input' },
      { label: '结束时间', prop: 'input' }
    ],
    tableDatas: Array(5).fill({
      input: '123'
    }),
    tableSettings: [
      { name: '修改', type: 'modify' },
      { name: '删除', type: 'delete' },
      { name: '详情', type: 'detailed' },
      { name: '查看新增路线', type: 'download' }
    ],
    dialogs: [
      { label: '信息主键编号', type: 'input' },
      { label: '公安机关名称', type: 'input' },
      { label: '安保路线', type: 'input' },
      { label: '开始时间', type: 'input' },
      { label: '安保路线编号', type: 'input' },
      { label: '结束时间', type: 'input' },
      { label: '公安机关机构代码', type: 'input' }
    ],
    center: { lng: 112.98941034779713, lat: 28.18392487724562 },
    zoom: 17
  }),
  created () { },
  components: { Elsearch, Eltable, BdMap },
  methods: {
    add (row) {
      this.title = '安保路线新增'
      this.readOnly = false
      this.isShow = true
      this.mapSHow = true
      this.tableShow = true
      this.$nextTick(() => {
        this.$refs.bdMap.$el.style.width = '45%'
      })
    },
    modify () {
      this.title = '安保路线修改'
      this.readOnly = false
      this.isShow = true
      this.mapSHow = true
      this.tableShow = true
      this.$nextTick(() => {
        this.$refs.bdMap.$el.style.width = '45%'
      })
    },
    del (row) {
      console.log(row)
    },
    detailed () {
      this.title = '安保路线详情'
      this.readOnly = true
      this.isShow = true
      this.mapSHow = true
      this.tableShow = true
      this.$nextTick(() => {
        this.$refs.bdMap.$el.style.width = '45%'
      })
    },
    download () {
      this.isShow = true
      this.mapSHow = true
      this.tableShow = false
      this.$nextTick(() => {
        this.$refs.bdMap.$el.style.width = '100%'
      })
    }
  }
}
</script>
<style lang="scss">
.policeRoute {
  width: 100%;
  padding-right: 0.2rem;
  box-sizing: border-box;
  .table {
    margin: 0.2rem 0;
  }
  .policeRoute_foot {
    width: 100%;
    height: 4rem;
    display: flex;
    justify-content: space-between;
    border: 1px solid #797979;
    padding: 0.2rem;
    box-sizing: border-box;
    .bm-view,
    .foot_table {
      width: 45%;
    }
    .foot_table {
      background-color: #010f2e;
      text-align: center;
      h3 {
        color: #4cbfbf;
        font-size: 0.16rem;
        margin-bottom: 0.2rem;
        background-color: #00173c;
        height: 0.4rem;
        line-height: 0.4rem;
      }
      .el-form {
        flex-wrap: wrap;
        justify-content: space-between;
        margin-bottom: 0.2rem;
        .el-form-item {
          width: 45%;
          margin-bottom: 0.2rem;
          .el-form-item__label-wrap {
            // margin-left: 28px;
            .el-form-item__label {
              width: 1.4rem !important;
            }
          }
          .el-form-item__content {
            margin-left: 1.4rem;
            width: auto;
          }
        }
      }
    }
  }
}
</style>
