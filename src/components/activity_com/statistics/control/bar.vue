<template>
  <div id="Bar_rt" :style="{ width: '100%', height: '100%' }"></div>
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
      const Bar = this.$echarts.init(document.getElementById('Bar_rt'))
      Bar.setOption({
        color: ['#61A5E8'],
        xAxis: {
          type: 'category',
          name: '小时',
          data: ['12', '14', '16', '18', '20', '22', '24', '02', '04'],
          axisLine: {
            lineStyle: {
              color: '#fff'
            }
          },
          axisLabel: {
            interval: 0,
            rotate: 0
          }
        },
        yAxis: {
          type: 'value',
          max: 300,
          name: '人数',
          axisLine: {
            lineStyle: {
              color: '#fff'
            }
          }
        },
        series: [{
          barWidth: '50%',
          data: [40, 20, 60, 80, 70, 110, 130, 100, 12],
          type: 'bar'
        }]
      })
    }
  }
}
</script>
<style lang="scss">
</style>
