<template>
  <div class="situation">
    <router-view></router-view>
  </div>
</template>
<script>
export default {
  data: () => ({
  }),
  created () { },
  methods: {
  }
}
</script>
<style lang="scss">
.situation {
  width: 100%;
  height: 100%;
  padding: 0 0.2rem;
  box-sizing: border-box;
}
</style>
