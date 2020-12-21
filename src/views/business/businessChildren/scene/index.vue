<template>
  <div class="scene">
    <h3 class="scene_title">
      <img src="@/assets/business/u2785.svg" alt="" />
      <span>现场管理</span>
    </h3>
    <div class="scene_datas">
      <div class="face scene_data">
        <h3>人脸识别</h3>
        <el-form ref="form" :model="form" label-width="1rem">
          <el-form-item label="设备类型">
            <el-select v-model="form.name" placeholder="请选择"> </el-select>
          </el-form-item>
          <el-form-item>
            <el-button type="primary" @click="faceBtnClick">搜索</el-button>
          </el-form-item>
          <el-form-item label="摄像头位置">
            <el-select v-model="form.name" placeholder="请选择"> </el-select>
          </el-form-item>
        </el-form>
        <div class="img">
          <img src="@/assets/1.gif" alt="" />
        </div>
      </div>
      <div class="card scene_data">
        <h3>身份证信息扫描</h3>
        <el-form ref="form" :model="form" label-width="1rem">
          <el-form-item label="设备类型">
            <el-select v-model="form.name" placeholder="请选择"> </el-select>
          </el-form-item>
          <el-form-item>
            <el-button type="primary" @click="cardBtnClick">搜索</el-button>
          </el-form-item>
          <el-form-item label="摄像头位置">
            <el-select v-model="form.name" placeholder="请选择"> </el-select>
          </el-form-item>
        </el-form>
        <div class="img">
          <img src="@/assets/1.gif" alt="" />
        </div>
      </div>
      <div class="bill scene_data">
        <h3>票种扫描</h3>
        <el-form ref="form" :model="form" label-width="1rem">
          <el-form-item label="设备类型">
            <el-select v-model="form.name" placeholder="请选择"> </el-select>
          </el-form-item>
          <el-form-item>
            <el-button type="primary" @click="billBtnClick">搜索</el-button>
          </el-form-item>
          <el-form-item label="摄像头位置">
            <el-select v-model="form.name" placeholder="请选择"> </el-select>
          </el-form-item>
        </el-form>
        <div class="img">
          <img src="@/assets/1.gif" alt="" />
        </div>
      </div>
    </div>
    <Dialog :title="title" :isShow="isShow" :readOnly="readOnly" :dialogs="dialogs" @close="close"></Dialog>
  </div>
</template>
<script>
import Dialog from '@/components/dialog'
export default {
  data: () => ({
    form: {},
    title: '',
    isShow: false,
    readOnly: true,
    dialogs: []
  }),
  created () { },
  methods: {
    faceBtnClick () {
      this.isShow = true
      this.title = '人脸识别'
      this.dialogs = [
        { label: '姓名', type: 'input' },
        { label: '购票时间', type: 'input' },
        { label: '证件号码', type: 'input' },
        { label: '民族', type: 'input' },
        { label: '常用证件', type: 'input' },
        { label: '联系人', type: 'input' },
        { label: '证件号码', type: 'input' },
        { label: '是否是观众', type: 'input' },
        { label: '国籍', type: 'input' }
      ]
    },
    cardBtnClick () {
      this.isShow = true
      this.title = '身份证信息扫描'
      this.dialogs = [
        { label: '姓名', type: 'input' },
        { label: '购票时间', type: 'input' },
        { label: '证件号码', type: 'input' },
        { label: '民族', type: 'input' },
        { label: '常用证件', type: 'input' },
        { label: '联系人', type: 'input' },
        { label: '证件号码', type: 'input' },
        { label: '是否是观众', type: 'input' },
        { label: '国籍', type: 'input' }
      ]
    },
    billBtnClick () {
      this.isShow = true
      this.title = '票种扫描'
      this.dialogs = [
        { label: '票务类型', type: 'input' },
        { label: '票务编号', type: 'input' },
        { label: '座位号', type: 'input' },
        { label: '区域', type: 'input' },
        { label: '购票时间', type: 'input' },
        { label: '人员入场时间', type: 'input' },
        { label: '信息入库时间', type: 'input' }
      ]
    },
    close () {
      this.isShow = false
    }
  },
  components: { Dialog }
}
</script>
<style lang="scss">
.scene {
  width: 98%;
  margin: 0 auto;
  .scene_title {
    width: 98%;
    margin: 0 auto;
    line-height: 0.4rem;
    border-bottom: 0.01rem solid #3e5568;
    color: #fff;
    display: flex;
    padding: 0.1rem;
    box-sizing: border-box;
    img {
      width: 0.4rem;
      height: 0.4rem;
    }
    span {
      height: 100%;
      display: block;
      margin-left: 0.2rem;
      color: #6aeff4;
      font-size: 0.18rem;
    }
  }
  .scene_datas {
    width: 80%;
    margin: 0.2rem auto 0;
    display: flex;
    justify-content: space-between;
    .scene_data {
      width: 30%;
      margin: 0 0.1rem;
      h3 {
        color: #6aeff4;
        font-weight: bold;
        font-size: 0.2rem;
        margin-bottom: 0.1rem;
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
      .img {
        img {
          width: 100%;
          height: 100%;
        }
      }
    }
  }
}
</style>
