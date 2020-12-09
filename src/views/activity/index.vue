<template>
  <div class="activity">
    <dl class="activity_left">
      <dt class="list_title">{{ title }}</dt>
      <dd class="list_content" v-for="item in adminLeft" :key="item.id" @click="goList(item.title, item.path)">
        {{ item.title }}
      </dd>
    </dl>
    <div class="activity_right">
      <router-view></router-view>
    </div>
  </div>
</template>
<script>
export default {
  data: () => ({
    title: '活动申请',
    adminLeft: [
      { title: '活动申请', id: 0, path: '/activity/apply' },
      { title: '活动审批', id: 1, path: '/activity/approval' },
      { title: '安保方案', id: 2, path: '/activity/programme' },
      { title: '人员背审', id: 3, path: '/activity/trial' },
      { title: '活动归档', id: 5, path: '/activity/file/activityArchives' },
      { title: '战果统计报表', id: 6, path: '/activity/statistics/checkpoint' }]
  }),
  created () { },
  methods: {
    goList (title, path) {
      this.title = title
      this.$router.push(path)
    }
  }
}
</script>
<style lang="scss">
.activity {
  display: flex;
  width: 100%;
  height: 100%;
  .activity_left {
    width: 10%;
    height: 100%;
    text-align: center;
    .list_title {
      padding: 0.1rem;
      font-size: 0.28rem;
      color: #00ffff;
      font-family: 'Arial Normal', 'Arial';
      border-bottom: 2px solid rgb(121, 121, 121);
    }
    .list_content {
      width: 90%;
      height: 0.6rem;
      background: url('~@/assets/admin/button.png') no-repeat center center;
      background-size: 100% 100%;
      margin: 0.3rem auto;
      line-height: 0.6rem;
      color: #fff;
      font-size: 0.2rem;
      cursor: pointer;
    }
  }
  .activity_right {
    flex: 1;
    border-top: 1px solid rgb(90, 92, 98);
    margin: 1rem 0.5rem 0 0;
    padding: 0.2rem 0 0 0.2rem;
  }
}
</style>
