<template>
  <div class="policeRoute">
    <div class="policeRoute_head">
      <el-select class="input" v-model="value" placeholder="安保路线编号">
        <el-option v-for="item in options" :key="item.value" :label="item.label" :value="item.value"> </el-option>
      </el-select>
      <el-input class="input" v-model="input" placeholder="公安机关机构代码"></el-input>
      <el-input class="input" v-model="input" placeholder="公安机关名称"></el-input>
      <el-button class="btn"> 查询 </el-button>
    </div>
    <div class="policeRoute_content">
      <table>
        <tr class="tr_title">
          <td>信息主键编号</td>
          <td>安保路线</td>
          <td>安保路线编号</td>
          <td>公安机关机构</td>
          <td>公安机关名称</td>
          <td>开始时间</td>
          <td>结束时间</td>
          <td>操作</td>
        </tr>
        <tr v-for="(item, index) in content" ref="li" :key="index">
          <td>{{ item.id }}</td>
          <td>{{ item.route }}</td>
          <td>{{ item.routeId }}</td>
          <td>{{ item.policeId }}</td>
          <td>{{ item.policeName }}</td>
          <td>{{ item.startTime }}</td>
          <td>{{ item.endTime }}</td>
          <td>
            <span class="operates" @click="add"> 新增 </span>
            <span class="operates" @click="modify"> 修改 </span>
            <span class="operates" @click="del"> 删除 </span>
            <span class="operates" @click="look"> 详情 </span>
            <span class="operates"> 查看新增路线 </span>
          </td>
        </tr>
      </table>
    </div>
    <div class="policeRoute_foot">
      <BdMap :center="center" :zoom="zoom"></BdMap>
    </div>
    <ul class="detailed_foot">
      <li class="foot_left">总共 <span>01</span> 个页面量</li>
      <li class="foot_right">
        <el-button>首页</el-button>
        <el-button>&lt;</el-button>
        <el-button>&gt;</el-button>
        <el-button>尾页</el-button>
      </li>
    </ul>
    <el-dialog :title="title" width="50%" :visible.sync="dialogFormVisible">
      <el-form :model="form">
        <el-form-item label="信息主键编号" label-width="200px">
          <el-input v-model="form.name" :readonly="!isModify"></el-input>
        </el-form-item>
        <el-form-item label="公安机关名称" label-width="200px">
          <el-input v-model="form.name" :readonly="!isModify"></el-input>
        </el-form-item>
        <el-form-item label="安保路线" label-width="200px">
          <el-input v-model="form.name" :readonly="!isModify"></el-input>
        </el-form-item>
        <el-form-item label="开始时间" label-width="200px">
          <el-input v-model="form.name" :readonly="!isModify"></el-input>
        </el-form-item>
        <el-form-item label="安保路线编号" label-width="200px">
          <el-input v-model="form.name" :readonly="!isModify"></el-input>
        </el-form-item>
        <el-form-item label="结束时间" label-width="200px">
          <el-input v-model="form.name" :readonly="!isModify"></el-input>
        </el-form-item>
        <el-form-item label="公安机关机构代码" label-width="200px">
          <el-input v-model="form.name" :readonly="!isModify"></el-input>
        </el-form-item>
      </el-form>
      <div slot="footer" class="dialog-footer">
        <el-button type="primary" v-show="isModify" @click="dialogFormVisible = false">取 消</el-button>
        <el-button type="primary" :class="isModify ? '' : 'lookBtn'" @click="dialogFormVisible = false">确 定</el-button>
      </div>
    </el-dialog>
  </div>
</template>
<script>
import BdMap from '@/components/management_com/map'
export default {
  data: () => ({
    options: [{
      value: '选项1',
      label: '黄金糕'
    }, {
      value: '选项2',
      label: '双皮奶'
    }, {
      value: '选项3',
      label: '蚵仔煎'
    }, {
      value: '选项4',
      label: '龙须面'
    }, {
      value: '选项5',
      label: '北京烤鸭'
    }],
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
    value: '',
    input: '',
    dialogFormVisible: false,
    title: '安保路线新增',
    isModify: false,
    center: { lng: 112.98941034779713, lat: 28.18392487724562 },
    zoom: 17,
    form: {
      name: '',
      region: ''
    }
  }),
  created () { },
  components: { BdMap },
  methods: {
    add () {
      this.dialogFormVisible = true
      this.isModify = true
      this.title = '安保路线新增'
    },
    modify () {
      this.dialogFormVisible = true
      this.isModify = true
      this.title = '安保路线修改'
    },
    del (index) {
      this.content.splice(this.$refs.li[index], 1)
    },
    look () {
      this.dialogFormVisible = true
      this.isModify = false
      this.title = '安保路线详情'
    }
  }
}
</script>
<style lang="scss">
.policeRoute {
  border: 1px solid rgb(62, 85, 104);
  margin-top: 1rem;
  width: 100%;
  padding: 0.3rem 0.2rem;
  box-sizing: border-box;
  .policeRoute_head {
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
  .policeRoute_content {
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
        width: 25%;
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
  .policeRoute_foot {
    width: 100%;
    height: 3rem;
    padding: 0.2rem;
    box-sizing: border-box;
    border: 1px solid rgb(121, 121, 121);
    margin-top: 0.2rem;
  }
  .el-dialog {
    background-color: rgba(2, 18, 51, 0.819607843137255);
    .el-dialog__header {
      text-align: center;
      box-sizing: border-box;
      background-color: rgb(0, 23, 60);
      span {
        color: #6aeff4;
      }
    }
    .el-dialog__body {
      .el-form {
        display: flex;
        flex-wrap: wrap;
        .el-form-item {
          width: 50%;
          label {
            color: #fff;
          }
          .el-input {
            input {
              text-align: center;
              color: #fff;
              border: none;
              background-color: rgb(5, 33, 73);
            }
          }
        }
      }
    }
    .el-dialog__footer {
      .dialog-footer {
        width: 50%;
        margin: 0 auto;
        display: flex;
        justify-content: space-between;
        .el-button {
          width: 30%;
        }
      }
      .lookBtn {
        width: 100% !important;
      }
    }
  }
  .detailed_foot {
    width: 100%;
    margin-top: 0.2rem;
    display: flex;
    justify-content: space-between;
    line-height: 0.38rem;
    .foot_left {
      color: #fff;
      span {
        color: rgb(196, 0, 0);
      }
    }
    .foot_right {
      .el-button {
        background-color: rgb(214, 219, 223);
        border: none;
      }
    }
  }
}
</style>
