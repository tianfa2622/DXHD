<template>
  <div class="dataSummary">
    <h3 class="title">前端数据汇总</h3>
    <p v-for="(item, index) in datas" :key="index">
      <span class="start">{{ item.title }}</span>
      <span>
        <input type="text" readonly :value="item.wan" />
        <input type="text" readonly :value="item.thousand" />
        <input type="text" readonly :value="item.hundred" />
        <input type="text" readonly :value="item.Ten" />
        <input type="text" readonly :value="item.Bits" />
      </span>
      万条
    </p>
  </div>
</template>
<script>
export default {
  data: () => ({
    datas: [{
      title: '业务系统数据',
      wan: '',
      thousand: '2',
      hundred: '5',
      Ten: '8',
      Bits: '0'
    }, {
      title: '警务资源数据',
      wan: '',
      thousand: '',
      hundred: '3',
      Ten: '7',
      Bits: '0'
    }, {
      title: '交通与运营数据',
      wan: '',
      thousand: '',
      hundred: '2',
      Ten: '3',
      Bits: '0'
    }, {
      title: '公共服务信息数据',
      wan: '',
      thousand: '',
      hundred: '',
      Ten: '7',
      Bits: '5'
    }, {
      title: '视频音频数据',
      wan: '',
      thousand: '',
      hundred: '6',
      Ten: '5',
      Bits: '0'
    }]
  }),
  created () { },
  methods: {}
}
</script>
<style lang="scss">
.dataSummary {
  width: 100%;
  height: 100%;
  padding-top: 0.4rem;
  padding-left: 0.3rem;
  padding-right: 0.3rem;
  box-sizing: border-box;
  color: #294673;
  .title {
    font-size: 12px;
    color: #3294bb;
    font-style: normal;
    font-weight: bold;
    margin-bottom: 0.2rem;
  }
  p {
    margin: 0.1rem;
    span {
      margin: 0 4%;
      width: 33%;
      display: inline-block;
      white-space: nowrap;
    }
    span:last-child{
      margin-right: 0
    }
    .start {
      text-align: right;
      padding-right: 0.2rem;
      box-sizing: border-box;
    }
  }
  input {
    width: 0.14rem;
    height: 0.14rem;
    text-align: center;
    margin: 0 0.04rem;
    cursor: pointer;
  }
}
</style>
