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
        title: {
          text: '近期大型活动总数',
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
          max: 20, // 横轴最大值,
          axisLine: {
            show: true,
            lineStyle: {
              color: '#fff'
            }
          }
        },
        yAxis: {
          type: 'category',
          data: ['已完成', '已申请', '已审批', '未审批', '已报备', '已背审'],
          axisLine: {
            show: true,
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
          itemStyle: {
            normal: {
              color: '#a7c7e9'
            }
          },
          data: [
            { value: 20, name: '已完成', itemStyle: { normal: { color: '#61a5e8' } } },
            { value: 17, name: '已申请', itemStyle: { normal: { color: '#61a5e8' } } },
            { value: 15, name: '已审批', itemStyle: { normal: { color: '#61a5e8' } } },
            { value: 13, name: '未审批', itemStyle: { normal: { color: '#61a5e8' } } },
            { value: 9, name: '已报备', itemStyle: { normal: { color: '#61a5e8' } } },
            { value: 6, name: '已背审', itemStyle: { normal: { color: '#61a5e8' } } }
          ]
        }]
      })
    }
  }
}
</script>
<style lang="scss">
</style>
