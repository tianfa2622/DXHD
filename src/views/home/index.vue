<template>
  <div class="home">
    <div class="home_left">
      <ul class="home_menu">
        <li class="menu_list">
          <Bar></Bar>
        </li>
        <li class="menu_list">
          <Ring></Ring>
        </li>
        <li class="menu_list">
          <PatrolTimes></PatrolTimes>
        </li>
      </ul>
    </div>
    <div class="home_center">
      <Map></Map>
    </div>
    <div class="home_right">
      <ul class="home_menu">
        <li class="menu_list">
          <BarRt></BarRt>
        </li>
        <li class="menu_list">
          <RingRt></RingRt>
        </li>
        <li class="menu_list">
          <DataSummary></DataSummary>
        </li>
      </ul>
    </div>
    <footer>
      <ul class="footer_menu">
        <li class="menu_list">关于我们</li>
        <li class="menu_list">企业服务</li>
        <li class="menu_list">帮助中心</li>
        <li class="menu_list">联系我们</li>
      </ul>
    </footer>
  </div>
</template>
<script>
import Ring from '@/components/home_com/ring'
import RingRt from '@/components/home_com/ring_rt'
import Bar from '@/components/home_com/bar'
import BarRt from '@/components/home_com/bar_rt'
import PatrolTimes from '@/components/home_com/patrolTimes'
import DataSummary from '@/components/home_com/dataSummary'
import Map from '@/components/home_com/map'
export default {
  data () {
    return {}
  },
  created () { },
  methods: {
    resize () {
      window.addEventListener('resize', () => {
        const ring = this.$echarts.init(document.getElementById('Ring')) // eslint-disable-line no-unused-vars
        const ringRt = this.$echarts.init(document.getElementById('Ring_Rt')) // eslint-disable-line no-unused-vars
        const bar = this.$echarts.init(document.getElementById('Bar')) // eslint-disable-line no-unused-vars
        const barRt = this.$echarts.init(document.getElementById('Bar_rt')) // eslint-disable-line no-unused-vars
        ring.resize()
        ringRt.resize()
        bar.resize()
        barRt.resize()
      })
    }
  },
  mounted () {
    this.resize()
  },
  components: { Ring, Bar, PatrolTimes, BarRt, RingRt, DataSummary, Map }
}
</script>
<style lang="scss">
.home {
  width: 100%;
  height: 100%;
  position: relative;
  z-index: 100;
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  .home_left,
  .home_right {
    height: 100%;
    width: 25%;
  }
  .home_center {
    width: 50%;
  }
  .home_menu {
    width: 100%;
    height: 100%;
    .menu_list {
      width: 100%;
      height: 33%;
      list-style: none;
      position: relative;
      background: url('~@/assets/home_img/u52.png') no-repeat center center;
      background-size: 120% 120%;
    }
  }
  footer {
    height: 0.5rem;
    width: 100%;
    text-align: center;
    .footer_menu {
      text-align: center;
      list-style-type: none;
      .menu_list {
        margin: 0 1rem;
        list-style: none;
        font-family: 'Arial Negreta', 'Arial Normal', 'Arial';
        font-weight: 700;
        font-style: normal;
        font-size: 14px;
        color: #fff;
        display: inline-block;
        cursor: pointer;
      }
    }
  }
}
</style>
