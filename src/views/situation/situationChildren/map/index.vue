<template>
  <div class="mapp">
    <baidu-map class="map_map" ref="map_map" :center="center" :zoom="zoom" :scroll-wheel-zoom="true">
      <bm-marker
        :position="{ lng: 112.97749565607255, lat: 28.166659397929035 }"
        :icon="{ url: 'http://developer.baidu.com/map/jsdemo/img/fox.gif', size: { width: 300, height: 157 } }"
        @click="clickMarker"
      />
      <bm-marker
        v-for="(item, index) in position"
        :key="index"
        :position="item"
        :icon="{ url: 'http://developer.baidu.com/map/jsdemo/img/fox.gif', size: { width: 300, height: 157 } }"
        @click="clickMarkers(index)"
      />
      <div class="clickTopTitle" v-if="Show">
        <div>
          <div class="img">
            <img src="@/assets/business/u1720.svg" alt="" />
          </div>
          <div class="font">
            <p>当前累计人流量总量</p>
            <p>45,231</p>
          </div>
        </div>
        <div style="margin: 0 0.4rem">
          <div class="img">
            <img src="@/assets/business/u1738.svg" alt="" />
          </div>
          <div class="font">
            <p>实时保有量</p>
            <p>45,231</p>
          </div>
        </div>
        <div>
          <div class="img">
            <img src="@/assets/business/u1740.svg" alt="" />
          </div>
          <div class="font">
            <p>点位最高人流密度</p>
            <p>45,231</p>
          </div>
        </div>
      </div>
      <div class="clickTopLeft" v-if="Show">
        <div class="clickTopLeftBox">
          <div class="clickTopLeftBoxTitle">
            <h3>现场视频</h3>
            <span>X</span>
          </div>
          <el-form ref="form" :model="form" label-width="1rem">
            <el-form-item label="设备类型">
              <el-select v-model="form.name" placeholder="请选择"> </el-select>
            </el-form-item>
            <el-form-item>
              <el-button type="primary">搜索</el-button>
            </el-form-item>
            <el-form-item label="摄像头位置">
              <el-select v-model="form.name" placeholder="请选择"> </el-select>
            </el-form-item>
          </el-form>
          <video controls autoplay src="http://vjs.zencdn.net/v/oceans.mp4"></video>
        </div>
        <div class="clickTopLeftBoxs">
          <div class="clickTopLeftBox" v-for="(item, index) in 99" :key="index">
            <div class="clickTopLeftBoxTitle">
              <h3>重点人员列表</h3>
              <span>X</span>
            </div>
            <div class="peopleTable">
              <div>
                <p>布控人员</p>
                <p>摄像头001</p>
                <p>2020-08-26 12:30:25</p>
              </div>
              <img src="https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=3291729759,2295753587&fm=26&gp=0.jpg" alt="" />
              <div>
                <p>相似度</p>
                <p>98.55%</p>
              </div>
              <img src="https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=2370914011,2125569209&fm=26&gp=0.jpg" alt="" />
            </div>
            <div class="clickTopLeftBoxFoot">
              <span>李小小</span>
              <span>女</span>
              <span>汉族</span>
              <el-button type="primary">详情</el-button>
            </div>
          </div>
        </div>
      </div>
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
        <div class="menu_right menuOpacity" @click="clickMenuRight">
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
        <div class="menu_rightTop menuOpacity" @click="clickMenuRightTop">
          <img src="@/assets/situation/1.png" alt="" />
          <p>车辆态势</p>
        </div>
      </div>
    </div>
    <div v-if="menuLeftTopShow">
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
    <div class="clickTop" v-if="Show">
      <div>
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
    </div>
    <div class="clickRight" v-if="menuRightShow">
      <div class="clickRightLeft" v-if="clickMenuRightMapShow">
        <div class="clickRightLeftTitle">
          <h3>警情展示</h3>
          <span @click="clickMenuRightMapShow = false">X</span>
        </div>
        <div class="clickRightLeftBody">
          <div class="clickRightLeftbox" v-for="(item, index) in 99" :key="index">
            <p>
              <span>案发事件：抢劫事件</span>
              <span>案发时间：2020-05-16 09:00</span>
            </p>
            <p>
              <span>报案人：刘海霞</span>
              <span>联系电话：15973613989</span>
            </p>
            <p>
              <span>案发地点：长沙市天心区贺龙体育馆</span>
              <span></span>
            </p>
            <p>
              <span></span>
              <el-button type="text" @click="clickRightLeftboxMore">更多></el-button>
            </p>
          </div>
        </div>
        <Dialog :title="title" :isShow="isClickRightShow" :readOnly="readOnly" :dialogs="clickRightDialogs" @close="clickRightClose"></Dialog>
      </div>
      <div class="clickRightTop">
        <el-button type="primary">布控区域</el-button>
        <el-button type="primary" @click="clickMenuRightMap">事件地图</el-button>
      </div>
      <div class="video" v-if="videoShow">
        <video controls autoplay src="http://clips.vorwaerts-gmbh.de/big_buck_bunny.mp4"></video>
        <p>
          <span>芙蓉路监控1号</span>
        </p>
      </div>
    </div>
    <div class="clickRightTop" v-if="menuRightTopShow">
      <div class="clickRightTopLeft">
        <div class="clickRightTopLeftTitle">
          <div>
            <h3>视频直播</h3>
            <h3>视频回放</h3>
          </div>
          <span>X</span>
        </div>
        <div class="clickRightTopLeftBody">
          <el-input v-model="input" placeholder="请输入内容" suffix-icon="el-icon-search"></el-input>
          <p v-for="(item, index) in 99" :key="index">
            <span>芙蓉路监控1号</span>
            <img src="@/assets/business/u1596.svg" alt="" @click="videoShow = true" />
          </p>
        </div>
      </div>
      <div class="clickRightTopTop">
        <p>
          <span>摄像头</span>
          40万
        </p>
        <p>
          <span>车辆</span>
          180万
        </p>
      </div>
      <div class="clickRightTopRight">
        <div class="clickRightTopRightBox">
          <div class="clickRightTopRightBoxTitle">
            <h3>布控车辆</h3>
            <span>X</span>
          </div>
          <div class="clickRightTopRightBoxBody">
            <div>
              <h3>布控车辆</h3>
              <img src="https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=1916289435,2760008225&fm=26&gp=0.jpg" alt="" />
            </div>
            <p>
              <span>相似度</span>
              <span>97.64%</span>
            </p>
            <div>
              <h3>抓拍照片</h3>
              <img src="https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=1916289435,2760008225&fm=26&gp=0.jpg" alt="" />
            </div>
          </div>
          <div class="clickRightTopRightBoxFoot">
            <h3>重点车辆信息</h3>
            <p>
              <span>入库时间</span>
              <span>2020-08-26 12:20:35</span>
            </p>
            <p>
              <span>抓拍摄像头</span>
              <span>摄像头1</span>
            </p>
            <p>
              <span>抓拍地点</span>
              <span>经度28.123456 纬度10.2587</span>
            </p>
            <p>
              <span>中文品牌名称</span>
              <span>奥迪</span>
            </p>
            <p>
              <span>重点车辆编号</span>
              <span>23456789</span>
            </p>
            <p>
              <span>重点车辆牌号</span>
              <span>湘A12345</span>
            </p>
          </div>
        </div>
        <div class="clickRightTopRightBox" style="margin-top: 0.2rem">
          <div class="clickRightTopRightBoxTitle">
            <h3>涉会车辆</h3>
            <span>X</span>
          </div>
          <div class="clickRightTopRightBoxBody">
            <div>
              <h3>抓拍照片</h3>
              <img src="https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=1916289435,2760008225&fm=26&gp=0.jpg" alt="" />
            </div>
          </div>
          <div class="clickRightTopRightBoxFoot">
            <h3>社会车辆信息</h3>
            <p>
              <span>机动车车牌号码</span>
              <span>湘E240</span>
            </p>
            <p>
              <span>抓拍摄像头</span>
              <span>摄像头1</span>
            </p>
            <p>
              <span>抓拍地点</span>
              <span>经度28.123456 纬度10.2587</span>
            </p>
            <p>
              <span>机动车车身颜色</span>
              <span>j红色</span>
            </p>
          </div>
        </div>
      </div>
      <div class="video" v-if="videoShow">
        <video controls autoplay src="http://clips.vorwaerts-gmbh.de/big_buck_bunny.mp4"></video>
        <p>
          <span>芙蓉路监控1号</span>
          <span @click="videoShow = false">X</span>
        </p>
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
    videoShow: false,
    menuRightTopShow: false,
    menuRightShow: false,
    isClickRightShow: false,
    clickMenuRightMapShow: false,
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
    clickRightDialogs: [
      { label: '警情标识', type: 'input' },
      { label: '姓名', type: 'input' },
      { label: '警情视频信息', type: 'input' },
      { label: '联系电话', type: 'input' },
      { label: '视屏设备编码', type: 'input' },
      { label: '警情数据来源', type: 'input' },
      { label: '报警时间', type: 'input' },
      { label: '视频文件格式代码', type: 'input' },
      { label: '警情级别', type: 'input' },
      { label: '处理人', type: 'input' },
      { label: '开始时间', type: 'input' },
      { label: '案事件发生开始时间', type: 'input' },
      { label: '姓名', type: 'input' },
      { label: '结束时间', type: 'input' },
      { label: '治安警情代码', type: 'input' },
      { label: '接警时间', type: 'input' },
      { label: '警情音频信息', type: 'input' },
      { label: '涉案场所类别代码', type: 'input' },
      { label: '到达时间', type: 'input' },
      { label: '音频设备编码', type: 'input' },
      { label: '涉案场所', type: 'input' },
      { label: '处理', type: 'input' },
      { label: '音频编码格式代码', type: 'input' },
      { label: '地址名称', type: 'input' },
      { label: '处理时间', type: 'input' },
      { label: '开始时间', type: 'input' },
      { label: '地区经度', type: 'input' },
      { label: '警情处理结果代码', type: 'input' },
      { label: '结束时间', type: 'input' },
      { label: '地球纬度', type: 'input' },
      { label: '备注', type: 'input' },
      { label: '案由', type: 'input' },
      { label: '处理图片', type: 'input' },
      { label: '备注', type: 'input' },
      { label: '数据来源_行政区划代码', type: 'input' },
      { label: '公安机关机构代码', type: 'input' },
      { label: '嫌疑人标记列表', type: 'input' }
    ],
    innerVisibleDiologs: [],
    form: {},
    position: []
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
      this.menuRightTopShow = false
      this.menuRightShow = false
    },
    clickMenuLeft () {
      this.title = '安保路线'
      this.$refs.map_map.$el.style.width = '100%'
      this.Show = false
      this.menuLeftTopShow = false
      this.menuRightShow = false
      this.menuRightTopShow = false
      this.isShow = true
    },
    clickMenuLeftTop () {
      this.$refs.map_map.$el.style.width = '100%'
      this.Show = false
      this.menuRightTopShow = false
      this.menuRightShow = false
      this.z1Show = true
      this.z2Show = true
      this.yInputShow = true
      this.menuLeftTopShow = true
    },
    clickMenuTop () {
      this.menuLeftTopShow = false
      this.menuRightTopShow = false
      this.menuRightShow = false
      this.$refs.map_map.$el.style.width = '80%'
      this.Show = true
    },
    clickMenuRightTop () {
      this.$refs.map_map.$el.style.width = '100%'
      this.menuLeftTopShow = false
      this.Show = false
      this.menuRightShow = false
      this.menuRightTopShow = true
    },
    clickMenuRight () {
      this.$refs.map_map.$el.style.width = '100%'
      this.menuLeftTopShow = false
      this.Show = false
      this.menuRightTopShow = false
      this.videoShow = false
      this.menuRightShow = true
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
    clickRightClose (e) {
      this.isClickRightShow = false
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
    },
    clickRightLeftboxMore () {
      this.title = '警情数据信息展示详情'
      this.isClickRightShow = true
    },
    clickMenuRightMap () {
      const position = [
        {
          lng: 112.98957504351412,
          lat: 28.183875822796317
        },
        {
          lng: 112.98987225531602,
          lat: 28.18424223656135
        }
      ]
      this.position = position
      this.clickMenuRightMapShow = true
    },
    clickMarkers (index) {
      console.log(index)
      if (index === 0) {
        this.videoShow = !this.videoShow
      }
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
  display: flex;
  .map_map {
    width: 100%;
    height: 100%;
    position: relative;
    .clickTopTitle {
      position: absolute;
      top: 5%;
      right: 10%;
      display: flex;
      div {
        display: flex;
        width: 2.5rem;
        background-color: #062f80;
        .img {
          width: 40%;
          display: block;
          text-align: center;
          margin: auto;
          img {
            width: 60%;
            height: 60%;
          }
        }
        .font {
          width: 60%;
          padding-top: 0.1rem;
          box-sizing: border-box;
          display: block;
          p {
            color: #fff;
            font-size: 0.14rem;
            text-align: center;
          }
          p:last-child {
            color: #00ffff;
            font-size: 0.26rem;
          }
        }
      }
    }
    .clickTopLeft {
      position: absolute;
      left: 5%;
      top: 5%;
      width: 4rem;
      .clickTopLeftBoxs {
        width: 100%;
        height: 4rem;
        overflow: auto;
        margin-top: 0.2rem;
        .clickTopLeftBox {
          margin-bottom: 0.2rem;
        }
      }
      .clickTopLeftBox {
        width: 100%;
        padding: 0.1rem;
        box-sizing: border-box;
        background-color: rgba(11, 25, 54, 0.9);
        .clickTopLeftBoxTitle {
          width: 100%;
          height: 0.3rem;
          line-height: 0.3rem;
          display: flex;
          justify-content: space-between;
          color: #26cdf4;
          h3 {
            font-size: 0.2rem;
          }
        }
        .el-form {
          width: 100%;
          display: flex;
          flex-wrap: wrap;
          .el-form-item {
            width: 50% !important;
            margin-right: 0;
            margin-bottom: 0.2rem;
            .el-form-item__label {
              color: #fff;
            }
            .el-form-item__content {
              width: 100%;
              .el-button {
                margin-left: 0.2rem;
              }
              .el-select {
                width: 100%;
                .el-input {
                  width: 100%;
                }
              }
            }
          }
        }
        video {
          width: 100%;
        }
        .peopleTable {
          width: 100%;
          display: flex;
          div {
            p {
              color: #fff;
              margin-bottom: 0.1rem;
              white-space: nowrap;
            }
          }
          img {
            width: 20%;
            margin: 0 0.2rem;
          }
        }
        .clickTopLeftBoxFoot {
          width: 100%;
          display: flex;
          justify-content: space-between;
          height: 0.4rem;
          line-height: 0.4rem;
          margin-top: 0.2rem;
          span {
            width: 0.6rem;
            text-align: center;
            color: #fff;
            background-color: #169bd5;
          }
        }
      }
    }
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
    background-color: rgba(8, 22, 51, 0.9);
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
    background-color: rgba(8, 22, 51, 0.9);
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
  .clickRightTop {
    .clickRightTopLeft {
      width: 3rem;
      height: 4rem;
      position: absolute;
      left: 5%;
      top: 5%;
      background-color: rgba(2, 16, 48, 0.9);
      padding: 0.1rem;
      box-sizing: border-box;
      .clickRightTopLeftTitle {
        width: 100%;
        height: 0.4rem;
        line-height: 0.4rem;
        display: flex;
        justify-content: space-between;
        color: #01ffff;
        div {
          width: 80%;
          display: flex;
          justify-content: space-around;
          h3 {
            font-size: 0.16rem;
          }
        }
      }
      .clickRightTopLeftBody {
        width: 100%;
        height: calc(100% - 0.4rem);
        background-color: rgba(2, 16, 48, 0.8);
        overflow: auto;
        .el-input {
          margin-bottom: 0.2rem;
          input {
            background-color: #062f80;
            border: none;
          }
        }
        p {
          width: 100%;
          height: 0.3rem;
          line-height: 0.3rem;
          color: #fff;
          display: flex;
          justify-content: space-between;
          margin-bottom: 0.1rem;
          padding: 0 0.1rem;
          box-sizing: border-box;
          img {
            height: 100%;
            cursor: pointer;
          }
        }
      }
    }
    .clickRightTopTop {
      width: 4rem;
      height: 0.6rem;
      line-height: 0.6rem;
      text-align: center;
      position: absolute;
      top: 5%;
      left: 50%;
      transform: translateX(-50%);
      display: flex;
      justify-content: space-between;
      p {
        color: #fff;
        background-color: #062f80;
        width: 40%;
        span {
          color: #00ffff;
          margin-right: 0.1rem;
          font-size: 0.16rem;
        }
      }
    }
    .clickRightTopRight {
      width: 3rem;
      position: absolute;
      right: 5%;
      top: 5%;
      .clickRightTopRightBox {
        width: 100%;
        background-color: rgba(2, 16, 48, 0.9);
        padding: 0.1rem;
        box-sizing: border-box;
        .clickRightTopRightBoxTitle {
          width: 100%;
          height: 0.4rem;
          line-height: 0.4rem;
          display: flex;
          justify-content: space-between;
          color: #02c2f2;
          h3 {
            font-size: 0.16rem;
          }
        }
        .clickRightTopRightBoxBody {
          width: 100%;
          height: 1rem;
          display: flex;
          div {
            width: 40%;
            h3 {
              font-size: 0.16rem;
              color: #0458cb;
              margin-bottom: 0.04rem;
            }
            img {
              width: 100%;
              height: calc(100% - 0.22rem);
            }
          }
          p {
            width: 20%;
            height: 100%;
            color: #fff;
            text-align: center;
            padding-top: 0.4rem;
            box-sizing: border-box;
            span {
              display: block;
              margin-bottom: 0.1rem;
            }
          }
        }
        .clickRightTopRightBoxFoot {
          margin-top: 0.1rem;
          h3 {
            color: #61a5e8;
          }
          p {
            color: #fff;
            margin: 0.1rem 0;
            span {
              display: inline-block;
            }
            span:first-child {
              width: 1rem;
              margin-right: 0.2rem;
              text-align: right;
            }
          }
        }
      }
    }
    .video {
      position: fixed;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      video {
        display: block;
      }
      p {
        height: 0.4rem;
        line-height: 0.4rem;
        background-color: #052149;
        display: flex;
        justify-content: space-between;
        text-align: center;
        padding: 0 0.2rem;
        box-sizing: border-box;
        span:first-child {
          width: 90%;
          color: #fff;
        }
        span:last-child {
          cursor: pointer;
        }
      }
    }
  }
  .clickRight {
    .clickRightTop {
      position: absolute;
      top: 5%;
      left: 50%;
      transform: translateX(-50%);
      width: 3rem;
      display: flex;
      justify-content: space-between;
    }
    .clickRightLeft {
      position: absolute;
      left: 5%;
      top: 10%;
      background-color: rgba(6, 20, 51, 0.9);
      width: 4rem;
      padding: 0.1rem;
      box-sizing: border-box;
      .clickRightLeftTitle {
        width: 100%;
        color: #00ffff;
        display: flex;
        justify-content: space-between;
        span {
          cursor: pointer;
        }
      }
      .clickRightLeftBody {
        width: 100%;
        height: 4rem;
        overflow: auto;
        .clickRightLeftbox {
          width: 100%;
          background-color: #010a1f;
          padding: 0.1rem;
          margin: 0.1rem 0;
          box-sizing: border-box;
          p {
            color: #01d9f1;
            display: flex;
            justify-content: space-between;
            margin-bottom: 0.1rem;
          }
          p:last-child {
            margin-bottom: 0;
          }
        }
      }
    }
    .video {
      width: 2rem;
      position: fixed;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      video {
        width: 100%;
        display: block;
      }
      p {
        height: 0.4rem;
        line-height: 0.4rem;
        background-color: #052149;
        display: flex;
        justify-content: space-between;
        padding: 0 0.2rem;
        box-sizing: border-box;
        span:first-child {
          width: 90%;
          color: #fff;
        }
        span:last-child {
          cursor: pointer;
        }
      }
    }
  }
}
</style>
