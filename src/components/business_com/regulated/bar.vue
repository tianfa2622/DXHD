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
        color: ['#333366'],
        title: {
          text: '设\n备\n总\n数\n量\n统\n计',
          textVerticalAlign: 'top',
          top: 100,
          textStyle: {
            color: '#fff',
            fontSize: 16,
            lineHeight: 20
          }
        },
        grid: {
          left: '5%', // gird距离容器左边距
          right: '5%',
          top: '5%',
          bottom: '5%',
          containLabel: true
        },
        xAxis: {
          type: 'value',
          max: 100, // 横轴最大值,
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
          data: ['贺龙体育馆第一区域', '贺龙体育馆第二区域', '贺龙体育馆第三区域', '贺龙体育馆第四区域', '贺龙体育馆第五区域'],
          axisLine: {
            lineStyle: {
              color: '#fff',
              width: '2'
            }
          }
        },
        series: [{
          type: 'bar',
          barWidth: '50%',
          label: {
            show: true,
            position: 'inside'
          },
          data: [60, 72, 50, 38, 72]
        }]
      })
    }
  }
}
</script>
<style lang="scss">
</style>
