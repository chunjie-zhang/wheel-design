<!--
 * @Author: zhangchunjie8 zhangchunjie8@jd.com
 * @Date: 2023-03-20 21:16:13
 * @LastEditors: zhangchunjie8 zhangchunjie8@jd.com
 * @LastEditTime: 2023-03-20 21:18:30
-->
<template>
  <div class="wrapper">
    <div>
      <WdCollapse :selected.sync="selectedTab" single>
        <WdCollapseItem title="标题1" name="1">hello，你好呢。</WdCollapseItem>
        <WdCollapseItem title="标题2" name="2">你知道我在想你吗?</WdCollapseItem>
        <WdCollapseItem title="标题3" name="3">我在等你呀!</WdCollapseItem>
      </WdCollapse>
    </div>
  </div>
</template>
<script>
import Collapse from '../../../packages/Collapse/Collapse.vue'
import CollapseItem from '../../../packages/Collapse/CollapseItem.vue'
export default {
  data() {
    return {
      selectedTab: ['1']
    }
  },
  components: {
    'WdCollapse': Collapse,
    'WdCollapseItem': CollapseItem
  }
}
</script>
<style scoped>
.wrapper{
  margin-top: 10px;
}
</style>