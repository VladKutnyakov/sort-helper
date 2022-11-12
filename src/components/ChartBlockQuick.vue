<template>
  <chart-block
    id="quick-sort"
    :itemsNumber="itemsNumber"
    :coloredItems="coloredItems"
    :delay="delay"
    :isFinished="isFinished"
    @sortStart="quickSort"
    @sortStop="quickSortStop"
    @sortStep="quickSortStep"
    @onShuffle="resetActiveItem"
  >
    <template #title>
      Быстрая сортировка
    </template>
    <template #description>
      Быстрая сортировка — это “разделяй и властвуй” алгоритм в стиле “сортировка слиянием”. Основная идея заключается в том, чтобы найти опорный элемент в массиве для сравнения с остальными частями, затем сдвигать элементы так, чтобы все части перед опорным элементом были меньше его, а все элементы после опорного были больше его. После этого рекурсивно выполнить ту же операцию на элементы до и после опорного. <br> В языке JavaScript стандартный метод сортировки <i>sort()</i> реализует алгоритм быстрой сортировки.
    </template>
    <template #complexity>
      O(n &#215; log n)
    </template>
    <template #source-code>
      <code>
        <pre>
function quickSort(array, start, end) {
  if (start === undefined) {
    start = 0
    end = array.length - 1
  } else if (start >= end) {
    return array
  }
  let rStart = start, rEnd = end
  let pivot = array[Math.floor(Math.random() * (end - start + 1) + start)]
  while (start &lt; end) {
    while (array[start] &lt;= pivot) start++
    while (array[end] > pivot) end--
    if (start &lt; end) {
      let temp = array[start]
      array[start] = array[end]
      array[end] = temp
    }
  }
  quickSort(array, rStart, start - 1)
  quickSort(array, start, rEnd)
}
        </pre>
      </code>
    </template>
  </chart-block>
</template>

<script>
import ChartBlock from '@/components/ChartBlock'

export default {
  name: 'ChartBlockQuick',
  components: {
    ChartBlock,
  },
  data () {
    return {
      coloredItems: {
        red: null,
        blue: null,
        green: null,
      },
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
      this.coloredItems = {
        red: null,
        blue: null,
        green: null,
      },
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

    quickSortStep (items, start, end) {
      if (start === undefined) {
        start = 0
        end = items.length - 1
      } else if (start >= end) {
        this.isFinished = true
        return items
      }
      let rStart = start, rEnd = end
      let pivot = items[Math.floor(Math.random() * (end - start + 1) + start)]
      while (start < end) {
        while (items[start] <= pivot) start++
        while (items[end] > pivot) end--
        if (start < end) {
          let temp = items[start]
          items[start] = items[end]
          items[end] = temp
        }
      }
      this.quickSortStep(items, rStart, start - 1)
      this.quickSortStep(items, start, rEnd)
    },
  },
}
</script>

<style lang="scss">

</style>