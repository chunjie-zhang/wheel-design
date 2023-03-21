<!--
 * @Author: zhangchunjie8 zhangchunjie8@jd.com
 * @Date: 2023-02-09 18:25:48
 * @LastEditors: zhangchunjie8 zhangchunjie8@jd.com
 * @LastEditTime: 2023-03-21 10:56:14
-->
<template>
   <button
     class="wd-button"
     :class="{[`wd-button__icon-${iconPosition}`]: iconPosition}"
     @click="$emit('click')"
    >
      <wd-icon
        v-if="icon || loading"
        class="wd-button__icon"
        :class="{'wd-button__loading': loading}"
        :name="!loading ? icon : 'loading'"
      >
      </wd-icon>
     <div class="wd-button__content">
       <slot></slot>
     </div>
   </button>
</template>

<script>
import wdIcon from '../Icon/Icon.vue';

export default {
  name: 'WdButton',
  props:{
    loading: {
      type: Boolean,
      default: false,
    },
    icon: {
      type: String,
      default: '',
    },
    iconPosition: {
      type: String,
      validator: function (value) {
        // 这个值必须匹配下列字符串中的一个
        return ['left', 'right'].indexOf(value) !== -1
      },
      default: 'left'
    }
  },
  components: {
    wdIcon
  }

}
</script>

<style lang="scss" scoped>
@import '../../style/var.scss';

@keyframes loading {
  0% { transform: rotate(0deg)};
  100% { transform: rotate(360deg)};
}

.wd-button {
  display: inline-flex;
  justify-content: center;
  align-items: center;
  height: $button-height;
  padding: 0 1em;
  font: inherit;
  vertical-align: middle;
  border: 1px solid $border-color;
  border-radius: $border-radius;
  background: $button-bg;
  cursor: pointer;
  &:hover {
    border-color: $border-color-hover;
  }
  &:active {
    background: $button-active-bg;
  }
  &:focus {
    outline: none;
  }
  &.wd-button__icon-left {
    & .wd-button__icon {
      order: 1;
      margin-left: 0;
      margin-right: 2px;
    }
    & .wd-button__content {
      order: 2;
    }
  }
  &.wd-button__icon-right {
    & .wd-button__icon {
      margin-left: 2px;
      margin-right: 0;
      order: 2;
  }
    & .wd-button__content {
      order: 1;
    }
  }
  .wd-button__loading {
  animation: loading 1s linear infinite;
}
}
</style>