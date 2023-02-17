<!--
 * @Author: zhangchunjie8 zhangchunjie8@jd.com
 * @Date: 2023-02-10 17:12:52
 * @LastEditors: zhangchunjie8 zhangchunjie8@jd.com
 * @LastEditTime: 2023-02-17 15:29:04
-->
<template>
  <div class="wd-layout" :class="layoutClass">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: 'WdLayout',
  data() {
    return {
      layoutClass: {
        'wd-layout-has-sider': false,
      },
    };
  },
  mounted() {
    this.$children.forEach((vm) => {
      if (vm.$options.name === 'wd-sider') {
        this.layoutClass['wd-layout-has-sider'] = true;
      }
    });
  },
}
</script>

<style lang="scss" scoped>
.wd-layout {
  display: flex;
  flex-grow: 1;
  flex-direction: column;
  &.wd-layout-has-sider {
    flex-direction: row;
  }
}
</style>