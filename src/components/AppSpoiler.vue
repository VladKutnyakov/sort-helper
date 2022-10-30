<template>
  <div class="spoiler" :class=" { 'spoiler_active': isActive }">
    <div class="spoiler__label" @click="toggleSpoiler()">
      <slot name="label" />
    </div>
    <div class="spoiler__content" v-show="isActive">
      <slot name="content" />
    </div>
  </div>
</template>

<script>
export default {
  name: 'AppSpoilerComponent',
  data () {
    return {
      isActive: false,
    }
  },
  methods: {
    toggleSpoiler () {
      return this.isActive = !this.isActive
    }
  }
}
</script>

<style lang="scss">
.spoiler {

  &.spoiler_active {

    .spoiler__label {
      background-color: rgb(73, 85, 255);
      border-radius: 16px 16px 0 0;
    
      &::after {
        transform: rotate(0deg);
      }
    }

    .spoiler__content {
      border-radius: 0 0 16px 16px;
      opacity: 1;
    }
  }

  .spoiler__label {
    padding: absolute;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 8px 16px;
    border-radius: 16px;
    color: #fff;
    background-color: rgb(96, 107, 255);
    cursor: pointer;
    transition: 0.2s all;

    &:hover {
      background-color: rgb(73, 85, 255);
    }

    &::after {
      content: '';
      -webkit-mask: url(@/assets/svg/triangle.svg) no-repeat 50% 50%;
      mask: url(@/assets/svg/triangle.svg) no-repeat 50% 50%;
      -webkit-mask-size: cover;
      mask-size: cover;
      width: 16px;
      height: 16px;
      background-color: #fff;
      transform: rotate(180deg);
      transition: 0.2s all;
    }
  }

  .spoiler__content {
    padding: 8px 16px;
    border-right: 2px solid rgba(73, 85, 255);
    border-bottom: 2px solid rgba(73, 85, 255);
    border-left: 2px solid rgba(73, 85, 255);
    background-color: rgba(255, 255, 255, 0.5);
    opacity: 0;
    transition: 0.2s all;
  }
}
</style>