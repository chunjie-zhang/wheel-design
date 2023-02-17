<!--
 * @Author: zhangchunjie8 zhangchunjie8@jd.com
 * @Date: 2023-02-09 18:25:48
 * @LastEditors: zhangchunjie8 zhangchunjie8@jd.com
 * @LastEditTime: 2023-02-17 15:27:45
-->
<template>
  <div class="wd-input" :class="{error}">
    <input
      :value="value"
      type="text"
      :disabled="disabled"
      :readonly="readonly"
      @change="$emit('change', $event.target.value)"
      @input="$emit('input', $event.target.value)"
      @focus="$emit('focus', $event.target.value)"
      @blur="$emit('blur', $event.target.value)"
    >
    <template v-if="error">
      <wd-icon name="error" class="wd-input__icon-error"></wd-icon>
      <span class="wd-input__errorMessage">{{ error }}</span>
    </template>
  </div>
</template>

<script>
import wdIcon from '../icon/icon.vue';

export default {
  name: 'WdInput',
  components: {wdIcon},
    props: {
      value: {
        type: String
      },
      disabled: {
        type: Boolean,
        default: false
      },
      readonly: {
        type: Boolean,
        default: false
      },
      error: {
        type: String
      }
    }
}
</script>

<style lang="scss">
  $height: 32px;
  $border-color: #999;
  $border-color-hover: #666;
  $border-radius: 4px;
  $font-size: 12px;
  $box-shadow-color: rgba(0, 0, 0, 0.5);
  $red: #F1453D;
  .wd-input { 
    font-size: $font-size; display: inline-flex;
    align-items: center;
    > :not(:last-child) {
      margin-right: .5em;
    }
    > input {
      height: 32px;
      border: 1px solid $border-color; border-radius:
      4px; padding: 0 8px;
      font-size: inherit;
      &:hover {
        border-color:
        $border-color-hover;
      }
      &:focus {
        box-shadow: inset 0 1px 3px $box-shadow-color;
        outline: none;
      }
      &[disabled], &[readonly] {
        border-color: #bbb;
        color: #bbb;cursor: not-allowed;
      }
    }
    &.error {
      > input {
        border-color: $red;
      }
    }
    .wd-input__icon-error {
      fill: $red;
    }
    .wd-input__errorMessage {
      color: $red;
    }
  }

</style>