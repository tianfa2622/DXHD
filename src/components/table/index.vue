<template>
  <el-table
    :data="tableDatas"
    stripe
    style="width: 100%"
    :header-cell-style="{
      color: '#fff',
      textAlign: 'center',
      background: '#040a46',
      borderBottom: '1px solid #040a46',
    }"
    :row-style="{}"
    :cell-style="{
      color: '#fff',
      textAlign: 'center',
      background: 'rgb(5,33,73)',
      borderBottom: 'none',
    }"
    fit
    display:flex
    border:flase
  >
    <el-table-column :prop="item.prop" :label="item.label" v-for="(item, index) in tableHead" :key="index"> </el-table-column>
    <el-table-column label="操作" width="200">
      <template slot-scope="scope">
        <el-button type="text" size="mini" @click="handleAdd(scope.row)">新增</el-button>
        <el-button size="mini" type="text" @click="handleModify(scope.row)">修改</el-button>
        <el-button size="mini" type="text" @click="handleDelete(scope.row)">删除</el-button>
        <el-button size="mini" type="text" @click="handleDetailed(scope.row)">详情</el-button>
      </template>
    </el-table-column>
  </el-table>
</template>
<script>
export default {
  props: ['tableHead', 'tableDatas'],
  data: () => ({
  }),
  created () { },
  methods: {
    handleAdd (row) {
      this.$emit('add', row)
    },
    handleModify (row) {
      this.$emit('modify', row)
    },
    handleDelete (row) {
      this.$emit('del', row)
    },
    handleDetailed (row) {
      this.$emit('detailed', row)
    }
  }
}
</script>
<style lang="scss">
.el-table__row > td {
  border: none !important;
}

.el-table::before {
  height: 0px !important;
}
</style>
