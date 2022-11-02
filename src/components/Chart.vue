<template>
  <div class="chart">
    <div
      v-for="item in items"
      :key="item"
      class="chart__item"
      :class="{ 'chart__item_active': activeItem == item }"
      :style="[
        { 'height': item * 10 + 'px' },
        { 'width': Math.round(100 / items.length) + 'px' },
      ]"
    >
      <div class="item__value">
        {{ item }}
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ChartComponent',
  props: {
    items: Array,
    activeItem: Number,
  },
  data () {
    return {
    }
  },
}
</script>

<style lang="scss">

.chart {
  display: flex;
  align-items: flex-end;
  max-width: 400px;

  .chart__item {
    position: relative;
    margin: 0 2px 0 2px;
    min-width: 1px;
    background-color: #000;

    &:hover {
      background-color: rgb(255, 100, 100);
    }

    &.chart__item_active {
      background-color: rgb(255, 100, 100);
    }

    &:hover > .item__value {
      display: block;
    }

    .item__value {
      position: absolute;
      display: none;
      bottom: -20px;
      left: 0;
      font-size: 12px;
    }
  }
}


</style>
