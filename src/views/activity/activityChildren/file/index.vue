<template>
  <div class="file">
    <el-button type="primary" v-for="item in adminLeft" :key="item.id" @click="goList(item.path)">{{ item.title }}</el-button>
    <router-view></router-view>
  </div>
</template>
<script>
export default {
  data: () => ({
    adminLeft: [
      { title: '活动档案', id: 0, path: '/activity/file/activityArchives' },
      { title: '场馆档案', id: 1, path: '/activity/file/venueArchives' },
      { title: '活动日志', id: 2, path: '/activity/file/activityJournal' }]
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
.file {
   padding-right: 0.2rem;
  box-sizing: border-box;
  .el-button {
    background-color: #07275b;
    border: none;
  }
}
</style>
