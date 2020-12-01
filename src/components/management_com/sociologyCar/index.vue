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
          right: 50,
          top: 50,
          bottom: 20,
          containLabel: true
        },
        xAxis: {
          type: 'category',
          name: '小时',
          data: ['12', '14', '16', '18', '20', '24', '02', '04'],
          axisLine: {
            lineStyle: {
              color: '#fff'
            }
          }
        },
        yAxis: {
          type: 'value',
          name: '人数',
          max: 300,
          axisLine: {
            lineStyle: {
              color: '#fff'
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
          barWidth: '20%',
          itemStyle: {
            normal: {
              color: '#a7c7e9'
            }
          },
          label: {
            show: false
          },
          data: [10, 52, 200, 154, 123, 245, 220, 300]
        }]
      })
    }
  }
}
</script>
<style lang="scss">
</style>
