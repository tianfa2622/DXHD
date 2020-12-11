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
        title: {
          show: false
        },
        grid: {
          left: 20, // gird距离容器左边距
          right: 20,
          top: 20,
          bottom: 20,
          containLabel: true
        },
        xAxis: {
          show: true, // 不显示横轴
          type: 'value',
          max: 80, // 横轴最大值,
          axisLine: {
            show: true,
            lineStyle: {
              color: '#fff',
              width: '2'
            }
          }
        },
        yAxis: {
          type: 'category',
          data: ['08:00', '11:00', '13:00', '15:00', '17:00'],
          axisLine: {
            lineStyle: {
              color: '#fff',
              width: '2'
            }
          },
          axisTick: {
            show: false
          },
          splitLine: {
            show: false
          }
        },
        series: [{
          type: 'bar',
          stack: 'chart',
          itemStyle: {
            normal: {
              color: '#a7c7e9'
            }
          },
          label: {
            show: true
          },
          data: [
            { value: 60, name: '08:00', itemStyle: { normal: { color: '#333366' } } },
            { value: 72, name: '11:00', itemStyle: { normal: { color: '#333366' } } },
            { value: 50, name: '13:00', itemStyle: { normal: { color: '#333366' } } },
            { value: 38, name: '15:00', itemStyle: { normal: { color: '#333366' } } },
            { value: 72, name: '17:00', itemStyle: { normal: { color: '#333366' } } }
          ]
        }]
      })
    }
  }
}
</script>
<style lang="scss">
</style>
