<template>
  <chart-block
    :itemsNumber="itemsNumber"
    :swappedItem="swappedItem"
    :choosenItem="choosenItem"
    :delay="delay"
    :isFinished="isFinished"
    @sortStart="bubbleSort"
    @sortStop="bubbleSortStop"
    @sortStep="bubbleSortStep"
    @onShuffle="resetActiveItem"
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
      swappedItem: null,
      choosenItem: null,
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
      this.swappedItem = null
      this.choosenItem = null
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

    async bubbleSort (items, delay) {
      this.isFinished = false

      while (!this.isFinished) {
        this.bubbleSortStep(items)
        await this.sleep(delay)
      }
    },

    bubbleSortStop () {
      this.isFinished = true
    },

    bubbleSortStep (items) {
      this.choosenItem = items[this.step.j]

      if (items[this.step.j] > items[this.step.j + 1]) {
        this.swappedItem = items[this.step.j + 1]

        items[this.step.j + 1] = items[this.step.j]
        items[this.step.j] = this.swappedItem
      }

      if (this.step.j++ >= items.length) {
        this.step.j = 0
        if (this.step.i++ >= items.length) {
          this.isFinished = true
        }
      }
    },
  },
}
</script>

<style lang="scss">

</style>