<!--
 * @Author: zhangchunjie8 zhangchunjie8@jd.com
 * @Date: 2023-03-20 21:13:56
 * @LastEditors: zhangchunjie8 zhangchunjie8@jd.com
 * @LastEditTime: 2023-03-20 21:15:08
-->
<template>
  <div class="wrapper">
    <div>
      <WdButton>默认按钮</WdButton>
      <WdButton icon="settings">默认按钮</WdButton>
      <WdButton :loading="loading" @click="loading=!loading">默认按钮</WdButton>
    </div>
  </div>
</template>
<script>
import Button from '../../../packages/Button/Button.vue'
export default {
  components: {
    'WdButton': Button
  },
  data() {
    return {
      loading: true
    }
  }
}
</script>
<style>
div.wrapper {
  margin-top: 10px;
}
</style>