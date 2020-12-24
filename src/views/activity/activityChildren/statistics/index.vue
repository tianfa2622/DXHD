<template>
  <div class="statistics">
    <Elsearch :searchSettings="searchSettings" :searchBtn="searchBtn" @add="add"></Elsearch>
    <Eltable :tableHead="tableHead" :tableDatas="tableDatas" :tableSettings="tableSettings" @modify="modify" @del="del" @detailed="detailed"></Eltable>
    <Dialog :title="title" :isShow="isShow" :readOnly="readOnly" :dialogs="dialogs" @close="close"></Dialog>
    <el-button type="primary" v-for="item in adminLeft" :key="item.id" @click="goList(item.path)">{{ item.title }}</el-button>
    <router-view></router-view>
  </div>
</template>
<script>
import Elsearch from '@/components/search'
import Eltable from '@/components/table'
import Dialog from '@/components/dialog'
export default {
  data: () => ({
    adminLeft: [
      { title: '接入检查站', id: 0, path: '/activity/statistics/checkpoint' },
      { title: '圈层防控', id: 1, path: '/activity/statistics/control' },
      { title: '街面巡防', id: 2, path: '/activity/statistics/watchman' }],
    title: '',
    imageUrl: '',
    isShow: false,
    readOnly: true,
    searchSettings: [
      { placeholder: '活动编号', type: 'input' },
      { placeholder: '活动名称', type: 'input' },
      { placeholder: '战果编码', type: 'input' },
      { placeholder: '战果名称', type: 'input' },
      { placeholder: '安保公司编码，负责机构', type: 'input' }
    ],
    searchBtn: [
      { name: '查询', type: 'search' },
      { name: '新增', type: 'add' }
    ],
    tableHead: [
      { label: '活动编号', prop: 'input' },
      { label: '活动名称', prop: 'input' },
      { label: '战果编码', prop: 'input' },
      { label: '战果名称', prop: 'input' },
      { label: '战果级别', prop: 'input' }
    ],
    tableDatas: Array(5).fill({
      input: '123'
    }),
    tableSettings: [
      { name: '修改', type: 'modify' },
      { name: '删除', type: 'delete' },
      { name: '详情', type: 'detailed' }
    ],
    dialogs: [
      { label: '活动编号', type: 'input' },
      { label: '活动名称', type: 'input' },
      { label: '战果编号', type: 'input' },
      { label: '战果名称', type: 'input' },
      { label: '战果级别', type: 'input' },
      { label: '活动类型', type: 'input' },
      { label: '战果日期', type: 'input' },
      { label: '安保公司编码', type: 'input' },
      { label: '活动人数', type: 'input' },
      { label: '核查人数', type: 'input' },
      { label: '负责机构', type: 'input' },
      { label: '劝返人数', type: 'input' },
      { label: '拦截人数', type: 'input' },
      { label: '更新时间', type: 'input' },
      { label: '危险品数量', type: 'input' },
      { label: '战果详述', type: 'input' }
    ]
  }),
  created () { },
  methods: {
    add (row) {
      this.title = '战果统计新增'
      this.readOnly = false
      this.isShow = true
    },
    modify () {
      this.title = '战果统计修改'
      this.readOnly = false
      this.isShow = true
    },
    del (row) {
      console.log(row)
    },
    detailed () {
      this.title = '战果统计详情'
      this.readOnly = true
      this.isShow = true
    },
    close () {
      this.isShow = false
    },
    goList (path) {
      this.$router.push(path)
    }
  },
  components: { Elsearch, Eltable, Dialog }
}
</script>
<style lang="scss">
.statistics {
  padding-right: 0.2rem;
  box-sizing: border-box;
  .el-form {
    margin-bottom: 0.2rem;
    .btn:last-child {
      margin: 0;
    }
  }
  .el-button {
    background-color: #07275b;
    border: none;
  }
}
</style>
