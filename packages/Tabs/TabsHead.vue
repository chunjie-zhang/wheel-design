<!--
 * @Author: zhangchunjie8 zhangchunjie8@jd.com
 * @Date: 2023-02-17 15:06:25
 * @LastEditors: zhangchunjie8 zhangchunjie8@jd.com
 * @LastEditTime: 2023-03-07 20:47:53
-->
<template>
  <div class="wd-tabs-head" ref="head">
    <slot></slot>
    <div class="wd-tabs-head__line" ref="line"></div>
    <!--右侧按钮-->
    <div class="wd-tabs-head__actions-wrapper">
      <slot name="actions"></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: 'WdTabsHead',
  inject: ['eventBus'],
  mounted () {
    this.eventBus.$on('update:selected', (item, vm) => {
      this.updateLinePosition(vm)
    })
  },
  methods: {
    updateLinePosition (selectedVm) {
      let {width, left} = selectedVm.$el.getBoundingClientRect()
      let {left: headLeft} = this.$refs.head.getBoundingClientRect()
      this.$refs.line.style.width = `${width}px`
      this.$refs.line.style.left = `${left - headLeft}px`
    }
  }
}
</script>

<style lang="scss" scoped>
$tab-height: 40px;
$blue: blue;
$border-color: #ddd;
.wd-tabs-head {
  display: flex;
  height: $tab-height;
  justify-content: flex-start;
  position: relative;
  border-bottom: 1px solid $border-color;
  &__line {
    position: absolute;
    bottom: 0;
    border-bottom: 1px solid $blue;
    transition: all 350ms;
  }
  &__actions-wrapper {
    margin-left: auto;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 0 1em;
  }
}
</style>