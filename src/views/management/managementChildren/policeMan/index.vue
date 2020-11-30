<template>
  <div class="policeMan">
    <div class="policeMan_left">
      <div class="policeMan_head">
        <Elsearch :searchSettings="searchSettings"></Elsearch>
      </div>
      <div class="policeMan_table">
        <Eltable :tableHead="tableHead" :tableDatas="tableDatas" @add="add" @modify="modify" @del="del" @detailed="detailed"></Eltable>
      </div>
    </div>
    <div class="policeMan_right">
      <Ring></Ring>
    </div>
    <Dialog :title="title" :isShow="isShow" :readOnly="readOnly" :dialogs="dialogs" @close="close"></Dialog>
  </div>
</template>
<script>
import Eltable from '@/components/table'
import Elsearch from '@/components/search'
import Dialog from '@/components/dialog'
import Ring from '@/components/management_com/policeMan'
export default {
  data: () => ({
    input: '',
    title: '',
    isShow: false,
    readOnly: true,
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
    }),
    searchSettings: [
      { placeholder: '姓名', type: 'input' },
      { placeholder: '证件号码', type: 'input' },
      { placeholder: '联系电话', type: 'input' },
      { placeholder: '请输入曾用名，单位名称，联系电话', type: 'input' }
    ],
    dialogs: [
      { label: '信息标识', type: 'input' },
      { label: '省市县（区）', type: 'input' },
      { label: '出生日期', type: 'input' },
      { label: '姓名', type: 'input' },
      { label: '区划内详细地址', type: 'input' },
      { label: '联系电话', type: 'input' },
      { label: '曾用名', type: 'input' },
      { label: '实际居住地', type: 'input' },
      { label: '婚姻状态代码', type: 'input' },
      { label: '性别代码', type: 'input' },
      { label: '地址编码', type: 'input' },
      { label: '宗教信仰代码', type: 'input' },
      { label: '单位名称', type: 'input' },
      { label: '省市县（区）', type: 'input' },
      { label: '政治面貌代码', type: 'input' },
      { label: '常用证件代码', type: 'input' },
      { label: '区划内详细地址', type: 'input' },
      { label: '配偶', type: 'input' },
      { label: '证件号码', type: 'input' },
      { label: '保安证件', type: 'input' },
      { label: '姓名', type: 'input' }
    ],
    form: {}
  }),
  created () { },
  methods: {
    add (row) {
      console.log(row)
      this.readOnly = false
      this.title = '安保人员信息新增'
      this.isShow = true
    },
    modify (row) {
      console.log(row)
      this.readOnly = false
      this.title = '安保人员信息修改'
      this.isShow = true
    },
    del (row) {
      console.log(row)
    },
    detailed (row) {
      console.log(row)
      this.readOnly = true
      this.title = '安保人员信息详情'
      this.isShow = true
    },
    close () {
      this.isShow = false
    }
  },
  components: {
    Eltable, Ring, Elsearch, Dialog
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
    width: 80%;
    height: 100%;
    .policeMan_head {
      width: 100%;
      height: 0.4rem;
      display: flex;
    }
    .policeMan_table {
      margin-top: 0.2rem;
    }
  }
  .policeMan_right {
    width: 20%;
    height: 4rem;
  }
}
</style>
