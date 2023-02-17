<!--
 * @Author: zhangchunjie8 zhangchunjie8@jd.com
 * @Date: 2023-02-09 18:25:48
 * @LastEditors: zhangchunjie8 zhangchunjie8@jd.com
 * @LastEditTime: 2023-02-17 15:29:28
-->
<template>
  <div class="wd-row" :class="rowAlign" :style="rowStyle">
    <slot></slot>
  </div>
</template>
<script>
export default {
  name: 'WdRow',
  props: {
    gutter: {
      type: [Number, String]
    },
    align: {
      type: String,
      validator(val) {
        return ['left', 'right', 'center'].indexOf(val) >= 0;
      },
    }
  },
  computed: {
    rowStyle() {
      return {
        marginLeft: -(this.gutter / 2) + 'px',
        marginRight: -(this.gutter / 2) + 'px',
      };
    },
    rowAlign() {
      return [
        this.align && `wd-row__${this.align}`,
      ];
    }
  },
  mounted() {
    this?.$children?.forEach((item, index) => {
      item.gutter = this.gutter;
    })
  },
}

</script>
<style lang="scss" scoped>
.wd-row {
  display: flex;
  flex-wrap: wrap;
  &.wd-row__center {
    justify-content: center;
  }
  &.wd-row__left {
    justify-content: flex-start;
  }
  &.wd-row__right {
    justify-content: flex-end;
  }
}
</style>
