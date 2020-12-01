<template>
  <el-form ref="form" :model="form" label-width="auto">
    <el-form-item v-for="(item, index) in searchSettings" :key="index">
      <el-input v-model="form.name" :placeholder="item.placeholder" v-if="item.type === 'input'"></el-input>
      <el-select clearable v-if="item.type === 'select'" v-model="form.name" :placeholder="item.placeholder">
        <!-- <el-option v-for="op in items.options" :label="op.label" :value="op.value" :key="op.value"></el-option> -->
      </el-select>
    </el-form-item>

    <el-button type="primary">查询</el-button>
    <el-button type="primary" @click="add">新增</el-button>
  </el-form>
</template>
<script>
export default {
  props: ['searchSettings'],
  data: () => ({
    form: {}
  }),
  created () {
  },
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
    }
  }
}
</style>
