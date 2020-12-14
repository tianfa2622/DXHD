<template>
  <div class="portrait children">
    <div class="btn">
      <el-button type="primary" @click="clickOne">人像识别</el-button>
    </div>
    <Elsearch :searchSettings="message"></Elsearch>
  </div>
</template>
<script>
import Elsearch from '@/components/search'
export default {
  data: () => ({
    message: [
      { label: '人像识别', type: 'input' },
      { label: '设备类型', type: 'input' },
      { label: '视屏设备编码', type: 'input' },
      { label: '设备名称', type: 'input' },
      { label: '监视方向', type: 'input' },
      { label: '设备地址', type: 'input' },
      { label: '抓拍时间', type: 'input' },
      { label: '图片URL', type: 'input' },
      { label: '地球经度', type: 'input' },
      { label: '地球纬度', type: 'input' },
      { label: '采集时间', type: 'input' },
      { label: '信息入库时间', type: 'input' }
    ]
  }),
  created () { },
  methods: {
    clickOne () {
      this.message = [
        { label: '人像识别', type: 'input' },
        { label: '设备类型', type: 'input' },
        { label: '视屏设备编码', type: 'input' },
        { label: '设备名称', type: 'input' },
        { label: '监视方向', type: 'input' },
        { label: '设备地址', type: 'input' },
        { label: '抓拍时间', type: 'input' },
        { label: '图片URL', type: 'input' },
        { label: '地球经度', type: 'input' },
        { label: '地球纬度', type: 'input' },
        { label: '采集时间', type: 'input' },
        { label: '信息入库时间', type: 'input' }
      ]
    }
  },
  components: { Elsearch }
}
</script>
<style lang="scss">
.portrait {
  margin-top: 0.2rem;
  width: 100%;
}
</style>
