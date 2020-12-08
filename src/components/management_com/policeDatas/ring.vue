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
          text: '各区域警情事件',
          left: 20,
          top: 30,
          itemGap: 50,
          textStyle: {
            color: '#fff',
            fontSize: 18
          }
        },
        tooltip: {
          show: false
        },
        legend: {
          orient: 'vertical',
          right: '5%',
          bottom: '5%',
          itemWidth: 10,
          itemHeight: 10,
          formatter: '{name}',
          textStyle: {
            color: '#FFF',
            fontSize: 16
          },
          data: [{ name: '芙蓉区', icon: 'rect' }, { name: '岳麓区', icon: 'rect' }, { name: '宁乡市', icon: 'rect' }, { name: '浏阳市', icon: 'rect' }, { name: '天心区', icon: 'rect' }, { name: '雨花区', icon: 'rect' }]
        },
        animation: false,
        calculable: true,
        series: [
          {
            name: '战果统计数量',
            type: 'pie',
            radius: ['50%', '80%'],
            center: ['50%', '50%'], // 饼图的位置
            label: { // 饼图图形上的文本标签
              normal: {
                show: true,
                position: 'inside', // 标签的位置
                textStyle: {
                  fontWeight: 'normal',
                  fontSize: 14 // 文字的字体大小
                },
                formatter: '{c}'
              }
            },
            data: [
              { value: 30, name: '芙蓉区', itemStyle: { normal: { color: '#006698' } } },
              { value: 20, name: '岳麓区', itemStyle: { normal: { color: '#000066' } } },
              { value: 10, name: '宁乡市', itemStyle: { normal: { color: '#996600' } } },
              { value: 40, name: '浏阳市', itemStyle: { normal: { color: '#99cc99' } } },
              { value: 10, name: '天心区', itemStyle: { normal: { color: '#996600' } } },
              { value: 40, name: '雨花区', itemStyle: { normal: { color: '#99cc99' } } }
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
