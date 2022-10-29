<template>
  <div class="chart">
    <div
      class="chart__item"
      :class="{ 'chart__item_active': activeItem == item }"
      :style="{ 'height': item * 20 + 'px' }"
      v-for="item in items"
      :key="item"
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

  .chart__item {
    position: relative;
    margin: 0 3px 0 3px;
    width: 10px;
    background-color: #000;
    cursor: pointer;

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
