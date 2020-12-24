<template>
  <div class="checkpoint">
    <div class="bar">
      <h3>危险品数量</h3>
      <Bar></Bar>
    </div>
    <div class="pie bar">
      <h3>危险品总数统计</h3>
      <Pie></Pie>
    </div>
  </div>
</template>
<script>
import Bar from '@/components/activity_com/statistics/bar'
import Pie from '@/components/activity_com/statistics/pie'
export default {
  data: () => ({
  }),
  created () { },
  methods: {

  },
  components: { Bar, Pie }
}
</script>
<style lang="scss">
.checkpoint {
  width: 100%;
  display: flex;
  border: 1px solid rgb(62, 85, 104);
  padding: 0.2rem;
  box-sizing: border-box;
  .bar {
    width: 50%;
    height: 4rem;
    h3 {
      color: #fff;
      width: 2rem;
      height: 0.4rem;
      line-height: 0.4rem;
      text-align: center;
      border-bottom: 1px solid #ccc;
    }
  }
  .pie {
    #Pie_rt {
      height: calc(100% - 0.4rem) !important;
    }
  }
}
</style>
