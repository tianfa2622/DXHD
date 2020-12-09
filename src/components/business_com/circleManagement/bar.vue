<template>
  <div id="Bar" :style="{ width: '100%', height: '100%' }"></div>
</template>
<script>
export default {
  data: () => ({}),
  created () { },
  mounted () {
    this.Bar()
  },
  methods: {
    Bar () {
      const Bar = this.$echarts.init(document.getElementById('Bar'))
      Bar.setOption({
        grid: {
          left: '5%', // gird距离容器左边距
          right: '5%',
          top: '5%',
          bottom: '5%',
          containLabel: true
        },
        xAxis: {
          data: ['12', '14', '16', '18', '20', '22', '24', '02', '04'],
          axisLine: {
            lineStyle: {
              color: '#fff',
              width: '2'
            }
          }
        },
        yAxis: {
          axisLine: {
            lineStyle: {
              color: '#fff',
              width: '2'
            }
          }
        },
        series: [{
          name: '贺龙体育馆第一区域',
          type: 'bar',
          barWidth: '50%',
          data: [60, 72, 50, 38, 72, 12, 45, 65, 23, 12, 45]
        }]
      })
    }
  }
}
</script>
<style lang="scss">
</style>
