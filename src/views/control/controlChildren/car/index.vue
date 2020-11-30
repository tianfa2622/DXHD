<template>
  <div class="car">
    <div class="car_title">
      <el-input class="inputCarNum" v-model="input" placeholder="车辆牌号"></el-input>
      <el-input class="inputTel" v-model="input" placeholder="电话号码"></el-input>
      <el-input class="inputName" v-model="input" placeholder="姓名"></el-input>
      <el-input class="inputCarMsodel" v-model="input" placeholder="请输入车辆牌号，车辆型号" />
      <el-button class="btn">查询</el-button>
    </div>
    <div class="car_content">
      <div class="table">
        <table>
          <tr class="tr_title">
            <td>车辆牌号</td>
            <td>发动机型号</td>
            <td>车身颜色</td>
            <td>机动车品牌</td>
            <td>车牌号码</td>
            <td>车辆型号</td>
            <td>操作</td>
          </tr>
          <tr v-for="(item, index) in content" :key="index">
            <td>{{ item.carId }}</td>
            <td>{{ item.engineId }}</td>
            <td>{{ item.carColor }}</td>
            <td>{{ item.carBrand }}</td>
            <td>{{ item.carNum }}</td>
            <td>{{ item.carModel }}</td>
            <td>
              <span class="operates" @click="look"> 详细 </span>
              <span class="operates" @click="add">新增 </span>
              <span class="operates" @click="modify">修改 </span>
              <span class="operates" @click="del">解控 </span>
            </td>
          </tr>
        </table>
      </div>
      <div class="detailed" v-show="isLook">
        <div class="detailed_head">
          <h3 ref="headTitle">车辆布控详情</h3>
        </div>
        <table class="detailed_content">
          <tr>
            <td><span>车辆号码</span> <el-input v-model="input" placeholder="车辆号码 " :readonly="!isModify"></el-input></td>
            <td><span>机动车品牌</span> <el-input v-model="input" placeholder="机动车品牌 " :readonly="!isModify"></el-input></td>
            <td class="td_img">
              <p>机动车照片</p>
              <img src="@/assets/control_img/u15910.png" alt="" />
            </td>
          </tr>
          <tr>
            <td><span>发动机型号</span> <el-input v-model="input" placeholder="发动机型号 " :readonly="!isModify"></el-input></td>
            <td><span>车牌号码</span> <el-input v-model="input" placeholder="车牌号码 " :readonly="!isModify"></el-input></td>
            <td></td>
          </tr>
          <tr>
            <td><span>车身颜色</span> <el-input v-model="input" placeholder="车身颜色 " :readonly="!isModify"></el-input></td>
            <td><span>车辆型号</span> <el-input v-model="input" placeholder="车辆型号 " :readonly="!isModify"></el-input></td>
            <td></td>
          </tr>
          <tr>
            <h3>布控信息</h3>
          </tr>
          <tr>
            <td><span>布控开始时间</span> <el-input v-model="input" placeholder="布控开始时间 " :readonly="!isModify"></el-input></td>
            <td>
              <span>布控结束时间 </span>
              <el-input v-model="input" placeholder="布控结束时间" :readonly="!isModify"></el-input>
            </td>
            <td></td>
          </tr>
          <tr>
            <td><span>布控事件</span> <el-input v-model="input" placeholder="布控事件 " :readonly="!isModify"></el-input></td>
            <td><span>布控人</span> <el-input v-model="input" placeholder="请输入 " :readonly="!isModify"></el-input></td>
            <td></td>
          </tr>
          <tr>
            <td><span>布控人电话</span> <el-input v-model="input" placeholder="布控人电话 " :readonly="!isModify"></el-input></td>
            <td><span>联系人二</span> <el-input v-model="input" placeholder="联系人二 " :readonly="!isModify"></el-input></td>
            <td></td>
          </tr>
          <tr>
            <td><span>联系人电话一</span> <el-input v-model="input" placeholder="联系人电话一 " :readonly="!isModify"></el-input></td>
            <td><span>联系人二</span> <el-input v-model="input" placeholder="联系人二 " :readonly="!isModify"></el-input></td>
            <td></td>
          </tr>
          <tr>
            <td><span>联系人电话二</span> <el-input v-model="input" placeholder="联系人电话二 " :readonly="!isModify"></el-input></td>
            <td><span>绰号</span> <el-input v-model="input" placeholder="请输入 " :readonly="!isModify"></el-input></td>
            <td></td>
          </tr>
        </table>
        <p class="text_area" v-show="isDel">
          <span>请输入车辆解控原因</span>
          <el-input type="textarea" v-model="textArea"></el-input>
        </p>
        <el-button class="esc" @click="sub" v-show="isModify">
          <span ref="sub_value">布控</span>
        </el-button>
        <el-button class="esc" @click="esc">确认</el-button>
      </div>
      <ul class="car_foot" v-show="isLook">
        <li class="foot_left">总共<span> 01 </span> 个页面量</li>
        <li class="foot_right">
          <el-button>首页</el-button>
          <el-button>&lt;</el-button>
          <el-button>&gt;</el-button>
          <el-button>尾页</el-button>
        </li>
      </ul>
    </div>
  </div>
</template>
<script>
export default {
  data: () => ({
    content: [{
      carId: '湖南省芙蓉区分局',
      engineId: '湖南省万家丽派出所',
      carColor: '不良状态预警示意',
      carBrand: '李海潮',
      carNum: '15616400623',
      carModel: '备注'
    }, {
      carId: '湖南省芙蓉区分局',
      engineId: '湖南省万家丽派出所',
      carColor: '不良状态预警示意',
      carBrand: '李海潮',
      carNum: '15616400623',
      carModel: '备注'
    }],
    input: '',
    textArea: '请输入',
    isLook: false,
    isModify: false,
    isDel: false
  }),
  created () { },
  methods: {
    look () {
      this.isLook = true
      this.isModify = false
      this.isDel = false
      this.$refs.headTitle.innerHTML = '车辆布控详情'
    },
    add () {
      this.isLook = true
      this.isModify = true
      this.isDel = false
      this.$refs.headTitle.innerHTML = '车辆布控'
      this.$refs.sub_value.innerHTML = '布控'
    },
    modify () {
      this.isLook = true
      this.isModify = true
      this.isDel = false
      this.$refs.headTitle.innerHTML = '车辆布控修改'
      this.$refs.sub_value.innerHTML = '修改'
    },
    del () {
      this.isLook = true
      this.isModify = true
      this.isDel = true
      this.$refs.headTitle.innerHTML = '车辆布控解控'
      this.$refs.sub_value.innerHTML = '布控解控'
    },
    esc () {
      this.isLook = false
    },
    sub () {
      this.isLook = false
    }
  }
}
</script>
<style lang="scss">
.car {
  padding-bottom: 0.2rem;
  .car_title {
    width: 100%;
    height: 100%;
    display: flex;
    padding: 0 1rem;
    box-sizing: border-box;
    input {
      background-color: rgb(1, 26, 63);
      border: none;
    }
    .inputCarMsodel {
      width: 20% !important;
    }
    .inputCarNum,
    .inputTel,
    .inputName,
    .inputCarMsodel {
      width: 10%;
      margin: 0 0.5rem;
    }
    input::placeholder {
      color: #fff !important;
      text-align: center;
    }
    .btn {
      margin-left: 0.5rem;
      background-color: rgb(62, 85, 104);
      color: #fff;
      border: none;
    }
  }
  .car_content {
    width: 100%;
    margin-top: 0.2rem;
    .table {
      padding-left: 5%;
      box-sizing: border-box;
      table {
        width: 100%;
        text-align: center;
        tr,
        td {
          border: 1px solid rgb(121, 121, 121);
          color: #fff;
        }
        .tr_title {
          background-color: #021030;
        }
        tr {
          height: 0.8rem;
          background-color: rgb(1, 25, 63);
          td {
            .operates {
              cursor: pointer;
              margin: 0 0.2rem;
              color: #00ffff;
            }
          }
        }
      }
    }
    .detailed {
      width: 100%;
      background-color: rgb(0, 3, 29);
      margin-top: 0.3rem;
      border: 1px solid rgb(62, 85, 104);
      text-align: center;
      padding-bottom: 0.2rem;
      box-sizing: border-box;
      h3 {
        color: #6aeff4;
        font-family: 'Arial Normal', 'Arial';
        text-align: center;
        height: 0.5rem;
        line-height: 0.5rem;
        width: 100%;
        background-color: rgb(5, 37, 90);
      }
      .detailed_content {
        width: 100%;
        tr {
          display: flex;
          justify-content: space-around;
          height: 0.4rem;
          line-height: 0.4rem;
          margin: 0.2rem 0;
          padding-left: 5%;
          box-sizing: border-box;
          h3 {
            height: 0.4rem;
            line-height: 0.4rem;
          }
          td {
            width: 30%;
            display: flex;
            span {
              color: #fff;
              width: 20%;
              text-align: right;
              margin-right: 0.1rem;
            }
            .el-input {
              width: 80%;
              .el-input__inner {
                background-color: rgb(5, 33, 73);
                border: none;
              }
              input::placeholder {
                text-align: center;
                color: #fff;
              }
            }
          }
          .td_img {
            display: inline-block;
            text-align: center;
            p {
              color: #fff;
            }
          }
        }
      }
      .text_area {
        width: 100%;
        display: flex;
        height: 0.8rem;
        line-height: 0.8rem;
        color: #fff;
        padding: 0 0.2rem;
        box-sizing: border-box;
        margin-bottom: 0.2rem;
        span {
          width: 10%;
        }
        .el-textarea {
          width: 90%;
          height: 100%;
          .el-textarea__inner {
            height: 100%;
            text-align: center;
            line-height: 0.8rem;
            background-color: #052149;
            border: none;
            overflow: auto;
          }
        }
      }
      .esc {
        width: 20%;
        margin-left: 1rem;
        color: #fff;
        background-color: #003399;
        border: none;
      }
    }
  }
  .car_foot {
    width: 100%;
    margin: 0.2rem auto 0;
    display: flex;
    justify-content: space-between;
    padding-bottom: 0.2rem;
    border-top: 1px solid rgb(32, 46, 69);
    padding: 0.2rem;
    box-sizing: border-box;
    .foot_left {
      color: #868686;
      line-height: 0.44rem;
      span {
        color: #ff0000;
        font-weight: 700;
      }
    }
    .foot_right {
      .el-button {
        background-color: rgb(214, 219, 223);
        border: none;
      }
    }
  }
}
</style>
