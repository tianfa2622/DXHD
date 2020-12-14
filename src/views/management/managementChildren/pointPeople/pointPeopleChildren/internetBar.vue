<template>
  <div class="InternetBar children">
    <div class="btn">
      <el-button type="primary" @click="clickOne">网吧上网</el-button>
    </div>
    <Elsearch :searchSettings="message"></Elsearch>
  </div>
</template>
<script>
import Elsearch from '@/components/search'
export default {
  data: () => ({
    message: [
      { label: '网吧上网', type: 'input' },
      { label: '营业场所代码', type: 'input' },
      { label: '营业场所', type: 'input' },
      { label: '单位名称', type: 'input' },
      { label: '地址名称', type: 'input' },
      { label: '开始时间', type: 'input' },
      { label: '结束时间', type: 'input' }
    ]
  }),
  created () { },
  methods: {
    clickOne () {
      this.message = [
        { label: '网吧上网', type: 'input' },
        { label: '营业场所代码', type: 'input' },
        { label: '营业场所', type: 'input' },
        { label: '单位名称', type: 'input' },
        { label: '地址名称', type: 'input' },
        { label: '开始时间', type: 'input' },
        { label: '结束时间', type: 'input' }
      ]
    }
  },
  components: { Elsearch }
}
</script>
<style lang="scss">
.InternetBar {
  margin-top: 0.2rem;
  width: 100%;
}
</style>
