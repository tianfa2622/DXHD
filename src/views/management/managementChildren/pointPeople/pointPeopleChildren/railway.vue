<template>
  <div class="railway children">
    <div class="btn">
      <el-button type="primary" @click="clickOne">铁路订票</el-button>
      <el-button type="primary" @click="clickTwo">铁路乘车票</el-button>
      <el-button type="primary" @click="clickThree">铁路退票</el-button>
    </div>
    <Elsearch :searchSettings="message"></Elsearch>
  </div>
</template>
<script>
import Elsearch from '@/components/search'
export default {
  data: () => ({
    message: [
      { label: '铁路出行', type: 'input' },
      { label: '车厢', type: 'input' },
      { label: '车厢号', type: 'input' },
      { label: '座位号', type: 'input' },
      { label: '出发日期', type: 'input' },
      { label: '出发时间', type: 'input' },
      { label: '出发车站', type: 'input' },
      { label: '到达日期', type: 'input' },
      { label: '到达时间', type: 'input' },
      { label: '到达车站', type: 'input' }
    ]
  }),
  created () { },
  methods: {
    clickOne () {
      this.message = [
        { label: '铁路出行', type: 'input' },
        { label: '车厢', type: 'input' },
        { label: '车厢号', type: 'input' },
        { label: '座位号', type: 'input' },
        { label: '出发日期', type: 'input' },
        { label: '出发时间', type: 'input' },
        { label: '出发车站', type: 'input' },
        { label: '到达日期', type: 'input' },
        { label: '到达时间', type: 'input' },
        { label: '到达车站', type: 'input' }
      ]
    },
    clickTwo () {
      this.message = [
        { label: '铁路出行', type: 'input' },
        { label: '车厢', type: 'input' },
        { label: '车厢号', type: 'input' },
        { label: '座位号', type: 'input' },
        { label: '出发日期', type: 'input' },
        { label: '出发时间', type: 'input' },
        { label: '出发车站', type: 'input' },
        { label: '到达日期', type: 'input' },
        { label: '到达时间', type: 'input' },
        { label: '到达车站', type: 'input' }
      ]
    },
    clickThree () {
      this.message = [
        { label: '铁路出行', type: 'input' },
        { label: '车厢', type: 'input' },
        { label: '车厢号', type: 'input' },
        { label: '座位号', type: 'input' },
        { label: '出发日期', type: 'input' },
        { label: '出发时间', type: 'input' },
        { label: '出发车站', type: 'input' },
        { label: '到达日期', type: 'input' },
        { label: '到达时间', type: 'input' },
        { label: '到达车站', type: 'input' }
      ]
    }
  },
  components: { Elsearch }
}
</script>
<style lang="scss">
.railway {
  margin-top: 0.2rem;
  width: 100%;
}
</style>
