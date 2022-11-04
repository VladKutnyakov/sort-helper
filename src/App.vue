<template>
  <div class="layout">
    <div class="content">
      <router-view />
    </div>
    <Footer />
  </div>
</template>

<script>
import Footer from '@/components/common/Footer.vue'

export default {
  name: 'App',
  components: {
    Footer,
  },
}
</script>

<style lang="scss">
body {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  background: rgb(60,59,86);
  background: linear-gradient(0deg, rgba(60,59,86,0.3449754901960784) 5%, rgba(238,238,238,1) 10%);

  .layout {
    font-family: 'Noto Sans', sans-serif;

    .content {
      padding: 5%;
    }
  }
}
</style>
