<template>
  <div class="fnc">
    <dl class="fnc_left">
      <dt class="list_title">{{ title }}</dt>
      <dd class="list_content" v-for="item in adminLeft" :key="item.id" @click="goList(item.title, item.path)">
        {{ item.title }}
      </dd>
    </dl>
    <div class="fnc_right">
      <router-view></router-view>
    </div>
  </div>
</template>
<script>
export default {
  data: () => ({
    title: '票务数据接入',
    adminLeft: [
      { title: '票务数据接入', id: 0, path: '/fnc/ticket' },
      { title: '证件数据接入', id: 1, path: '/fnc/papers' },
      { title: '视频功能接入', id: 2 }
    ]
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
.fnc {
  display: flex;
  width: 100%;
  height: 100%;
  .fnc_left {
    width: 10%;
    height: 100%;
    text-align: center;
    .list_title {
      padding: 0.1rem;
      font-size: 28px;
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
      font-size: 22px;
      cursor: pointer;
    }
  }
  .fnc_right {
    flex: 1;
    border-top: 1px solid rgb(90, 92, 98);
    margin: 1rem 0.5rem 0 0;
    padding: 0.2rem 0.6rem 0 0.2rem;
  }
}
</style>
