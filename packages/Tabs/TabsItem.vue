<!--
 * @Author: zhangchunjie8 zhangchunjie8@jd.com
 * @Date: 2023-02-17 15:07:57
 * @LastEditors: zhangchunjie8 zhangchunjie8@jd.com
 * @LastEditTime: 2023-03-21 11:42:38
-->
<template>
  <div class="wd-tabs-item" @click="onClick" :class="classes" :data-name="name">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: 'WdTabsItem',
  inject: ['eventBus'],
    data () {
      return {
        active: false
      }
    },
    props: {
      disabled: {
        type: Boolean,
        default: false
      },
      name: {
        type: String | Number,
        required: true
      }
    },
    computed: {
      classes () {
        return {
          active: this.active,
          disabled: this.disabled
        }
      }
    },
    created () {
      if (this.eventBus) {
        this.eventBus.$on('update:selected', (name) => {
          this.active = name === this.name;
        })
      }
    },
    methods: {
      onClick () {
        if (this.disabled) { return }
        this.eventBus && this.eventBus.$emit('update:selected', this.name, this)
        this.eventBus.$emit('update:tabsValue', this.name)
      }
    }
}
</script>

<style lang="scss" scoped>
@import '../../style/var.scss';
  .wd-tabs-item {
    flex-shrink: 0;
    padding: 0 1em;
    cursor: pointer;
    height: 100%;
    display: flex;
    align-items: center;
    &.active {
      color: $blue;
      font-weight: bold;
    }
    &.disabled {
      color: $disabled-text-color;
      cursor: not-allowed;
    }
  }
</style>