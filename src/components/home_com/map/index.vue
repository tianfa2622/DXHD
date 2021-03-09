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
      chart: null,
      dataValue: [
        {
          name: '贺龙体育馆',
          value: [112.988809, 28.180727],
          num: 100
        },
        {
          name: '祁东县人民政府',
          value: [112.096447, 26.805995],
          num: 200
        },
        {
          name: '深圳宝安国际机场',
          value: [113.821705, 22.638172],
          num: 300
        },
        {
          name: '广州白云国际机场',
          value: [113.265703, 23.183391],
          num: 150
        },
        {
          name: '呼和浩特市回民区内蒙古自治区体育局网球场',
          value: [111.666269, 40.824884],
          num: 600
        },
        {
          name: '海南藏族自治州共和县青海湖景区',
          value: [100.50256, 36.584159],
          num: 200
        },
        {
          name: '成都大熊猫繁育研究基地',
          value: [104.152698, 30.742371],
          num: 300
        }
      ]
    }
  },
  mounted () {
    this.chinaConfigure()
  },
  beforeDestroy () {
    if (!this.chart) {
      return
    }
    // dispose() 释放内存的方法
    this.chart.dispose()
    this.chart = null
  },
  methods: {
    chinaConfigure () {
      console.log(this.userJson)
      const myChart = echarts.init(this.$refs.myEchart) // 这里是为了获得容器所在位置
      window.onresize = myChart.resize
      myChart.setOption({ // 进行相关配置
        // titel: {
        //   text: '' // 标题
        // },
        tooltip: {
          show: false
        }, // 鼠标移到图里面的浮动提示框
        // 右下角的图例
        dataRange: {
          show: false,
          min: 0,
          max: 1000,
          text: ['High', 'Low'],
          realtime: true,
          calculable: true
        },
        geo: { // 这个是重点配置区 中国地图设置
          map: 'china', // 表示中国地图
          roam: true, // 是否允许缩放
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
        series: [
          // {
          //   type: 'scatter',
          //   coordinateSystem: 'geo' // 对应上方配置
          // }
          {
            name: '',
            type: 'scatter', // 小圆圈
            coordinateSystem: 'geo',
            data: this.dataValue,
            symbol: 'circle',
            symbolSize: 15,
            hoverSymbolSize: 10,
            tooltip: {
              formatter(value) {
                return `${value.data.name}`
              },
              show: true
            },
            encode: {
              value: 2
            },
            showEffectOn: 'render',
            rippleEffect: {
              brushType: 'stroke',
              color: '#0efacc',
              period: 9,
              scale: 5
            },
            hoverAnimation: true,
            label: {
              formatter: '{b}',
              position: 'right',
              show: false
            },
            itemStyle: {
              color: '#0efacc',
              shadowBlur: 10,
              shadowColor: '#ffff00'
            },
            zlevel: 1
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
