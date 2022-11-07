<template>
  <div
    class="sidebar"
    :class="{ 'sidebar_closed': !isOpened }"
  >
    <div
      class="sidebar__icon"
      @click="toggleSidebar"
    >
      <div
        class="icon"
        :class="[
          { 'icon__cross': isOpened },
          { 'icon__list': !isOpened }
        ]"
      />
    </div>
    <div class="sidebar__title">
      Sort Helper
    </div>
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
  background-color: rgba(238, 238, 238, 0.9);
  box-shadow: 5px 5px 10px 2px rgba(34, 60, 80, 0.2);
  transition: 0.2s all ease-out;
  z-index: 9999;

  &.sidebar_closed {
    left: -322px;

    .sidebar__icon {
      background-color: transparent;
    }
  }


  .sidebar__icon {
    position: absolute;
    right: -64px;
    top: 0;
    padding: 16px;
    border-radius: 0 0 8px 0;
    background-color: rgba(238, 238, 238, 0.9);
    box-shadow: 0px 5px 10px 2px rgba(34, 60, 80, 0.2);
    cursor: pointer;
    transition: 0.2s all;

    &:hover {
      background-color: rgba(96, 107, 255);

      .icon {
        background-color: rgb(255, 255, 255);
      }
    }

    .icon {
      width: 32px;
      height: 32px;
      background-size: cover;
      background-repeat: no-repeat;
      mask-repeat: no-repeat;
      mask-size: cover;
      mask-repeat: no-repeat;
      mask-size: cover;
      background-color: rgb(0, 0, 0);
      transition: 0.2s all;

      &.icon__cross {
        mask-image: url(@/assets/svg/cross.svg);
        -webkit-mask-image: url(@/assets/svg/cross.svg);
      }

      &.icon__list {
        mask-image: url(@/assets/svg/list.svg);
        -webkit-mask-image: url(@/assets/svg/list.svg);
      }
    }
  }

  .sidebar__title {
    padding: 32px 0;
    color: rgb(255, 255, 255);
    background: rgb(96, 107, 255);
    font-size: 32px;
    font-weight: 600;
    text-align: center;
    text-transform: uppercase;
    letter-spacing: 4px;
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