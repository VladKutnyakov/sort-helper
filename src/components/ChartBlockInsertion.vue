<template>
  <chart-block
    id="insertion-sort"
    :itemsNumber="itemsNumber"
    :coloredItems="coloredItems"
    :delay="delay"
    :isFinished="isFinished"
    @sortStart="insertionSort"
    @sortStop="insertionSortStop"
    @sortStep="insertionSortStep"
    @onShuffle="resetActiveItem"
  >
    <template #title>
      Сортировка вставками
    </template>
    <template #description>
      Сортировка вставками — один из простейших алгоритмов сортировки. Суть его заключается в том, что в цикле один за другим выбираются элементы массива и сравниваются с элементами, стоящими перед ними, до тех пор пока не будет найдет элемент, меньший текущего, или мы не дойдем до начала массива. Перед ним мы и вставляем текущий, для этого предварительно сдвинув все элементы, которые оказались больше текущего, в сторону увеличения на один индекс.
    </template>
    <template #complexity>
      O(n<sup>2</sup>)
    </template>
    <template #source-code>
      <code>
        <pre>
for (let i = 1, l = array.length; i &lt; l; i++) {
    const current = array[i]
    let j = i
    while (j > 0 &#38;&#38; array[j - 1] > current) {
        array[j] = array[j - 1]
        j--
    }
    array[j] = current
}
        </pre>
      </code>
    </template>
  </chart-block>
</template>

<script>
import ChartBlock from '@/components/ChartBlock'

export default {
  name: 'ChartBlockInsertion',
  components: {
    ChartBlock,
  },
  data () {
    return {
      coloredItems: {
        red: null,
        blue: null,
      },
      step: {
        i: 1,
        j: 0,
      },
      isFinished: true,
      itemsNumber: 30,
      delay: 20,
      isLowerItemFound: true,
      currentItem: null,
    }
  },
  methods: {
    resetActiveItem () {
      this.coloredItems = {
        red: null,
        blue: null,
      },
      this.isLowerItemFound = true
      this.currentItem = null
      this.step = {
        i: 1,
        j: 0,
      }
    },

    sleep (ms) {
      return new Promise(resolve => {
        setTimeout(resolve, ms)
      })
    },

    async insertionSort (items, delay) {
      this.isFinished = false

      while (!this.isFinished) {
        this.insertionSortStep(items)
        await this.sleep(delay)
      }
    },

    insertionSortStop () {
      this.isFinished = true
    },

    insertionSortStep (items) {
      if (this.step.i < items.length) {
        if (this.isLowerItemFound) {
          this.coloredItems.blue = this.step.i
          this.currentItem = items[this.step.i]
          this.step.j = this.step.i
          this.isLowerItemFound = false
        }
        if (this.step.j > 0 && items[this.step.j - 1] > this.currentItem) {
          this.coloredItems.red = this.step.j
          items[this.step.j] = items[this.step.j - 1]
          this.step.j--
        } else {
          this.coloredItems.red = this.step.j
          items[this.step.j] = this.currentItem
          this.step.i++
          this.isLowerItemFound = true
        }
      } else {
        this.insertionSortStop()
      }
    },
  },
}
</script>

<style lang="scss">

</style>