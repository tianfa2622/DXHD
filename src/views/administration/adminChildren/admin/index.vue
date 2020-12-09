<template>
  <div class="adminChild">
    <Elsearch :searchSettings="searchSettings" :searchBtn="searchBtn" @add="add"></Elsearch>
    <Eltable :tableHead="tableHead" :tableDatas="tableDatas" :tableSettings="tableSettings" @custom="custom" @modify="modify" @del="del" @detailed="detailed"></Eltable>
    <Dialog :title="title" :isShow="isShow" :readOnly="readOnly" :dialogs="dialogs" @close="close"></Dialog>
    <el-dialog title="权限分配" :visible.sync="jurisdictionShow" center>
      <el-form ref="form" :model="form">
        <el-form-item label="">
          <el-checkbox :indeterminate="isIndeterminate" v-model="checkAll" @change="handleCheckAllChange">全选</el-checkbox>
          <div style="margin: 15px 0"></div>
          <el-checkbox-group v-model="checkedCities" @change="handleCheckedCitiesChange">
            <el-checkbox v-for="city in cities" :label="city" :key="city">{{ city }}</el-checkbox>
          </el-checkbox-group>
        </el-form-item>
      </el-form>
    </el-dialog>
  </div>
</template>
<script>
import Elsearch from '@/components/search'
import Eltable from '@/components/table'
import Dialog from '@/components/dialog'
const cityOptions = ['上海', '北京', '广州', '深圳']
export default {
  data: () => ({
    title: '',
    isShow: false,
    readOnly: true,
    jurisdictionShow: false,
    checkAll: false,
    checkedCities: ['上海', '北京'],
    cities: cityOptions,
    isIndeterminate: true,
    searchSettings: [
      { placeholder: '请输入角色名称', type: 'input' },
      { placeholder: '请输入角色编号', type: 'input' }
    ],
    searchBtn: [
      { name: '查询', type: 'search' },
      { name: '新增', type: 'add' }
    ],
    tableHead: [
      { label: '角色编号', prop: 'input' },
      { label: '角色名称', prop: 'input' },
      { label: '角色备注', prop: 'input' },
      { label: '权限范围', prop: 'input' }
    ],
    tableDatas: Array(5).fill({
      input: '123'
    }),
    tableSettings: [
      { name: '修改', type: 'modify' },
      { name: '删除', type: 'delete' },
      { name: '详情', type: 'detailed' },
      { name: '添加权限', type: 'custom' }
    ],
    dialogs: [
      { label: '角色编号', type: 'input' },
      { label: '角色名称', type: 'input' },
      { label: '角色备注', type: 'input' }
    ],
    form: {}
  }),
  created () { },
  methods: {
    add (row) {
      this.title = '角色新增'
      this.readOnly = false
      this.isShow = true
    },
    modify () {
      this.title = '角色修改'
      this.readOnly = false
      this.isShow = true
    },
    del (row) {
      console.log(row)
    },
    detailed () {
      this.title = '角色详情'
      this.readOnly = true
      this.isShow = true
    },
    custom () {
      this.jurisdictionShow = true
    },
    close () {
      this.isShow = false
    },
    handleCheckAllChange (val) {
      this.checkedCities = val ? cityOptions : []
      this.isIndeterminate = false
    },
    handleCheckedCitiesChange (value) {
      const checkedCount = value.length
      this.checkAll = checkedCount === this.cities.length
      this.isIndeterminate = checkedCount > 0 && checkedCount < this.cities.length
    }
  },
  components: { Elsearch, Eltable, Dialog }
}
</script>
<style lang="scss">
.adminChild {
  width: 100%;
  padding-right: 0.2rem;
  box-sizing: border-box;
  .table {
    margin-top: 0.2rem;
  }
}
</style>
