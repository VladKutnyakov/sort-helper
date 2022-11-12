<template>
  <div class="chart">
    <chart-item
      v-for="(item, index) in items"
      :key="index"
      :item="item"
      :index="index"
      :length="items.length"
      :coloredItems="coloredItems"
    />
  </div>
</template>

<script>
import ChartItem from '@/components/Chart/ChartItem.vue'

export default {
  name: 'Chart',
  components: {
    ChartItem,
  },
  props: {
    items: Array,
    coloredItems: Object,
  },
}
</script>

<style lang="scss">

.chart {
  display: flex;
  align-items: flex-end;
  max-width: 400px;
}


</style>
