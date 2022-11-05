<template>
  <div class="sidebar">
    <div
      class="sidebar__icon"
      @click="toggleSidebar"
    >
      a
    </div>
    <div class="sidebar__list">
      <div
        v-for="item in items"
        :key="item"
        class="list__item"
      >
        a
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'SideBar',
  props: {
    items: Array,
  },
  data () {
    return {
      isOpened: false,
    }
  },
  methods: {
    toggleSidebar () {

    }
  }
}
</script>

<style lang="scss">

</style>