<template>
  <div class="regulated">
    <div class="regulated_title">
      <h3>查看设备</h3>
    </div>
    <div class="regulated_videos">
      <Elsearch :searchSettings="searchSettings" :searchBtn="searchBtn"></Elsearch>
      <div class="video">
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
          <h3 class="video_name">名称：MB350</h3>
          <h3 class="video_site">贺龙体育馆</h3>
        </div>
      </div>
      <div class="video">
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
          <h3 class="video_name">名称：MB350</h3>
          <h3 class="video_site">贺龙体育馆</h3>
        </div>
      </div>
      <div class="video">
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
          <h3 class="video_name">名称：MB350</h3>
          <h3 class="video_site">贺龙体育馆</h3>
        </div>
      </div>
    </div>
    <div class="regulated_title regulated_table">
      <h3>查看设备详情</h3>
      <div class="table">
        <Elsearch :searchSettings="tableSearchSettings" :searchBtn="tableSearchBtn" @add="add"></Elsearch>
        <Eltable :tableHead="tableHead" :tableSettings="tableSettings" :tableDatas="tableDatas" @modify="modify" @del="del" @detailed="detailed"></Eltable>
      </div>
    </div>
    <div class="regulated_foot">
      <div class="bar">
        <Bar></Bar>
      </div>
      <div class="ring"><Ring></Ring></div>
    </div>

    <Dialog :title="title" :isShow="isShow" :readOnly="readOnly" :dialogs="dialogs" @close="close"></Dialog>
  </div>
</template>
<script>
import Elsearch from '@/components/search'
import Eltable from '@/components/table'
import Dialog from '@/components/dialog'
import Bar from '@/components/business_com/regulated/bar.vue'
import Ring from '@/components/business_com/regulated/ring.vue'
export default {
  data: () => ({
    title: '',
    isShow: false,
    readOnly: true,
    searchSettings: [
      { placeholder: '请输入活动场地', type: 'select' },
      { placeholder: '请输入圈层地区', type: 'select' },
      { placeholder: '请输入具体圈层', type: 'select' },
      { placeholder: '请输入请输入活动场地，圈层地区，具体圈层', type: 'input' }
    ],
    searchBtn: [
      { name: '查询', type: 'search' }
    ],
    tableSearchSettings: [
      { placeholder: '设备名称', type: 'input' },
      { placeholder: '飞行器类型代码', type: 'input' },
      { placeholder: '姓名', type: 'input' },
      { placeholder: '公民身份证号码', type: 'input' },
      { placeholder: '请输入品牌名称，厂商名称', type: 'input' }
    ],
    tableSearchBtn: [
      { name: '查询', type: 'search' },
      { name: '新增', type: 'add' }
    ],
    tableHead: [
      { label: '飞行器类型代码', prop: 'input' },
      { label: '地球经度', prop: 'input' },
      { label: '地球纬度', prop: 'input' },
      { label: '飞行高度', prop: 'input' },
      { label: '设备名称', prop: 'input' }
    ],
    tableDatas: Array(5).fill({
      input: '123'
    }),
    tableSettings: [
      { name: '修改', type: 'modify' },
      { name: '详情', type: 'detailed' },
      { name: '删除', type: 'delete' }
    ],
    dialogs: [
      { label: '飞行器类型代码', type: 'input' },
      { label: '厂商名称', type: 'input' },
      { label: '地球经度', type: 'input' },
      { label: '物品购置日期', type: 'input' },
      { label: '地球纬度', type: 'input' },
      { label: '单位名称', type: 'input' },
      { label: '设备名称', type: 'input' },
      { label: '组织机构代码', type: 'input' },
      { label: '品牌名称', type: 'input' },
      { label: '姓名', type: 'input' },
      { label: '设备序列号', type: 'input' },
      { label: '公民身份证号码', type: 'input' },
      { label: '飞行高度', type: 'input' }
    ]
  }),
  created () { },
  methods: {
    add (row) {
      this.title = '低慢小活动新增'
      this.readOnly = false
      this.isShow = true
    },
    modify () {
      this.title = '低慢小活动修改'
      this.readOnly = false
      this.isShow = true
    },
    del (row) {
      console.log(row)
    },
    detailed (row) {
      console.log(row)
      this.readOnly = true
      this.title = '低慢小活动详情'
      this.isShow = true
    },
    close () {
      this.isShow = false
    }
  },
  components: {
    Elsearch, Eltable, Dialog, Bar, Ring
  }
}
</script>
<style lang="scss">
.regulated {
  width: 100%;
  padding: 0 0.2rem 0.3rem;
  box-sizing: border-box;
  .regulated_title {
    h3 {
      color: #fff;
      font-size: 0.2rem;
    }
  }
  .regulated_videos {
    width: 100%;
    margin-top: 0.2rem;
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    .el-form {
      margin-bottom: 0.2rem;
    }
    .video {
      width: 30%;
      background-color: #021a3f;
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
        }
        .video_name {
          width: 2rem;
          text-align: center;
          font-size: 0.18rem;
        }
      }
    }
  }
  .regulated_table {
    margin-top: 0.2rem;
    flex-wrap: wrap;
    .table {
      width: 100%;
      margin-top: 0.2rem;
      .table {
        border: none;
        padding: 0;
      }
    }
  }
  .regulated_foot {
    width: 100%;
    height: 4rem;
    display: flex;
    margin-top: 0.2rem;
    justify-content: space-between;
    .bar,
    .ring {
      width: 45%;
    }
  }
}
</style>
