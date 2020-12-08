<template>
  <div id="Pie_rt" :style="{ width: '100%', height: '100%' }"></div>
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
      const Pie = this.$echarts.init(document.getElementById('Pie_rt'))
      Pie.setOption({
        color: ['#CCFFFF', '#66FFFF', '#FF9999', '#FFCC00', '#66CC33', '#CC9900', '#3300CC', '#006600'],
        legend: {
          orient: 'vertical',
          right: 20,
          bottom: 0,
          textStyle: {
            color: '#fff'
          },
          data: ['管制刀具', '有毒危险品', '易燃易爆物品', '金属机械', '枪支,子弹', '爆炸物品类', '毒害品', '腐蚀性物品']
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
                formatter: '{d}%'
              }
            },
            data: [
              { value: 20, name: '管制刀具' },
              { value: 12, name: '有毒危险品' },
              { value: 28, name: '易燃易爆物品' },
              { value: 8, name: '金属机械' },
              { value: 12, name: '枪支,子弹' },
              { value: 3, name: '爆炸物品类' },
              { value: 5, name: '毒害品' },
              { value: 12, name: '腐蚀性物品' }
            ]
          }]
      })
    }
  }
}
</script>
<style lang="scss">
</style>
