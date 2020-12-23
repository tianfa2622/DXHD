<template>
  <div class="patrolTimes">
    <h3 class="title">今日巡防次数</h3>
    <table>
      <tr class="table_title">
        <td>时间点</td>
        <td>巡防次数</td>
        <td>异常次数</td>
        <td>巡防人员个数</td>
      </tr>
      <tr v-for="(item, index) in tableData" :key="index">
        <td>{{ item.time }}</td>
        <td>{{ item.patrols }}</td>
        <td>{{ item.abnormal }}</td>
        <td>{{ item.personnel }}</td>
      </tr>
    </table>
  </div>
</template>
<script>
export default {
  data: () => ({
    tableData: [{
      time: '24:00',
      patrols: '20次',
      abnormal: '0次',
      personnel: '50人'
    }, {
      time: '02:00',
      patrols: '10次',
      abnormal: '5次',
      personnel: '20人'
    }, {
      time: '04:00',
      patrols: '24次',
      abnormal: '2次',
      personnel: '100人'
    }]
  }),
  created () { },
  methods: {}
}
</script>
<style lang="scss">
.patrolTimes {
  width: 100%;
  height: 100%;
  padding: 0.4rem 0.3rem;
  box-sizing: border-box;
  .title {
    font-size: 12px;
    color: #3294bb;
    font-style: normal;
    font-weight: bold;
    margin-bottom:0.1rem;
  }
  table {
    margin: auto;
    color: #fff;
    text-align: center;
    width: 80%;
    .table_title {
      td {
        height: 0.4rem;
      }
    }
    tr:nth-child(2n) {
      background-color: #00031d;
    }
    tr {
      background-color: #000033;
      td {
        font-weight: bold;
        width: 25%;
        height: 0.3rem;
        border: 1px solid #47475c;
        white-space: nowrap;
      }
    }
  }
}
</style>
