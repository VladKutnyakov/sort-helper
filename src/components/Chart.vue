<template>
  <div class="chart">
    <div
      v-for="item in items"
      :key="item"
      class="chart__item"
      :class="[
        { 'chart__item_swapped': swappedItem == item },
        { 'chart__item_choosen': choosenItem == item }
      ]"
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
  name: 'Chart',
  props: {
    items: Array,
    swappedItem: Number,
    choosenItem: Number,
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
    min-width: 3px;
    background-color: #000;

    &:hover {
      background-color: rgb(255, 100, 100);
    }

    &.chart__item_swapped {
      background-color: rgb(255, 0, 0);

      &:after {
        content: '';
        position: absolute;
        display: block;
        bottom: -12px;
        left: -2px;
        width: 8px;
        height: 8px;
        mask-repeat: no-repeat;
        mask-size: cover;
        mask-repeat: no-repeat;
        mask-size: cover;
        mask-image: url(@/assets/svg/triangle.svg);
        -webkit-mask-image: url(@/assets/svg/triangle.svg);
        background-color: rgb(255, 0, 0);
      }
    }

    &.chart__item_choosen {
      background-color: rgb(0, 0, 255);

      &:after {
        content: '';
        position: absolute;
        display: block;
        bottom: -12px;
        left: -2px;
        width: 8px;
        height: 8px;
        mask-repeat: no-repeat;
        mask-size: cover;
        mask-repeat: no-repeat;
        mask-size: cover;
        mask-image: url(@/assets/svg/triangle.svg);
        -webkit-mask-image: url(@/assets/svg/triangle.svg);
        background-color: rgb(0, 0, 255);
      }
    }

    &:hover > .item__value {
      display: block;
    }

    .item__value {
      position: absolute;
      display: none;
      bottom: -28px;
      left: -2px;
      font-size: 12px;
    }
  }
}


</style>
