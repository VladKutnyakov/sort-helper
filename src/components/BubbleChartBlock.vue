<template>
  <chart-block
    :items="items"
    @sortStart="bubbleSort"
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
  name: 'BubbleChartBlock',
  components: {
    ChartBlock,
  },
  props: {

  },
  data () {
    return {
      items: [],
      activeItem: {
        value: null,
      },
      isActive: false,
      itemsNumber: 30,
      delay: 20,
    }
  },
  watch: {
    itemsNumber () {
      this.$emit()
    }
  },
  methods: {
    fillItemsArray () {
      this.chartItems = []
      for (let i = 0; i < this.itemsNumber; i++) {
        this.chartItems.push(i + 1)
      }
    },

    sleep (ms) {
      return new Promise(resolve => {
        setTimeout(resolve, ms)
      })
    },

    async bubbleSort (items, activeItem, isAuto, delay) {
      for (let i = 0; i < this.items.length; i++) {
        for (let j = 0; j < items.length; j++) {
          if (items[j] > items[j + 1]) {
            let temp = items[j]
            activeItem.value = temp
            items[j] = items[j + 1]
            items[j + 1] = temp
            
            if (!isAuto) {
              console.log('step')
            } else {
              await this.sleep(delay)
            }
          }
        }
      }
    },

    shuffleItems () {
      this.items = this.items
        .map(value => ({ value, sort: Math.random() }))
        .sort((a, b) => a.sort - b.sort)
        .map(({ value }) => value)
      this.activeItem.value = null
    },
  },
  created () {
    this.fillItemsArray()
  }
}
</script>

<style lang="scss">

</style>