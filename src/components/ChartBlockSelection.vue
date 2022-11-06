<template>
  <chart-block
    id="selection-sort"
    :itemsNumber="itemsNumber"
    :swappedItem="swappedItem"
    :choosenItem="choosenItem"
    :delay="delay"
    :isFinished="isFinished"
    @sortStart="selectionSort"
    @sortStop="selectionSortStop"
    @sortStep="selectionSortStep"
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
function selectionSort(array) {
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
  name: 'ChartBlockSelection',
  components: {
    ChartBlock,
  },
  data () {
    return {
      swappedItem: null,
      choosenItem: null,
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
      this.swappedItem = null
      this.choosenItem = null
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

    async selectionSort (items, delay) {
      this.isFinished = false

      while (!this.isFinished) {
        this.selectionSortStep(items)
        await this.sleep(delay)
      }
    },

    selectionSortStop () {
      this.isFinished = true
    },

    selectionSortStep (items) {
      this.choosenItem = items[this.step.j]

      if (!this.minItemIndex) {
        this.minItemIndex = this.step.i
      }

      if (items[this.minItemIndex] > items[this.step.j]) {
          this.minItemIndex = this.step.j
      }

      this.step.j++

      if (this.step.j >= items.length) {
        this.step.j = this.step.i + 1
        if (this.step.i != this.minItemIndex) {
          this.swappedItem = items[this.minItemIndex]
          
          items[this.minItemIndex] = items[this.step.i]
          items[this.step.i] = this.swappedItem
        }
        
        this.step.i++
        this.minItemIndex = this.step.i
        if (this.step.i >= items.length) {
          this.isFinished = true
        }
      }
    },
  },
}
</script>

<style lang="scss">

</style>