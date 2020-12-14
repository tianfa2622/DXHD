<template>
  <div class="aviation children">
    <div class="btn">
      <el-button type="primary" @click="clickOne">民航旅客订票</el-button>
      <el-button type="primary" @click="clickTwo">民航旅客离岗</el-button>
      <el-button type="primary" @click="clickThree">民航旅客退票</el-button>
    </div>
    <Elsearch :searchSettings="message"></Elsearch>
  </div>
</template>
<script>
import Elsearch from '@/components/search'
export default {
  data: () => ({
    message: [
      { label: '民航出行', type: 'input' },
      { label: '航班号', type: 'input' },
      { label: '座位号', type: 'input' },
      { label: '出发日期', type: 'input' },
      { label: '出发时间', type: 'input' },
      { label: '机场代码', type: 'input' },
      { label: '到达日期', type: 'input' },
      { label: '到达时间', type: 'input' },
      { label: '机场代码', type: 'input' }
    ]
  }),
  created () { },
  methods: {
    clickOne () {
      this.message = [
        { label: '民航出行', type: 'input' },
        { label: '航班号', type: 'input' },
        { label: '座位号', type: 'input' },
        { label: '出发日期', type: 'input' },
        { label: '出发时间', type: 'input' },
        { label: '机场代码', type: 'input' },
        { label: '到达日期', type: 'input' },
        { label: '到达时间', type: 'input' },
        { label: '机场代码', type: 'input' }
      ]
    },
    clickTwo () {
      this.message = [
        { label: '民航出行', type: 'input' },
        { label: '航班号', type: 'input' },
        { label: '座位号', type: 'input' },
        { label: '出发日期', type: 'input' },
        { label: '出发时间', type: 'input' },
        { label: '机场代码', type: 'input' },
        { label: '到达日期', type: 'input' },
        { label: '到达时间', type: 'input' },
        { label: '机场代码', type: 'input' }
      ]
    },
    clickThree () {
      this.message = [
        { label: '民航出行', type: 'input' },
        { label: '航班号', type: 'input' },
        { label: '座位号', type: 'input' },
        { label: '出发日期', type: 'input' },
        { label: '出发时间', type: 'input' },
        { label: '机场代码', type: 'input' },
        { label: '到达日期', type: 'input' },
        { label: '到达时间', type: 'input' },
        { label: '机场代码', type: 'input' }
      ]
    }
  },
  components: { Elsearch }
}
</script>
<style lang="scss">
.aviation {
  margin-top: 0.2rem;
  width: 100%;
}
</style>
