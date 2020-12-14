<template>
  <div class="management">
    <dl class="management_left">
      <dd class="list_content" v-for="item in adminLeft" :key="item.id" @click="goList(item.title, item.path)">
        {{ item.title }}
      </dd>
    </dl>
    <div class="management_right">
      <router-view></router-view>
    </div>
  </div>
</template>
<script>
export default {
  data: () => ({
    adminLeft: [
      { title: '警力展示', id: 0, path: '/management/policeDisplay/policeDisplayCar' },
      { title: '安保路线管理', id: 1, path: '/management/policeRoute' },
      { title: '重点人员管理', id: 2, path: '/management/pointPeople/pointPeopleAviation' },
      { title: '安保人员管理', id: 3, path: '/management/policeMan' },
      { title: '重点车辆信息管理', id: 4, path: '/management/stressCar/statisticsCar' },
      { title: '涉会车辆管理', id: 5, path: '/management/sociologyCar' },
      { title: '警情数据信息', id: 6, path: '/management/policeDatas' },
      { title: '人员背审信息', id: 7, path: '/management/peopleTrial' },
      { title: '参会人员信息', id: 8, path: '/management/meeting' }
    ]
  }),
  created () { },
  methods: {
    goList (title, path) {
      this.$router.push(path)
    }
  }
}
</script>
<style lang="scss">
.management {
  display: flex;
  width: 100%;
  height: 100%;
  padding-bottom: 1rem;
  box-sizing: border-box;
  .management_left {
    width: 10%;
    height: 100%;
    text-align: center;
    overflow: auto;
    .list_content {
      width: 90%;
      height: 0.6rem;
      background: url('~@/assets/admin/button.png') no-repeat center center;
      background-size: 100% 100%;
      margin: 0.3rem auto;
      line-height: 0.6rem;
      font-weight: bold;
      color: #fff;
      cursor: pointer;
      white-space: nowrap;
      font-size: 0.14rem;
    }
  }
  .management_right {
    overflow: auto;
    width: calc(100% - 10%);
    margin: 0.3rem 0 0 0.2rem;
  }
}
</style>
