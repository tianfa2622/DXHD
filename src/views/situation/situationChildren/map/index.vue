<template>
  <div class="mapp">
    <baidu-map class="map_map" ref="map_map" :center="center" :zoom="zoom" :scroll-wheel-zoom="true">
      <bm-marker
        :position="{ lng: 112.97749565607255, lat: 28.166659397929035 }"
        :icon="{ url: 'http://developer.baidu.com/map/jsdemo/img/fox.gif', size: { width: 300, height: 157 } }"
        @click="clickMarker"
      />
    </baidu-map>
    <div class="map_foot" v-show="menuShow">
      <div class="menus" ref="menus">
        <div class="menu_center" @click="clickMenu">
          <img src="@/assets/situation/u517.svg" alt="" />
          <p>全部活动</p>
        </div>
        <div class="menu_left menuOpacity" @click="clickMenuLeft">
          <img src="@/assets/situation/4.png" alt="" />
          <p>安保路线</p>
        </div>
        <div class="menu_right menuOpacity">
          <img src="@/assets/situation/5.png" alt="" />
          <p>事件态势</p>
        </div>
        <div class="menu_top menuOpacity" @click="clickMenuTop">
          <img src="@/assets/situation/3.png" alt="" />
          <p>人员态势</p>
        </div>
        <div class="menu_leftTop menuOpacity" @click="clickMenuLeftTop">
          <img src="@/assets/situation/2.png" alt="" />
          <p>警力态势</p>
        </div>
        <div class="menu_rightTop menuOpacity">
          <img src="@/assets/situation/1.png" alt="" />
          <p>车辆态势</p>
        </div>
      </div>
    </div>
    <div v-show="menuLeftTopShow">
      <div class="z1" v-show="z1Show">
        <div class="z1Title">
          <h4>安保力量统计</h4>
          <span @click="closeZ1">X</span>
        </div>
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
      <div class="z2" v-show="z2Show">
        <div class="z2Title">
          <h4>警员数量区域分布</h4>
          <span @click="closeZ2">X</span>
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
        <div class="z1Div">
          <div class="img">
            <img src="@/assets/situation/u1230.png" alt="" />
            <span>1</span>
          </div>
          <span class="s1">区域1</span>
          <span class="s2">100</span>
        </div>
      </div>
      <div class="yInput" v-show="yInputShow">
        <el-input v-model="title" placeholder="请输入安保人员姓名或身份证号码"></el-input>
        <el-input v-model="title" placeholder="请输入警员姓名或身份证号码"></el-input>
        <el-input v-model="title" placeholder="请输入警车车牌号码"></el-input>
      </div>
    </div>
    <div class="clickTop" v-show="Show">
      <div class="region">
        <h3>A区</h3>
        <div class="region_cen">
          <div class="time">
            <el-input v-model="input" readonly></el-input>
            <el-input v-model="input" readonly></el-input>
            :
            <el-input v-model="input" readonly></el-input>
            <el-input v-model="input" readonly></el-input>
          </div>
          <div class="goBack">
            <div class="go">
              <div class="img">
                <img src="@/assets/business/u1175.png" alt="" />
                <span>进</span>
              </div>
              <span>4564</span>
            </div>
            <div class="back">
              <div class="img">
                <img src="@/assets/business/u1397.png" alt="" />
                <span>出</span>
              </div>
              <span>4564</span>
            </div>
          </div>
        </div>
        <div class="region_cen">
          <div class="time">
            <el-input v-model="input" readonly></el-input>
            <el-input v-model="input" readonly></el-input>
            :
            <el-input v-model="input" readonly></el-input>
            <el-input v-model="input" readonly></el-input>
          </div>
          <div class="goBack">
            <div class="go">
              <div class="img">
                <img src="@/assets/business/u1175.png" alt="" />
                <span>进</span>
              </div>
              <span>4564</span>
            </div>
            <div class="back">
              <div class="img">
                <img src="@/assets/business/u1397.png" alt="" />
                <span>出</span>
              </div>
              <span>4564</span>
            </div>
          </div>
        </div>
        <h3>A区：可疑人员人数为 <span>0</span> 人</h3>
      </div>
      <div class="region">
        <h3>B区</h3>
        <div class="region_cen">
          <div class="time">
            <el-input v-model="input" readonly></el-input>
            <el-input v-model="input" readonly></el-input>
            :
            <el-input v-model="input" readonly></el-input>
            <el-input v-model="input" readonly></el-input>
          </div>
          <div class="goBack">
            <div class="go">
              <div class="img">
                <img src="@/assets/business/u1175.png" alt="" />
                <span>进</span>
              </div>
              <span>4564</span>
            </div>
            <div class="back">
              <div class="img">
                <img src="@/assets/business/u1397.png" alt="" />
                <span>出</span>
              </div>
              <span>4564</span>
            </div>
          </div>
        </div>
        <div class="region_cen">
          <div class="time">
            <el-input v-model="input" readonly></el-input>
            <el-input v-model="input" readonly></el-input>
            :
            <el-input v-model="input" readonly></el-input>
            <el-input v-model="input" readonly></el-input>
          </div>
          <div class="goBack">
            <div class="go">
              <div class="img">
                <img src="@/assets/business/u1175.png" alt="" />
                <span>进</span>
              </div>
              <span>4564</span>
            </div>
            <div class="back">
              <div class="img">
                <img src="@/assets/business/u1397.png" alt="" />
                <span>出</span>
              </div>
              <span>4564</span>
            </div>
          </div>
        </div>
        <h3>B区：可疑人员人数为 <span>0</span> 人</h3>
      </div>
      <div class="region">
        <h3>C区</h3>
        <div class="region_cen">
          <div class="time">
            <el-input v-model="input" readonly></el-input>
            <el-input v-model="input" readonly></el-input>
            :
            <el-input v-model="input" readonly></el-input>
            <el-input v-model="input" readonly></el-input>
          </div>
          <div class="goBack">
            <div class="go">
              <div class="img">
                <img src="@/assets/business/u1175.png" alt="" />
                <span>进</span>
              </div>
              <span>4564</span>
            </div>
            <div class="back">
              <div class="img">
                <img src="@/assets/business/u1397.png" alt="" />
                <span>出</span>
              </div>
              <span>4564</span>
            </div>
          </div>
        </div>
        <div class="region_cen">
          <div class="time">
            <el-input v-model="input" readonly></el-input>
            <el-input v-model="input" readonly></el-input>
            :
            <el-input v-model="input" readonly></el-input>
            <el-input v-model="input" readonly></el-input>
          </div>
          <div class="goBack">
            <div class="go">
              <div class="img">
                <img src="@/assets/business/u1175.png" alt="" />
                <span>进</span>
              </div>
              <span>4564</span>
            </div>
            <div class="back">
              <div class="img">
                <img src="@/assets/business/u1397.png" alt="" />
                <span>出</span>
              </div>
              <span>4564</span>
            </div>
          </div>
        </div>
        <h3>C区：可疑人员人数为 <span>0</span> 人</h3>
      </div>
      <h2>场馆24小时总流量</h2>
      <div class="bar">
        <Bar></Bar>
      </div>
    </div>
    <Dialog
      :title="title"
      :innerVisibleTitle="innerVisibleTitle"
      :isShow="isShow"
      :innerVisible="innerVisible"
      :readOnly="readOnly"
      :tableHead="dialogsTableHead"
      :tableDatas="dialogsTableDatas"
      :tableSettings="dialogsTableSettings"
      :innerVisibleDiologs="innerVisibleDiologs"
      @close="close"
      @detailed="detailed"
      @innerClose="innerClose"
    ></Dialog>
  </div>
</template>
<script>
import Dialog from '@/components/dialog'
import Bar from '@/components/business_com/circleManagement/bar'
export default {
  data: () => ({
    input: '',
    title: '',
    innerVisibleTitle: '',
    Show: false,
    menuLeftTopShow: false,
    isShow: false,
    z1Show: false,
    z2Show: false,
    yInputShow: false,
    innerVisible: false,
    readOnly: true,
    isClickMenu: false,
    menuShow: false,
    zoom: 15,
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
    innerVisibleDiologs: []
  }),
  created () { },
  methods: {
    clickMenu () {
      this.zoom = 15
      this.center = {
        lng: 112.96819817184979,
        lat: 28.191863196869612
      }
      this.$refs.map_map.$el.style.width = '100%'
      this.Show = false
      this.menuShow = false
    },
    clickMenuLeft () {
      this.title = '安保路线'
      this.$refs.map_map.$el.style.width = '100%'
      this.Show = false
      this.menuLeftTopShow = false
      this.isShow = true
    },
    clickMenuLeftTop () {
      this.$refs.map_map.$el.style.width = '100%'
      this.Show = false
      this.z1Show = true
      this.z2Show = true
      this.yInputShow = true
      this.menuLeftTopShow = true
    },
    clickMenuTop () {
      this.menuLeftTopShow = false
      this.$refs.map_map.$el.style.width = '80%'
      this.Show = true
    },
    clickMarker (e) {
      this.$refs.map_map.$el.style.width = '100%'
      this.Show = false
      this.center = {
        lng: 112.98948073412699,
        lat: 28.183879451580328
      }
      this.zoom = 19
      this.menuShow = true
    },
    close (e) {
      this.isShow = false
    },
    closeZ1 () {
      this.z1Show = false
    },
    closeZ2 () {
      this.z2Show = false
    },
    innerClose (e) {
      this.innerVisible = false
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
    }
  },
  watch: {
  },
  components: { Dialog, Bar }
}
</script>
<style lang="scss">
.mapp {
  width: 100%;
  height: 100%;
  position: relative;
  .map_map {
    width: 100%;
    height: 100%;
    position: relative;
  }
  .map_foot {
    position: fixed;
    width: 2rem;
    height: 2rem;
    background-color: #02112e;
    border-radius: 50%;
    bottom: -1rem;
    left: 50%;
    transform: translateX(-50%);
    transition: all 3s linear;
    .menus {
      width: 100%;
      height: 50%;
      text-align: center;
      position: absolute;
      top: 0;
      left: 0;
      .menu_center {
        width: 100%;
        height: 100%;
        text-align: center;
        position: absolute;
        top: 0;
        left: 0;
        cursor: pointer;
        img {
          width: 60%;
          height: 60%;
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
        }
        p {
          position: absolute;
          color: #00efff;
          bottom: 0;
          left: 50%;
          transform: translateX(-50%);
        }
      }
      .menu_left {
        width: 50%;
        height: 50%;
        position: absolute;
        bottom: 0;
        left: -50%;
        cursor: pointer;
        img {
          width: 60%;
          height: 60%;
          position: absolute;
          top: 0;
          left: 50%;
          transform: translateX(-50%);
        }
        p {
          position: absolute;
          color: #00efff;
          bottom: 0;
          left: 50%;
          transform: translateX(-50%);
        }
      }
      .menu_right {
        width: 50%;
        height: 50%;
        position: absolute;
        bottom: 0;
        right: -50%;
        cursor: pointer;
        img {
          width: 60%;
          height: 60%;
          position: absolute;
          top: 0;
          left: 50%;
          transform: translateX(-50%);
        }
        p {
          position: absolute;
          color: #00efff;
          bottom: 0;
          left: 50%;
          transform: translateX(-50%);
        }
      }
      .menu_top {
        width: 50%;
        height: 50%;
        position: absolute;
        top: -50%;
        left: 50%;
        transform: translateX(-50%);
        cursor: pointer;
        img {
          width: 60%;
          height: 60%;
          position: absolute;
          top: 0;
          left: 50%;
          transform: translateX(-50%);
        }
        p {
          position: absolute;
          color: #00efff;
          bottom: 0;
          left: 50%;
          transform: translateX(-50%);
        }
      }
      .menu_leftTop {
        width: 50%;
        height: 50%;
        position: absolute;
        top: -30%;
        left: -30%;
        cursor: pointer;
        img {
          width: 60%;
          height: 60%;
          position: absolute;
          top: 0;
          left: 50%;
          transform: translateX(-50%);
        }
        p {
          position: absolute;
          color: #00efff;
          bottom: 0;
          left: 50%;
          transform: translateX(-50%);
        }
      }
      .menu_rightTop {
        width: 50%;
        height: 50%;
        position: absolute;
        top: -30%;
        right: -30%;
        cursor: pointer;
        img {
          width: 60%;
          height: 60%;
          position: absolute;
          top: 0;
          left: 50%;
          transform: translateX(-50%);
        }
        p {
          position: absolute;
          color: #00efff;
          bottom: 0;
          left: 50%;
          transform: translateX(-50%);
        }
      }
      .menuOpacity {
        opacity: 0;
      }
    }
    .menus:hover .menuOpacity {
      opacity: 1;
      transition: 2s;
    }
  }
  .z1 {
    position: absolute;
    left: 0.2rem;
    top: 10%;
    width: 2rem;
    background-color: rgba(8, 22, 51, 0.5);
    padding: 0.1rem;
    box-sizing: border-box;
    .z1Title {
      display: flex;
      justify-content: space-between;
      h4 {
        color: #6aefd5;
        font-size: 0.14rem;
      }
      span {
        color: #6aefd5;
        cursor: pointer;
      }
    }
    p {
      margin: 0.1rem 0;
      .s2 {
        height: 0.02rem;
        background-color: #242323;
      }
      .s1,
      .s2,
      .s3 {
        width: 100%;
        display: block;
        margin: 0.02rem 0;
      }
      .s1 {
        color: #6aefd5;
      }
      .s3 {
        color: #fff;
      }
    }
  }
  .z2 {
    position: absolute;
    left: 0.2rem;
    bottom: 20%;
    width: 2rem;
    background-color: rgba(8, 22, 51, 0.5);
    padding: 0.1rem;
    box-sizing: border-box;
    .z2Title {
      display: flex;
      justify-content: space-between;
      h4 {
        color: #6aefd5;
        font-size: 0.14rem;
      }
      span {
        color: #6aefd5;
        cursor: pointer;
      }
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
          color: #fff;
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
      p {
        position: absolute;
        color: #00efff;
        bottom: 0;
        left: 50%;
        transform: translateX(-50%);
      }
    }
  }
  .yInput {
    position: absolute;
    right: 0.2rem;
    top: 10%;
    width: 3rem;
    .el-input {
      margin-bottom: 0.1rem;
      input {
        background-color: #0d2e60;
        border: none;
      }
    }
  }
  .clickTop {
    position: absolute;
    right: 0;
    top: 0;
    background-color: #02102f;
    width: 20%;
    padding: 0.2rem;
    box-sizing: border-box;
    .region {
      margin-bottom: 0.2rem;
      h3 {
        color: #fff;
        font-size: 0.16rem;
        span {
          border-bottom: 1px solid #fff;
        }
      }
      .region_cen {
        display: flex;
        margin: 0.1rem 0;
        .time {
          width: 50%;
          display: flex;
          color: #fff;
          line-height: 0.3rem;
          .el-input {
            width: 0.4rem;
            height: 0.3rem;
            margin-right: 0.02rem;
            input {
              width: 100%;
              height: 100%;
              background-color: #344c62;
              color: #fff;
              border: none;
            }
          }
        }
        .goBack {
          width: 50%;
          display: flex;
          justify-content: space-between;
          .go,
          .back {
            display: flex;
            height: 0.3rem;
            line-height: 0.3rem;
            .img {
              position: relative;
              width: 0.3rem;
              height: 0.3rem;
              img {
                position: absolute;
                width: 100%;
                height: 100%;
              }
              span {
                position: absolute;
                top: 50%;
                left: 50%;
                transform: translate(-50%, -50%);
                color: #fff;
              }
            }
            span {
              color: #fff;
              margin-left: 0.02rem;
            }
          }
        }
        .sums {
          width: 50%;
          position: relative;
          .sum {
            width: 100%;
            height: 0.6rem;
            line-height: 0.6rem;
            text-align: center;
            background-color: #050b19;
            position: absolute;
            color: #fff;
          }
        }
      }
    }
    h2 {
      color: #6aefd9;
      font-size: 0.2rem;
    }
    .bar {
      width: 100%;
      height: 3rem;
    }
  }
}
</style>
