<template>
  <chart-block
    id="quick-sort"
    :itemsNumber="itemsNumber"
    :redItemIndex="swappedItemIndex"
    :blueItemIndex="choosenItemIndex"
    :delay="delay"
    :isFinished="isFinished"
    @sortStart="quickSort"
    @sortStop="quickSortStop"
    @sortStep="quickSortStep"
    @onShuffle="resetActiveItem"
  >
    <template #title>
      Сортировка выбором
    </template>
    <template #description>
      Сортировка выбором является одним из простейших алгоритмов. Его суть — за каждый проход по массиву выбрать минимальный элемент (для сортировки по возрастанию) и поменять его местами с первым элементом в еще не отсортированном участке массива, тем самым уменьшив длину этого участка на один, и так до тех пор пока не будут отсортированы все элементы.
    </template>
    <template #complexity>
      O(n<sup>2</sup>)
    </template>
    <template #source-code>
      <code>
        <pre>
function quickSort(array) {
    for (let i = 0; i &lt; array.length; i++) {
        let min = i;
        for (let j = i + 1; j &lt; array.length; j++) {
            if (array[min] > array[j]) {
                min = j;
            }
        }
        if (i != min) {
          let temp = array[i]
          array[i] = array[min]
          array[min] = temp
        }
    }
}
        </pre>
      </code>
    </template>
  </chart-block>
</template>

<script>
import ChartBlock from '@/components/ChartBlock.vue'

export default {
  name: 'ChartBlockQuick',
  components: {
    ChartBlock,
  },
  data () {
    return {
      swappedItemIndex: null,
      choosenItemIndex: null,
      step: {
        i: 0,
        j: 1,
      },
      isFinished: true,
      itemsNumber: 30,
      delay: 20,
      minItemIndex: null,
    }
  },
  methods: {
    resetActiveItem () {
      this.swappedItemIndex = null
      this.choosenItemIndex = null
      this.minItemIndex = null
      this.step = {
        i: 0,
        j: 1,
      }
    },

    sleep (ms) {
      return new Promise(resolve => {
        setTimeout(resolve, ms)
      })
    },

    async quickSort (items, delay) {
      this.isFinished = false

      while (!this.isFinished) {
        this.quickSortStep(items)
        await this.sleep(delay)
      }
    },

    quickSortStop () {
      this.isFinished = true
    },

    quickSortStep (items) {
     
    },
  },
}
</script>

<style lang="scss">

</style>