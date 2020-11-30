<template>
  <div class="papers">
    <div class="papers_title">
      <el-input v-model="inputName" placeholder="姓名"></el-input>
      <el-input v-model="inputNum" placeholder="购票编号"></el-input>
      <el-input v-model="inputIdcard" placeholder="请输入份证号码"></el-input>
      <el-input class="longInput" v-model="inputDatas" placeholder="请输入活动编号，联系电话，入场时间"></el-input>
      <el-button class="btn" type="success">查询</el-button>
    </div>
    <div class="papers_content">
      <table>
        <tr class="tr_title">
          <td>序号</td>
          <td>活动编号</td>
          <td>证件信息</td>
          <td>证件编号</td>
          <td>制证时间</td>
          <td>操作</td>
        </tr>
        <tr v-for="(item, index) in content" ref="li" :key="index">
          <td>{{ item.id }}</td>
          <td>{{ item.activityNum }}</td>
          <td>{{ item.address }}</td>
          <td>{{ item.ticketNum }}</td>
          <td>{{ item.time }}</td>
          <td>
            <span class="operates" @click="look(item)"> 详细 </span>
            <span class="operates" @click="del(item.id)"> 删除 </span>
          </td>
        </tr>
      </table>
      <div class="upload" v-if="isUpload">
        <h3>上传制证人员正面照</h3>
        <el-upload ref="upload" class="avatar-uploader" :auto-upload="false" action="https://jsonplaceholder.typicode.com/posts/">
          <img v-if="imageUrl" :src="imageUrl" class="avatar" />
          <i v-else class="el-icon-plus avatar-uploader-icon"></i>
        </el-upload>
        <el-button class="subUp" @click="submitUpload">
          <img src="@/assets/fnc/u2886.png" alt="" />
          上传文件
        </el-button>
        <el-button class="escUpload" @click="escUpload">确定</el-button>
      </div>
      <div class="detailed" v-if="isLook">
        <div class="detailed_head">
          制证信息接入详情
          <button @click="escDetailed">X</button>
        </div>
        <div class="detailed_content">
          <p>
            <span>信息主键编号</span>
            <el-input v-model="input" readonly placeholder="请输入内容"></el-input>
            <span>姓名</span>
            <el-input v-model="input" readonly placeholder="请输入内容"></el-input>
          </p>
          <p>
            <span>活动编号</span>
            <el-input v-model="input" readonly placeholder="请输入内容"></el-input>
            <span>公民身份号码</span>
            <el-input v-model="input" readonly placeholder="请输入内容"></el-input>
          </p>
          <p>
            <span>购票信息</span>
            <el-input v-model="input" readonly placeholder="请输入内容"></el-input>
            <span>联系电话</span>
            <el-input v-model="input" readonly placeholder="请输入内容"></el-input>
          </p>
          <p>
            <span>证件信息</span>
            <el-input v-model="input" readonly placeholder="请输入内容"></el-input>
            <span>公民身份证号码</span>
            <el-input v-model="input" readonly placeholder="请输入内容"></el-input>
          </p>
          <p>
            <span>证件编号</span>
            <el-input v-model="input" readonly placeholder="请输入内容"></el-input>
            <span>是否入场</span>
            <el-input v-model="input" readonly placeholder="请输入内容"></el-input>
          </p>
          <p>
            <span>制证时间</span>
            <el-input v-model="input" readonly placeholder="请输入内容"></el-input>
            <span>入场时间</span>
            <el-input v-model="input" readonly placeholder="请输入内容"></el-input>
          </p>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data: () => ({
    input: '',
    inputName: '',
    inputNum: '',
    inputIdcard: '',
    inputDatas: '',
    isLook: false,
    isUpload: false,
    imageUrl: '',
    content: [{
      id: '1',
      activityNum: 'J快45',
      address: '湖南省长沙县购票',
      ticketNum: '4305',
      time: '2020-08-18 18:00'
    }, {
      id: '2',
      activityNum: 'rtrty',
      address: '湖南省长沙县购票',
      ticketNum: '5678',
      time: '2020-08-18 18:00'
    }]
  }),
  created () { },
  methods: {
    look () {
      this.isLook = true
      this.isUpload = true
    },
    del (index) {
      this.content.splice(this.$refs.li[index], 1)
    },
    escDetailed () {
      this.isLook = false
    },
    submitUpload () {
      this.$refs.upload.submit()
    },
    escUpload () {
      this.isUpload = false
    }
  }
}
</script>
<style lang="scss">
.papers {
  width: 90%;
  background: rgb(3, 9, 35);
  padding: 0.2rem;
  box-sizing: border-box;
  border: 1px solid rgba(62, 85, 104, 1);
  .papers_title {
    display: flex;
    .el-input {
      width: 2rem;
      margin-right: 0.4rem;
      input {
        background-color: rgb(1, 26, 63);
      }
    }
    .longInput {
      width: 4rem;
    }
    .btn {
      background-color: #3e5568;
      border: none;
    }
    input::placeholder {
      color: #fff !important;
      text-align: center;
    }
  }
  .papers_content {
    width: 100%;
    margin-top: 0.2rem;
    table {
      width: 100%;
      text-align: center;
      tr,
      td {
        border: 1px solid rgb(121, 121, 121);
        color: #fff;
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
          }
        }
      }
    }
    .detailed {
      position: fixed;
      width: 60%;
      top: 50%;
      right: 5%;
      transform: translateY(-50%);
      .detailed_head {
        width: 100%;
        height: 0.6rem;
        line-height: 0.6rem;
        text-align: center;
        background-color: rgb(0, 23, 60);
        position: relative;
        color: #6aeff4;
        button {
          position: absolute;
          right: 0.5rem;
          top: 0.15rem;
          width: 0.3rem;
          height: 0.3rem;
          border: none;
          background: rgb(51, 74, 95);
          font-family: 'Dotum';
          font-weight: 400;
          font-style: normal;
          font-size: 20px;
        }
      }
      .detailed_content {
        width: 100%;
        padding: 0.2rem;
        box-sizing: border-box;
        background-color: rgb(1, 15, 46);
        p {
          display: flex;
          justify-content: space-between;
          margin: 0.2rem 0;
          span {
            color: #fff;
            width: 10%;
            text-align: center;
            height: 0.4rem;
            line-height: 0.4rem;
          }
          .el-input {
            flex: 1;
            input {
              background-color: #052149;
              border: none;
            }
          }
        }
      }
    }
    .upload {
      position: fixed;
      width: 20%;
      top: 50%;
      transform: translateY(-50%);
      left: 5%;
      background-color: rgb(35, 61, 92);
      border-radius: 0.2rem;
      padding: 0.2rem 0.4rem;
      box-sizing: border-box;
      h3 {
        text-align: center;
        color: rgb(55, 177, 255);
        margin-bottom: 0.2rem;
      }
      .avatar-uploader {
        .el-upload {
          width: 100%;
          left: 50%;
          transform: translateX(-50%);
        }
      }
      .subUp {
        width: 2rem;
        height: 0.5rem;
        margin: 0.2rem 0;
        img {
          width: 0.25rem;
          height: 0.25rem;
        }
      }
      .escUpload {
        margin: auto;
        display: block;
        background-color: rgb(5, 33, 73);
        width: 80%;
        height: 0.5rem;
        border: none;
      }
      .avatar-uploader .el-upload {
        border: 1px dashed #d9d9d9;
        border-radius: 6px;
        cursor: pointer;
        position: relative;
        overflow: hidden;
      }
      .avatar-uploader .el-upload:hover {
        border-color: #409eff;
      }
      .avatar-uploader-icon {
        font-size: 28px;
        color: #8c939d;
        width: 178px;
        height: 178px;
        line-height: 178px;
        text-align: center;
      }
      .avatar {
        width: 178px;
        height: 178px;
        display: block;
      }
    }
  }
}
</style>
