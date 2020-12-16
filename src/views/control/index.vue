<template>
  <div class="control">
    <dl class="control_left">
      <dd class="list_content" v-for="item in adminLeft" :key="item.id" @click="goList(item.title, item.path)">
        {{ item.title }}
      </dd>
    </dl>
    <div class="control_right">
      <router-view></router-view>
    </div>
  </div>
</template>
<script>
export default {
  data: () => ({
    adminLeft: [
      { title: '短信设置', id: 0, path: '/control/personnel' },
      { title: '车辆布控', id: 1, path: '/control/car' },
      {
        title: '人员布控', id: 2, path: '/control/note'
      },
      { title: '区域布控', id: 3, path: '/control/region' },
      { title: '布控解控', id: 4, path: '/control/release/releaseCar' }
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
.control {
  display: flex;
  width: 100%;
  height: 100%;
  padding-bottom: 1rem;
  box-sizing: border-box;
  .control_left {
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
      font-weight: bold;
    }
  }
  .control_right {
    overflow-y: auto;
    width: calc(100% - 10%);
    margin: 0.3rem 0 0 0.2rem;
  }
}
</style>
