<template>
  <div class="business">
    <dl class="business_left">
      <dt class="list_title">{{ title }}</dt>
      <dd class="list_content" v-for="item in adminLeft" :key="item.id" @click="goList(item.title, item.path)">
        {{ item.title }}
      </dd>
    </dl>
    <div class="business_right">
      <router-view></router-view>
    </div>
  </div>
</template>
<script>
export default {
  data: () => ({
    title: '现场管理',
    adminLeft: [
      { title: '现场管理', id: 0, path: 'scene' },
      { title: '情报研判', id: 1, path: 'study' },
      { title: '低慢小管理', id: 2 },
      { title: '圈层管理', id: 3 }
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
.business {
  display: flex;
  width: 100%;
  height: 100%;
  .business_left {
    width: 10%;
    height: 100%;
    text-align: center;
    .list_title {
      padding: 0.1rem;
      font-size: 0.18rem;
      color: #00ffff;
      font-family: 'Arial Normal', 'Arial';
      border-bottom: 2px solid rgb(121, 121, 121);
      white-space: nowrap;
    }
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
    }
  }
  .business_right {
    width: calc(100% - 10%);
    overflow-y: auto;
    padding-bottom: 1rem;
    box-sizing: border-box;
  }
}
</style>
