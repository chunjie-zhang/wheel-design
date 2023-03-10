<!--
 * @Author: zhangchunjie8 zhangchunjie8@jd.com
 * @Date: 2023-03-08 10:48:48
 * @LastEditors: zhangchunjie8 zhangchunjie8@jd.com
 * @LastEditTime: 2023-03-09 18:35:51
-->
<template>
  <div ref="popover" class="wd-popover">
    <div
      v-if="visible"
      ref="popoverWrapper"
      class="wd-popover__wrapper"
      :class="{[`wd-popover__position-${position}`]:true}"
      :style="{left: popoverLeft, top: popoverTop,}"
    >
      <slot></slot>
    </div>
    <span ref="popoverTrigger" class="wd-popover__trigger">
      <slot name="reference"></slot>
    </span>
  </div>
</template>

<script>
export default {
  name: 'WdPopover',
  props: {
    position: { // 方向
      type: String,
      default: 'top',
      validator: (val) => {
        return ['top', 'bottom', 'left', 'right'].indexOf(val) >= 0;
      }
    },
    trigger: { // 触发方式
      type: String,
      default: 'click',
      validator: (val) => {
        return ['click', 'trigger'].indexOf(val) >= 0;
      }
    },
  },
  data() {
    return {
      visible: false,
      popoverLeft: 0, 
      popoverTop: 0,
    };
  },
  methods: {
    // 增加popover监听
    addPopoverListeners () {
      if (this.trigger === 'click') {
        this.$refs.popoverTrigger.addEventListener('click', this.handlePopoverClick);
      } else {
        this.$refs.popoverTrigger.addEventListener('mouseenter', this.handlePopoverClick);
        this.$refs.popoverTrigger.addEventListener('mouseleave', this.handlePopoverClick);
      }
    },
    removeEventListene () {
      if (this.trigger === 'click') {
          this.$refs.popoverTrigger.removeEventListener('click', this.onClick)
      } else {
        this.$refs.popoverTrigger.removeEventListener('mouseenter', this.open)
        this.$refs.popoverTrigger.removeEventListener('mouseleave', this.close)
      }
    },
    // 是否展示popover
    handlePopoverShow () {
      this.visible = !this.visible;
      if (this.visible) {
        this.$nextTick(() => {
          this.setPopoverPosition();
          document.addEventListener('click', this.checkPopoverShow);
        });
      } else {
        document.removeEventListener('click', this.checkPopoverShow);
      }
    },
    // 根据方向展示popover出现的位置
    setPopoverPosition () {
      // 解决外层设置overflow不展示问题
      document.body.appendChild(this.$refs.popoverWrapper);
      const {popoverWrapper, popoverTrigger} = this.$refs;
      const {width, height, top, left} = popoverTrigger.getBoundingClientRect();
      const {height: wrapperHeight} = popoverWrapper.getBoundingClientRect();
      const positionsEnum = {
        top: {
          top: top + window.scrollY,
          left: left + window.scrollX,
        },
        bottom: {
          top: top + height + window.scrollY,
          left: left + window.scrollX
        },
        left: {
          top: top + window.scrollY + (height - wrapperHeight) / 2,
          left: left + window.scrollX
        },
        right: {
          top: top + window.scrollY + (height - wrapperHeight) / 2,
          left: left + window.scrollX + width
        },
      };
      this.popoverTop =  positionsEnum[this.position].top + 'px';
      this.popoverLeft = positionsEnum[this.position].left + 'px';
    },
    // 除popover外的区域不展示
    checkPopoverShow (e) {
      if (this.$refs.popover && (this.$refs.popover === e.target || this.$refs.popover.contains(e.target))) return;

      if (this.$refs.popoverWrapper && (this.$refs.popoverWrapper === e.target || this.$refs.popoverWrapper.contains(e.target))) return;
      
      this.visible = !this.visible;
      document.removeEventListener('click', this.checkPopoverShow);
    },
    // 处理popover点击事件
    handlePopoverClick (event) {
      if (this.$refs.popoverTrigger.contains(event.target)) {
        this.handlePopoverShow();
      }
    }
  },
  mounted () {
    this.addPopoverListeners();
  },
  destroyed () {
    this.removeEventListener();
  },
}
</script>

<style lang="scss" scoped>
 $border-color: #333;
$border-radius: 4px;

.wd-popover {
  display: inline-block;
  &__wrapper {
    position: absolute;
    border: 1px solid $border-color;
    border-radius: $border-radius;
    filter: drop-shadow(0 1px 1px rgba(0, 0, 0, 0.5));
    background: white;
    padding: .5em 1em;
    max-width: 20em;
    word-break: break-all;
    &::before, &::after {
      content: '';
      display: block;
      border: 10px solid transparent;
      width: 0;
      height: 0;
      position: absolute;
    }
  }
  &__position-top {
      transform: translateY(-100%);
      margin-top: -10px;
      &::before, &::after {
        left: 10px;
      }
      &::before {
        border-top-color: black;
        border-bottom: none;
        top: 100%;
      }
      &::after {
        border-top-color: white;
        border-bottom: none;
        top: calc(100% - 1px);
      }
    }
  &__position-bottom {
    margin-top: 10px;
    &::before, &::after {
      left: 10px;
    }
    &::before {
      border-top: none;
      border-bottom-color: black;
      bottom: 100%;
    }
    &::after {
      border-top: none;
      border-bottom-color: white;
      bottom: calc(100% - 1px);
    }
  }
  &__position-left {
    transform: translateX(-100%);
    margin-left: -10px;
    &::before, &::after {
      transform: translateY(-50%);
      top: 50%;
    }
    &::before {
      border-left-color: black;
      border-right: none;
      left: 100%;
    }
    &::after {
      border-left-color: white;
      border-right: none;
      left: calc(100% - 1px);
    }
  }
  &__position-right {
    margin-left: 10px;
    &::before, &::after {
      transform: translateY(-50%);
      top: 50%;
    }
    &::before {
      border-right-color: black;
      border-left: none;
      right: 100%;
    }
    &::after {
      border-right-color: white;
      border-left: none;
      right: calc(100% - 1px);
    }
  }
  &__trigger {
    display: inline-block;
    height: 100%;
  }
}
</style>