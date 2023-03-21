<!--
 * @Author: zhangchunjie8 zhangchunjie8@jd.com
 * @Date: 2023-02-09 18:25:48
 * @LastEditors: zhangchunjie8 zhangchunjie8@jd.com
 * @LastEditTime: 2023-03-21 11:23:22
-->
<template>
  <i :class='`wd-icon-${name}`'></i>
</template>

<script>
export default {
  name: 'WdIcon',
  props: {
    name: {
      type: String,
      default: ''
    }
  }
}
</script>
<style lang="scss" scoped>
</style>