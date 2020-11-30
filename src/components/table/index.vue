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
        <el-button type="text" size="mini" @click="handleEdit(scope.$index, scope.row)">新增</el-button>
        <el-button size="mini" type="text" @click="handleDelete(scope.$index, scope.row)">修改</el-button>
        <el-button size="mini" type="text" @click="handleDelete(scope.$index, scope.row)">删除</el-button>
        <el-button size="mini" type="text" @click="handleDelete(scope.$index, scope.row)">详情</el-button>
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
    handleEdit (index, row) {
      console.log(index, row)
    },
    handleDelete (index, row) {
      console.log(index, row)
    }
  }
}
</script>
<style lang="scss">
.el-table__row>td {
  border: none !important;
}

.el-table::before {
  height: 0px !important;
}
</style>
