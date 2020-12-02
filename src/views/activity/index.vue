<template>
  <div class="admin">
    <dl class="admin_left">
      <dt class="list_title">{{ title }}</dt>
      <dd class="list_content" v-for="item in adminLeft" :key="item.id" @click="goList(item.title, item.path)">
        {{ item.title }}
      </dd>
    </dl>
    <div class="admin_right">
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
      { title: '安保方案', id: 2, path: '/admin/journal' },
      { title: '人员背审', id: 3, path: '/admin/journal' },
      { title: '安保方案', id: 4, path: '/admin/journal' },
      { title: '活动归档', id: 5, path: '/admin/journal' },
      { title: '战果统计报表', id: 6, path: '/admin/journal' }]
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
.admin {
  display: flex;
  width: 100%;
  height: 100%;
  .admin_left {
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
  .admin_right {
    flex: 1;
    border-top: 1px solid rgb(90, 92, 98);
    margin: 1rem 0.5rem 0 0;
    padding: 0.2rem 0 0 0.2rem;
  }
}
</style>
