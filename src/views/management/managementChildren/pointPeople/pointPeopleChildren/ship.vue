<template>
  <div class="ship children">
    <div class="btn">
      <el-button type="primary" @click="clickOne">轮渡订票</el-button>
      <el-button type="primary" @click="clickTwo">轮渡退票</el-button>
    </div>
    <Elsearch :searchSettings="message"></Elsearch>
  </div>
</template>
<script>
import Elsearch from '@/components/search'
export default {
  data: () => ({
    message: [
      { label: '轮渡出行', type: 'input' },
      { label: '轮渡号', type: 'input' },
      { label: '出发日期', type: 'input' },
      { label: '出发时间', type: 'input' },
      { label: '出发码头', type: 'input' },
      { label: '到达日期', type: 'input' },
      { label: '到达时间', type: 'input' },
      { label: '到达码头', type: 'input' }
    ]
  }),
  created () { },
  methods: {
    clickOne () {
      this.message = [
        { label: '轮渡出行', type: 'input' },
        { label: '轮渡号', type: 'input' },
        { label: '出发日期', type: 'input' },
        { label: '出发时间', type: 'input' },
        { label: '出发码头', type: 'input' },
        { label: '到达日期', type: 'input' },
        { label: '到达时间', type: 'input' },
        { label: '到达码头', type: 'input' }
      ]
    },
    clickTwo () {
      this.message = [
        { label: '轮渡出行', type: 'input' },
        { label: '轮渡号', type: 'input' },
        { label: '出发日期', type: 'input' },
        { label: '出发时间', type: 'input' },
        { label: '出发码头', type: 'input' },
        { label: '到达日期', type: 'input' },
        { label: '到达时间', type: 'input' },
        { label: '到达码头', type: 'input' }
      ]
    }
  },
  components: { Elsearch }
}
</script>
<style lang="scss">
.ship {
  margin-top: 0.2rem;
  width: 100%;
}
</style>
