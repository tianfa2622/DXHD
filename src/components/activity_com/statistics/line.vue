<template>
  <div id="Line" :style="{ width: '100%', height: '100%' }"></div>
</template>
<script>
export default {
  data: () => ({}),
  created () { },
  mounted () {
    this.Pie()
  },
  methods: {
    Pie () {
      const Pie = this.$echarts.init(document.getElementById('Line'))
      Pie.setOption({
        xAxis: {
          type: 'category',
          data: ['24:00', '02:00', '04:00', '06:00', '08:00', '10:00', '12:00', '14:00'],
          axisLine: {
            lineStyle: {
              color: '#fff'
            }
          }
        },
        grid: {
          left: '5%', // gird距离容器左边距
          right: '5%',
          top: '10%',
          bottom: '10%'
        },
        yAxis: {
          type: 'value',
          axisLine: {
            lineStyle: {
              color: '#fff'
            }
          }
        },
        series: [{
          data: [150, 230, 224, 218, 135, 147, 260, 0],
          type: 'line'
        }]
      })
    }
  }
}
</script>
<style lang="scss">
</style>
