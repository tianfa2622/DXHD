<template>
  <div class="echarts">
    <div :style="{ height: '100% ', width: '100%' }" ref="myEchart"></div>
  </div>
</template>
<script>
import echarts from 'echarts'
import '@/../node_modules/echarts/map/js/china.js' // 引入中国地图数据
export default {
  name: 'echarts',
  props: ['userJson'],
  data () {
    return {
      chart: null
    }
  },
  mounted () {
    this.chinaConfigure()
  },
  beforeDestroy () {
    if (!this.chart) {
      return
    }
    this.chart.dispose()
    this.chart = null
  },
  methods: {
    chinaConfigure () {
      console.log(this.userJson)
      const myChart = echarts.init(this.$refs.myEchart) // 这里是为了获得容器所在位置
      window.onresize = myChart.resize
      myChart.setOption({ // 进行相关配置
        tooltip: {
          show: false
        }, // 鼠标移到图里面的浮动提示框
        dataRange: {
          show: false,
          min: 0,
          max: 1000,
          text: ['High', 'Low'],
          realtime: true,
          calculable: true
        },
        geo: { // 这个是重点配置区
          map: 'china', // 表示中国地图
          roam: false,
          label: {
            normal: {
              show: false // 是否显示对应地名
            }
          },
          aspectScale: {
            layoutCenter: ['30%', '30%']
          },
          itemStyle: {
            normal: {
              areaColor: '#4254d8'
            },
            emphasis: {
              areaColor: 'rgb(22,155,213)',
              shadowOffsetX: 0,
              shadowOffsetY: 0,
              shadowBlur: 20,
              borderWidth: 0
            }
          }
        },
        series: [{
          type: 'scatter',
          coordinateSystem: 'geo' // 对应上方配置
        }
        ]
      })
    }
  }
}
</script>
<style lang="scss">
.echarts {
  width: 100%;
  height: 100%;
}
</style>
