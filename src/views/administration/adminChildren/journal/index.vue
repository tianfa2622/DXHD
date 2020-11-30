<template>
  <div class="journal">
    <div class="journal_title">
      <div class="title_left">
        <el-input v-model="inputName" placeholder="请输入用户名"></el-input>
        <el-input v-model="inputValue" placeholder="请输入操作内容"></el-input>
        <div class="block">
          <span class="demonstration">请输入日志时间</span>
          <el-date-picker class="datePicker" v-model="value1" type="daterange" range-separator="至" start-placeholder="开始日期" end-placeholder="结束日期"> </el-date-picker>
        </div>
        <el-button class="btn_query">查询</el-button>
      </div>
      <el-button class="btn_add">清空</el-button>
    </div>
    <div class="journal_content">
      <table>
        <tr>
          <td>序号</td>
          <td>日志时间</td>
          <td>操作人</td>
          <td>内容</td>
        </tr>
        <tr v-for="(item, index) in contents" :key="index">
          <td>{{ item.id }}</td>
          <td>{{ item.time }}</td>
          <td>{{ item.name }}</td>
          <td>{{ item.content }}</td>
        </tr>
      </table>
    </div>
  </div>
</template>
<script>
export default {
  data: () => ({
    inputName: '',
    inputValue: '',
    value1: '',
    value2: '',
    contents: [{
      id: '01',
      time: '2020/09/09-2020/09/10',
      name: '李海潮',
      content: '在2020-09-09查看了某某东西'
    }, {
      id: '02',
      time: '2020/09/09-2020/09/10',
      name: '李海潮',
      content: '在2020-09-09查看了某某东西'
    }]
  }),
  created () { },
  methods: {}
}
</script>
<style lang="scss">
.journal {
  .journal_title {
    display: flex;
    justify-content: space-between;
    .block {
      margin-right: 0.6rem;
      .demonstration {
        color: #fff;
        margin-right: 0.3rem;
      }
      .datePicker {
        background-color: rgb(1, 26, 63);
        color: #fff;
        .el-range-input {
          color: #fff;
        }
        .el-range-separator {
          color: #fff;
        }
      }
    }
    .el-input {
      width: 2.5rem;
    }
    input {
      border: none;
      background: rgb(1, 26, 63);
    }
    input::placeholder {
      letter-spacing: 5px;
      color: #fff !important;
      text-align: center;
    }
    .btn_add {
      background: url('~@/assets/admin/u17932.png') no-repeat center center;
      background-size: 100% 100%;
      color: rgb(22, 155, 213);
      border: none;
    }
    .title_left {
      display: flex;
      .el-select,
      .el-input {
        margin-right: 1rem;
      }
      .btn_query {
        background: rgb(62, 85, 104);
        color: #fff;
      }
    }
  }
  .journal_content {
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
      tr {
        height: 0.8rem;
        background-color: #000033;
        td {
          .operates {
            cursor: pointer;
            margin: 0 0.2rem;
          }
        }
      }
      tr:nth-child(2n) {
        background-color: #00031d;
      }
    }
  }
}
</style>
