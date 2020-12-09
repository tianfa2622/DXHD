<template>
  <div id="pieR2" :style="{ width: '100%', height: '100%' }"></div>
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
      const Pie = this.$echarts.init(document.getElementById('pieR2'))
      Pie.setOption({
        color: ['#CCFFFF', '#66FFFF', '#FF9999', '#FFCC00'],
        title: {
          text: '各区域报警次数',
          textStyle: {
            color: '#fff'
          }
        },
        legend: {
          orient: 'vertical',
          right: 20,
          bottom: 0,
          textStyle: {
            color: '#fff'
          },
          data: ['A', 'B', 'C', 'D']
        },
        animation: false,
        series: [
          {
            type: 'pie',
            radius: ['50%', '80%'],
            label: { // 饼图图形上的文本标签
              normal: {
                position: 'inside', // 标签的位置
                textStyle: {
                  fontSize: 14 // 文字的字体大小
                },
                formatter: '{c}'
              }
            },
            data: [
              { value: 20, name: 'A' },
              { value: 12, name: 'B' },
              { value: 28, name: 'C' },
              { value: 8, name: 'D' }
            ]
          }]
      })
    }
  }
}
</script>
<style lang="scss">
</style>
