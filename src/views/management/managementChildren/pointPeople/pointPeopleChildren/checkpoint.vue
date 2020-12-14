<template>
  <div class="checkpoint children">
    <div class="btn">
      <el-button type="primary" @click="clickOne">公安检查站人员检查</el-button>
    </div>
    <Elsearch :searchSettings="message"></Elsearch>
  </div>
</template>
<script>
import Elsearch from '@/components/search'
export default {
  data: () => ({
    message: [
      { label: '公安检查站', type: 'input' },
      { label: '检查站编码', type: 'input' },
      { label: '检查站位置', type: 'input' },
      { label: '查验时间', type: 'input' },
      { label: '出入类型', type: 'input' }
    ]
  }),
  created () { },
  methods: {
    clickOne () {
      this.message = [
        { label: '公安检查站', type: 'input' },
        { label: '检查站编码', type: 'input' },
        { label: '检查站位置', type: 'input' },
        { label: '查验时间', type: 'input' },
        { label: '出入类型', type: 'input' }
      ]
    }
  },
  components: { Elsearch }
}
</script>
<style lang="scss">
.checkpoint {
  margin-top: 0.2rem;
  width: 100%;
}
</style>
