<template>
  <chart-block
    :itemsNumber="itemsNumber"
    :activeItem="activeItem"
    :delay="delay"
    :isFinished="isFinished"
    @sortStart="bubbleSort"
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

    async bubbleSort (items, delay) {
      this.isFinished = false

      for (let i = 0; i < items.length; i++) {
        for (let j = 0; j < items.length; j++) {
          if (items[j] > items[j + 1]) {
            let temp = items[j]
            items[j] = items[j + 1]
            items[j + 1] = temp

            this.activeItem = temp

            await this.sleep(delay)
          }
        }
      }

      this.isFinished = true
    },

    bubbleSortStep (items) {
      if (items[this.step.j] > items[this.step.j + 1]) {
        let temp = items[this.step.j]
        items[this.step.j] = items[this.step.j + 1]
        items[this.step.j + 1] = temp
        
        this.activeItem = temp
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