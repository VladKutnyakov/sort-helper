<template>
  <div class="chart-block">
    <div class="chart-block__title">
      <slot name="title" />
    </div>
    <div class="chart-block__content">
      <div class="chart-block__info">
        <div class="info__btn-group">
          <app-button
            v-show="isFinished"
            :disabled="!isFinished"
            @click="sortStart($event)"
          >
            <div class="btn__icon triangle" />
          </app-button>
          <app-button
            v-show="!isFinished"
            :disabled="isFinished" 
            @click="sortStop($event)"
          >
            <div class="btn__icon pause" />
          </app-button>
          <app-button
            :disabled="!isFinished"
            @click="sortStep($event)"
          >
            Шаг
          </app-button>
          <app-button
            :disabled="!isFinished" 
            @click="shuffleItems()"
          >
            Перемешать
          </app-button>
          <app-input-number
            v-model="itemsNumberLocal"
            maxValue="50"
            minValue="2"
            :disabled="!isFinished" 
          >
            Размер выборки
          </app-input-number>
          <app-input-number
            v-model="delayLocal"
            maxValue="10000"
            minValue="1"
            :disabled="!isFinished"
          >
            Задержка (мс)
          </app-input-number>
        </div>
        <div class="info__description">
          <slot name="description" />
        </div>
        <div class="info__complexity">
          <div class="complexity__title">
            Сложность:
          </div>
          <span class="complexity__formula">
            <slot name="complexity" />
          </span>
        </div>
        <div class="info__designation">
          <div class="designation__title">
            Обозначения:
          </div>
          <div class="designation__color designation__color_blue">
            Синий -
            <slot name="designation-blue">
              Перебираемый элемент
            </slot>
          </div>
          <div class="designation__color designation__color_red">
            Красный - 
            <slot name="designation-red">
              Заменяемый элемент
            </slot>
          </div>
        </div>
        <div class="info__source-code">
          <app-spoiler>
            <template #label>
              Исходный код (JavaScript)
            </template>
            <template #content>
              <slot name="source-code" />
            </template>
          </app-spoiler>
        </div>
      </div>
      
      <div class="chart-block__chart">
        <chart
          :items="items"
          :coloredItems="coloredItems"
        />
      </div>
    </div>
  </div>
</template>

<script>
import Chart from '@/components/Chart/Chart.vue'
import AppButton from '@/components/basic/AppButton.vue'
import AppSpoiler from '@/components/basic/AppSpoiler.vue'
import AppInputNumber from './basic/AppInputNumber.vue'

export default {
  name: 'ChartBlock',
  components: {
    Chart,
    AppButton,
    AppSpoiler,
    AppInputNumber,
  },
  props: {
    itemsNumber: Number,
    coloredItems: Object,
    delay: Number,
    isFinished: Boolean,
    step: Object,
  },
  data () {
    return {
      items: [],
      itemsNumberLocal: this.itemsNumber,
      delayLocal: this.delay,
    }
  },
  watch: {
    itemsNumberLocal () {
      this.fillItemsArray()
    }
  },
  methods: {
    shuffleItems () {
      this.items = this.items
        .map(value => ({ value, sort: Math.random() }))
        .sort((a, b) => a.sort - b.sort)
        .map(({ value }) => value)
      this.$emit('onShuffle')
    },

    sortStart () {
      this.$emit('sortStart', this.items, this.delayLocal)
    },

    sortStop () {
      this.$emit('sortStop')
    },

    sortStep () {
      this.$emit('sortStep', this.items)
    },

    fillItemsArray () {
      this.items = []
      for (let i = 0; i < this.itemsNumberLocal; i++) {
        this.items.push(i + 1)
      }
    }
  },
  created () {
    this.fillItemsArray()
  }
}
</script>

<style lang="scss">

.chart-block {
  margin: 0 0 64px 0;
  padding: 32px 48px;
  border-radius: 20px;
  box-shadow: 0px 5px 10px 2px rgba(34, 60, 80, 0.2);
  transition: 0.2s all;

  &:hover {
    box-shadow: 0px 5px 15px 7px rgba(34, 60, 80, 0.2);
  }

  .chart-block__title {
    padding: 16px 0;
    font-size: 36px;
    font-weight: 600;
    text-transform: uppercase;
  }

  .chart-block__content {
    display: flex;

    .chart-block__info {
      margin: 0 64px 0 0;
      flex: 1 1 70%;

      .info__btn-group {
        display: flex;

        .btn,
        .input-number {
          margin: 0 24px 0 0;

          &:last-child {
            margin: 0;
          }
        }

        .btn__icon.triangle {
          transform: rotate(90deg);
        }
      }

      .info__description {
        padding: 16px 0 0 0;
        font-size: 18px;
        line-height: 1.5;
      }

      .info__complexity {
        padding: 16px 0 0 0;
        font-weight: 600;

        .complexity__title {
          display: inline-block;
        }
      }

      .info__designation {
        padding: 16px 0 0 0;

        .designation__title {
          padding: 0 0 8px 0;
          font-weight: 600;
        }

        .designation__color {
          display: flex;

          &:before {
            content: '';
            width: 4px;
            height: 1em;
            margin: 0 4px 0 0;
          }

          &.designation__color_red::before {
            background-color: rgb(255, 0, 0);
          }

          &.designation__color_blue::before {
            background-color: rgb(0, 0, 255);
          }
        }
      }

      .info__source-code {
        padding: 16px 0 0 0;
      }
    }

    .chart-block__chart {
      display: flex;
      align-items: start;
      justify-content: end;
      flex: 1 1 30%;
    }
  }
}

</style>