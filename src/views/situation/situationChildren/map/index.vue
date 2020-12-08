<template>
  <div class="mapp">
    <baidu-map class="map_map" :center="center" :zoom="zoom" :scroll-wheel-zoom="true">
      <bm-marker
        :position="{ lng: 112.97749565607255, lat: 28.166659397929035 }"
        :dragging="true"
        animation="BMAP_ANIMATION_BOUNCE"
        :icon="{ url: 'http://developer.baidu.com/map/jsdemo/img/fox.gif', size: { width: 300, height: 157 } }"
        @click="clickMarker"
      >
      </bm-marker>
      <bm-view class="map"></bm-view>
      <bm-control :offset="{ width: '10px', height: '10px' }">
        <bm-auto-complete v-model="keyword" :sugStyle="{ zIndex: 1 }">
          <el-input class="input" v-model="keyword" placeholder="请输入活动名称、场馆名称"></el-input>
        </bm-auto-complete>
      </bm-control>
      <bm-local-search :keyword="keyword" :auto-viewport="true"></bm-local-search>
      <bm-circle v-if="circleShow" :center="circlePath.center" :radius="circlePath.radius" stroke-color="blue" :stroke-opacity="0.5" :stroke-weight="2" @lineupdate="updateCirclePath"></bm-circle>
      <div class="polices" v-if="policesShows">
        <div class="z1">
          <h4>安保力量统计</h4>
          <p>
            <span class="s1">安保人员总数</span>
            <span class="s2"></span>
            <span class="s3">200人</span>
          </p>
          <p>
            <span class="s1">执勤警员总数</span>
            <span class="s2"></span>
            <span class="s3">300人</span>
          </p>
          <p>
            <span class="s1">警车总数</span>
            <span class="s2"></span>
            <span class="s3">50辆</span>
          </p>
        </div>
        <div class="z2">
          <h4>警员数量区域分布</h4>
          <div class="z1Div">
            <div class="img">
              <img src="@/assets/situation/u1230.png" alt="" />
              <span>1</span>
            </div>
            <span class="s1">区域1</span>
            <span class="s2">100</span>
          </div>
          <div class="z1Div">
            <div class="img">
              <img src="@/assets/situation/u1230.png" alt="" />
              <span>1</span>
            </div>
            <span class="s1">区域1</span>
            <span class="s2">100</span>
          </div>
          <div class="z1Div">
            <div class="img">
              <img src="@/assets/situation/u1230.png" alt="" />
              <span>1</span>
            </div>
            <span class="s1">区域1</span>
            <span class="s2">100</span>
          </div>
          <div class="z1Div">
            <div class="img">
              <img src="@/assets/situation/u1230.png" alt="" />
              <span>1</span>
            </div>
            <span class="s1">区域1</span>
            <span class="s2">100</span>
          </div>
          <div class="z1Div">
            <div class="img">
              <img src="@/assets/situation/u1230.png" alt="" />
              <span>1</span>
            </div>
            <span class="s1">区域1</span>
            <span class="s2">100</span>
          </div>
          <div class="z1Div">
            <div class="img">
              <img src="@/assets/situation/u1230.png" alt="" />
              <span>1</span>
            </div>
            <span class="s1">区域1</span>
            <span class="s2">100</span>
          </div>
          <div class="z1Div">
            <div class="img">
              <img src="@/assets/situation/u1230.png" alt="" />
              <span>1</span>
            </div>
            <span class="s1">区域1</span>
            <span class="s2">100</span>
          </div>
        </div>
        <div class="y1">
          <h4>警员查询</h4>
          <el-select v-model="form.name" placeholder="执行区域"> </el-select>
          <h4>查询结果</h4>
          <div class="y1Table">
            <img
              src=""
              alt=""
            />
          </div>
        </div>
      </div>
    </baidu-map>
    <Dialog
      :title="title"
      :isShow="isShow"
      :tableHead="dialogsTableHead"
      :innerVisible="innerVisible"
      :innerVisibleDiologs="innerVisibleDiologs"
      :tableSettings="dialogsTableSettings"
      :tableDatas="dialogsTableDatas"
      :readOnly="readOnly"
      :innerVisibleTitle="innerVisibleTitle"
      @close="close"
      @innerClose="innerClose"
      @detailed="detailed"
    ></Dialog>
  </div>
</template>
<script>
import Dialog from '@/components/dialog'
export default {
  props: ['initCenter', 'security', 'policesShows'],
  data: () => ({
    title: '',
    innerVisibleTitle: '',
    isShow: false,
    innerVisible: false,
    circleShow: false,
    readOnly: true,
    zoom: 15,
    keyword: '',
    points: [],
    center: {
      lng: 112.96819817184979,
      lat: 28.191863196869612
    },
    dialogsTableHead: [
      { label: '信息主键编号', prop: 'input' },
      { label: '活动名称', prop: 'input' },
      { label: '路线编号', prop: 'input' },
      { label: '机关名称', prop: 'input' },
      { label: '开始时间', prop: 'input' },
      { label: '结束时间', prop: 'input' }
    ],
    dialogsTableDatas: Array(5).fill({
      input: '123'
    }),
    dialogsTableSettings: [
      { name: '查看', type: 'detailed' }
    ],
    innerVisibleDiologs: [],
    circlePath: {
      center: {
        lng: 112.98948073412699,
        lat: 28.183879451580328
      },
      radius: 100
    },
    form: {}
  }),
  created () { },
  methods: {
    clickMarker (e) {
      this.$emit('isClick', e)
      this.center = {
        lng: 112.98948073412699,
        lat: 28.183879451580328
      }
      this.zoom = 19
      this.circleShow = true
    },
    close (e) {
      this.$emit('close', e)
      this.isShow = false
    },
    innerClose (e) {
      this.innerVisible = false
    },
    clickSecurity (val) {
      this.title = '安保路线'
      this.isShow = val
    },
    detailed (e) {
      this.innerVisibleTitle = '安保路线轨迹信息'
      this.innerVisibleDiologs = [
        { label: '活动名称', type: 'input' },
        { label: '活动编码', type: 'input' },
        { label: '信息主键编号', type: 'input' },
        { label: '安保路线编号', type: 'input' },
        { label: '路线顶点编号', type: 'input' },
        { label: '路线顶点信息', type: 'input' },
        { label: '地球经度', type: 'input' },
        { label: '地球纬度', type: 'input' }
      ]
      this.innerVisible = true
    },
    updateCirclePath (e) {
      this.circlePath.center = e.target.getCenter()
      this.circlePath.radius = e.target.getRadius()
    }
  },
  watch: {
    initCenter (val) {
      this.center = val
      this.zoom = 15
      this.circleShow = false
    },
    security (val) {
      this.clickSecurity(val)
    }
  },
  components: { Dialog }
}
</script>
<style lang="scss">
.mapp {
  width: 100%;
  height: calc(100% - 0.41rem);
  padding-bottom: 1rem;
  box-sizing: border-box;
  margin-top: 0.2rem;
  .map_map {
    width: 100%;
    height: 100%;
    position: relative;
    .map {
      width: 100%;
      height: 100%;
      .BMap_noprint {
        width: 100%;
        .input {
          right: 0.2rem;
          width: 2rem;
          position: absolute;
          input {
            background-color: #0a2b5d;
            border: none;
          }
        }
      }
    }
    .polices {
      .z1 {
        position: absolute;
        top: 0.2rem;
        left: 0.2rem;
        width: 2rem;
        background-color: #0b1937;
        padding: 0.1rem;
        box-sizing: border-box;
        color: #00ffff;
        h4 {
          font-size: 0.2rem;
        }
        p {
          padding: 0 0.1rem;
          box-sizing: border-box;
          margin: 0.1rem auto;
          .s2 {
            margin: 0.1rem auto;
            width: 100%;
            height: 0.02rem;
            background-color: #727274;
            display: block;
          }
          .s3 {
            width: 100%;
            text-align: center;
            color: #fff;
            display: block;
          }
        }
      }
      .z2 {
        position: absolute;
        bottom: 0.2rem;
        left: 0.2rem;
        width: 2rem;
        background-color: #0b1937;
        color: #00ffff;
        padding: 0.1rem;
        box-sizing: border-box;
        h4 {
          font-size: 0.2rem;
        }
        .z1Div {
          width: 100%;
          height: 0.4rem;
          line-height: 0.4rem;
          padding: 0 0.1rem;
          box-sizing: border-box;
          .img {
            position: relative;
            width: 0.4rem;
            height: 0.4rem;
            line-height: 0.4rem;
            text-align: center;
            img,
            span {
              position: absolute;
              width: 100%;
              height: 100%;
              top: 0;
              left: 0;
            }
            img {
              z-index: 1;
            }
            span {
              z-index: 2;
            }
          }
          .s1,
          .s2 {
            color: #fff;
          }
          .s1,
          .img {
            float: left;
          }
          .s2 {
            float: right;
          }
        }
      }
      .y1 {
        position: absolute;
        top: 0.2rem;
        right: 0.2rem;
        width: 3rem;
        background-color: #0b1937;
        color: #00ffff;
        padding: 0.1rem;
        box-sizing: border-box;
        h4 {
          font-size: 0.2rem;
        }
      }
    }
  }
}
</style>
