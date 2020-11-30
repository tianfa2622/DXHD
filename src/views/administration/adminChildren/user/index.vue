<template>
  <div class="user">
    <div class="user_title">
      <div class="title_left">
        <el-input v-model="inputRole" placeholder="请输入用户角色"></el-input>
        <el-input v-model="inputIdcard" placeholder="请输入身份证号"></el-input>
        <el-input v-model="inputName" placeholder="请输入用户姓名"></el-input>
        <el-button class="btn_query">查询</el-button>
      </div>
      <el-button class="btn_add">新增</el-button>
    </div>
    <div class="user_content">
      <table>
        <tr>
          <td>用户账号</td>
          <td>所属角色</td>
          <td>所属单位</td>
          <td>警号</td>
          <td>操作</td>
        </tr>
        <tr v-for="(item, index) in content" ref="li" :key="index">
          <td>{{ item.id }}</td>
          <td>{{ item.name }}</td>
          <td>{{ item.remarks }}</td>
          <td>{{ item.power }}</td>
          <td>
            <span class="operates" @click="modify(item)"> 修改 </span>
            <span class="operates" @click="del(item.id)"> 删除 </span>
            <span class="operates" @click="look(item)"> 详细 </span>
          </td>
        </tr>
      </table>
      <div class="user_modify" v-if="isModify">
        <div class="user_modify_head">
          <h3>用户修改</h3>
          <button @click="escModify">X</button>
        </div>
        <div class="user_modify_content">
          <p>
            <span>角色编号</span>
            <el-select v-model="value" placeholder="请选择角色">
              <el-option v-for="item in options" :key="item.value" :label="item.label" :value="item.value"> </el-option>
            </el-select>
            <span>角色编号</span>
            <el-select v-model="value" placeholder="请选择角色">
              <el-option v-for="item in options" :key="item.value" :label="item.label" :value="item.value"> </el-option>
            </el-select>
          </p>
          <p>
            <span>角色名称</span>
            <input type="text" placeholder="请输入警号" :readonly="isLook" />
            <span>角色名称</span>
            <input type="text" placeholder="请输入用户姓名3" :readonly="isLook" />
          </p>
          <p>
            <span>角色备注</span>
            <input type="text" placeholder="请输入身份证号" :readonly="isLook" />
            <span>角色备注</span>
            <input type="text" placeholder="请输入联系电话" :readonly="isLook" />
          </p>
          <p>
            <span>用户密码</span>
            <input type="text" placeholder="请输入用户密码" :readonly="isLook" />
            <span>用户密码</span>
            <input type="text" placeholder="请确认密码" :readonly="isLook" />
          </p>
        </div>
        <div class="user_modify_foot">
          <button @click="cancelModify" v-show="!isLook">取消</button>
          <button @click="subModify">确定</button>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data: () => ({
    inputRole: '',
    inputIdcard: '',
    inputName: '',
    value: '',
    isModify: false,
    isLook: false,
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
      id: '01',
      name: '后端开发工程师',
      remarks: '该工程师是java开发工程师',
      power: 'java开发，日志查看，软件设计',
      num: 'ROLE1646785443566'
    },
    {
      id: '02',
      name: '前端开发工程师',
      remarks: '该工程师致力于vue+elemenU的开发模式',
      power: 'java开发，日志查看，软件设计',
      num: 'ROLE1646785443567'
    },
    {
      id: '03',
      name: '前端开发工程师',
      remarks: '该工程师致力于vue+elemenU的开发模式',
      power: 'java开发，日志查看，软件设计',
      num: 'ROLE1646785443562'
    }]
  }),
  created () { },
  methods: {
    modify () {
      this.isModify = true
      this.isLook = false
    },
    del (index) {
      this.content.splice(this.$refs.li[index], 1)
    },
    look (item) {
      this.isModify = true
      this.isLook = true
    },
    escModify () {
      this.isModify = false
    },
    cancelModify () {
      this.isModify = false
    },
    subModify () {
      this.isModify = false
    }
  }
}
</script>
<style lang="scss">
.user {
  .user_title {
    display: flex;
    justify-content: space-between;
    .el-input {
      width: 2.5rem;
    }
    input {
      border: none;
      background: rgb(1, 26, 63);
    }
    .btn_add {
      background: rgb(22, 155, 213);
      color: #fff;
    }
    .title_left {
      .el-select,
      .el-input {
        margin-right: 1rem;
      }
      .btn_query {
        background: rgb(62, 85, 104);
        color: #fff;
      }
    }
  }
  .user_content {
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
      tr {
        height: 0.8rem;
        background-color: #000033;
        td {
          .operates {
            cursor: pointer;
            margin: 0 0.2rem;
          }
        }
      }
      tr:nth-child(2n) {
        background-color: #00031d;
      }
    }
    .user_modify {
      position: fixed;
      width: 60%;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      background: rgb(1, 25, 62);
      color: #fff;
      .user_modify_head {
        width: 100%;
        height: 0.6rem;
        line-height: 0.6rem;
        padding: 0 0.2rem;
        box-sizing: border-box;
        border-bottom: 1px solid #fff;
        display: flex;
        justify-content: space-between;
        button {
          width: 0.3rem;
          height: 0.3rem;
          margin-top: 0.1rem;
          border: none;
          background: rgb(51, 74, 95);
          font-family: 'Dotum';
          font-weight: 400;
          font-style: normal;
          font-size: 20px;
        }
      }
      .user_modify_content {
        width: 90%;
        margin: 0.2rem auto;
        background: rgb(0, 3, 29);
        border: 1px solid #fff;
        border-radius: 6px;
        box-sizing: border-box;
        padding: 0.1rem 0.2rem;
        p {
          display: flex;
          justify-content: space-between;
          line-height: 0.5rem;
          margin: 0.1rem;
          input {
            width: 3rem;
            background-color: rgb(1, 26, 63);
            border: none;
            height: 0.4rem;
            border-radius: 5%;
            color: #fff;
            padding: 0 0.2rem;
            box-sizing: border-box;
            text-align: center;
          }
          input::placeholder {
            letter-spacing: 5px;
            color: #fff !important;
            text-align: center;
          }
        }
      }
    }
    .user_modify_foot {
      height: 0.6rem;
      text-align: center;
      white-space: nowrap;
      button {
        border: none;
        background: rgb(0, 3, 29);
        color: #fff;
        padding: 0.1rem;
        margin: 0.1rem 2rem 0;
      }
    }
  }
}
</style>
