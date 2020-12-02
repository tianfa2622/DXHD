<template>
  <el-form ref="form" :model="form" label-width="auto">
    <el-form-item v-for="(item, index) in searchSettings" :key="index" :label="item.label != '' ? item.label : ''">
      <el-input v-model="form.name" :placeholder="item.placeholder" v-if="item.type === 'input'"></el-input>
      <el-select clearable v-if="item.type === 'select'" v-model="form.name" :placeholder="item.placeholder">
        <!-- <el-option v-for="op in items.options" :label="op.label" :value="op.value" :key="op.value"></el-option> -->
      </el-select>
      <el-input type="textarea" v-if="item.type === 'textarea'" v-model="form.name" :placeholder="item.placeholder"></el-input>
      <el-date-picker v-model="form.name" v-if="item.type === 'data'" type="date" placeholder="选择日期"> </el-date-picker>
      <el-date-picker v-model="form.name" type="daterange" v-if="item.type === 'datas'" range-separator="至" start-placeholder="开始日期" end-placeholder="结束日期"> </el-date-picker>
    </el-form-item>
    <div class="btn" v-for="item in searchBtn" :key="item.name">
      <el-button type="primary" v-if="item.type === 'search'">{{ item.name }}</el-button>
      <el-button type="primary" v-if="item.type === 'add'" @click="add">{{ item.name }}</el-button>
    </div>
  </el-form>
</template>
<script>
export default {
  props: ['searchSettings', 'searchBtn'],
  data: () => ({
    form: {}
  }),
  created () {},
  methods: {
    add () {
      this.$emit('add')
    }
  }
}
</script>
<style lang="scss">
.el-form {
  display: flex;
  width: 100%;
  .el-form-item {
    margin-bottom: 0;
    margin-right: 0.2rem;
    width: 20%;
    .el-form-item__label-wrap {
      .el-form-item__label {
        color: #fff;
      }
    }
    .el-form-item__content {
      width: 100%;
      .el-input {
        width: 100%;
        input {
          background-color: rgb(2, 26, 63);
          border: none;
        }
      }
      .el-select {
        width: 100%;
        .el-input {
          width: 100%;
          input {
            background-color: rgb(2, 26, 63);
            border: none;
          }
        }
      }
      .el-textarea {
        width: 100%;
        textarea {
          width: 100%;
          background-color: rgb(2, 26, 63);
          border: none;
          color: #fff;
        }
        textarea::placeholder {
          color: #fff;
        }
      }
      .el-date-editor {
        width: 100%;
        background-color: rgb(2, 26, 63);
        border: none;
        input {
          background-color: rgb(2, 26, 63);
          border: none;
        }
        .el-input__icon,
        .el-range-separator {
          color: #fff;
        }
      }
    }
  }
  .btn {
    margin-right: 0.2rem;
  }
}
</style>
