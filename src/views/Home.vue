<template>
  <div class="home">
    <chart-block-bubble />
    <chart-block-selection />
    <chart-block-insertion />
  </div>
</template>

<script>
import ChartBlockBubble from '@/components/ChartBlockBubble.vue'
import ChartBlockSelection from '@/components/ChartBlockSelection.vue'
import ChartBlockInsertion from '@/components/ChartBlockInsertion.vue'

export default {
  name: 'Home',
  components: {
    ChartBlockBubble,
    ChartBlockSelection,
    ChartBlockInsertion
  },
}
</script>


<style lang="scss">
  
</style>