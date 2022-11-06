<template>
  <div class="not-found">
    <div class="not-found__code">
      404
    </div>
    <div class="not-found__title">
      Страница не найдена
    </div>
  </div>
</template>

<script>
export default {
  
}
</script>

<style lang="scss">
.not-found {
  text-align: center;

  .not-found__code {
    font-size: 48px;
    font-weight: 600;
    color: rgba(0, 0, 0, 0.6);
  }

  .not-found__title {
    font-size: 24px;
    padding: 16px 0 0 0;
  }
}
</style>