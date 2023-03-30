<!--
 * @Author: zhangchunjie8 zhangchunjie8@jd.com
 * @Date: 2023-02-17 15:04:47
 * @LastEditors: zhangchunjie8 zhangchunjie8@jd.com
 * @LastEditTime: 2023-03-07 21:02:30
-->
<template>
  <div class="wd-tabs">
    <slot></slot>
  </div>
</template>

<script>
import Vue from 'vue';
import WdTabsHead from './TabsHead.vue';

export default {
  name: 'WdTabs',
  props: {
    value: {
      type: String,
      required: true
    },
    direction: {
      type: String,
      default: 'horizontal',
      validator (value) {
        return ['horizontal', 'vertical'].indexOf(value) >= 0
      }
    }
  },
  data () {
    return {
      eventBus: new Vue()
    }
  },
  provide () {
    return {
      eventBus: this.eventBus
    }
  },
  methods: {
    checkChildren () {
      if (this.$children.length === 0) {
        console && console.warn &&
        console.warn('tabs的子组件应该是tabs-head和tabs-nav，但你没有写子组件');
      }
    },
    // 初始化选中的值
    selectTab () {
      this.$children.forEach((vm) => {
        if (vm.$options.name === 'WdTabsHead') {
          vm.$children.forEach((childVm) => {
            if (childVm.$options.name === 'WdTabsItem'
              && childVm.name === this.value) {
              this.eventBus.$emit('update:selected', this.value, childVm);
            }
          })
        }
      })
    },
    // 改变绑定的选中值，触发点击事件
    setTabsValue () {
      this.eventBus.$on('update:tabsValue', (val) => {
        this.$emit('input', val);
        this.$emit('tab-click', val)
      });
    },
  },
  mounted () {
    this.checkChildren();
    this.selectTab();
    this.setTabsValue();
  }
}
</script>

<style lang="scss" scoped>
@import '../../style/var.scss';
.wd-tabs {
  // display: flex;
  // &__label {
  //   color: $tabs-default-color;
  // }
}
</style>