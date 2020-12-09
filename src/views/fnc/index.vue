<template>
  <div class="fnc">
    <dl class="fnc_left">
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
    adminLeft: [
      { title: '票务数据接入', id: 0, path: '/fnc/ticket' },
      { title: '证件数据接入', id: 1, path: '/fnc/papers' },
      { title: '视频功能接入', id: 2, path: '/fnc/videoAccess' }
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
.fnc {
  display: flex;
  width: 100%;
  height: 100%;
  padding-bottom: 1rem;
  box-sizing: border-box;
  .fnc_left {
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
      font-size: 22px;
      cursor: pointer;
      white-space: nowrap;
      font-size: 0.14rem;
    }
  }
  .fnc_right {
    overflow: auto;
    width: calc(100% - 10%);
    margin: 0.3rem 0 0 0.2rem;
  }
}
</style>
