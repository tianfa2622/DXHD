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
        color: ['#66CCCC', '#949494'],
        title: {
          text: '设\n备\n总\n数\n量\n统\n计',
          top: '30%',
          left: '10%',
          textStyle: {
            color: '#fff',
            fontSize: 18
          }
        },
        legend: {
          orient: 'vertical',
          right: '5%',
          bottom: '5%',
          itemWidth: 10,
          itemHeight: 10,
          textStyle: {
            color: '#FFF',
            fontSize: 16
          },
          data: ['在线率', '离线率']
        },
        animation: false,
        calculable: true,
        series: [
          {
            type: 'pie',
            center: ['50%', '50%'], // 饼图的位置
            label: { // 饼图图形上的文本标签
              normal: {
                position: 'inside', // 标签的位置
                textStyle: {
                  fontWeight: 'normal',
                  fontSize: 14 // 文字的字体大小
                },
                formatter: '{b}{d}%'
              }
            },
            data: [
              { value: 80, name: '在线率' },
              { value: 20, name: '离线率' }
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
