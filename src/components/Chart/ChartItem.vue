<template>
  <div
    class="chart__item"
    :class="[
      { 'chart__item_red': coloredItems.red == index },
      { 'chart__item_blue': coloredItems.blue == index },
      { 'chart__item_green': coloredItems.green == index },
      { 'chart__item_yellow': coloredItems.yellow == index },
    ]"
    :style="[
      { 'height': item * 10 + 'px' },
      { 'width': itemWidth + 'px' },
    ]"
  >
    <div
      class="item__pointer"
      :style="[
        { 'bottom': pointerBottom + 'px' },
        { 'left': pointerLeft + 'px' },
        { 'width': pointerSize + 'px' },
        { 'height': pointerSize + 'px' },
      ]"
    />
    <div
      class="item__value"
      :style="[
        { 'bottom': valueBottom + 'px' },
        { 'left': valueLeft + 'px' },
        { 'font-size': valueFontSize + 'px' },
      ]"
    >
      {{ item }}
    </div>
  </div>
</template>

<script>
export default {
  name: 'ChartItem',
  props: {
    item: Number,
    index: Number,
    length: Number,
    coloredItems: Object,
  },
  computed: {
    itemWidth () {
      const width = Math.round(100 / this.length)
      if (width < 3) {
        return 3
      } else {
        return width
      }
    },
    pointerBottom () {
      return Math.round(- this.pointerSize * 1.5)
    },
    pointerLeft () {
      return Math.round(-Math.abs(this.itemWidth - this.pointerSize) / 2)
    },
    pointerSize () {
      const size = Math.round(this.itemWidth)
      if (size < 8) {
        return 8
      } else {
        return size
      }
    },
    valueBottom () {
      return Math.round(- this.valueFontSize * 2.5)
    },
    valueLeft () {
      if (this.item > 9) {
        return Math.round(-Math.abs(this.itemWidth - this.valueFontSize / 1.5))
      } else {
        return Math.round(-Math.abs(this.itemWidth - this.valueFontSize / 2))
      }
    },
    valueFontSize () {
      const fontSize = Math.round(this.itemWidth * 1.5)
      if (fontSize < 12) {
        return 12
      } else {
        return fontSize
      }
    }
  }
}
</script>

<style lang="scss">
.chart__item {
  position: relative;
  margin: 0 2px 0 2px;
  min-width: 3px;
  background-color: #000;

  &:hover {
    background-color: rgb(255, 100, 100);
  }

  &.chart__item_red {
    background-color: rgb(255, 0, 0);

    .item__pointer {
      mask-image: url(@/assets/svg/triangle.svg);
      -webkit-mask-image: url(@/assets/svg/triangle.svg);
      background-color: rgb(255, 0, 0);
    }
  }

  &.chart__item_blue {
    background-color: rgb(0, 0, 255);

    .item__pointer {
      mask-image: url(@/assets/svg/triangle.svg);
      -webkit-mask-image: url(@/assets/svg/triangle.svg);
      background-color: rgb(0, 0, 255);
    }
  }

    &.chart__item_green {
    background-color: rgb(0, 255, 0);

    .item__pointer {
      mask-image: url(@/assets/svg/triangle.svg);
      -webkit-mask-image: url(@/assets/svg/triangle.svg);
      background-color: rgb(0, 0, 255);
    }
  }

    &.chart__item_yellow {
    background-color: rgb(255, 255, 0);

    .item__pointer {
      mask-image: url(@/assets/svg/triangle.svg);
      -webkit-mask-image: url(@/assets/svg/triangle.svg);
      background-color: rgb(255, 255, 0);
    }
  }

  &:hover > .item__value {
    display: block;
  }

  .item__pointer {
    position: absolute;
    display: block;
    min-width: 8px;
    min-height: 8px;
    mask-repeat: no-repeat;
    mask-size: cover;
    mask-repeat: no-repeat;
    mask-size: cover;
  }

  .item__value {
    position: absolute;
    display: none;
  }
}
</style>