<template>
  <div
    class="sidebar"
    :class="{ 'sidebar_closed': !isOpened }"
  >
    <div
      class="sidebar__icon"
      :class="[
        { 'sidebar__icon-cross': isOpened },
        { 'sidebar__icon-list': !isOpened }
      ]"
      @click="toggleSidebar"
    />
    <div
      class="sidebar__list"
    >
      <a
        v-for="item in items"
        :key="item"
        :href="item.link"
        class="list__item"
        @click="toggleSidebar"
      >
        {{ item.title }}
      </a>
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
      this.isOpened = !this.isOpened
    }
  }
}
</script>

<style lang="scss">
.sidebar {
  position: fixed;
  top: 0;
  left: 0;
  height: 100%;
  backdrop-filter: blur(2px);
  background-color: rgba(255, 255, 255, 0.8);
  transition: 0.2s all ease-in-out;
  z-index: 9999;

  &.sidebar_closed {
    left: -322px;
  }


  .sidebar__icon {
    position: absolute;
    right: -64px;
    top: 32px;
    padding: 8px;
    width: 24px;
    height: 24px;
    background-size: cover;
    background-repeat: no-repeat;
    mask-repeat: no-repeat;
    mask-size: cover;
    mask-repeat: no-repeat;
    mask-size: cover;
    cursor: pointer;

    &.sidebar__icon-cross {
      mask-image: url(@/assets/svg/cross.svg);
      -webkit-mask-image: url(@/assets/svg/cross.svg);
      background-color: rgb(0, 0, 0);
    }

    &.sidebar__icon-list {
      mask-image: url(@/assets/svg/list.svg);
      -webkit-mask-image: url(@/assets/svg/list.svg);
      background-color: rgb(0, 0, 0);
    }
  }

  .sidebar__list {
    padding: 32px 0;

    .list__item {
      display: block;
      padding: 16px 32px 16px 32px;
      font-size: 24px;
      color: rgb(0, 0, 0);
      text-decoration: none;
      transition: 0.2s all;

      &:hover {
        color: rgb(255, 255, 255);
        background: rgb(96, 107, 255);
      }
    }
  }
}
</style>