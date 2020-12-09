<template>
  <div class="admin">
    <dl class="admin_left">
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
    adminLeft: [{ title: '角色管理', id: 0, path: '/admin/role' }, { title: '用户管理', id: 1, path: '/admin/user' }, { title: '日志查询', id: 2, path: '/admin/journal' }]
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
.admin {
  display: flex;
  width: 100%;
  height: 100%;
  padding-bottom: 1rem;
  box-sizing: border-box;
  .admin_left {
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
      color: #fff;
      font-size: 0.14rem;
      cursor: pointer;
      white-space: nowrap;
    }
  }
  .admin_right {
    overflow: auto;
    width: calc(100% - 10%);
    margin: 0.3rem 0 0 0.2rem;
  }
}
</style>
