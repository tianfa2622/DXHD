<template>
  <div class="policeMan">
    <div class="policeMan_left">
      <div class="policeMan_head">
        <el-input class="input" v-model="input" placeholder="姓名"></el-input>
        <el-input class="input" v-model="input" placeholder="证件号码"></el-input>
        <el-input class="input" v-model="input" placeholder="联系电话"></el-input>
        <el-input class="input input1" v-model="input" placeholder="请输入曾用名，单位名称，联系电话"></el-input>
        <el-button class="btn" type="primary">查询</el-button>
      </div>
      <div class="policeMan_table">
        <Eltable :tableHead="tableHead" :tableDatas="tableDatas"></Eltable>
      </div>
    </div>
    <div class="policeMan_right">
      <Ring></Ring>
    </div>
  </div>
</template>
<script>
import Eltable from '@/components/table'
import Ring from '@/components/management_com/policeMan'
export default {
  data: () => ({
    input: '',
    tableHead: [
      { label: '信息标识', prop: 'input' },
      { label: '姓名', prop: 'input' },
      { label: '曾用名', prop: 'input' },
      { label: '性别代码', prop: 'input' },
      { label: '单位名称', prop: 'input' },
      { label: '常用证件代码', prop: 'input' },
      { label: '证件号码', prop: 'input' }
    ],
    tableDatas: Array(5).fill({
      input: '123'
    })
  }),
  created () { },
  methods: {},
  components: {
    Eltable, Ring
  }
}
</script>
<style lang="scss">
.policeMan {
  border: 1px solid rgb(62, 85, 104);
  margin: 0.7rem auto 0;
  width: 98%;
  padding: 0.3rem 0.2rem;
  box-sizing: border-box;
  display: flex;
  .policeMan_left {
    width: 70%;
    height: 100%;
    .policeMan_head {
      width: 100%;
      height: 0.4rem;
      display: flex;
      .input {
        color: #fff;
        text-align: center;
        width: 20%;
        margin-right: 0.3rem;
      }
      .input1 {
        width: 25%;
      }
      input {
        background-color: rgb(0, 25, 62);
        border: none;
        color: #fff;
      }
      input::placeholder {
        color: #fff;
        text-align: center;
        font-family: 'Arial Normal', 'Arial';
      }
      .btn {
        border: none;
        color: #fff;
        background-color: rgb(62, 85, 104);
        width: 8%;
      }
    }
    .policeMan_table {
      margin-top: 0.2rem;
    }
  }
  .policeMan_right {
    width: 30%;
    height: 4rem;
  }
  .policeMan_body {
  }
}
</style>
