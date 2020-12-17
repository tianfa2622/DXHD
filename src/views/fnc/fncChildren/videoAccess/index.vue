<template>
  <div class="videoAccess">
    <h3>查看设备</h3>
    <Elsearch :searchSettings="searchSettings[0]" :searchBtn="searchBtn"></Elsearch>
    <div class="videoAccess_videos">
      <div class="video" v-for="(i, index) in 3" :key="index">
        <div class="video_title">
          <h3>贺龙体育馆一号设备</h3>
          <div class="video_state">
            <img src="@/assets/business/u6975.png" alt="" />
            正常
          </div>
        </div>
        <div class="video_body">
          <img
            src="https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1606817112832&di=0265c14b52911cc9cefe03d0d1af4571&imgtype=0&src=http%3A%2F%2Fimg-blog.csdnimg.cn%2F2020102321020124.jpg%3Fx-oss-process%3Dimage%2Fwatermark%2Ctype_ZmFuZ3poZW5naGVpdGk%2Cshadow_10%2Ctext_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L20wXzUwNjk5ODg3%2Csize_16%2Ccolor_FFFFFF%2Ct_70%23pic_center"
            alt=""
          />
        </div>
        <div class="video_foot">
          <el-button @click="isShow = true">详情</el-button>
          <h3 class="video_site">贺龙体育馆天网一号</h3>
        </div>
      </div>
    </div>
    <Elsearch :searchSettings="searchSettings[1]" :searchBtn="searchBtn"></Elsearch>
    <Eltable :tableHead="tableHead" :tableDatas="tableDatas" :tableSettings="tableSettings" @del="del" @detailed="detailed"></Eltable>
    <Dialog :title="title" :isShow="isShow" :readOnly="readOnly" :dialogs="dialogs" @close="close"></Dialog>
  </div>
</template>
<script>
import Elsearch from '@/components/search'
import Eltable from '@/components/table'
import Dialog from '@/components/dialog'
export default {
  data: () => ({
    title: '',
    isShow: false,
    readOnly: true,
    searchSettings: [
      [
        { placeholder: '请输入活动场地', type: 'input' },
        { placeholder: '请输入圈层地区', type: 'input' },
        { placeholder: '请输入具体圈层', type: 'input' }
      ],
      [
        { placeholder: '视频设备编号', type: 'input' },
        { placeholder: '设备名称', type: 'input' },
        { placeholder: 'IP地址', type: 'input' },
        { placeholder: '请输入安装地点，设备类型', type: 'input' }
      ]
    ],
    searchBtn: [
      { name: '查询', type: 'search' }
    ],
    tableHead: [
      { label: '序号', prop: 'input' },
      { label: '视频设备编码', prop: 'input' },
      { label: '设备名称', prop: 'input' },
      { label: '厂商名称', prop: 'input' },
      { label: 'IP地址', prop: 'input' }
    ],
    tableDatas: Array(5).fill({
      input: '123'
    }),
    tableSettings: [
      { name: '详情', type: 'detailed' },
      { name: '删除', type: 'delete' }
    ],
    dialogs: [
      { label: '视频设备编码', type: 'input' },
      { label: '行政区划代码', type: 'input' },
      { label: '设备名称', type: 'input' },
      { label: '地址名称', type: 'input' },
      { label: '厂商名称', type: 'input' },
      { label: '管辖单位-组织机构代码', type: 'input' },
      { label: 'IP地址', type: 'input' },
      { label: '设备类型', type: 'input' },
      { label: 'IPV6地址', type: 'input' },
      { label: '采集数据类型', type: 'input' },
      { label: '地球经度', type: 'input' },
      { label: '监视方向', type: 'input' },
      { label: '地球纬度', type: 'input' },
      { label: '监视区域说明', type: 'input' },
      { label: '安装地点', type: 'input' },
      { label: '摄像机位置类型', type: 'input' },
      { label: '摄像机用途', type: 'input' }
    ]
  }),
  created () { },
  methods: {
    del (row) {
      console.log(row)
    },
    detailed () {
      this.title = '视屏功能接入详情'
      this.readOnly = true
      this.isShow = true
    },
    close () {
      this.isShow = false
    }
  },
  components: { Elsearch, Eltable, Dialog }
}
</script>
<style lang="scss">
.videoAccess {
  width: 100%;
  padding-right: 0.2rem;
  box-sizing: border-box;
  h3 {
    color: #fff;
    font-size: 0.16rem;
    margin-bottom: 0.2rem;
  }
  .videoAccess_videos {
    width: 100%;
    margin-top: 0.2rem;
    margin-bottom: 0.2rem;
    display: flex;
    justify-content: space-between;
    .video {
      width: 30%;
      background-color: #00031d;
      border: 0.02rem solid #021a3f;
      border-radius: 0.2rem;
      padding: 0.2rem;
      box-sizing: border-box;
      .video_title {
        width: 100%;
        display: flex;
        margin-bottom: 0.2rem;
        justify-content: space-between;
        h3 {
          color: #fff;
          width: 2rem;
          text-align: center;
          line-height: 0.4rem;
          border-bottom: 0.02rem solid #797979;
          margin-bottom: 0;
        }
        .video_state {
          line-height: 0.42rem;
          color: rgb(2, 129, 2);
        }
      }
      .video_body {
        width: 100%;
        height: 2rem;
        img {
          width: 100%;
          height: 100%;
        }
      }
      .video_foot {
        margin-top: 0.2rem;
        display: flex;
        justify-content: space-between;
        padding-right: 0.2rem;
        box-sizing: border-box;
        h3 {
          color: #fff;
          height: 0.3rem;
          line-height: 0.3rem;
          margin-bottom: 0;
        }
        .el-button {
          background-color: #021a3f;
          border: none;
          height: 0.3rem;
          span {
            color: #fff;
          }
        }
      }
    }
  }
  .table {
    margin-top: 0.2rem;
  }
}
</style>
