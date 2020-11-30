<template>
  <div id="Ring" :style="{ width: '100%', height: '100%' }"></div>
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
      const Ring = this.$echarts.init(document.getElementById('Ring'))
      Ring.setOption({
        title: {
          text: '战果统计数量',
          subtext: '出\n现\n异\n常\n次\n数',
          left: 20,
          top: 30,
          itemGap: 50,
          textStyle: {
            color: '#3294BB',
            fontSize: 18
          },
          subtextStyle: {
            color: '#fff',
            lineHeight: 15
          }
        },
        tooltip: {
          show: false
        },
        legend: {
          orient: 'vertical',
          right: 60,
          top: 140,
          itemWidth: 10,
          itemHeight: 10,
          formatter: '{name}',
          textStyle: {
            color: '#FFF',
            fontSize: 16
          },
          data: [{ name: '第一区域', icon: 'rect' }, { name: '第二区域', icon: 'rect' }, { name: '第三区域', icon: 'rect' }, { name: '第四区域', icon: 'rect' }]
        },
        animation: false,
        calculable: true,
        series: [
          {
            name: '战果统计数量',
            type: 'pie',
            radius: [50, 100], // 饼图的半径大小
            center: ['50%', '45%'], // 饼图的位置
            label: { // 饼图图形上的文本标签
              normal: {
                show: true,
                position: 'inside', // 标签的位置
                textStyle: {
                  fontWeight: 'normal',
                  fontSize: 14 // 文字的字体大小
                },
                formatter: '{d}%'
              }
            },
            data: [
              { value: 30, name: '第一区域', itemStyle: { normal: { color: '#006698' } } },
              { value: 20, name: '第二区域', itemStyle: { normal: { color: '#000066' } } },
              { value: 10, name: '第三区域', itemStyle: { normal: { color: '#996600' } } },
              { value: 40, name: '第四区域', itemStyle: { normal: { color: '#99cc99' } } }
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
