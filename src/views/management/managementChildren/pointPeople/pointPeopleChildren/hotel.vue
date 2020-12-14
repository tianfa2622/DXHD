<template>
  <div class="hotel children">
    <div class="btn">
      <el-button type="primary" @click="clickOne">旅馆住宿</el-button>
    </div>
    <Elsearch :searchSettings="message"></Elsearch>
  </div>
</template>
<script>
import Elsearch from '@/components/search'
export default {
  data: () => ({
    message: [
      { label: '旅馆住宿', type: 'input' },
      { label: '旅馆编号', type: 'input' },
      { label: '旅馆名称', type: 'input' },
      { label: '入住房号', type: 'input' },
      { label: '入住时间', type: 'input' },
      { label: '退房时间', type: 'input' }
    ]
  }),
  created () { },
  methods: {
    clickOne () {
      this.message = [
        { label: '旅馆住宿', type: 'input' },
        { label: '旅馆编号', type: 'input' },
        { label: '旅馆名称', type: 'input' },
        { label: '入住房号', type: 'input' },
        { label: '入住时间', type: 'input' },
        { label: '退房时间', type: 'input' }
      ]
    }
  },
  components: { Elsearch }
}
</script>
<style lang="scss">
.hotel {
  margin-top: 0.2rem;
  width: 100%;
}
</style>
