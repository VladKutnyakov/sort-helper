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

  .content {
    padding: 5%;
  }
}
</style>