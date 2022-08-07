<template>
  <div
    class="wd-col" :class="colSpan" :style="colStyle">
    <slot></slot>
  </div>
</template>
<script>
let validator = (val) => {
 if (val) {
  console.log(val);
   let keys = Object.keys(val);
    let vaild = true;
    keys.forEach((item) => {
      if (!['span', 'offset'].includes(item)) {
        vaild = false
      }
    });
    return vaild;
  }
};
export default {
  name: 'wd-col',
   props: {
    span: { // 一列占整体的多少份，整体是24份
      type: [Number, String],
      default: 12,
    },
    offset: { // 偏移量是多少
      type: [Number, String],
    },
    phone: { // 手机
      type: Object,
      validator,
    },
    ipad: { // ipad
      type: Object,
      validator,
    },
    arrowPc: { // 窄pc
      type: Object,
      validator,
    },
    pc: { // pc
      type: Object,
      validator,
    },
    widePc: { // 宽pc
      type: Object,
      validator,
    },
  },
   computed: {
    colSpan() {
      return [
        this.span ? `wd-col-${this.span}` : '',
        this.offset ? `wd-col-offset-${this.offset}` : '',
        this.phone ? `wd-col-phone-${this.phone.span}` : '',
        this.ipad ? `wd-col-ipad-${this.ipad.span}` : [],
        this.arrowPc && `wd-col-arrow-pc-${this.arrowPc.span}`,
        this.pc ? `wd-col-pc-${this.pc.span}` : '',
        this.widePc ? `wd-col-wide-pc-${this.widePc.span}` : '',
      ];
    }, 
    colStyle() {
      return {
        paddingLeft: (this.gutter / 2) + 'px',
        paddingRight: (this.gutter / 2) + 'px',
      };
    }
  },
  data() {
   return {
     gutter: 5, // 间隙
   };
  },
}

</script>
<style lang="scss" scoped>
.wd-col {

  $class: 'wd-col-';
  @for $n from 1 through 24 {
    &.#{$class}#{$n} {
      width: calc($n / 24) * 100%; 
    }
  }

  $class: 'wd-col-offset-';
  @for $n from 1 through 24 {
    &.#{$class}#{$n} {
      margin-left: calc($n / 24) * 100%; 
    }
  }

  @media (max-width: 576px) {
    $class: 'wd-col-phone-';
    @for $n from 1 through 24 {
      &.#{$class}#{$n} {
        width: calc($n / 24) * 100%; 
      }
    }

    $class: 'wd-col-phone-offset-';
    @for $n from 1 through 24 {
      &.#{$class}#{$n} {
        margin-left: calc($n / 24) * 100%; 
      }
    }
  }
  @media (min-width: 577px) and (max-width: 768px) {
    $class: 'wd-col-ipad-';
    @for $n from 1 through 24 {
      &.#{$class}#{$n} {
        width: calc($n / 24) * 100%; 
      }
    }

    $class: 'wd-col-ipad-offset-';
    @for $n from 1 through 24 {
      &.#{$class}#{$n} {
        margin-left: calc($n / 24) * 100%; 
      }
    }
  }
  @media (min-width: 769px) and (max-width: 992px) {
    $class: 'wd-col-arrow-pc-';
    @for $n from 1 through 24 {
      &.#{$class}#{$n} {
        width: calc($n / 24) * 100%; 
      }
    }

    $class: 'wd-col-arrow-pc-offset-';
    @for $n from 1 through 24 {
      &.#{$class}#{$n} {
        margin-left: calc($n / 24) * 100%; 
      }
    }
  }
  @media (min-width: 993px) and (max-width: 1200px) {
    $class: 'wd-col-pc-';
    @for $n from 1 through 24 {
      &.#{$class}#{$n} {
        width: calc($n / 24) * 100%; 
      }
    }

    $class: 'wd-col-pc-offset-';
    @for $n from 1 through 24 {
      &.#{$class}#{$n} {
        margin-left: calc($n / 24) * 100%; 
      }
    }
  }
  @media (min-width: 1201px) {
    $class: 'wd-col-wide-pc-';
    @for $n from 1 through 24 {
      &.#{$class}#{$n} {
        width: calc($n / 24) * 100%; 
      }
    }

    $class: 'wd-col-wide-pc-offset-';
    @for $n from 1 through 24 {
      &.#{$class}#{$n} {
        margin-left: calc($n / 24) * 100%; 
      }
    }
  }
  
}
</style>
