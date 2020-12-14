<template>
  <div class="bus children">
    <div class="btn">
      <el-button type="primary" @click="clickOne">公路客运购票</el-button>
      <el-button type="primary" @click="clickTwo">公路客运退票</el-button>
      <el-button type="primary" @click="clickThree">公路客运验票</el-button>
    </div>
    <Elsearch :searchSettings="message"></Elsearch>
  </div>
</template>
<script>
import Elsearch from '@/components/search'
export default {
  data: () => ({
    message: [
      { label: '公路客运', type: 'input' },
      { label: '客运站', type: 'input' },
      { label: '客运编号', type: 'input' },
      { label: '座位号', type: 'input' },
      { label: '出发日期', type: 'input' },
      { label: '出发时间', type: 'input' },
      { label: '客运站', type: 'input' },
      { label: '到达日期', type: 'input' },
      { label: '到达时间', type: 'input' },
      { label: '客运站', type: 'input' }
    ]
  }),
  created () { },
  methods: {
    clickOne () {
      this.message = [
        { label: '公路客运', type: 'input' },
        { label: '客运站', type: 'input' },
        { label: '客运编号', type: 'input' },
        { label: '座位号', type: 'input' },
        { label: '出发日期', type: 'input' },
        { label: '出发时间', type: 'input' },
        { label: '客运站', type: 'input' },
        { label: '到达日期', type: 'input' },
        { label: '到达时间', type: 'input' },
        { label: '客运站', type: 'input' }
      ]
    },
    clickTwo () {
      this.message = [
        { label: '公路客运', type: 'input' },
        { label: '客运站', type: 'input' },
        { label: '客运编号', type: 'input' },
        { label: '座位号', type: 'input' },
        { label: '出发日期', type: 'input' },
        { label: '出发时间', type: 'input' },
        { label: '客运站', type: 'input' },
        { label: '到达日期', type: 'input' },
        { label: '到达时间', type: 'input' },
        { label: '客运站', type: 'input' }
      ]
    },
    clickThree () {
      this.message = [
        { label: '公路客运', type: 'input' },
        { label: '客运站', type: 'input' },
        { label: '客运编号', type: 'input' },
        { label: '座位号', type: 'input' },
        { label: '出发日期', type: 'input' },
        { label: '出发时间', type: 'input' },
        { label: '客运站', type: 'input' },
        { label: '到达日期', type: 'input' },
        { label: '到达时间', type: 'input' },
        { label: '客运站', type: 'input' }
      ]
    }
  },
  components: { Elsearch }
}
</script>
<style lang="scss">
.bus {
  margin-top: 0.2rem;
  width: 100%;
}
</style>
