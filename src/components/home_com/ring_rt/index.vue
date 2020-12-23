<template>
  <div id="Ring_Rt" :style="{ width: '100%', height: '100%' }"></div>
</template>
<script>
export default {
  data: () => ({}),
  created () { },
  mounted () {
    this.Ring()
  },
  methods: {
    Ring () {
      const Ring = this.$echarts.init(document.getElementById('Ring_Rt'))
      Ring.setOption({
        title: {
          text: '预警',
          left: 20,
          top: 30,
          textStyle: {
            color: '#3294BB',
            fontSize: 20
          }
        },
        tooltip: {
          show: false
        },
        legend: {
          orient: 'vertical',
          right: '8%',
          bottom: '16%',
          itemWidth: 10,
          itemHeight: 10,
          formatter: '{name}',
          textStyle: {
            color: '#FFF',
            fontSize: 14
          },
          data: [{ name: '未预警', icon: 'rect' }, { name: '已预警', icon: 'rect' }, { name: '预警中', icon: 'rect' }]
        },
        animation: false,
        calculable: true,
        series: [
          {
            name: '预警',
            type: 'pie',
            radius: 80, // 饼图的半径大小
            center: ['45%', '45%'], // 饼图的位置
            label: { // 饼图图形上的文本标签
              normal: {
                show: true,
                position: 'inner', // 标签的位置
                textStyle: {
                  fontWeight: 300,
                  fontSize: 14 // 文字的字体大小
                },
                formatter: '{d}%'

              }
            },
            data: [
              { value: 25, name: '未预警', itemStyle: { normal: { color: '#006699' } } },
              { value: 35, name: '已预警', itemStyle: { normal: { color: '#4254d9' } } },
              { value: 40, name: '预警中', itemStyle: { normal: { color: '#00cccc' } } }
            ]
          }
        ]
      })
    }
  }
}
</script>
<style lang="scss">
</style>
