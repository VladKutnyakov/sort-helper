<template>
  <div
    class="input-number"
    :class="{ 'input-number_disabled': disabled }"
  >
    <div class="input-number__label">
      <slot />
    </div>
    <div class="input-number__field">
      <input
        class="field__input"
        type="number"
        :value="modelValue"
        :disabled="disabled"
        @change="handleInput($event)"
      >
      <div class="input-number__btn-group">
        <div
          class="input-number__btn"
          :class="{ 'input-number__btn_disabled': disabled || value >= maxValue }"
          @click="increaseNubmer"
        >
          <div class="input-number__btn-increase" />
        </div>
        <div
          class="input-number__btn"
          :class="{ 'input-number__btn_disabled': disabled || value <= minValue }"
          @click="decreaseNubmer"
        >
          <div class="input-number__btn-decrease" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'AppInputNumber',
  props: {
    modelValue: [Number, String],
    maxValue: [Number, String],
    minValue: [Number, String],
    disabled: Boolean,
  },
  data () {
    return {
      value: this.modelValue,
    }
  },
  methods: {
    increaseNubmer () {
      if (!this.disabled) {
        this.value++
        this.value > this.maxValue ? this.value = this.maxValue : null
        this.$emit('update:modelValue', this.value)
      }
    },

    decreaseNubmer () {
      if (!this.disabled) {
        this.value--
        this.value < this.minValue ? this.value = this.minValue : null
        this.$emit('update:modelValue', this.value)
      }
    },

    handleInput (event) {
      this.value = parseInt(event.target.value) || null
      this.value > this.maxValue ? this.value = this.maxValue : null
      this.value < this.minValue ? this.value = this.minValue : null
      this.$emit('update:modelValue', this.value)
    },
  }
}
</script>

<style lang="scss">
.input-number {
  max-width: 128px;
  border-radius: 16px;

  &.input-number_disabled {

    .input-number__field {

      .field__input {
        border: 2px solid rgb(96, 106, 255, 0.5);
      }
    }
  }

  .input-number__label {
    padding: 0 0 2px 0;
    font-size: 14px;
  }

  .input-number__field {
    display: flex;
    
    .field__input {
      width: 100%;
      padding: 4px 8px;
      font-size: 24px;
      border: 2px solid rgba(96, 106, 255);
      border-radius: 16px 0 0 16px;
      -moz-appearance: textfield;

      &:focus {
        outline: 0;
      }

      &::-webkit-inner-spin-button,
      &::-webkit-outer-spin-button {
        -webkit-appearance: none;
        margin: 0;
      }
    }

    .input-number__btn-group {
      width: 26px;

      .input-number__btn {
        background-color: rgb(96, 106, 255);
        cursor: pointer;
        transition: 0.2s all;

        &:hover {
          background-color: rgb(73, 85, 255);
        }

        &:first-child {
          border-radius: 0 12px 0 0;
        }
        
        &:last-child {
          border-radius: 0 0 12px 0;
        }

        &.input-number__btn_disabled {
          background-color: rgba(96, 106, 255, 0.5);
          cursor: initial;

          &:hover {
            background-color: rgba(96, 106, 255, 0.5);
          }
        }

        .input-number__btn-increase,
        .input-number__btn-decrease {
          width: 20px;
          height: 20px;
          background-size: cover;
          background-repeat: no-repeat;
          mask-repeat: no-repeat;
          mask-size: cover;
          background-color: #fff;
        }

        .input-number__btn-increase {
          -webkit-mask-image: url(@/assets/svg/plus.svg);
          mask-image: url(@/assets/svg/plus.svg);
        }

        .input-number__btn-decrease {
          -webkit-mask-image: url(@/assets/svg/minus.svg);
          mask-image: url(@/assets/svg/minus.svg);
        }
      }
    }
  }
}
</style>