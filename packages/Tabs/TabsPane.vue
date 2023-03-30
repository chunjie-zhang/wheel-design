<!--
 * @Author: zhangchunjie8 zhangchunjie8@jd.com
 * @Date: 2023-02-17 15:11:16
 * @LastEditors: zhangchunjie8 zhangchunjie8@jd.com
 * @LastEditTime: 2023-03-21 11:42:42
-->
<template>
  <div class="wd-tabs-pane" :class="classes" v-if="active">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: 'WdTabsPane',
  inject: ['eventBus'],
  data () {
    return {
      active: false
    }
  },
  props: {
    name: {
      type: String | Number,
      required: true
    }
  },
  computed: {
    classes () {
      return {
        active: this.active
      }
    }
  },
  created () {
    this.eventBus.$on('update:selected', (name) => {
      this.active = name === this.name;
    })
  }
}
</script>

<style lang="scss" scoped>
.wd-tabs-pane {
  padding: 1em;
}
</style>