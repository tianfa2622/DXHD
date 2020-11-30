<template>
  <div class="policDisplay">
    <h3 class="newsTitle">警车基本数据信息展示</h3>
    <div class="polic_news">
      <div class="polic_news_title">
        <el-input class="input" v-model="input" placeholder="巡逻车标识"></el-input>
        <el-input class="input" v-model="input" placeholder="机动车车牌号码"></el-input>
        <el-input class="input" v-model="input" placeholder="请输入公安机关机构代码，公安机关名称"></el-input>
        <el-button class="btn">查询</el-button>
      </div>
      <div class="polic_news_content">
        <table>
          <tr class="tr_title">
            <td>巡逻车标识</td>
            <td>机动车车牌号码</td>
            <td>行政区划代码</td>
            <td>公安机关机构代码</td>
            <td>公安机关名称</td>
            <td>机动车车辆类型代码</td>
            <td>操作</td>
          </tr>
          <tr v-for="(item, index) in contentCar" ref="li" :key="index">
            <td>{{ item.carId }}</td>
            <td>{{ item.carNum }}</td>
            <td>{{ item.regionalizationId }}</td>
            <td>{{ item.policeId }}</td>
            <td>{{ item.policeName }}</td>
            <td>{{ item.typeCar }}</td>
            <td>
              <span class="operates" @click="addCar"> 新增 </span>
              <span class="operates" @click="modifyCar"> 修改 </span>
              <span class="operates" @click="delCar"> 删除 </span>
              <span class="operates" @click="lookCar"> 详情 </span>
            </td>
          </tr>
        </table>
      </div>
    </div>
    <div class="policCar" v-show="isLookCar">
      <div class="policCar_title">
        <h3 ref="policCarTitle">警车基本数据信息详情</h3>
        <button @click="escCar">X</button>
      </div>
      <div class="policCar_content">
        <ul>
          <li>
            <span>巡逻车标识</span>
            <el-input v-model="input" :readonly="!isModify" placeholder="巡逻车标识"></el-input>
          </li>
          <li>
            <span>公安机关机构代码</span>
            <el-input v-model="input" :readonly="!isModify" placeholder="公安机关机构代码"></el-input>
          </li>
          <li>
            <span>机动车车牌号码</span>
            <el-input v-model="input" :readonly="!isModify" placeholder="机动车车牌号码"></el-input>
          </li>
          <li>
            <span>公安机关名称</span>
            <el-input v-model="input" :readonly="!isModify" placeholder="公安机关名称"></el-input>
          </li>
          <li>
            <span>行政区划代码</span>
            <el-input v-model="input" :readonly="!isModify" placeholder="行政区划代码"></el-input>
          </li>
          <li>
            <span>机动车车辆类型代码</span>
            <el-input v-model="input" :readonly="!isModify" placeholder="机动车车辆类型代码"></el-input>
          </li>
        </ul>
      </div>
    </div>
    <h3 class="newsTitle">警情数据信息展示</h3>
    <div class="polic_news last_news" :class="{ isNews: !isLookNews }">
      <div class="polic_news_title">
        <el-input class="input" v-model="input" placeholder="警车标识"></el-input>
        <el-input class="input" v-model="input" placeholder="警车名称"></el-input>
        <el-input class="input" v-model="input" placeholder="请输入警情级别，姓名，联系电话，处理人"></el-input>
        <el-button class="btn">查询</el-button>
      </div>
      <div class="polic_news_content">
        <table>
          <tr class="tr_title">
            <td>警车标识</td>
            <td>警车名称</td>
            <td>警情数据来源</td>
            <td>警情级别</td>
            <td>案件发生开始时间</td>
            <td>治安警情代码</td>
            <td>操作</td>
          </tr>
          <tr v-for="(item, index) in content" ref="li1" :key="index">
            <td>{{ item.carId }}</td>
            <td>{{ item.carNum }}</td>
            <td>{{ item.dataSource }}</td>
            <td>{{ item.dataLevel }}</td>
            <td>{{ item.time }}</td>
            <td>{{ item.policeId }}</td>
            <td>
              <span class="operates" @click="addNews"> 新增 </span>
              <span class="operates" @click="modifyNews"> 修改 </span>
              <span class="operates" @click="delNews"> 删除 </span>
              <span class="operates" @click="lookNews"> 详情 </span>
            </td>
          </tr>
        </table>
      </div>
    </div>
    <div class="police_foot">
      <div class="foot_left" :class="{ isNew: !isLookNews }">
        <h3 class="exhibition" v-show="isLookMap">警 情 警 车 展 示</h3>
        <div class="bdMap" v-show="isLookMap">
          <BdMap :center="center" :zoom="zoom"></BdMap>
          <button class="escMap" @click="escMap">X</button>
        </div>
      </div>
      <div class="foot_right" v-show="isLookNews">
        <div class="policDatas">
          <div class="policDatas_title">
            <h3 ref="policDatasTitle">警情数据信息展示详情</h3>
            <button @click="escPolicDatas">X</button>
          </div>
          <div class="policDatas_content">
            <ul>
              <li>
                <span>警情标识</span>
                <el-input v-model="input" :readonly="!isModify" placeholder="警情标识"></el-input>
              </li>
              <li>
                <span>姓名</span>
                <el-input v-model="input" :readonly="!isModify" placeholder="姓名"></el-input>
              </li>
              <li>
                <span>警情视频信息</span>
                <el-input v-model="input" :readonly="!isModify" placeholder="警情视频信息"></el-input>
              </li>
              <li>
                <span>警情名称</span>
                <el-input v-model="input" :readonly="!isModify" placeholder="警情名称"></el-input>
              </li>
              <li>
                <span>联系电话</span>
                <el-input v-model="input" :readonly="!isModify" placeholder="联系电话"></el-input>
              </li>
              <li>
                <span>视屏设备编码</span>
                <el-input v-model="input" :readonly="!isModify" placeholder="视屏设备编码"></el-input>
              </li>
              <li>
                <span>警情数据来源</span>
                <el-input v-model="input" :readonly="!isModify" placeholder="警情数据来源"></el-input>
              </li>
              <li>
                <span>报警时间</span>
                <el-input v-model="input" :readonly="!isModify" placeholder="报警时间"></el-input>
              </li>
              <li>
                <span>视频文件格式代码</span>
                <el-input v-model="input" :readonly="!isModify" placeholder="视频文件格式代码"></el-input>
              </li>
              <li>
                <span>警情级别</span>
                <el-input v-model="input" :readonly="!isModify" placeholder="警情级别"></el-input>
              </li>
              <li>
                <span>处理人</span>
                <el-input v-model="input" :readonly="!isModify" placeholder="处理人"></el-input>
              </li>
              <li>
                <span>开始时间</span>
                <el-input v-model="input" :readonly="!isModify" placeholder="开始时间"></el-input>
              </li>
              <li>
                <span>案事件发生开始时间</span>
                <el-input v-model="input" :readonly="!isModify" placeholder="案事件发生开始时间"></el-input>
              </li>
              <li>
                <span>姓名</span>
                <el-input v-model="input" :readonly="!isModify" placeholder="姓名"></el-input>
              </li>
              <li>
                <span>结束时间</span>
                <el-input v-model="input" :readonly="!isModify" placeholder="结束时间"></el-input>
              </li>
              <li>
                <span>治安警情代码</span>
                <el-input v-model="input" :readonly="!isModify" placeholder="治安警情代码"></el-input>
              </li>
              <li>
                <span>接警时间</span>
                <el-input v-model="input" :readonly="!isModify" placeholder="接警时间"></el-input>
              </li>
              <li>
                <span>警情音频信息</span>
                <el-input v-model="input" :readonly="!isModify" placeholder="警情音频信息"></el-input>
              </li>
              <li>
                <span>涉案场所类别代码</span>
                <el-input v-model="input" :readonly="!isModify" placeholder="涉案场所类别代码"></el-input>
              </li>
              <li>
                <span>到达时间</span>
                <el-input v-model="input" :readonly="!isModify" placeholder="到达时间"></el-input>
              </li>
              <li>
                <span>音频设备编码</span>
                <el-input v-model="input" :readonly="!isModify" placeholder="音频设备编码"></el-input>
              </li>
              <li>
                <span>涉案场所</span>
                <el-input v-model="input" :readonly="!isModify" placeholder="涉案场所"></el-input>
              </li>
              <li>
                <span>音频设备编码</span>
                <el-input v-model="input" :readonly="!isModify" placeholder="音频设备编码"></el-input>
              </li>
              <li>
                <span>处理</span>
                <el-input v-model="input" :readonly="!isModify" placeholder="处理"></el-input>
              </li>
              <li>
                <span>音频编码格式代码</span>
                <el-input v-model="input" :readonly="!isModify" placeholder="音频编码格式代码"></el-input>
              </li>
              <li>
                <span>地址名称</span>
                <el-input v-model="input" :readonly="!isModify" placeholder="地址名称"></el-input>
              </li>
              <li>
                <span>处理时间</span>
                <el-input v-model="input" :readonly="!isModify" placeholder="处理时间"></el-input>
              </li>
              <li>
                <span>开始时间</span>
                <el-input v-model="input" :readonly="!isModify" placeholder="开始时间"></el-input>
              </li>
              <li>
                <span>地区经度</span>
                <el-input v-model="input" :readonly="!isModify" placeholder="地区经度"></el-input>
              </li>
              <li>
                <span>警情处理结果代码</span>
                <el-input v-model="input" :readonly="!isModify" placeholder="警情处理结果代码"></el-input>
              </li>
              <li>
                <span>处理时间</span>
                <el-input v-model="input" :readonly="!isModify" placeholder="处理时间"></el-input>
              </li>
              <li>
                <span>结束时间</span>
                <el-input v-model="input" :readonly="!isModify" placeholder="结束时间"></el-input>
              </li>
              <li>
                <span>地球纬度</span>
                <el-input v-model="input" :readonly="!isModify" placeholder="地球纬度"></el-input>
              </li>
              <li>
                <span>备注</span>
                <el-input v-model="input" :readonly="!isModify" placeholder="备注"></el-input>
              </li>
              <li>
                <span>案由</span>
                <el-input v-model="input" :readonly="!isModify" placeholder="案由"></el-input>
              </li>
              <li>
                <span>处理图片</span>
                <el-input v-model="input" :readonly="!isModify" placeholder="处理图片"></el-input>
              </li>
              <li>
                <span>备注</span>
                <el-input v-model="input" :readonly="!isModify" placeholder="备注"></el-input>
              </li>
              <li>
                <span>数据来源_行政区划代码</span>
                <el-input v-model="input" :readonly="!isModify" placeholder="数据来源_行政区划代码"></el-input>
              </li>
              <li>
                <span>公安机关机构代码</span>
                <el-input v-model="input" :readonly="!isModify" placeholder="公安机关机构代码"></el-input>
              </li>
              <li>
                <span>嫌疑人标记列表</span>
                <el-input v-model="input" :readonly="!isModify" placeholder="嫌疑人标记列表"></el-input>
              </li>
              <li>
                <span>报警人</span>
                <el-input v-model="input" :readonly="!isModify" placeholder="报警人"></el-input>
              </li>
              <li>
                <span>警情视频标记列表</span>
                <el-input v-model="input" :readonly="!isModify" placeholder="警情视频标记列表"></el-input>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
    <ul class="detailed_foot">
      <li class="foot_left"></li>
      <li class="foot_right">
        <el-button>首页</el-button>
        <el-button>&lt;</el-button>
        <el-button>&gt;</el-button>
        <el-button>尾页</el-button>
      </li>
    </ul>
  </div>
</template>
<script>
import BdMap from '@/components/management_com/map'
export default {
  name: 'bdMap',
  data: () => ({
    input: '',
    center: '长沙',
    zoom: 12,
    isLookCar: false,
    isModify: false,
    isLookMap: true,
    isLookNews: false,
    content: [
      {
        carId: '01',
        carNum: '洛杉矶 copcar',
        dataSource: '事件登记',
        dataLevel: '高',
        time: '2020-09-09',
        policeId: '良好'
      },
      {
        carId: '01',
        carNum: '洛杉矶 copcar',
        dataSource: '事件登记',
        dataLevel: '高',
        time: '2020-09-09',
        policeId: '良好'
      },
      {
        carId: '01',
        carNum: '洛杉矶 copcar',
        dataSource: '事件登记',
        dataLevel: '高',
        time: '2020-09-09',
        policeId: '良好'
      }
    ],
    contentCar: [
      {
        carId: '01',
        carNum: '湘A857',
        regionalizationId: '长沙',
        policeId: '湘A芙蓉区',
        policeName: '湖南省省公安厅',
        typeCar: '小轿车'
      },
      {
        carId: '02',
        carNum: '湘A857',
        regionalizationId: '长沙',
        policeId: '湘A芙蓉区',
        policeName: '湖南省省公安厅',
        typeCar: '小轿车'
      },
      {
        carId: '03',
        carNum: '湘A857',
        regionalizationId: '长沙',
        policeId: '湘A芙蓉区',
        policeName: '湖南省省公安厅',
        typeCar: '小轿车'
      }
    ]
  }),
  created () { },
  components: { BdMap },
  methods: {
    escCar () {
      this.isLookCar = false
    },
    lookCar () {
      this.isLookCar = true
      this.isModify = false
      this.$refs.policCarTitle.innerHTML = '警车基本数据信息详情'
    },
    delCar (index) {
      this.contentCar.splice(this.$refs.li[index], 1)
    },
    delNews (index) {
      this.content.splice(this.$refs.li1[index], 1)
    },
    modifyCar () {
      this.isLookCar = true
      this.isModify = true
      this.$refs.policCarTitle.innerHTML = '警车基本数据信息修改'
    },
    modifyNews () {
      this.isLookNews = true
      this.isModify = true
      this.$refs.policDatasTitle.innerHTML = '警情数据信息修改'
    },
    addCar () {
      this.isLookCar = true
      this.isModify = true
      this.$refs.policCarTitle.innerHTML = '警车基本数据信息新增'
    },
    addNews () {
      this.isLookNews = true
      this.isModify = true
      this.$refs.policDatasTitle.innerHTML = '警情数据信息新增'
    },
    escMap () {
      this.isLookMap = false
    },
    lookNews () {
      this.isLookNews = true
      this.isModify = false
      this.$refs.policDatasTitle.innerHTML = '警情数据信息展示详情'
    },
    escPolicDatas () {
      this.isLookNews = false
    }
  }
}
</script>
<style lang="scss">
.policDisplay {
  padding-right: 0.3rem;
  box-sizing: border-box;
  .newsTitle {
    color: #fff;
    padding-left: 0.3rem;
    box-sizing: border-box;
    font-family: 'Arial Negreta', 'Arial Normal', 'Arial';
    font-weight: 700;
  }
  .polic_news {
    border: 1px solid rgb(62, 85, 104);
    padding: 0.1rem 0.2rem 0.2rem;
    box-sizing: border-box;
    margin: 0.1rem 0;
    .polic_news_title {
      display: flex;
      .input {
        width: 10%;
        margin-right: 0.2rem;
        input {
          background-color: #00193e;
          border: none;
          color: #fff;
          text-align: center;
        }
        input::placeholder {
          color: #fff;
          text-align: center;
        }
      }
      .btn {
        background-color: rgb(62, 85, 104);
        text-align: center;
        border: none;
        color: #fff;
      }
    }
    .polic_news_title .input:last-of-type {
      width: 20%;
    }
    .polic_news_content {
      width: 100%;
      margin-top: 0.2rem;
      table {
        width: 100%;
        text-align: center;
        tr,
        td {
          color: #fff;
        }
        td:last-child{
        width: 20%;
      }
        .tr_title {
          background-color: #021030;
        }
        tr {
          height: 0.8rem;
          background-color: rgb(1, 25, 63);
          td {
            .operates {
              cursor: pointer;
              margin: 0 0.2rem;
              color: #6aeff4;
            }
          }
        }
      }
    }
  }
  .last_news {
    margin-bottom: 0;
    border-bottom: none;
  }
  .isNews {
    border: 1px solid rgb(62, 85, 104) !important;
  }
  .isNew {
    border-top: none !important;
  }
  .policCar {
    position: fixed;
    top: 20%;
    right: 30%;
    width: 40%;
    .policCar_title {
      width: 100%;
      background-color: rgb(19, 42, 77);
      color: #6aeff4;
      text-align: center;
      position: relative;
      height: 0.22rem;
      line-height: 0.22rem;
      button {
        background-color: rgb(54, 77, 98);
        border: none;
        position: absolute;
        right: 0.03rem;
        top: 0.03rem;
        width: 0.12rem;
        height: 0.12rem;
        text-align: center;
        line-height: 0.12rem;
        font-family: 'Dotum';
      }
    }
    .policCar_content {
      background-color: rgba(2, 18, 51, 0.819607843137255);
      ul {
        width: 100%;
        display: flex;
        flex-wrap: wrap;
        justify-content: space-between;
        li {
          display: flex;
          list-style: none;
          color: #fff;
          width: 50%;
          margin: 0.1rem 0;
          span {
            width: 40%;
            font-size: 0.2rem;
            white-space: nowrap;
            text-align: center;
            line-height: 0.4rem;
          }
          .el-input {
            width: 60%;
            input {
              background-color: rgb(5, 33, 73);
              border: none;
              text-align: center;
              color: #fff;
            }
            input::placeholder {
              text-align: center;
              color: #fff;
            }
          }
        }
      }
    }
  }
  .police_foot {
    display: flex;
    height: 3rem;
    .foot_left {
      border-top: 1px solid rgb(61, 64, 77);
      width: 40%;
      display: flex;
      padding-top: 0.2rem;
      box-sizing: border-box;
      height: 100%;
      .bdMap {
        width: 90%;
        height: 100%;
        border: 4px solid rgb(121, 121, 121);
        border-radius: 0.5rem;
        overflow: hidden;
        padding: 0.1rem;
        box-sizing: border-box;
        position: relative;
        .escMap {
          width: 0.2rem;
          height: 0.2rem;
          position: absolute;
          right: 0.2rem;
          top: 0.2rem;
          text-align: center;
          line-height: 0.2rem;
          border: none;
          background-color: rgba(0, 0, 0, 0);
        }
      }
      .exhibition {
        color: #fff;
        writing-mode: horizontal-tb;
        writing-mode: vertical-rl;
        height: 2rem;
        text-align: center;
        font-family: 'Arial Normal', 'Arial';
        border-right: 1px solid rgb(121, 121, 121);
        vertical-align: top;
        margin: 0.4rem 0.2rem 0 0;
      }
    }
    .foot_right {
      width: 60%;
      height: 3rem;
      padding: 0.2rem;
      box-sizing: border-box;
      border: 1px solid rgb(121, 121, 121);
      border-top: none;
      background-color: rgb(3, 9, 35);
      .policDatas {
        width: 100%;
        height: 100%;
        overflow: auto;
        .policDatas_title {
          width: 100%;
          background-color: rgb(19, 42, 77);
          color: #6aeff4;
          text-align: center;
          position: relative;
          height: 0.22rem;
          line-height: 0.22rem;
          button {
            background-color: rgb(54, 77, 98);
            border: none;
            position: absolute;
            right: 0.03rem;
            top: 0.03rem;
            width: 0.12rem;
            height: 0.12rem;
            text-align: center;
            line-height: 0.12rem;
            font-family: 'Dotum';
          }
        }
        .policDatas_content {
          background-color: rgba(2, 18, 51, 0.819607843137255);
          ul {
            width: 100%;
            display: flex;
            flex-wrap: wrap;
            justify-content: space-between;
            li {
              display: flex;
              list-style: none;
              color: #fff;
              width: 30%;
              margin: 0.1rem 0;
              span {
                width: 40%;
                white-space: nowrap;
                text-align: right;
                line-height: 0.4rem;
                margin-right: 0.1rem;
              }
              .el-input {
                width: 60%;
                input {
                  background-color: rgb(5, 33, 73);
                  border: none;
                  text-align: center;
                  color: #fff;
                }
                input::placeholder {
                  text-align: center;
                  color: #fff;
                }
              }
            }
          }
        }
      }
    }
  }
  .detailed_foot {
    width: 100%;
    margin-top: 0.2rem;
    display: flex;
    justify-content: space-between;
    padding-bottom: 0.2rem;
    .foot_right {
      .el-button {
        background-color: rgb(214, 219, 223);
        border: none;
      }
    }
  }
}
</style>
