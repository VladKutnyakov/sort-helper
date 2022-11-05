<template>
  <button class="btn">
    <slot />
  </button>
</template>

<script>
export default {
  name: 'AppButton',
}
</script>

<style lang="scss">
.btn {
  padding: 16px;
  border: none;
  border-radius: 16px;
  font-size: 16px;
  font-weight: 600;
  color: #fff;
  background-color: rgb(96, 107, 255);
  cursor: pointer;
  transition: 0.2s all;

  &:hover {
    background-color: rgb(73, 85, 255);
  }
  
  &:disabled {
    cursor: unset;
    background-color: rgba(96, 106, 255, 0.5);
  }

  &:disabled:hover {
    background-color: rgba(96, 106, 255, 0.5);
  }

  .btn__icon {
    width: 24px;
    height: 24px;
    background-size: cover;
    background-repeat: no-repeat;
    mask-repeat: no-repeat;
    mask-size: cover;
    mask-repeat: no-repeat;
    mask-size: cover;

    &.triangle {
      mask-image: url(@/assets/svg/triangle.svg);
      -webkit-mask-image: url(@/assets/svg/triangle.svg);
      background-color: #fff;
    }

    &.pause {
      mask-image: url(@/assets/svg/pause.svg);
      -webkit-mask-image: url(@/assets/svg/pause.svg);
      background-color: #fff;
    }
  }

}
</style>