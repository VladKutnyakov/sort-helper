<template>
  <chart-block
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
    const current = array[i];
    let j = i;
    while (j > 0 &#38;&#38; array[j - 1] > current) {
        array[j] = array[j - 1];
        j--;
    }
    array[j] = current;
}
        </pre>
      </code>
    </template>
  </chart-block>
</template>

<script>
import ChartBlock from '@/components/ChartBlock.vue'

export default {
  name: 'ChartBlockInsertion',
  components: {
    ChartBlock,
  },
  data () {
    return {
      swappedItem: null,
      choosenItem: null,
      step: {
        i: 1,
        j: 0,
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
        i: 1,
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

      while (!this.isFinished) {
        this.selectionSortStep(items)
        await this.sleep(delay)
      }
    },

    selectionSortStop () {
      this.isFinished = true
    },

    // TODO: Доделать
    selectionSortStep (items) {
      this.choosenItem = items[this.step.i]
      this.step.j = this.step.i

      while (this.step.j > 0 && items[this.step.j - 1] > this.choosenItem) {
          console.log(this.step.j, items[this.step.j - 1], this.choosenItem)
          items[this.step.j] = items[this.step.j - 1]
          this.step.j--
      }
      items[this.step.j] = this.choosenItem

      if (this.step.j <= 0 && items[this.step.j - 1] <= this.choosenItem)
        if (this.step.i++ >= items.length) {
          this.isFinished = true
        }
    },
  },
}
</script>

<style lang="scss">

</style>