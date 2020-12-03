<template>
  <div class="statistics">
    <el-button type="primary" v-for="item in adminLeft" :key="item.id" @click="goList(item.path)">{{ item.title }}</el-button>
    <router-view></router-view>
  </div>
</template>
<script>
export default {
  data: () => ({
    adminLeft: [
      { title: '接入检查站', id: 0, path: '/activity/statistics/checkpoint' },
      { title: '圈层防控', id: 1, path: '/activity/statistics/venueArchives' },
      { title: '街面巡防', id: 2, path: '/activity/statistics/activityJournal' }]
  }),
  created () { },
  methods: {
    goList (path) {
      this.$router.push(path)
    }
  }
}
</script>
<style lang="scss">
.statistics {
  .el-button {
    background-color: #07275b;
    border: none;
  }
}
</style>
