<template>
  <div class="chart-block">
    <div class="chart-block__info">
      <div class="info__title">
        <slot name="title" />
      </div>
      <div class="info__btn-group">
        <app-button
          :disabled="isActive" 
          @click="sortStart($event)"
        >
          <div class="btn__icon triangle" />
        </app-button>
        <app-button
          :disabled="isActive"
          @click="sortStep"
        >
          Шаг
        </app-button>
        <app-button
          :disabled="isActive" 
          @click="shuffleItems()"
        >
          Перемешать
        </app-button>
        <app-input-number
          v-model="itemsNumber"
          maxValue="50"
          minValue="2"
        >
          Размер выборки
        </app-input-number>
        <app-input-number
          v-model="delay"
          maxValue="5000"
          minValue="10"
        >
          Задержка (мс)
        </app-input-number>
      </div>
      <div class="info__description">
        <slot name="description" />
      </div>
      <div class="info__complexity">
        Сложность: 
        <span class="complexity__formula"><slot name="complexity" /></span>
      </div>
      <div class="info__source-code">
        <app-spoiler>
          <template #label>
            Исходный код
          </template>
          <template #content>
            <slot name="source-code" />
          </template>
        </app-spoiler>
      </div>
    </div>
    
    <div class="chart-block__content">
      <chart :items="chartItems" :activeItem="activeItem.value" />
    </div>
  </div>
</template>

<script>
import Chart from '@/components/Chart.vue'
import AppButton from '@/components/AppButton.vue'
import AppSpoiler from '@/components/AppSpoiler.vue'
import AppInputNumber from './AppInputNumber.vue'

export default {
  name: 'ChartBlockComponent',
  components: {
    Chart,
    AppButton,
    AppSpoiler,
    AppInputNumber,
  },
  props: {
    items: Array,
  },
  data () {
    return {
      chartItems: this.items,
      activeItem: {
        value: null,
      },
      isActive: false,
      itemsNumber: 20,
      delay: 50,
    }
  },
  watch: {
    itemsNumber () {
      this.fillItemsArray()
    }
  },
  methods: {
    shuffleItems () {
      this.chartItems = this.chartItems
        .map(value => ({ value, sort: Math.random() }))
        .sort((a, b) => a.sort - b.sort)
        .map(({ value }) => value)
      this.activeItem.value = null
    },

    async sortStart () {
      this.isActive = true
      this.$emit('sortStart', this.chartItems, this.activeItem, true, this.delay)
      this.isActive = false
    },

    sortStep () {
      this.$emit('sortStep', this.chartItems, this.activeItem, false)
    },

    fillItemsArray () {
      this.chartItems = []
      for (let i = 0; i < this.itemsNumber; i++) {
        this.chartItems.push(i + 1)
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
  display: flex;
  margin: 0 0 64px 0;
  padding: 32px 48px;
  border-radius: 20px;
  box-shadow: 0px 5px 10px 2px rgba(34, 60, 80, 0.2);

  .chart-block__info {
    margin: 0 128px 0 0;
    flex: 1 1 80%;

    .info__title {
      padding: 16px 0;
      font-size: 36px;
      font-weight: 700;
      text-transform: uppercase;
    }

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
      font-weight: 700;

      .complexity__formula {
      }
    }

    .info__source-code {
      padding: 16px 0 0 0;
    }
  }

  .chart-block__content {
    display: flex;
    align-items: center;
    justify-content: flex-end;
    flex: 1 1 20%;
  }
}

</style>