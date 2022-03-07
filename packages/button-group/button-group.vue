<template>
  <div class="wd-button-group">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: 'wd-button-group',
  mounted() {
    for(let node of this.$el.children) {
      let name = node.nodeName.toLowerCase();
      if (name !== 'button') {
        console.warn(`wd-button-group 的子元素应该全是 wd-button，但是你写的是${name}`);
      }
    }
  },
}
</script>

<style lang="scss">
.wd-button-group {
  display: inline-flex;

  & .wd-button {
    &:not(:first-child) {
      margin-left: -1px;
    }
    border-radius: 0;

    &:first-child {
    border-top-left-radius: var(--border-radius);
    border-bottom-left-radius: var(--border-radius);
    }
    &:last-child {
      border-top-right-radius: var(--border-radius);
      border-bottom-right-radius: var(--border-radius);
    }
    &:hover {
      position: relative;
      z-index: 1;
    }
  }

}
</style>