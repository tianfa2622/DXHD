<template>
  <div class="release">
    <div class="release_head">
      <div class="head_top">
        <div class="head_left">
          <button class="button" @click="lookCar">
            <button>车辆布控解控</button>
          </button>
        </div>
        <div class="head_right">
          <button class="button" @click="lookMan">
            <button>人员布控解控</button>
          </button>
        </div>
      </div>
      <div class="head_bottom">
        <el-input class="input" v-model="input" placeholder="请输入被布控人姓名"></el-input>
        <span class="span">布控时间</span>
        <el-date-picker class="input" v-model="value1" type="daterange" range-separator="—" start-placeholder="年/月/日" end-placeholder="年/月/日"> </el-date-picker>
        <el-input class="input" v-show="!isLookCar" v-model="input" placeholder="请输被布控人证件号码"></el-input>
        <el-input class="input" v-model="input" placeholder="请输入布控姓名"></el-input>
        <el-button>查询</el-button>
      </div>
    </div>
    <div class="release_content">
      <div class="table">
        <table>
          <tr class="tr_title">
            <td>序号</td>
            <td>被布控人姓名</td>
            <td>被布控人证件号</td>
            <td>布控时间</td>
            <td>布控人姓名</td>
            <td>操作</td>
          </tr>
          <tr v-for="(item, index) in content" ref="li" :key="index">
            <td>{{ item.id }}</td>
            <td>{{ item.prisonerName }}</td>
            <td>{{ item.idCard }}</td>
            <td>{{ item.time }}</td>
            <td>{{ item.policeName }}</td>
            <td>
              <span class="operates" @click="details"> 详情 </span>
              <span class="operates" @click="del"> 删除 </span>
            </td>
          </tr>
        </table>
      </div>
      <h3>布控解控详细信息</h3>
      <div class="detailed" v-show="LookMan">
        <div class="detailed_head">
          <h3 ref="headTitle">被布控人基础信息详情</h3>
        </div>
        <div class="detailed_content">
          <ul class="detailed_menu">
            <li class="menu_list"><span>被布控人姓名</span> <el-input v-model="input" readonly placeholder="被布控人姓名"></el-input></li>
            <li class="menu_list"><span>证件号码</span> <el-input v-model="input" readonly placeholder="证件号码"></el-input></li>
            <li class="menu_list"><span>证件类型</span> <el-input v-model="input" readonly placeholder="证件类型"></el-input></li>
          </ul>
          <ul class="detailed_menu">
            <li class="menu_list"><span>民族</span> <el-input v-model="input" readonly placeholder="民族"></el-input></li>
            <li class="menu_list"><span>籍贯</span> <el-input v-model="input" readonly placeholder="籍贯"></el-input></li>
            <li class="menu_list"><span>性别</span><el-input v-model="input" readonly placeholder="性别"></el-input></li>
          </ul>
          <ul class="detailed_menu">
            <li class="menu_list"><span>出生日期</span> <el-date-picker v-model="value1" readonly type="date" placeholder="出生日期"> </el-date-picker></li>
            <li class="menu_list"><span>住址</span> <el-input v-model="input" readonly placeholder="住址"></el-input></li>
            <li class="menu_list"><span>电话</span> <el-input v-model="input" readonly placeholder="电话 "></el-input></li>
          </ul>
          <h3>被布控人特征信息</h3>
          <ul class="detailed_menu">
            <li class="menu_list"><span>身高</span> <el-input v-model="input" readonly placeholder="身高"></el-input></li>
            <li class="menu_list"><span>体型特征</span> <el-input v-model="input" readonly placeholder="体型特征"></el-input></li>
            <li class="menu_list"><span>口音</span><el-input v-model="input" readonly placeholder="口音"></el-input></li>
          </ul>
          <ul class="detailed_menu">
            <li class="menu_list"><span>绰号</span> <el-input v-model="input" readonly placeholder="绰号 "></el-input></li>
            <li class="menu_list"><span>化名</span> <el-input v-model="input" readonly placeholder="化名"></el-input></li>
            <li class="menu_list"></li>
          </ul>
          <p class="text_area">
            <span>取消人员布控原因</span>
            <el-input type="textarea" v-model="textArea"></el-input>
          </p>
          <el-button class="btn">
            <span class="btn_value">确认</span>
          </el-button>
          <el-button class="btn">取消</el-button>
        </div>
        <ul class="detailed_foot">
          <li class="foot_left">总共<span> 01 </span> 个页面量</li>
          <li class="foot_right">
            <el-button>首页</el-button>
            <el-button>&lt;</el-button>
            <el-button>&gt;</el-button>
            <el-button>尾页</el-button>
          </li>
        </ul>
      </div>
      <div class="detailed_Car" v-show="LookCar">
        <div class="detailed_Car_head">
          <h3 ref="headTitle">车辆布控详情</h3>
        </div>
        <table class="detailed_Car_content">
          <tr>
            <td><span>车辆号码</span> <el-input v-model="input" placeholder="车辆号码 " readonly></el-input></td>
            <td><span>机动车品牌</span> <el-input v-model="input" placeholder="机动车品牌 " readonly></el-input></td>
            <td class="td_img">
              <p>机动车照片</p>
              <img src="@/assets/control_img/u15910.png" alt="" />
            </td>
          </tr>
          <tr>
            <td><span>发动机型号</span> <el-input v-model="input" placeholder="发动机型号 " readonly></el-input></td>
            <td><span>车牌号码</span> <el-input v-model="input" placeholder="车牌号码 " readonly></el-input></td>
            <td></td>
          </tr>
          <tr>
            <td><span>车身颜色</span> <el-input v-model="input" placeholder="车身颜色 " readonly></el-input></td>
            <td><span>车辆型号</span> <el-input v-model="input" placeholder="车辆型号 " readonly></el-input></td>
            <td></td>
          </tr>
          <tr>
            <h3>布控信息</h3>
          </tr>
          <tr>
            <td><span>布控开始时间</span> <el-input v-model="input" placeholder="布控开始时间 " readonly></el-input></td>
            <td>
              <span>布控结束时间 </span>
              <el-input v-model="input" placeholder="布控结束时间" readonly></el-input>
            </td>
            <td></td>
          </tr>
          <tr>
            <td><span>布控事件</span> <el-input v-model="input" placeholder="布控事件 " readonly></el-input></td>
            <td><span>布控人</span> <el-input v-model="input" placeholder="请输入 " readonly></el-input></td>
            <td></td>
          </tr>
          <tr>
            <td><span>布控人电话</span> <el-input v-model="input" placeholder="布控人电话 " readonly></el-input></td>
            <td><span>联系人二</span> <el-input v-model="input" placeholder="联系人二 " readonly></el-input></td>
            <td></td>
          </tr>
          <tr>
            <td><span>联系人电话一</span> <el-input v-model="input" placeholder="联系人电话一 " readonly></el-input></td>
            <td><span>联系人二</span> <el-input v-model="input" placeholder="联系人二 " readonly></el-input></td>
            <td></td>
          </tr>
          <tr>
            <td><span>联系人电话二</span> <el-input v-model="input" placeholder="联系人电话二 " readonly></el-input></td>
            <td><span>绰号</span> <el-input v-model="input" placeholder="请输入 " readonly></el-input></td>
            <td></td>
          </tr>
        </table>
        <p class="text_area">
          <span>请输入车辆解控原因</span>
          <el-input type="textarea" v-model="textArea"></el-input>
        </p>
        <el-button class="btn">
          <span ref="btn_value">确认</span>
        </el-button>
        <el-button class="btn">取消</el-button>
        <ul class="detailed_foot">
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
  </div>
</template>
<script>
export default {
  data: () => ({
    value1: '',
    input: '',
    isLookCar: true,
    LookCar: false,
    LookMan: false,
    textArea: '请输入',
    content: [{
      id: '1',
      prisonerName: '李尖尖',
      idCard: '430455577778889960',
      time: '2020-09-09',
      policeName: '李海潮'
    }, {
      id: '2',
      prisonerName: '李尖尖',
      idCard: '430455577778889960',
      time: '2020-09-09',
      policeName: '李海潮'
    }]
  }),
  created () {
    this.isLookCar = true
    this.initial()
  },
  methods: {
    initial () {
      this.LookCar = false
      this.LookMan = false
    },
    lookCar () {
      this.isLookCar = true
      this.initial()
    },
    lookMan () {
      this.isLookCar = false
      this.initial()
    },
    details () {
      if (this.isLookCar) {
        this.LookCar = true
      } else {
        this.LookMan = true
      }
    },
    del (index) {
      this.content.splice(this.$refs.li[index], 1)
    }
  }
}
</script>
<style lang="scss">
.release {
  .release_head {
    .head_top {
      display: flex;
      .head_left,
      .head_right {
        border: 4px solid rgb(121, 121, 121);
        width: 2rem;
        height: 0.8rem;
        padding: 0.05rem;
        box-sizing: border-box;
        .button {
          width: 100%;
          height: 100%;
          border: 1px solid rgb(121, 121, 121);
          background-color: rgb(0, 0, 102);
          padding: 0.05rem;
          box-sizing: border-box;
          button {
            width: 100%;
            height: 100%;
            background-color: #00031d;
            border: 1px solid rgb(121, 121, 121);
            color: #fff;
          }
        }
      }
      .head_left {
        border-right: none;
      }
    }
    .head_bottom {
      display: flex;
      height: 0.4rem;
      line-height: 0.4rem;
      color: #fff;
      margin-top: 0.1rem;
      .span {
        margin-right: 0.2rem;
      }
      .el-button {
        background-color: rgb(62, 85, 104);
        text-align: center;
        border: none;
        color: #fff;
      }
      .input {
        width: 20%;
        margin-right: 0.2rem;
        background-color: #052149;
        border: none;
        input {
          background-color: #052149;
          border: none;
          text-align: center;
        }
        input::placeholder {
          color: #fff;
          text-align: center;
        }
      }
    }
  }
  .release_content {
    width: 100%;
    margin-top: 0.2rem;
    padding-bottom: 0.2rem;
    box-sizing: border-box;
    .table {
      padding-left: 0.5rem;
      box-sizing: border-box;
      margin-bottom: 0.2rem;
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
    h3 {
      width: 20%;
      height: 0.5rem;
      background-color: rgb(6, 38, 91);
      line-height: 0.5rem;
      text-align: center;
      color: #fff;
    }
    .detailed {
      width: 100%;
      background-color: rgb(0, 3, 29);
      margin-top: 0.3rem;
      border: 1px solid rgb(62, 85, 104);
      h3 {
        color: #6aeff4;
        font-family: 'Arial Normal', 'Arial';
        text-align: center;
        height: 0.5rem;
        line-height: 0.5rem;
        width: 100%;
        background-color: rgb(0, 18, 53);
      }
      .detailed_content {
        width: 100%;
        box-sizing: border-box;
        padding: 0.2rem;
        text-align: center;
        .detailed_menu {
          display: flex;
          justify-content: space-around;
          .menu_list {
            line-height: 0.4rem;
            width: 30%;
            height: 0.4rem;
            display: flex;
            margin: 0.2rem 0;
            .el-input__inner {
              color: #fff;
            }
            .el-input__prefix {
              right: 1.2rem;
              left: initial;
            }
            .el-input {
              width: 80%;
              input {
                background-color: rgb(5, 33, 73);
                border: none;
                text-align: center;
              }
              input::placeholder {
                text-align: center;
                color: #fff;
              }
            }
            span {
              width: 20%;
              color: #fff;
              text-align: right;
              display: inline-block;
              margin-right: 0.1rem;
            }
          }
        }
        h3 {
          width: 80%;
          margin: auto;
        }
      }
    }
    .btn {
      background-color: #003399;
      width: 20%;
      border: none;
      color: #fff;
      margin-top: 0.3rem;
      margin-left: 1rem;
    }
    .detailed_foot {
      width: 100%;
      margin-top: 0.2rem;
      display: flex;
      justify-content: space-between;
      padding: 0.2rem;
      box-sizing: border-box;
      border-top: 1px solid rgb(121, 121, 121);
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
    .text_area {
      width: 100%;
      display: flex;
      height: 0.8rem;
      line-height: 0.8rem;
      color: #fff;
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
    .detailed_Car {
      width: 100%;
      background-color: rgb(0, 3, 29);
      margin-top: 0.3rem;
      border: 1px solid rgb(62, 85, 104);
      text-align: center;
      h3 {
        color: #6aeff4;
        font-family: 'Arial Normal', 'Arial';
        text-align: center;
        height: 0.5rem;
        line-height: 0.5rem;
        width: 100%;
        background-color: rgb(5, 37, 90);
      }
      .detailed_Car_content {
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
    }
  }
}
</style>
