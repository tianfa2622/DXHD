<template>
  <div id="BrokenLine" :style="{ width: '100%', height: '100%' }"></div>
</template>
<script>
export default {
  data: () => ({}),
  created () { },
  mounted () {
    this.BrokenLine()
  },
  methods: {
    BrokenLine () {
      const BrokenLine = this.$echarts.init(document.getElementById('BrokenLine'))
      BrokenLine.setOption({
        title: {
          text: '近七天活动重点人员出现个数',
          left: 0,
          top: 0,
          itemGap: 50,
          textStyle: {
            color: '#fff',
            fontSize: 18
          }
        },
        xAxis: {
          type: 'category',
          data: ['贺龙体育馆', '橘子洲', '岳麓山', '岳麓书院', '武功山', '贺龙体育馆'],
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
          max: 10,
          axisLine: {
            lineStyle: {
              color: '#fff'
            }
          }
        },
        series: [{
          data: [1, 5, 7, 8, 0, 8],
          type: 'line'
        }]
      })
    }
  }
}
</script>
<style lang="scss">
</style>
