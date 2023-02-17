<!--
 * @Author: zhangchunjie8 zhangchunjie8@jd.com
 * @Date: 2023-02-10 17:12:17
 * @LastEditors: zhangchunjie8 zhangchunjie8@jd.com
 * @LastEditTime: 2023-02-17 15:29:13
-->
<template>
  <transition name="wd-sider">
    <div class="wd-sider">
      <slot></slot>
    </div>
  </transition>
</template>

<script>
export default {
  name: 'WdSider',
  data() {
    return {
      show: true,
    };
  },
  methods: {
    handleshow() {
      this.show = !this.show;
    },
  },
}
</script>

<style lang="scss" scoped>
.wd-sider {
  &-enter-active, &-leave-active {
    transition: all .5s;
  }
  &-enter, &-leave-to {
    // margin-left: -200px;
  }
}
</style>