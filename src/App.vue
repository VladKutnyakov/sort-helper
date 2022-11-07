<template>
  <component :is="layout" />
</template>

<script>
import DefaultLayout from "@/layouts/Default.vue";
import EmptyLayout from "@/layouts/Empty.vue";

export default {
  name: 'App',
  components: {
    DefaultLayout,
    EmptyLayout,
  },
  data() {
    return {
      layout: "DefaultLayout",
    };
  },
  watch: {
    $route(route) {
      switch (route.name) {
        case "NotFound":
          this.layout = "EmptyLayout";
          break;
        default:
          this.layout = "DefaultLayout";
          break;
      }
    },
  },
}
</script>

<style lang="scss">
html {
  scroll-behavior: smooth;
  
  body {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Noto Sans', sans-serif;
  }
}
</style>
