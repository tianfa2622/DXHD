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
          data: ['管制刀具', '有毒危险品', '易燃易爆物品', '金属机械', '枪支子弹', '爆炸物品类', '毒害品', '腐蚀性物品'],
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
          max: 100,
          axisLine: {
            lineStyle: {
              color: '#fff'
            }
          }
        },
        series: [{
          barWidth: '50%',
          data: [40, 20, 60, 80, 70, 110, 130, 100],
          type: 'bar'
        }]
      })
    }
  }
}
</script>
<style lang="scss">
</style>
