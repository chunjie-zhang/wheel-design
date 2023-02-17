<!--
 * @Author: zhangchunjie8 zhangchunjie8@jd.com
 * @Date: 2023-02-15 16:59:07
 * @LastEditors: zhangchunjie8 zhangchunjie8@jd.com
 * @LastEditTime: 2023-02-16 18:39:19
-->
<template>
  <div class="wd-toast-wrapper" :class="positionClass">
    <div ref="wdToast" class="wd-toast">
      <div class="wd-toast__message">
        <slot v-if="!enableHtml"></slot>
        <div v-else v-html="$slots.default[0]"></div>
      </div>
      <span ref="wdToastLine" class="wd-toast__line"></span>
      <span v-if="closeButton" class="wd-toast__close" @click="handleToastButtonClick">{{ closeButton.text }}</span>
    </div>
  </div>
</template>

<script>
export default {
  name: 'wd-toast',
  props: {
    autoClose: {
      type: Boolean,
      default: true,
    },
    autoCloseDelay: {
      type: Number,
      default: 2500,
    },
    closeButton: {
      type: Object,
      default: () => {
        return {
          text: '关闭',
          callback: undefined,
        }
      }
    },
    // 是否开启html模式
    enableHtml: {
      type: Boolean,
      default: false,
    },
    // 方向
    position: {
      type: String,
      default: 'top',
      validator(value) {
        return ['top', 'bottom', 'middle'].indexOf(value) >= 0
      }
    },
  },
  computed: {
    // 方向
    positionClass() {
      return {
        [`wd-toast-wrapper__position-${this.position}`]: true,
      }
    }
  },
  mounted() {
    this.exexAutoClose();
    // 因为组件的$mount是在元素被插入前执行，所以拿不到高度，需要做一个延迟解决问题
    this.updateStyles();
  },
  methods: {
    // 更新样式
    updateStyles () {
      this.$nextTick(() => {
        this.$refs.wdToastLine.style.height = `${this.$refs.wdToast.getBoundingClientRect().height}px`
      });
    },
    // 主动关闭toast
    exexAutoClose () {
      if (this.autoClose) {
        setTimeout(() => {
          this.handleToastClose();
        }, this.autoCloseDelay);
      }
    },
    // 关闭toast
    handleToastClose () {
      this.$el.remove();
      this.$emit('toastClose');
      this.$destroy();
    },
    // toast按钮点击
    handleToastButtonClick () {
      this.handleToastClose();
      if (this.closeButton.callback && typeof this.closeButton.callback === 'function') {
        this.closeButton.callback(this);
      }
    },
  },
}
</script>

<style lang="scss" scoped>
$font-size: 14px;
$toast-min-height: 40px;
$toast-background: rgba(0,0,0,0.75);
$toast-border-radius: 4px;
$toast-font-color: white;
$toast-box-shadow: 0px 0px 3px 0px rgba(0,0,0,0.50);

@keyframes fade-in-top {
  0% {
    opacity: 0%;
    transform: translateY(-100%);
  }
  100% {
    opacity: 1;
    transform: translateY(0%);
  }
}

@keyframes fade-in {
  0% {
    opacity: 0%;
  }
  100% {
    opacity: 1;
  }
}

@keyframes fade-in-bottom {
  0% {
    opacity: 0%;
    transform: translateY(100%);
  }
  100% {
    opacity: 1;
    transform: translateY(0%);
  }
}
.wd-toast-wrapper {
  position: fixed;
  left: 50%;
  &__position-top {
    top: 0;
    transform: translate(-50%, 0);
    .wd-toast {
      border-top-left-radius: 0;
      border-top-right-radius: 0;
      animation: fade-in-top .5s;
    }
  }
  &__position-bottom {
    bottom: 0;
    transform: translate(-50%, 0);
    .wd-toast {
      border-bottom-left-radius: 0;
      border-bottom-right-radius: 0;
      animation: fade-in-bottom .5s;
    }
  }
  &__position-middle {
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    animation: fade-in .5s;
  }
}
.wd-toast {
  display: flex;
  align-items: center;
  font-size: $font-size;
  line-height: 1.8;
  min-height: $toast-min-height;
  padding: 0 16px;
  color: $toast-font-color;
  background-color: $toast-background;
  border-radius: $toast-border-radius;
  box-shadow: $toast-box-shadow;
  &__message {
    padding: 8px 0;
  }
  &__line {
    margin: 0 16px;
    border-left: 1px solid #666;
  }
  &__close {
    flex-shrink: 0;
    cursor: pointer;
  }
}

</style>