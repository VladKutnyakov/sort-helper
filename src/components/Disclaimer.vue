<template>
  <div
    ref="disclaimer"
    class="disclaimer"
  >
    <div
      v-if="hasHeading"
      class="disclaimer__heading"
    >
      <slot name="heading" />
    </div>
    <div class="disclaimer__content">
      <slot name="content" />
    </div>
  </div>
</template>

<script>
export default {
  name: 'Disclaimer',
  computed: {
    hasHeading () {
      console.log(this.$refs.disclaimer)
      return this.$refs.disclaimer
    }
  }
}
</script>

<style lang="scss">
.disclaimer {
  text-align: center;
  
  .disclaimer__heading {
    padding: 0 0 16px 0;
    font-size: 48px;
    color: rgb(221, 33, 33);
  }

  .disclaimer__content {
    padding: 0 0 64px 0;
    font-size: 24px;
    color: rgb(53, 7, 7);
  }
}
</style>