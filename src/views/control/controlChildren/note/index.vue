<template>
  <div class="note">
    <div class="note_title">
      <el-select v-model="value" placeholder="请选择被布控人姓名">
        <el-option v-for="item in options" :key="item.value" :label="item.label" :value="item.value"> </el-option>
      </el-select>
      <el-input class="inputNation" v-model="input" placeholder="请输入民族"></el-input>
      <el-input class="inputPapers" v-model="input" placeholder="请输入证件号码"></el-input>
      <el-button class="btn">查询</el-button>
    </div>
    <div class="note_content">
      <div class="table">
        <table>
          <tr class="tr_title">
            <td>被布控人姓名</td>
            <td>民族</td>
            <td>出生日期</td>
            <td>证件号码</td>
            <td>籍贯</td>
            <td>住址</td>
            <td>操作</td>
          </tr>
          <tr v-for="(item, index) in content" ref="li" :key="index">
            <td>{{ item.name }}</td>
            <td>{{ item.nation }}</td>
            <td>{{ item.birthTime }}</td>
            <td>{{ item.papers }}</td>
            <td>{{ item.nativePlace }}</td>
            <td>{{ item.native }}</td>
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
          <h3 ref="headTitle">被布控人基础信息详情</h3>
        </div>
        <div class="detailed_content">
          <ul class="detailed_menu">
            <li class="menu_list"><span>被布控人姓名</span> <el-input v-model="input" placeholder="被布控人姓名" :readonly="!isModify"></el-input></li>
            <li class="menu_list"><span>证件号码</span> <el-input v-model="input" placeholder="证件号码" :readonly="!isModify"></el-input></li>
            <li class="menu_list"><span>证件类型</span> <el-input v-model="input" placeholder="证件类型" :readonly="!isModify"></el-input></li>
          </ul>
          <ul class="detailed_menu">
            <li class="menu_list"><span>民族</span> <el-input v-model="input" placeholder="民族" :readonly="!isModify"></el-input></li>
            <li class="menu_list"><span>籍贯</span> <el-input v-model="input" placeholder="籍贯" :readonly="!isModify"></el-input></li>
            <li class="menu_list"><span>性别</span><el-input v-model="input" placeholder="性别" :readonly="!isModify"></el-input></li>
          </ul>
          <ul class="detailed_menu">
            <li class="menu_list"><span>出生日期</span> <el-date-picker v-model="value1" type="date" placeholder="出生日期" :readonly="!isModify"> </el-date-picker></li>
            <li class="menu_list"><span>住址</span> <el-input v-model="input" placeholder="住址" :readonly="!isModify"></el-input></li>
            <li class="menu_list"><span>电话</span> <el-input v-model="input" placeholder="电话 " :readonly="!isModify"></el-input></li>
          </ul>
          <h3>被布控人特征信息</h3>
          <ul class="detailed_menu">
            <li class="menu_list"><span>身高</span> <el-input v-model="input" placeholder="身高" :readonly="!isModify"></el-input></li>
            <li class="menu_list"><span>体型特征</span> <el-input v-model="input" placeholder="体型特征" :readonly="!isModify"></el-input></li>
            <li class="menu_list"><span>口音</span><el-input v-model="input" placeholder="口音" :readonly="!isModify"></el-input></li>
          </ul>
          <ul class="detailed_menu">
            <li class="menu_list"><span>绰号</span> <el-input v-model="input" placeholder="绰号 " :readonly="!isModify"></el-input></li>
            <li class="menu_list"><span>化名</span> <el-input v-model="input" placeholder="化名" :readonly="!isModify"></el-input></li>
            <li class="menu_list"></li>
          </ul>
          <p class="text_area" v-show="isDel">
            <span>取消人员布控原因</span>
            <el-input type="textarea" v-model="textArea"></el-input>
          </p>
          <el-button class="btn" v-show="isControl">
            <span class="btn_value" ref="btn_value" @click="sub">布控</span>
          </el-button>
          <el-button class="btn" @click="esc">确定</el-button>
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
    </div>
  </div>
</template>
<script>
export default {
  data: () => ({
    options: [{
      value: '选项1',
      label: '黄金糕'
    }, {
      value: '选项2',
      label: '双皮奶'
    }, {
      value: '选项3',
      label: '蚵仔煎'
    }, {
      value: '选项4',
      label: '龙须面'
    }, {
      value: '选项5',
      label: '北京烤鸭'
    }],
    value: '',
    input: '',
    isModify: false,
    isLook: false,
    isControl: false,
    isDel: false,
    textArea: '请输入',
    content: [{
      name: '李海潮',
      nation: '汉',
      birthTime: '2067-09-08',
      papers: '430488899996663550',
      nativePlace: '湖南省',
      native: '万家丽广场'
    }, {
      name: '李海潮',
      nation: '汉',
      birthTime: '2067-09-08',
      papers: '430488899996663550',
      nativePlace: '湖南省',
      native: '万家丽广场'
    }],
    value1: ''
  }),
  created () { },
  methods: {
    look () {
      this.isLook = true
      this.isModify = false
      this.isControl = false
      this.isDel = false
      this.$refs.headTitle.innerHTML = '被布控人基础信息详细'
    },
    add () {
      this.isLook = true
      this.isModify = true
      this.isControl = true
      this.isDel = false
      this.$refs.headTitle.innerHTML = '被布控人基础信息新增'
      this.$refs.btn_value.innerHTML = '布控'
    },
    modify () {
      this.isLook = true
      this.isModify = true
      this.isControl = true
      this.isDel = false
      this.$refs.headTitle.innerHTML = '被布控人基础信息修改'
      this.$refs.btn_value.innerHTML = '修改'
    },
    del () {
      this.isLook = true
      this.isModify = true
      this.isControl = true
      this.isDel = true
      this.$refs.headTitle.innerHTML = '被布控人基础信息'
      this.$refs.btn_value.innerHTML = '解控'
    },
    esc () {
      this.isLook = false
    },
    sub () {
      this.isLook = <false></false>
    }
  }
}
</script>
<style lang="scss">
.note {
  padding-bottom: 0.2rem;
  .note_title {
    width: 100%;
    height: 100%;
    display: flex;
    padding: 0 1rem;
    box-sizing: border-box;
    .el-select {
      width: 15%;
    }
    input {
      background-color: rgb(1, 26, 63);
      border: none;
    }
    .inputNation,
    .inputPapers {
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
  .note_content {
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
      padding: 0.2rem 0;
      box-sizing: border-box;
      h3 {
        color: #6aeff4;
        font-family: 'Arial Normal', 'Arial';
        text-align: center;
        height: 0.5rem;
        line-height: 0.5rem;
        background-color: rgb(0, 18, 53);
      }
      .detailed_head {
        width: 100%;
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
        .btn {
          background-color: #003399;
          width: 20%;
          border: none;
          color: #fff;
          margin-top: 0.3rem;
          margin-left: 1rem;
        }
        h3 {
          width: 80%;
          margin: auto;
        }
      }
      .detailed_foot {
        width: 90%;
        margin: auto;
        display: flex;
        justify-content: space-between;
        padding-bottom: 0.2rem;
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
  }
}
</style>
