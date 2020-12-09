<template>
  <div id="PieL1" :style="{ width: '100%', height: '100%' }"></div>
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
      const Pie = this.$echarts.init(document.getElementById('PieL1'))
      Pie.setOption({
        color: ['#CCFFFF', '#66FFFF', '#FF9999', '#FFCC00', '#66CC33'],
        title: {
          text: '近期活动举办次数',
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
          data: ['场所一', '场所二', '场所三', '场所四', '场所五']
        },
        animation: false,
        series: [
          {
            type: 'pie',
            radius: '80%',
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
              { value: 20, name: '场所一' },
              { value: 12, name: '场所二' },
              { value: 28, name: '场所三' },
              { value: 8, name: '场所四' },
              { value: 3, name: '场所五' }
            ]
          }]
      })
    }
  }
}
</script>
<style lang="scss">
</style>
