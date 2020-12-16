<template>
  <div class="ActivityMan">
    <div class="ActivityManTitle">
      <Elsearch :searchSettings="searchSettings" :searchBtn="searchBtn"></Elsearch>
      <div class="titleImg">
        <img @click="$router.go(-1)" src="@/assets/activity/fh.png" alt="" />
      </div>
    </div>
    <Eltable :tableHead="tableHead" :tableDatas="tableDatas" :tableSettings="tableSettings" @detailed="detailed"></Eltable>
    <Dialog :title="title" :isShow="isShow" :readOnly="readOnly" :dialogs="dialogs" @close="close"></Dialog>
  </div>
</template>
<script>
import Elsearch from '@/components/search'
import Eltable from '@/components/table'
import Dialog from '@/components/dialog'
export default {
  data: () => ({
    title: '',
    isShow: false,
    readOnly: true,
    searchSettings: [
      { placeholder: '所属分局', type: 'select' },
      { placeholder: '请输入证件号码', type: 'input' },
      { placeholder: '请输入姓名', type: 'input' },
      { placeholder: '票务类型', type: 'select' },
      { placeholder: '请输入票务编号及座位号', type: 'input' }
    ],
    searchBtn: [
      { name: '查询', type: 'search' }
    ],
    tableHead: [
      { label: '序号', prop: 'input' },
      { label: '姓名', prop: 'input' },
      { label: '性别代码', prop: 'input' },
      { label: '证件号码', prop: 'input' },
      { label: '票务类型', prop: 'input' }
    ],
    tableDatas: Array(5).fill({
      input: '123'
    }),
    tableSettings: [
      { name: '详情', type: 'detailed' }
    ],
    dialogs: [
      { label: '信息标识', type: 'input' },
      { label: '常用证件代码', type: 'input' },
      { label: '证件号码', type: 'input' },
      { label: '姓名', type: 'input' },
      { label: '性别代码', type: 'input' },
      { label: '民族代码', type: 'input' },
      { label: '国籍代码', type: 'input' },
      { label: '是否是会务人员', type: 'input' },
      { label: '会务人员信息', type: 'input' },
      { label: '会务人员类型', type: 'input' },
      { label: '会务证编号', type: 'input' },
      { label: '是否是观众', type: 'input' },
      { label: '观众信息', type: 'input' },
      { label: '票务类型', type: 'input' },
      { label: '票务编号', type: 'input' },
      { label: '座位号', type: 'input' },
      { label: '购票时间', type: 'input' },
      { label: '是否为外宾', type: 'input' },
      { label: '接待级别', type: 'input' },
      { label: '是否背审', type: 'input' },
      { label: '背省结果', type: 'input' },
      { label: '采集时间', type: 'input' },
      { label: '信息入库时间', type: 'input' }
    ]
  }),
  created () { },
  methods: {
    detailed () {
      this.title = '参会人员详情'
      this.readOnly = true
      this.isShow = true
    },
    close () {
      this.isShow = false
    }
  },
  components: { Elsearch, Eltable, Dialog }
}
</script>
<style lang="scss">
.ActivityMan {
  width: 100%;
  padding-right: 0.2rem;
  box-sizing: border-box;
  .table {
    margin-top: 0.2rem;
  }
  .ActivityManTitle {
    display: flex;
    .titleImg {
      cursor: pointer;
      width: 0.6rem;
      height: 0.4rem;
      overflow: hidden;
      border-radius: 4px;
      img {
        width: 120%;
        height: 120%;
        display: block;
      }
    }
  }
}
</style>
