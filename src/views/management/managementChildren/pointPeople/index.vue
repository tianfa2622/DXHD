<template>
  <div class="pointPeople">
    <div class="pointPeople_head">
      <el-input class="input" v-model="input" placeholder="公民身份证号码"></el-input>
      <el-input class="input" v-model="input" placeholder="姓名"></el-input>
      <el-button class="btn" type="primary">查询</el-button>
    </div>
    <div class="pointPeople_body">
      <table>
        <tr class="tr_title">
          <td>常用证件号码</td>
          <td>证件号码</td>
          <td>公民身份证号码</td>
          <td>姓名</td>
          <td>性别代码</td>
          <td>民航出行</td>
          <td>操作</td>
        </tr>
        <tr v-for="(item, index) in content" ref="li" :key="index">
          <td>{{ item.id }}</td>
          <td>{{ item.route }}</td>
          <td>{{ item.routeId }}</td>
          <td>{{ item.policeId }}</td>
          <td>{{ item.policeName }}</td>
          <td>{{ item.startTime }}</td>
          <td>
            <span class="operates" @click="add"> 新增 </span>
            <span class="operates" @click="modify"> 修改 </span>
            <span class="operates" @click="del"> 删除 </span>
            <span class="operates" @click="look"> 详情 </span>
          </td>
        </tr>
      </table>
      <div class="b">
        <div class="bl">
          <Ring></Ring>
        </div>
        <div class="br">
          <div class="foot_right" v-show="isLookNews">
            <div class="policDatas">
              <div class="policDatas_title">
                <h3 ref="policDatasTitle">重点人员信息新增</h3>
                <button @click="escPolicDatas">X</button>
              </div>
              <div class="policDatas_content">
                <ul>
                  <li>
                    <span>常用证件代码</span>
                    <el-input v-model="input" :readonly="!isModify" placeholder="常用证件代码"></el-input>
                  </li>
                  <li>
                    <span>日期</span>
                    <el-input v-model="input" :readonly="!isModify" placeholder="日期"></el-input>
                  </li>
                  <li>
                    <span>检查站位置</span>
                    <el-input v-model="input" :readonly="!isModify" placeholder="检查站位置"></el-input>
                  </li>
                  <li>
                    <span>证件号码</span>
                    <el-input v-model="input" :readonly="!isModify" placeholder="证件号码"></el-input>
                  </li>
                  <li>
                    <span>时间</span>
                    <el-input v-model="input" :readonly="!isModify" placeholder="时间"></el-input>
                  </li>
                  <li>
                    <span>查验时间</span>
                    <el-input v-model="input" :readonly="!isModify" placeholder="查验时间"></el-input>
                  </li>
                  <li>
                    <span>公民身份证号码</span>
                    <el-input v-model="input" :readonly="!isModify" placeholder="公民身份证号码"></el-input>
                  </li>
                  <li>
                    <span>车站</span>
                    <el-input v-model="input" :readonly="!isModify" placeholder="车站"></el-input>
                  </li>
                  <li>
                    <span>出入类型</span>
                    <el-input v-model="input" :readonly="!isModify" placeholder="出入类型"></el-input>
                  </li>
                  <li>
                    <span>姓名</span>
                    <el-input v-model="input" :readonly="!isModify" placeholder="姓名"></el-input>
                  </li>
                  <li>
                    <span>公路客运</span>
                    <el-input v-model="input" :readonly="!isModify" placeholder="公路客运"></el-input>
                  </li>
                  <li>
                    <span>旅馆住宿</span>
                    <el-input v-model="input" :readonly="!isModify" placeholder="旅馆住宿"></el-input>
                  </li>
                  <li>
                    <span>性别代码</span>
                    <el-input v-model="input" :readonly="!isModify" placeholder="性别代码"></el-input>
                  </li>
                  <li>
                    <span>客运站</span>
                    <el-input v-model="input" :readonly="!isModify" placeholder="客运站"></el-input>
                  </li>
                  <li>
                    <span>旅馆编号</span>
                    <el-input v-model="input" :readonly="!isModify" placeholder="旅馆编号"></el-input>
                  </li>
                  <li>
                    <span>国籍代码</span>
                    <el-input v-model="input" :readonly="!isModify" placeholder="国籍代码"></el-input>
                  </li>
                  <li>
                    <span>客运编号</span>
                    <el-input v-model="input" :readonly="!isModify" placeholder="客运编号"></el-input>
                  </li>
                  <li>
                    <span>旅馆名称</span>
                    <el-input v-model="input" :readonly="!isModify" placeholder="旅馆名称"></el-input>
                  </li>
                  <li>
                    <span>民族代码</span>
                    <el-input v-model="input" :readonly="!isModify" placeholder="民族代码"></el-input>
                  </li>
                  <li>
                    <span>座位号</span>
                    <el-input v-model="input" :readonly="!isModify" placeholder="座位号"></el-input>
                  </li>
                  <li>
                    <span>入住房号</span>
                    <el-input v-model="input" :readonly="!isModify" placeholder="入住房号"></el-input>
                  </li>
                  <li>
                    <span>民航出行</span>
                    <el-input v-model="input" :readonly="!isModify" placeholder="民航出行"></el-input>
                  </li>
                  <li>
                    <span>出发</span>
                    <el-input v-model="input" :readonly="!isModify" placeholder="出发"></el-input>
                  </li>
                  <li>
                    <span>入住时间</span>
                    <el-input v-model="input" :readonly="!isModify" placeholder="入住时间"></el-input>
                  </li>
                  <li>
                    <span>航班号</span>
                    <el-input v-model="input" :readonly="!isModify" placeholder="航班号"></el-input>
                  </li>
                  <li>
                    <span>日期</span>
                    <el-input v-model="input" :readonly="!isModify" placeholder="日期"></el-input>
                  </li>
                  <li>
                    <span>退房时间</span>
                    <el-input v-model="input" :readonly="!isModify" placeholder="退房时间"></el-input>
                  </li>
                  <li>
                    <span>座位号</span>
                    <el-input v-model="input" :readonly="!isModify" placeholder="座位号"></el-input>
                  </li>
                  <li>
                    <span>时间</span>
                    <el-input v-model="input" :readonly="!isModify" placeholder="时间"></el-input>
                  </li>
                  <li>
                    <span>网吧上网</span>
                    <el-input v-model="input" :readonly="!isModify" placeholder="网吧上网"></el-input>
                  </li>
                  <li>
                    <span>出发</span>
                    <el-input v-model="input" :readonly="!isModify" placeholder="出发"></el-input>
                  </li>
                  <li>
                    <span>客运站</span>
                    <el-input v-model="input" :readonly="!isModify" placeholder="客运站"></el-input>
                  </li>
                  <li>
                    <span>营业场所代码</span>
                    <el-input v-model="input" :readonly="!isModify" placeholder="营业场所代码"></el-input>
                  </li>
                  <li>
                    <span>日期</span>
                    <el-input v-model="input" :readonly="!isModify" placeholder="日期"></el-input>
                  </li>
                  <li>
                    <span>到达</span>
                    <el-input v-model="input" :readonly="!isModify" placeholder="到达"></el-input>
                  </li>
                  <li>
                    <span>营业场所</span>
                    <el-input v-model="input" :readonly="!isModify" placeholder="营业场所"></el-input>
                  </li>
                  <li>
                    <span>时间</span>
                    <el-input v-model="input" :readonly="!isModify" placeholder="时间"></el-input>
                  </li>
                  <li>
                    <span>日期</span>
                    <el-input v-model="input" :readonly="!isModify" placeholder="日期"></el-input>
                  </li>
                  <li>
                    <span>单位名称</span>
                    <el-input v-model="input" :readonly="!isModify" placeholder="单位名称"></el-input>
                  </li>
                  <li>
                    <span>机场代码</span>
                    <el-input v-model="input" :readonly="!isModify" placeholder="机场代码"></el-input>
                  </li>
                  <li>
                    <span>时间</span>
                    <el-input v-model="input" :readonly="!isModify" placeholder="时间"></el-input>
                  </li>
                  <li>
                    <span>地址名称</span>
                    <el-input v-model="input" :readonly="!isModify" placeholder="地址名称"></el-input>
                  </li>
                  <li>
                    <span>到达</span>
                    <el-input v-model="input" :readonly="!isModify" placeholder="到达"></el-input>
                  </li>
                  <li>
                    <span>客运站</span>
                    <el-input v-model="input" :readonly="!isModify" placeholder="客运站"></el-input>
                  </li>
                  <li>
                    <span>开始时间</span>
                    <el-input v-model="input" :readonly="!isModify" placeholder="开始时间"></el-input>
                  </li>
                  <li>
                    <span>日期</span>
                    <el-input v-model="input" :readonly="!isModify" placeholder="日期"></el-input>
                  </li>
                  <li>
                    <span>轮渡出行</span>
                    <el-input v-model="input" :readonly="!isModify" placeholder="轮渡出行"></el-input>
                  </li>
                  <li>
                    <span>结束时间</span>
                    <el-input v-model="input" :readonly="!isModify" placeholder="结束时间"></el-input>
                  </li>
                  <li>
                    <span>时间</span>
                    <el-input v-model="input" :readonly="!isModify" placeholder="时间"></el-input>
                  </li>
                  <li>
                    <span>轮渡号</span>
                    <el-input v-model="input" :readonly="!isModify" placeholder="轮渡号"></el-input>
                  </li>
                  <li>
                    <span>人像识别</span>
                    <el-input v-model="input" :readonly="!isModify" placeholder="人像识别"></el-input>
                  </li>
                  <li>
                    <span>机场代码</span>
                    <el-input v-model="input" :readonly="!isModify" placeholder="机场代码"></el-input>
                  </li>
                  <li>
                    <span>出发</span>
                    <el-input v-model="input" :readonly="!isModify" placeholder="出发"></el-input>
                  </li>
                  <li>
                    <span>设备类型</span>
                    <el-input v-model="input" :readonly="!isModify" placeholder="设备类型"></el-input>
                  </li>
                  <li>
                    <span>铁路出行</span>
                    <el-input v-model="input" :readonly="!isModify" placeholder="铁路出行"></el-input>
                  </li>
                  <li>
                    <span>日期</span>
                    <el-input v-model="input" :readonly="!isModify" placeholder="日期"></el-input>
                  </li>
                  <li>
                    <span>视屏设备编码</span>
                    <el-input v-model="input" :readonly="!isModify" placeholder="视屏设备编码"></el-input>
                  </li>
                  <li>
                    <span>车次</span>
                    <el-input v-model="input" :readonly="!isModify" placeholder="车次"></el-input>
                  </li>
                  <li>
                    <span>时间</span>
                    <el-input v-model="input" :readonly="!isModify" placeholder="时间"></el-input>
                  </li>
                  <li>
                    <span>设备名称</span>
                    <el-input v-model="input" :readonly="!isModify" placeholder="设备名称"></el-input>
                  </li>
                  <li>
                    <span>车厢号</span>
                    <el-input v-model="input" :readonly="!isModify" placeholder="车厢号"></el-input>
                  </li>
                  <li>
                    <span>码头</span>
                    <el-input v-model="input" :readonly="!isModify" placeholder="码头"></el-input>
                  </li>
                  <li>
                    <span>监视方向</span>
                    <el-input v-model="input" :readonly="!isModify" placeholder="监视方向"></el-input>
                  </li>
                  <li>
                    <span>座位号</span>
                    <el-input v-model="input" :readonly="!isModify" placeholder="座位号"></el-input>
                  </li>
                  <li>
                    <span>到达</span>
                    <el-input v-model="input" :readonly="!isModify" placeholder="到达"></el-input>
                  </li>
                  <li>
                    <span>设备地址</span>
                    <el-input v-model="input" :readonly="!isModify" placeholder="设备地址"></el-input>
                  </li>
                  <li>
                    <span>出发</span>
                    <el-input v-model="input" :readonly="!isModify" placeholder="出发"></el-input>
                  </li>
                  <li>
                    <span>日期</span>
                    <el-input v-model="input" :readonly="!isModify" placeholder="日期"></el-input>
                  </li>
                  <li>
                    <span>抓拍时间</span>
                    <el-input v-model="input" :readonly="!isModify" placeholder="抓拍时间"></el-input>
                  </li>
                  <li>
                    <span>日期</span>
                    <el-input v-model="input" :readonly="!isModify" placeholder="日期"></el-input>
                  </li>
                  <li>
                    <span>时间</span>
                    <el-input v-model="input" :readonly="!isModify" placeholder="时间"></el-input>
                  </li>
                  <li>
                    <span>图片URL</span>
                    <el-input v-model="input" :readonly="!isModify" placeholder="图片URL"></el-input>
                  </li>
                  <li>
                    <span>时间</span>
                    <el-input v-model="input" :readonly="!isModify" placeholder="时间"></el-input>
                  </li>
                  <li>
                    <span>码头</span>
                    <el-input v-model="input" :readonly="!isModify" placeholder="码头"></el-input>
                  </li>
                  <li>
                    <span>地球经度</span>
                    <el-input v-model="input" :readonly="!isModify" placeholder="地球经度"></el-input>
                  </li>
                  <li>
                    <span>车站</span>
                    <el-input v-model="input" :readonly="!isModify" placeholder="车站"></el-input>
                  </li>
                  <li>
                    <span>公安检查站</span>
                    <el-input v-model="input" :readonly="!isModify" placeholder="公安检查站"></el-input>
                  </li>
                  <li>
                    <span>地球纬度</span>
                    <el-input v-model="input" :readonly="!isModify" placeholder="地球纬度"></el-input>
                  </li>
                  <li>
                    <span>到达</span>
                    <el-input v-model="input" :readonly="!isModify" placeholder="到达"></el-input>
                  </li>
                  <li>
                    <span>检查站编码</span>
                    <el-input v-model="input" :readonly="!isModify" placeholder="检查站编码"></el-input>
                  </li>
                  <li>
                    <span>采集时间</span>
                    <el-input v-model="input" :readonly="!isModify" placeholder="采集时间"></el-input>
                  </li>
                  <li>
                    <span>动态信息类型</span>
                    <el-input v-model="input" :readonly="!isModify" placeholder="动态信息类型"></el-input>
                  </li>
                  <li>
                    <span>信息入库时间</span>
                    <el-input v-model="input" :readonly="!isModify" placeholder="信息入库时间"></el-input>
                  </li>
                </ul>
                <div class="btn">
                  <el-button type="primary">新增</el-button>
                  <el-button type="primary">取消</el-button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import Ring from '@/components/management_com/pointPeople'
export default {
  data: () => ({
    input: '',
    content: [{
      id: '4301234500',
      route: '万家丽-贺龙体育馆',
      routeId: '345667',
      policeId: '45678',
      policeName: '万家丽分局',
      startTime: '2020-09-09',
      endTime: '2020-09-09'
    },
    {
      id: '4301234500',
      route: '万家丽-贺龙体育馆',
      routeId: '345667',
      policeId: '45678',
      policeName: '万家丽分局',
      startTime: '2020-09-09',
      endTime: '2020-09-09'
    },
    {
      id: '4301234500',
      route: '万家丽-贺龙体育馆',
      routeId: '345667',
      policeId: '45678',
      policeName: '万家丽分局',
      startTime: '2020-09-09',
      endTime: '2020-09-09'
    }],
    isModify: false,
    isLookNews: false
  }),
  created () { },
  methods: {
    add () {
      console.log(123)
      this.isLookNews = true
    },
    modify () { },
    del (index) {
      this.content.splice(this.$refs.li[index], 1)
    },
    look () { },
    escPolicDatas () {

    }
  },
  components: { Ring }
}
</script>
<style lang="scss">
.pointPeople {
  border: 1px solid rgb(62, 85, 104);
  margin-top: 1rem;
  width: 100%;
  padding: 0.3rem 0.2rem;
  box-sizing: border-box;
  .pointPeople_head {
    width: 100%;
    height: 0.4rem;
    display: flex;
    .input {
      color: #fff;
      text-align: center;
      width: 10%;
      margin-right: 0.3rem;
    }
    input {
      background-color: rgb(0, 25, 62);
      border: none;
      color: #fff;
    }
    input::placeholder {
      color: #fff;
      text-align: center;
      font-family: 'Arial Normal', 'Arial';
    }
    .btn {
      border: none;
      color: #fff;
      background-color: rgb(62, 85, 104);
      width: 8%;
    }
  }
  .pointPeople_body {
    width: 100%;
    margin-top: 0.2rem;
    table {
      width: 100%;
      text-align: center;
      tr,
      td {
        color: #fff;
      }
      td:last-child {
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
    .b {
      display: flex;
      width: 100%;
      height: 4rem;
      justify-content: space-between;
      margin-top: 0.2rem;
      .bl {
        width: 30%;
        height: 100%;
      }
      .br {
        width: 60%;
        height: 100%;
        overflow-y: auto;
        .foot_right {
          box-sizing: border-box;
          border-top: none;
          background-color: rgb(3, 9, 35);
          .policDatas {
            width: 100%;
            height: 100%;
            padding-right: 0.2rem;
            box-sizing: border-box;
            .policDatas_title {
              width: 100%;
              background-color: rgb(19, 42, 77);
              color: #6aeff4;
              text-align: center;
              position: relative;
              height: 0.3rem;
              line-height: 0.3rem;
              button {
                background-color: rgb(54, 77, 98);
                border: none;
                position: absolute;
                right: 0.03rem;
                top: 0.08rem;
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
    }
  }
}
</style>
