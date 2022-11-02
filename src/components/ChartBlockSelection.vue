<template>
  <chart-block
    :itemsNumber="itemsNumber"
    :activeItem="activeItem"
    :delay="delay"
    :isFinished="isFinished"
    @sortStart="selectionSort"
    @sortStep="selectionSortStep"
    @onShuffle="resetActiveItem"
  >
    <template #title>
      Сортировка выбором
    </template>
    <template #description>
      Сортировка выбором является одним из простейших алгоритмов. Его суть — за каждый проход по массиву выбрать минимальный элемент (для сортировки по возрастанию) и поменять его местами с первым элементом в еще не отсортированном участке массива, тем самым уменьшив длину этого участка на один, и так до тех пор пока не будут отсортированы все элементы. Представленный алгоритм является простейшим, и может быть усовершенствован.
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
  name: 'ChartBlockBubble',
  components: {
    ChartBlock,
  },
  data () {
    return {
      activeItem: null,
      step: {
        i: 0,
        j: 0,
      },
      isFinished: true,
      itemsNumber: 30,
      delay: 20,
    }
  },
  methods: {
    resetActiveItem () {
      this.activeItem = null
      this.step = {
        i: 0,
        j: 0,
      }
    },

    sleep (ms) {
      return new Promise(resolve => {
        setTimeout(resolve, ms)
      })
    },

    async selectionSort (items, delay) {
      this.isFinished = false

      for (let i = 0; i < items.length; i++) {
        let min = i;
        for (let j = i + 1; j < items.length; j++) {
            if (items[min] > items[j]) {
                min = j;
            }
        }
        if (i != min) {
          let temp = items[i]
          items[i] = items[min]
          items[min] = temp

          this.activeItem = temp

          await this.sleep(delay)
        }
      }

      this.isFinished = true
    },

    selectionSortStep (items) {
      let min = this.step.i;
        for (let j = this.step.i + 1; j < items.length; j++) {
            if (items[min] > items[j]) {
                min = j;
            }
        }
        if (this.step.i != min) {
          let temp = items[this.step.i]
          items[this.step.i] = items[min]
          items[min] = temp

          this.activeItem = temp
        }
        
        if (this.step.i++ >= items.length) {
          this.isFinished = true
        }
    },
  },
}
</script>

<style lang="scss">

</style>