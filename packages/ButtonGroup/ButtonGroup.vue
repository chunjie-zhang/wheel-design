<!--
 * @Author: zhangchunjie8 zhangchunjie8@jd.com
 * @Date: 2023-02-09 18:25:48
 * @LastEditors: zhangchunjie8 zhangchunjie8@jd.com
 * @LastEditTime: 2023-03-21 11:37:33
-->
<template>
  <div class="wd-button-group">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: 'WdButtonGroup',
  mounted() {
    for(let node of this.$el.children) {
      let name = node.nodeName.toLowerCase();
      if (name !== 'button') {
        console.warn(`wd-button-group 的子元素应该全是 wd-button，但是你写的是${name}`);
      }
    }
  },
}
</script>

<style lang="scss" scoped>
@import '../../style/var.scss';

.wd-button-group {
  display: inline-flex;

  & .wd-button {
    &:not(:first-child) {
      margin-left: -1px;
    }
    border-radius: 0;

    &:first-child {
    border-top-left-radius: $border-radius;
    border-bottom-left-radius: $border-radius;
    }
    &:last-child {
      border-top-right-radius: $border-radius;
      border-bottom-right-radius: $border-radius;
    }
    &:hover {
      position: relative;
      z-index: 1;
    }
  }

}
</style>