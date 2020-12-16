<template>
  <div class="adminChild">
    <Elsearch :searchSettings="searchSettings" :searchBtn="searchBtn" @add="add"></Elsearch>
    <Eltable :tableHead="tableHead" :tableDatas="tableDatas" :tableSettings="tableSettings" @custom="custom" @modify="modify" @del="del" @detailed="detailed"></Eltable>
    <Dialog :title="title" :isShow="isShow" :readOnly="readOnly" :dialogs="dialogs" @close="close"></Dialog>
    <el-dialog class="jurisdiction" title="权限分配" :visible.sync="jurisdictionShow" center>
      <el-form ref="form" :model="form">
        <el-form-item label="">
          <el-checkbox v-model="checkAllOne" @change="handleCheckAllChangeOne">态势感知</el-checkbox>
          <el-checkbox-group v-model="checkedCitiesOne" @change="handleCheckedCitiesChangeOne">
            <el-checkbox v-for="One in Ones" :label="One" :key="One">{{ One }}</el-checkbox>
          </el-checkbox-group>
        </el-form-item>
        <el-form-item label="">
          <el-checkbox v-model="checkAllTwo" @change="handleCheckAllChangeTwo">活动管理</el-checkbox>
          <el-checkbox-group v-model="checkedCitiesTwo" @change="handleCheckedCitiesChangeTwo">
            <el-checkbox v-for="Two in Twos" :label="Two" :key="Two">{{ Two }}</el-checkbox>
          </el-checkbox-group>
        </el-form-item>
        <!-- <el-form-item label="">
          <el-checkbox v-model="checkAllThree" @change="handleCheckAllChangeThree">战果统计</el-checkbox>
          <el-checkbox-group v-model="checkedCitiesThree" @change="handleCheckedCitiesChangeThree">
            <el-checkbox v-for="Three in Threes" :label="Three" :key="Three">{{ Three }}</el-checkbox>
          </el-checkbox-group>
        </el-form-item> -->
        <el-form-item label="">
          <el-checkbox v-model="checkAllFour" @change="handleCheckAllChangeFour">业务协同</el-checkbox>
          <el-checkbox-group v-model="checkedCitiesFour" @change="handleCheckedCitiesChangeFour">
            <el-checkbox v-for="Four in Fours" :label="Four" :key="Four">{{ Four }}</el-checkbox>
          </el-checkbox-group>
        </el-form-item>
        <el-form-item label="">
          <el-checkbox v-model="checkAllFive" @change="handleCheckAllChangeFive">接入功能</el-checkbox>
          <el-checkbox-group v-model="checkedCitiesFive" @change="handleCheckedCitiesChangeFive">
            <el-checkbox v-for="Five in Fives" :label="Five" :key="Five">{{ Five }}</el-checkbox>
          </el-checkbox-group>
        </el-form-item>
        <el-form-item label="">
          <el-checkbox v-model="checkAllSix" @change="handleCheckAllChangeSix">数据管理</el-checkbox>
          <el-checkbox-group v-model="checkedCitiesSix" @change="handleCheckedCitiesChangeSix">
            <el-checkbox v-for="Six in Sixs" :label="Six" :key="Six">{{ Six }}</el-checkbox>
          </el-checkbox-group>
        </el-form-item>
        <el-form-item label="">
          <el-checkbox v-model="checkAllSeven" @change="handleCheckAllChangeSeven">布控管理</el-checkbox>
          <el-checkbox-group v-model="checkedCitiesSeven" @change="handleCheckedCitiesChangeSeven">
            <el-checkbox v-for="Seven in Sevens" :label="Seven" :key="Seven">{{ Seven }}</el-checkbox>
          </el-checkbox-group>
        </el-form-item>
        <el-form-item label="">
          <el-checkbox v-model="checkAllEight" @change="handleCheckAllChangeEight">系统管理</el-checkbox>
          <el-checkbox-group v-model="checkedCitiesEight" @change="handleCheckedCitiesChangeEight">
            <el-checkbox v-for="Eight in Eights" :label="Eight" :key="Eight">{{ Eight }}</el-checkbox>
          </el-checkbox-group>
        </el-form-item>
        <el-form-item label=""> </el-form-item>
        <el-button type="primary" @click="jurisdictionSubmit">保存</el-button>
      </el-form>
    </el-dialog>
  </div>
</template>
<script>
import Elsearch from '@/components/search'
import Eltable from '@/components/table'
import Dialog from '@/components/dialog'
const OptionsOne = ['安保路线', '警力态势', '人员态势', '事件态势', '车辆态势']
const OptionsTwo = ['活动申请', '活动审批', '安保方案', '人员背审', '活动归档', '战果统计']
const OptionsThree = ['接入检查站', '圈层防控', '街面巡防']
const OptionsFour = ['现场管理', '情报研判', '低慢小管理', '圈层管理']
const OptionsFive = ['票务数据接入', '证件数据接入', '视频数据接入']
const OptionsSix = ['警力展示', '安保路线管理', '重点人员信息', '安保人员信息', '重点车辆信息', '涉会车辆管理', '警情数据信息', '人员背审信息', '参会人员']
const OptionsSeven = ['人员布控', '车辆布控', '短信设置', '布控解控', '区域布控']
const OptionsEight = ['角色管理', '用户管理', '日志查询']
export default {
  data: () => ({
    title: '',
    isShow: false,
    readOnly: true,
    jurisdictionShow: false,
    checkAllOne: false,
    checkAllTwo: false,
    checkAllThree: false,
    checkAllFour: false,
    checkAllFive: false,
    checkAllSix: false,
    checkAllSeven: false,
    checkAllEight: false,
    checkedCitiesOne: [],
    checkedCitiesTwo: [],
    checkedCitiesThree: [],
    checkedCitiesFour: [],
    checkedCitiesFive: [],
    checkedCitiesSix: [],
    checkedCitiesSeven: [],
    checkedCitiesEight: [],
    Ones: OptionsOne,
    Twos: OptionsTwo,
    Threes: OptionsThree,
    Fours: OptionsFour,
    Fives: OptionsFive,
    Sixs: OptionsSix,
    Sevens: OptionsSeven,
    Eights: OptionsEight,
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
    handleCheckAllChangeOne (val) {
      this.checkedCitiesOne = val ? OptionsOne : []
    },
    handleCheckAllChangeTwo (val) {
      this.checkedCitiesTwo = val ? OptionsTwo : []
    },
    handleCheckAllChangeThree (val) {
      this.checkedCitiesThree = val ? OptionsThree : []
    },
    handleCheckAllChangeFour (val) {
      this.checkedCitiesFour = val ? OptionsFour : []
    },
    handleCheckAllChangeFive (val) {
      this.checkedCitiesFive = val ? OptionsFive : []
    },
    handleCheckAllChangeSix (val) {
      this.checkedCitiesSix = val ? OptionsSix : []
    },
    handleCheckAllChangeSeven (val) {
      this.checkedCitiesSeven = val ? OptionsSeven : []
    },
    handleCheckAllChangeEight (val) {
      this.checkedCitiesEight = val ? OptionsEight : []
    },
    handleCheckedCitiesChangeOne (value) {
      const checkedCount = value.length
      this.checkAllOne = checkedCount === this.Ones.length
    },
    handleCheckedCitiesChangeTwo (value) {
      const checkedCount = value.length
      this.checkAllTwo = checkedCount === this.Twos.length
    },
    handleCheckedCitiesChangeThree (value) {
      const checkedCount = value.length
      this.checkAllThree = checkedCount === this.Threes.length
    },
    handleCheckedCitiesChangeFour (value) {
      const checkedCount = value.length
      this.checkAllFour = checkedCount === this.Fours.length
    },
    handleCheckedCitiesChangeFive (value) {
      const checkedCount = value.length
      this.checkAllFive = checkedCount === this.Fives.length
    },
    handleCheckedCitiesChangeSix (value) {
      const checkedCount = value.length
      this.checkAllSix = checkedCount === this.Sixs.length
    },
    handleCheckedCitiesChangeSeven (value) {
      const checkedCount = value.length
      this.checkAllSeven = checkedCount === this.Sevens.length
    },
    handleCheckedCitiesChangeEight (value) {
      const checkedCount = value.length
      this.checkAllEight = checkedCount === this.Eights.length
    },
    jurisdictionSubmit () {
      const arr = []
      arr.push(this.checkedCitiesOne)
      arr.push(this.checkedCitiesTwo)
      arr.push(this.checkedCitiesThree)
      arr.push(this.checkedCitiesFour)
      arr.push(this.checkedCitiesFive)
      arr.push(this.checkedCitiesSix)
      arr.push(this.checkedCitiesSeven)
      arr.push(this.checkedCitiesEight)
      console.log(arr)
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
  .jurisdiction {
    .el-dialog {
      .el-dialog__body {
        .el-form {
          justify-content: space-around;
          flex-wrap: wrap;
          .el-form-item {
            width: 25% !important;
            margin-bottom: 0;
            .el-form-item__content {
              width: 1rem;
              .el-checkbox {
                margin-left: 0;
                color: #fff;
              }
              .el-checkbox-group {
                .el-checkbox {
                  margin-left: 0.3rem;
                  margin-right: 0;
                  color: #fff;
                }
              }
            }
          }
        }
      }
    }
  }
}
</style>
