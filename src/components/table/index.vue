<template>
  <div class="table">
    <el-table
      :data="tableDatas"
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
      }"
    >
      <el-table-column :prop="item.prop" :label="item.label" v-for="(item, index) in tableHead" :key="index"> </el-table-column>
      <el-table-column label="操作" width="200">
        <template slot-scope="scope">
          <el-button size="mini" type="text" @click="handleModify(scope.row)">修改</el-button>
          <el-button size="mini" type="text" @click="handleDelete(scope.row)">删除</el-button>
          <el-button size="mini" type="text" @click="handleDetailed(scope.row)">详情</el-button>
        </template>
      </el-table-column>
    </el-table>
    <div class="block">
      <el-pagination
        @size-change="handleSizeChange"
        @current-change="handleCurrentChange"
        :current-page="4"
        :page-sizes="[100, 200, 300, 400]"
        :page-size="100"
        layout="total, sizes, prev, pager, next, jumper"
        :total="400"
      >
      </el-pagination>
    </div>
  </div>
</template>
<script>
export default {
  props: ['tableHead', 'tableDatas'],
  data: () => ({
  }),
  created () { },
  methods: {
    handleModify (row) {
      this.$emit('modify', row)
    },
    handleDelete (row) {
      this.$emit('del', row)
    },
    handleDetailed (row) {
      this.$emit('detailed', row)
    },
    handleSizeChange (val) {
      console.log(`每页 ${val} 条`)
    },
    handleCurrentChange (val) {
      console.log(`当前页: ${val}`)
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
.el-table th.gutter {
  /*解决el-table加了gutter后 边框出现白边*/
  display: table-cell !important;
}
.block {
  margin-top: 0.2rem;
  .el-pagination {
    justify-content: flex-end;
    display: flex;
    position: relative;
    span {
      color: #fff;
    }
    .el-pagination__total {
      position: absolute;
      left: 0;
    }
    .el-pagination__sizes {
      .el-select {
        .el-input {
          input {
            background-color: #052149;
            border: none;
          }
        }
      }
    }
    .el-pagination__jump {
      .el-input {
        input {
          background-color: #052149;
          border: none;
        }
      }
    }
    .btn-prev,
    .btn-next,
    .el-pager .number {
      background-color: #052149;
      color: #fff;
    }
  }
}
</style>
