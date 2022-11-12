<template>
  <div class="home">
    <chart-block-bubble />
    <chart-block-selection />
    <chart-block-insertion />
    <chart-block-quick />
  </div>
</template>

<script>
import ChartBlockBubble from '@/components/ChartBlockBubble'
import ChartBlockSelection from '@/components/ChartBlockSelection'
import ChartBlockInsertion from '@/components/ChartBlockInsertion'
import ChartBlockQuick from '@/components/ChartBlockQuick'

export default {
  name: 'Home',
  components: {
    ChartBlockBubble,
    ChartBlockSelection,
    ChartBlockInsertion,
    ChartBlockQuick,
  },
}
</script>


<style lang="scss">
  
</style>