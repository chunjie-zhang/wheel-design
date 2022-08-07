<template>
  <div class="wd-row" :class="rowAlign" :style="rowStyle">
    <slot></slot>
  </div>
</template>
<script>
export default {
  name: 'wd-row',
  props: {
    gutter: {
      type: [Number, String]
    },
    align: {
      type: String,
      validator(val) {
        return ['left', 'right', 'center'].includes(val);
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
      console.log(item);
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
