<template>
  <div class="home">
    
    <chart-block
      :items="items"
      @sortStart="bubbleSort"
      @sortStep="bubbleSort"
    >
      <template #title>
        Сортировка пузырьком
      </template>
      <template #description>
        Сортировка пузырьком — один из самых известных алгоритмов сортировки. Здесь нужно последовательно сравнивать значения соседних элементов и менять числа местами, если предыдущее оказывается больше последующего. Таким образом элементы с большими значениями оказываются в конце списка, а с меньшими остаются в начале. Представленный алгоритм является простейшим, и может быть усовершенствован.
      </template>
      <template #complexity>
        O(n<sup>2</sup>)
      </template>
      <template #source-code>
        <code>
          <pre>
function bubbleSort(array) {
  for (let i = 0; i &lt; array.length; i++) {
    for (let j = 0; j &lt; array.length; j++) {
      if (array[j] > array[j + 1]) {
        let temp = array[j];
        array[j] = array[j + 1];
        array[j + 1] = temp;
      }
    }
  }
  return array;
}
          </pre>
        </code>
      </template>
    </chart-block>
    
  </div>
</template>

<script>
import ChartBlock from '@/components/ChartBlock.vue'

export default {
  name: 'HomeView',
  components: {
    ChartBlock
  },
  data () {
    return {
      items: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20],
    }
  },
  methods: {
    sleep (ms) {
      return new Promise(resolve => {
        setTimeout(resolve, ms)
      })
    },

    async bubbleSort (chartItems, activeItem, isAuto, delay) {
      for (let i = 0; i < chartItems.length; i++) {
        for (let j = 0; j < chartItems.length; j++) {
          if (chartItems[j] > chartItems[j + 1]) {
            let temp = chartItems[j]
            activeItem.value = temp
            console.log(activeItem.value)
            chartItems[j] = chartItems[j + 1]
            chartItems[j + 1] = temp
            if (!isAuto) {
              console.log('step')

            } else {
              await this.sleep(delay)
            }
          }
        }
      }
    },

    // async bubbleSort (chartItems, activeItem, isAuto) {
    //   for (let i = 0; i < chartItems.length; i++) {
    //     for (let j = 0; j < chartItems.length; j++) {
    //       this.bubbleSortStep(chartItems, j, activeItem)
    //       if (!isAuto) {
    //         console.log('step')

    //       } else {
    //         await this.sleep(20)
    //       }
    //     }
    //   }
    //   return false
    // },

    // bubbleSortStep (chartItems, j, activeItem) {
    //   if (chartItems[j] > chartItems[j + 1]) {
    //     let temp = chartItems[j]
    //     chartItems[j] = chartItems[j + 1]
    //     chartItems[j + 1] = temp
    //   }
    //   activeItem.value = chartItems[j]
    // },
  }
}
</script>


<style lang="scss">
  
</style>