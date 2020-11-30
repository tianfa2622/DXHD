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
          text: '各区重点人员个数',
          left: 20,
          top: 30,
          textStyle: {
            color: '#3294bb',
            fontSize: 20
          }
        },
        grid: {
          left: 50, // gird距离容器左边距
          right: 80,
          top: 60,
          bottom: 80,
          containLabel: true
        },
        xAxis: {
          show: true, // 不显示横轴
          type: 'value',
          max: 45, // 横轴最大值,
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
          data: ['贺龙体育馆', '橘子洲', '万家丽广场', '五一广场', '蔡锷大道'],
          axisLine: {
            show: true,
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
            { value: 33, name: '贺龙体育馆', itemStyle: { normal: { color: '#333366' } } },
            { value: 40, name: '橘子洲', itemStyle: { normal: { color: '#333366' } } },
            { value: 31, name: '万家丽广场', itemStyle: { normal: { color: '#333366' } } },
            { value: 24, name: '五一广场', itemStyle: { normal: { color: '#333366' } } },
            { value: 42, name: '蔡锷大道', itemStyle: { normal: { color: '#333366' } } }
          ]
        }]
      })
    }
  }
}
</script>
<style lang="scss">
</style>
