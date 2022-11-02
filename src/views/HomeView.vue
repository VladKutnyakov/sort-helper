<template>
  <div class="home">
    <disclaimer>
      <template #content>
        Визуализация работы алгоритмов сортировки не отражает их реальную скорость работы и нужна лишь для наглядности
      </template>
    </disclaimer>
    <chart-block-bubble />
    <chart-block-selection />
  </div>
</template>

<script>
import Disclaimer from '@/components/Disclaimer.vue'
import ChartBlockBubble from '@/components/ChartBlockBubble.vue'
import ChartBlockSelection from '@/components/ChartBlockSelection.vue'

export default {
  name: 'HomeView',
  components: {
    Disclaimer,
    ChartBlockBubble,
    ChartBlockSelection,
  },
}
</script>


<style lang="scss">
  
</style>