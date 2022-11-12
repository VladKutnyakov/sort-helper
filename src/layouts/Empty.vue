<template>
  <div class="empty-layout">
    <div class="content">
      <router-view />
    </div>
  </div>
</template>

<script>
export default {
  name: 'EmptyLayout',
}
</script>

<style lang="scss">
.empty-layout {
  min-height: 100vh;
  background: rgb(238, 238, 238);

  .content {
    padding: 5%;
  }
}
</style>