<template>
  <el-form ref="form" :model="form">
    <el-input v-model="form.name" :placeholder="item.placeholder" :type="item.type" v-for="(item, index) in searchSettings" :key="index"></el-input>
    <el-button type="primary">查询</el-button>
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
  methods: {}
}
</script>
<style lang="scss">
.el-form {
  display: flex;
  justify-content: space-between;
  width: 100%;
  .el-input {
    width: 20%;
    input {
      background-color: rgb(1, 25, 62);
      border: none;
    }
  }
  .el-input:last-of-type {
    width: 25%;
  }
}
</style>
