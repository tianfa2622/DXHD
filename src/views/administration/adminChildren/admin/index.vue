<template>
  <div class="adminChild">
    <div class="adminChild_title">
      <div class="title_left">
        <el-select v-model="value" placeholder="请输入角色名称">
          <el-option v-for="item in options" :key="item.value" :label="item.label" :value="item.value"> </el-option>
        </el-select>
        <el-input v-model="input" placeholder="请输入角色编号"></el-input>
        <el-button class="btn_query">查询</el-button>
      </div>
      <el-button class="btn_add">新增</el-button>
    </div>
    <div class="adminChild_content">
      <table>
        <tr>
          <td>角色编号</td>
          <td>角色名称</td>
          <td>角色备注</td>
          <td>权限范围</td>
          <td>操作</td>
        </tr>
        <tr v-for="(item, index) in content" ref="li" :key="index">
          <td>{{ item.id }}</td>
          <td>{{ item.name }}</td>
          <td>{{ item.remarks }}</td>
          <td>{{ item.power }}</td>
          <td>
            <span class="operates" @click="isClick(item)"> 修改 </span>
            <span class="operates" @click="del(item.id)"> 删除 </span>
            <span class="operates" @click="look(item)"> 详细 </span>
            <span class="operates" @click="power(item.id)"> 添加权限 </span>
          </td>
        </tr>
      </table>
      <div class="modify" v-if="showModify">
        <div class="modify_head">
          <h3>角色修改</h3>
        </div>
        <div class="modify_content">
          <p>
            <span>角色编号</span>
            <input type="text" v-model="modifyNum" :readonly="isLook" />
          </p>
          <p>
            <span>角色名称</span>
            <input type="text" v-model="modifyName" :readonly="isLook" />
          </p>
          <p>
            <span>角色备注</span>
            <input type="text" v-model="modifyRemarks" :readonly="isLook" />
          </p>
        </div>
        <div class="modify_foot">
          <button @click="cancel" v-show="!isLook">取消</button>
          <button @click="submit">确定</button>
        </div>
      </div>
      <div class="powers" v-if="isPowers">
        <div class="powers_head">
          <h3>权限分配</h3>
        </div>
        <div class="powers_content">
          <el-checkbox v-model="checkAll" @change="handleCheckAllChange">态势感知</el-checkbox>
          <div style="margin: 15px 0"></div>
          <el-checkbox-group v-model="checkedPowers" @change="handlecheckedPowersChange">
            <el-checkbox class="powers_checkd" v-for="power in powers" :label="power" :key="power">{{ power }}</el-checkbox>
          </el-checkbox-group>
        </div>
        <div class="powers_foot">
          <button @click="submitPowers">权限分配</button>
          <button @click="cancelPowers">取消</button>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
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
    }],
    operate: [{ name: '修改' }, { name: '删除' }, { name: '详细' }, { name: '添加权限' }],
    value: '',
    input: '',
    modifyNum: '',
    modifyName: '',
    modifyRemarks: '',
    showModify: false,
    isLook: false,
    isPowers: false,
    checkAll: false,
    powers: ['安保路线1', '安保路线2', '安保路线3', '安保路线4'],
    checkedPowers: ['安保路线1']
  }),
  created () { },
  methods: {
    isClick (item) {
      this.showModify = true
      this.isLook = false
      this.modifyNum = item.num
      this.modifyName = item.name
      this.modifyRemarks = item.remarks
    },
    cancel () {
      this.showModify = false
    },
    submit () {
      this.showModify = false
    },
    del (index) {
      this.content.splice(this.$refs.li[index], 1)
    },
    look (item) {
      this.showModify = true
      this.isPowers = false
      this.modifyNum = item.num
      this.modifyName = item.name
      this.modifyRemarks = item.remarks
      this.isLook = true
    },
    power (id) {
      this.isPowers = true
      this.showModify = false
    },
    handleCheckAllChange (val) {
      this.checkedPowers = val ? this.powers : []
    },
    handlecheckedPowersChange (value) {
      const checkedCount = value.length
      this.checkAll = checkedCount === this.powers.length
    },
    submitPowers () {
      this.isPowers = false
    },
    cancelPowers () {
      this.isPowers = false
    }
  }
}
</script>
<style lang="scss">
.adminChild {
  .adminChild_title {
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
        margin-right: 0.3rem;
      }
      .btn_query {
        background: rgb(62, 85, 104);
        color: #fff;
      }
    }
  }
  .adminChild_content {
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
    .modify {
      width: 60%;
      margin: 0.6rem auto 0;
      background: rgb(1, 25, 62);
      color: #fff;
      .modify_head {
        width: 100%;
        height: 0.6rem;
        line-height: 0.6rem;
        padding-left: 0.2rem;
        box-sizing: border-box;
        border-bottom: 1px solid #fff;
      }
      .modify_content {
        width: 90%;
        margin: 0.2rem auto;
        background: rgb(0, 3, 29);
        border: 1px solid #fff;
        border-radius: 6px;
        padding: 5% 15%;
        box-sizing: border-box;
        p {
          margin: 0.3rem auto;
          height: 0.5rem;
          line-height: 0.5rem;
          display: flex;
          span {
            width: 20%;
          }
          input {
            margin-left: 0.2rem;
            flex: 1;
          }
        }
      }
      .modify_foot {
        border-top: 1px solid #fff;
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
    .powers {
      width: 60%;
      margin: 0.6rem auto 0;
      background: rgb(1, 25, 62);
      color: #fff;
      .powers_head {
        width: 100%;
        height: 0.6rem;
        line-height: 0.6rem;
        padding-left: 0.2rem;
        box-sizing: border-box;
        border-bottom: 1px solid #fff;
      }
      .powers_content {
        width: 90%;
        margin: 0.2rem auto;
        background: rgb(0, 3, 29);
        border: 1px solid #fff;
        border-radius: 6px;
        display: flex;
        flex-wrap: wrap;
        span {
          color: #fff !important;
        }
        .powers_checkd {
          display: block;
          margin: 0.1rem 0 0 0;
          box-sizing: border-box;
          padding: 0.1rem;
        }
      }
      .powers_foot {
        height: 0.6rem;
        text-align: center;
        white-space: nowrap;
        button {
          border: none;
          background: rgb(0, 3, 29);
          color: #fff;
          padding: 0.1rem;
          margin: 0.1rem 1rem 0;
        }
      }
    }
  }
}
</style>
