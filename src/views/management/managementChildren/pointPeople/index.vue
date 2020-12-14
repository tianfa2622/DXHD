<template>
  <div class="pointPeople">
    <Elsearch :searchSettings="searchSettings" :searchBtn="searchBtn" @add="add"></Elsearch>
    <Elsearch class="message" :searchSettings="mainMessage"></Elsearch>
    <el-radio-group v-model="radio" v-for="(li, index) in lis" :key="index" @change="clickRadio">
      <el-radio :label="li.path">{{ li.label }}</el-radio>
    </el-radio-group>
    <router-view></router-view>
    <el-dialog :title="title" :visible.sync="isShow" center>
      <h3>基础信息</h3>
      <el-form ref="form" :model="form" label-width="auto">
        <el-form-item :label="item.label" v-for="(item, index) in dialogsTitle" :key="index">
          <el-input v-if="item.type == 'input'" v-model="form.name" :readonly="readOnly" :type="item.type"></el-input>
          <el-select v-if="item.type == 'select'" v-model="form.lx" :readonly="readOnly" placeholder="请选择" @change="clickSelect">
            <el-option v-for="item in options" :key="item.value" :label="item.label" :value="item.value"> </el-option>
          </el-select>
        </el-form-item>
      </el-form>
      <div v-show="Show">
        <h3>{{ h3 }}</h3>
        <el-form ref="form" :model="form" label-width="auto">
          <el-form-item :label="item.label" v-for="(item, index) in dialogs" :key="index">
            <el-input v-model="form.name" :readonly="readOnly" :type="item.type"></el-input>
          </el-form-item>
        </el-form>
      </div>
    </el-dialog>
  </div>
</template>
<script>
import Elsearch from '@/components/search'
export default {
  data: () => ({
    title: '',
    h3: '',
    radio: '/management/pointPeople/pointPeopleAviation',
    Show: false,
    isShow: false,
    readOnly: true,
    searchSettings: [
      { placeholder: '公民身份证号码', type: 'input' },
      { placeholder: '姓名', type: 'input' }
    ],
    mainMessage: [
      { label: '常用证件号码', type: 'input' },
      { label: '姓名', type: 'input' },
      { label: '民族代码', type: 'input' },
      { label: '公民身份证号码', type: 'input' },
      { label: '性别代码', type: 'input' },
      { label: '国籍代码', type: 'input' },
      { label: '证件号码', type: 'input' }
    ],
    messages: [],
    btns: [],
    searchBtn: [
      { name: '查询', type: 'search' },
      { name: '新增', type: 'add' }
    ],
    dialogsTitle: [
      { label: '常用证件代码', type: 'input' },
      { label: '证件号码', type: 'input' },
      { label: '公民身份证号码', type: 'input' },
      { label: '姓名', type: 'input' },
      { label: '性别代码', type: 'input' },
      { label: '国籍代码', type: 'input' },
      { label: '民族代码', type: 'input' },
      { label: '动态信息类型', type: 'select' }
    ],
    dialogs: [],
    options: [{
      value: '1',
      label: '民航旅客订票'
    }, {
      value: '2',
      label: '民航旅客离岗'
    }, {
      value: '3',
      label: '民航旅客退票'
    }, {
      value: '4',
      label: '铁路订票'
    }, {
      value: '5',
      label: '铁路乘车'
    }, {
      value: '6',
      label: '铁路退票'
    }, {
      value: '7',
      label: '公路客运购票'
    }, {
      value: '8',
      label: '公路客运退票'
    }, {
      value: '9',
      label: '公路客运验票'
    }, {
      value: '10',
      label: '公安检查站人员检查'
    }, {
      value: '11',
      label: '旅客住宿'
    }, {
      value: '12',
      label: '轮渡订票'
    }, {
      value: '13',
      label: '轮渡退票'
    }, {
      value: '14',
      label: '网吧上网'
    }, {
      value: '15',
      label: '人像识别'
    }],
    lis: [
      { label: '民航旅客信息', path: '/management/pointPeople/pointPeopleAviation' },
      { label: '铁路信息', path: '/management/pointPeople/pointPeopleRailway' },
      { label: '公路客运购票信息', path: '/management/pointPeople/pointPeopleBus' },
      { label: '公安检查站人员检查', path: '/management/pointPeople/pointPeopleCheckpoint' },
      { label: '旅馆住宿信息', path: '/management/pointPeople/pointPeopleHotel' },
      { label: '轮渡信息', path: '/management/pointPeople/pointPeopleShip' },
      { label: '网吧上网', path: '/management/pointPeople/pointPeopleInternetBar' },
      { label: '人像识别', path: '/management/pointPeople/pointPeoplePortrait' }
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
    clickLi (path) {
      this.$router.push(path)
    },
    clickRadio (path) {
      this.$router.push(path)
    },
    clickSelect () {
      console.log(this.form.lx)
      const dialogs = [
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
      ]
      if (this.form.lx === '1' || this.form.lx === '2' || this.form.lx === '3') {
        this.h3 = '民航出行'
        this.dialogs = dialogs[1]
        this.Show = true
      } else if (this.form.lx === '4' || this.form.lx === '5' || this.form.lx === '6') {
        this.h3 = '铁路出行'
        this.dialogs = dialogs[2]
        this.Show = true
      } else if (this.form.lx === '7' || this.form.lx === '8' || this.form.lx === '9') {
        this.h3 = '公路客运'
        this.dialogs = dialogs[3]
        this.Show = true
      } else if (this.form.lx === '10') {
        this.h3 = '公安检查站人员检查'
        this.dialogs = dialogs[5]
        this.Show = true
      } else if (this.form.lx === '11') {
        this.h3 = '旅客住宿'
        this.dialogs = dialogs[6]
        this.Show = true
      } else if (this.form.lx === '12' || this.form.lx === '13') {
        this.h3 = '轮渡订票'
        this.dialogs = dialogs[4]
        this.Show = true
      } else if (this.form.lx === '14') {
        this.h3 = '网吧上网'
        this.dialogs = dialogs[7]
        this.Show = true
      } else if (this.form.lx === '15') {
        this.h3 = '人像识别'
        this.dialogs = dialogs[8]
        this.Show = true
      }
    }
  },
  components: { Elsearch }
}
</script>
<style lang="scss">
.pointPeople {
  width: 100%;
  padding-right: 0.2rem;
  box-sizing: border-box;
  .table {
    margin-top: 0.2rem;
  }
  .table {
    border: 1px solid #797979;
    padding: 0.2rem;
    box-sizing: border-box;
  }
  .message {
    flex-wrap: wrap;
    border: 1px solid #3e5568;
    padding: 0.2rem;
    box-sizing: border-box;
    margin-top: 0.2rem;
    .el-form-item {
      width: 30%;
      margin-bottom: 0.2rem;
      .el-form-item__content {
        width: auto;
      }
    }
  }
  .el-radio-group {
    margin-top: 0.2rem;
    margin-right: 0.2rem;
    .el-radio {
      .el-radio__label {
        color: #fff;
      }
    }
    .is-checked {
      .el-radio__label {
        color: #409eff !important;
      }
    }
  }
  .children {
    border: 1px solid #3e5568;
    padding: 0.2rem;
    box-sizing: border-box;
    .el-form {
      flex-wrap: wrap;
      margin-top: 0.2rem;
      .el-form-item {
        width: 30%;
        margin-bottom: 0.2rem;
        .el-form-item__content {
          width: auto;
        }
      }
    }
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
                width: 1.3rem !important;
              }
            }
          }
        }
      }
    }
  }
}
</style>
