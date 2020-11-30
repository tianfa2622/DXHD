<template>
  <div class="personnel">
    <div class="personnel_head">
      <el-select class="input" v-model="value" placeholder="选择所属分局">
        <el-option v-for="item in options" :key="item.value" :label="item.label" :value="item.value"> </el-option>
      </el-select>
      <el-select class="input" v-model="value" placeholder="请选择派出所">
        <el-option v-for="item in options" :key="item.value" :label="item.label" :value="item.value"> </el-option>
      </el-select>
      <el-select class="input" v-model="value" placeholder="请输入预警类型">
        <el-option v-for="item in options" :key="item.value" :label="item.label" :value="item.value"> </el-option>
      </el-select>
      <el-input class="input" v-model="input" placeholder="请输入姓名"></el-input>
      <el-input class="input" v-model="input" placeholder="请输入手机号"></el-input>
      <el-button class="btn"> 查询 </el-button>
    </div>
    <div class="personnel_content">
      <table>
        <tr class="tr_title">
          <td>所属分局</td>
          <td>所属派出所</td>
          <td>预警类型</td>
          <td>姓名</td>
          <td>手机号码</td>
          <td>备注</td>
          <td>操作</td>
        </tr>
        <tr v-for="(item, index) in content" ref="li" :key="index">
          <td>{{ item.branch }}</td>
          <td>{{ item.office }}</td>
          <td>{{ item.type }}</td>
          <td>{{ item.name }}</td>
          <td>{{ item.tel }}</td>
          <td>{{ item.remarks }}</td>
          <td>
            <span class="operates" @click="look"> 详细 </span>
            <span class="operates" @click="del"> 删除 </span>
            <span class="operates" @click="add"> 新增 </span>
            <span class="operates" @click="modify"> 修改 </span>
          </td>
        </tr>
      </table>
      <div class="warning" v-show="isLook">
        <div class="warning_head">
          <h3 ref="headTitle">预警信息详情</h3>
        </div>
        <div class="warning_content">
          <p>
            <span>所属分局</span>
            <el-select class="input" v-model="value" placeholder="选择所属分局">
              <el-option v-for="item in options" :key="item.value" :label="item.label" :value="item.value"> </el-option>
            </el-select>
          </p>
          <p>
            <span>所属派出所</span>
            <el-select class="input" v-model="value" placeholder="所属派出所">
              <el-option v-for="item in options" :key="item.value" :label="item.label" :value="item.value"> </el-option>
            </el-select>
          </p>
          <p>
            <span>预警类型</span>
            <el-select class="input" v-model="value" placeholder="预警类型">
              <el-option v-for="item in options" :key="item.value" :label="item.label" :value="item.value"> </el-option>
            </el-select>
          </p>
          <p>
            <span>姓名</span>
            <input type="text" v-model="input" :readonly="!isModify" />
          </p>
          <p>
            <span>手机号</span>
            <input type="text" v-model="input" :readonly="!isModify" />
          </p>
          <p>
            <span>备注</span>
            <input type="text" v-model="input" :readonly="!isModify" />
          </p>
        </div>
        <div class="warning_foot">
          <button v-show="isAdd" ref="sub">新增</button>
          <button>确定</button>
        </div>
      </div>
    </div>
    <ul class="personnel_foot" v-show="isLook">
      <li class="foot_left">总共<span> 01 </span> 个页面量</li>
      <li class="foot_right">
        <el-button>首页</el-button>
        <el-button>&lt;</el-button>
        <el-button>&gt;</el-button>
        <el-button>尾页</el-button>
      </li>
    </ul>
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
    content: [{
      branch: '湖南省芙蓉区分局',
      office: '湖南省万家丽派出所',
      type: '不良状态预警示意',
      name: '李海潮',
      tel: '15616400623',
      remarks: '备注'
    }, {
      branch: '湖南省芙蓉区分局',
      office: '湖南省万家丽派出所',
      type: '不良状态预警示意',
      name: '李海潮',
      tel: '15616400623',
      remarks: '备注'
    }],
    value: '',
    input: '',
    isModify: false,
    isLook: false,
    isAdd: false
  }),
  created () { },
  methods: {
    look () {
      this.isLook = true
      this.isModify = false
      this.isAdd = false
      this.$refs.headTitle.innerHTML = '预警信息详情'
    },
    del (index) {
      this.content.splice(this.$refs.li[index], 1)
    },
    add () {
      this.isLook = true
      this.isModify = true
      this.isAdd = true
      this.$refs.headTitle.innerHTML = '预警信息新增'
      this.$refs.sub.innerHTML = '新增'
    },
    modify () {
      this.isLook = true
      this.isModify = true
      this.isAdd = true
      this.$refs.headTitle.innerHTML = '预警信息修改'
      this.$refs.sub.innerHTML = '修改'
    }
  }
}
</script>
<style lang="scss">
.personnel {
  border: 1px solid rgb(62, 85, 104);
  padding: 0.3rem;
  box-sizing: border-box;
  .personnel_head {
    width: 100%;
    height: 0.4rem;
    display: flex;
    .input {
      width: 15%;
      margin-right: 0.4rem;
    }
    input {
      background-color: rgb(0, 25, 62);
      border: none;
    }
    input::placeholder {
      color: #fff;
      text-align: center;
      line-height: 0.4rem;
    }
    .btn {
      background-color: rgb(62, 85, 104);
      color: #fff;
      border: none;
    }
  }
  .personnel_content {
    width: 100%;
    margin-top: 0.2rem;
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
    .warning {
      width: 60%;
      margin: 0.2rem auto 0;
      background: rgb(1, 25, 62);
      color: #fff;
      .warning_head {
        width: 100%;
        height: 0.6rem;
        line-height: 0.6rem;
        padding-left: 0.2rem;
        box-sizing: border-box;
        border-bottom: 1px solid #fff;
      }
      .warning_content {
        width: 90%;
        margin: 0.2rem auto;
        background: rgb(0, 3, 29);
        border: 1px solid #fff;
        border-radius: 6px;
        padding: 0 5%;
        box-sizing: border-box;
        p {
          margin: 0.3rem auto;
          height: 0.5rem;
          line-height: 0.5rem;
          display: flex;
          span {
            width: 20%;
            text-align: right;
            margin-right: 0.1rem;
          }
          input,
          .input {
            flex: 1;
            border: none;
            color: #fff;
            text-align: center;
            background-color: rgb(0, 25, 62);
          }
          input::placeholder {
            text-align: center;
            color: #fff;
          }
        }
      }
      .warning_foot {
        border-bottom: 1px solid #fff;
        height: 0.6rem;
        text-align: center;
        white-space: nowrap;
        button {
          border: none;
          background: rgb(0, 3, 29);
          color: #fff;
          padding: 0.1rem;
          margin: 0.1rem 1rem 0;
          width: 20%;
        }
      }
    }
  }
  .personnel_foot {
    width: 100%;
    margin-top: 0.2rem;
    display: flex;
    justify-content: space-between;
    padding: 0.2rem 0;
    box-sizing: border-box;
    border-top: 1px solid rgb(31,43,66);
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
