<!--
 * @Author: zhangchunjie8 zhangchunjie8@jd.com
 * @Date: 2023-03-09 10:40:58
 * @LastEditors: zhangchunjie8 zhangchunjie8@jd.com
 * @LastEditTime: 2023-03-21 11:38:13
-->
<template>
  <div class="wd-collapse">
    <slot></slot>
  </div> 
</template>

<script>
import Vue from 'Vue';
export default {
  name: 'WdCollapse',
  props: {
    value: {
      type: Array,
    },
    single: {
      type: Boolean,
      default: true,
    },
  },
  provide() {
    return {
      eventBus: this.eventBus,
    };
  },
  data () {
    return {
      selectedValue: [],
      eventBus: new Vue(),
    };
  },
  methods: {
    handleCollapseItemChange() {
      this.eventBus.$on('updateWdCollapse:Selected', (val) => {
        const collapseSelectedIndex = this.value.indexOf(val);
        if (this.single) {
          this.selectedValue = collapseSelectedIndex >= 0 ? [] : [val];
        } else if (collapseSelectedIndex >= 0) {
          this.selectedValue.splice(collapseSelectedIndex, 1);
        } else {
          this.selectedValue.push(val);
        }
        this.$emit('input', this.selectedValue);
        this.$emit('change', this.selectedValue);
        this.eventBus.$emit('updateWdCollapseItem:initSelected', this.selectedValue);
      });
    }
  },
  mounted() {
    this.selectedValue = this.value;

    this.handleCollapseItemChange();
    
    this.$children.forEach((vm) => {
      if (vm.$options.name === 'WdCollapseItem') {
        this.eventBus.$emit('updateWdCollapseItem:initSelected', this.value);
      }
    })
  },
}
</script>

<style lang="scss" scoped>
@import '../../style/var.scss';

.wd-collapse {
  border: 1px solid $grey;
  border-radius: $border-radius;
  margin-bottom: -1px;
}
</style>