<template>
  <div class="content">
    <router-view />
  </div>
</template>

<script>
export default {
  name: 'App',
}
</script>

<style lang="scss">
body {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  background-color: #8ec5fc85;
  background-image: linear-gradient(62deg, #8ec6ff9a 0%, #e0c3fc71 100%);

  .content {
    padding: 5%;
    font-family: 'Noto Sans', sans-serif;
    font-weight: 600;
  }
}
</style>
