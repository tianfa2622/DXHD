<template>
  <baidu-map class="bm-view" :center="center" :zoom="zoom" ak="bGitCiolqteL4cZhVWhBNIdpSNRgNiyA"> </baidu-map>
</template>
<script>
import BaiduMap from 'vue-baidu-map/components/map/Map.vue'
export default {
  props: ['center', 'zoom'],
  data: () => ({
  }),
  created () {
  },
  methods: {
  },
  components: {
    BaiduMap
  }
}
</script>
<style lang="scss">
.bm-view {
  width: 100%;
  height: 100%;
}
</style>
