<!--
 * @Author: zhangchunjie8 zhangchunjie8@jd.com
 * @Date: 2023-03-09 10:40:58
 * @LastEditors: zhangchunjie8 zhangchunjie8@jd.com
 * @LastEditTime: 2023-03-10 17:26:09
-->
<template>
  <div class="wd-collapse-item" :class="{'wd-collapse-item-disabled': disabled}">
    <div
      v-if="title"
      class="wd-collapse-item__title"
      :class="{'wd-collapse-item-disabled': disabled}"
      @click="handleCollapseItemClick"
    >
      {{ title }}
    </div>
    <div
      v-else
      class="wd-collapse-item__title"
      :class="{'wd-collapse-item-disabled': disabled}"
      @click="handleCollapseItemClick"
    >
      <slot name="title"></slot>
    </div>
    <div v-if="isCollapseItemShow" class="wd-collapse-item__content">
      <slot></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: 'WdCollapseItem',
  props: {
    name: {
      type: String,
      require: true,
    },
    title: {
      type: String,
    },
    disabled: {
      type: Boolean,
      default: false,
    },
  },
  inject: ['eventBus'],
  data() {
    return {
      isCollapseItemShow: false,
    }
  },
  methods: {
    handleCollapseItemClick() {
      if (this.disabled) return;
      this.eventBus.$emit('updateWdCollapse:Selected', this.name);
    },
  },
  mounted() {
    this.eventBus.$on('updateWdCollapseItem:initSelected', (val) => {
      this.isCollapseItemShow = (val.indexOf(this.name) >= 0);
    });
  },
}
</script>

<style lang="scss" scoped>
 $grey: #ddd;
  $border-radius: 4px;
  .wd-collapse-item {
    &__title { border: 1px solid $grey; margin-top: -1px; margin-left: -1px; margin-right: -1px;
      min-height: 32px;
      display: flex;
      align-items: center;
      padding: 0 8px;
      background: lighten($grey, 8%);
      cursor: pointer;
    }
    &:first-child {
      > .title { 
        border-top-left-radius: $border-radius;
        border-top-right-radius: $border-radius; 
      }
    }
    &:last-child {
      > .title:last-child { 
        border-bottom-left-radius: $border-radius;
        border-bottom-right-radius: $border-radius; 
      }
    }
    &__content { 
      padding: 8px;
    }
  }
  .wd-collapse-item-disabled {
    cursor: not-allowed;
  }
</style>