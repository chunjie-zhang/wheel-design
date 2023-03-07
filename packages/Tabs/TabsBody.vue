<!--
 * @Author: zhangchunjie8 zhangchunjie8@jd.com
 * @Date: 2023-02-17 15:08:54
 * @LastEditors: zhangchunjie8 zhangchunjie8@jd.com
 * @LastEditTime: 2023-03-07 18:27:32
-->
<template>
  <div class="wd-tabs-body">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: 'WdTabsBody',
  inject: ['eventBus'],
}
</script>

<style lang="scss" scoped>

</style>