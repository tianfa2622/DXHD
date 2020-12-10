<template>
  <div class="circleManagement">
    <baidu-map class="bm-view" :center="{ lng: 116.404, lat: 39.915 }" :zoom="14">
      <div class="mapBtn">
        <el-button @click="leftShow">各区域演唱会人流量统计</el-button>
        <el-button @click="centerShow">各区域演唱会车流量统计</el-button>
        <el-button @click="rightShow">各区域安保圈层管理</el-button>
      </div>
    </baidu-map>
    <el-dialog :title="title" :visible.sync="Show" center width="30%">
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
          <div class="goBack"  v-if="!clickRight">
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
          <div class="sums"  v-if="clickRight">
            <div class="sum">
              共有安保人员<span>90</span>人
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
          <div class="goBack" v-if="!clickRight">
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
        <h3  v-if="!clickRight">A区：可疑人员人数为 <span>0</span> 人</h3>
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
          <div class="goBack"  v-if="!clickRight" >
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
          <div class="sums"  v-if="clickRight">
            <div class="sum">
              共有安保人员<span>90</span>人
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
          <div class="goBack"  v-if="!clickRight">
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
        <h3  v-if="!clickRight">B区：可疑人员人数为 <span>0</span> 人</h3>
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
          <div class="goBack"  v-if="!clickRight">
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
          <div class="sums"  v-if="clickRight">
            <div class="sum">
              共有安保人员<span>90</span>人
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
          <div class="goBack"  v-if="!clickRight">
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
        <h3  v-if="!clickRight">C区：可疑人员人数为 <span>0</span> 人</h3>
      </div>
      <h2>{{ dialogs.title }}</h2>
      <div class="bar">
        <Bar></Bar>
      </div>
    </el-dialog>
  </div>
</template>
<script>
import Bar from '@/components/business_com/circleManagement/bar'
export default {
  data: () => ({
    title: '',
    Show: false,
    input: '0',
    clickRight: false,
    dialogs: {}
  }),
  created () { },
  methods: {
    leftShow () {
      this.title = '各区域演唱会人流量统计'
      this.dialogs.title = '场馆24小时人流量总量'
      this.clickRight = false
      this.Show = true
    },
    centerShow () {
      this.title = '各区域演唱会车流量统计'
      this.dialogs.title = '场馆24小时车  流量总量'
      this.clickRight = false
      this.Show = true
    },
    rightShow () {
      this.title = '各区域安保圈层管理'
      this.dialogs.title = '场馆24小安保总量'
      this.clickRight = true
      this.Show = true
    }
  },
  components: { Bar }
}
</script>
<style lang="scss">
.circleManagement {
  width: 100%;
  .bm-view {
    width: 100%;
    height: 100vh;
    position: relative;
    .mapBtn {
      position: absolute;
      top: 0.2rem;
      width: 100%;
      text-align: center;
      .el-button {
        background-color: #062f80;
        span {
          color: #5aeff4;
        }
      }
    }
  }
  .el-dialog__wrapper {
    .el-dialog {
      .el-dialog__body {
        .region {
          margin-bottom: 0.2rem;
          h3 {
            color: #fff;
            font-size: 0.16rem;
            span{
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
            .sums{
              width: 50%;
              position: relative;
              .sum{
                width: 100%;
                height: 0.6rem;
                line-height: 0.6rem;
                text-align: center;
                background-color: #050B19;
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
  }
}
</style>
