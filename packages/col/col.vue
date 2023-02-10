<template>
  <div class="wd-col" :class="colSpan" :style="colStyle">
    <slot></slot>
  </div>
</template>
<script>
let validator = (val) => {
 if (val) {
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
    },
    offset: { // 偏移量是多少
      type: [Number, String],
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
    gutter: { // col间的间隙
      type: [Number, String],
    },
  },
   computed: {
    colSpan() {
      return [
        ...this.transformClass({span: this.span, offset: this.offset}),
        ...this.transformClass(this.ipad, 'ipad'),
        ...this.transformClass(this.arrowPc, 'arrow-pc'),
        ...this.transformClass(this.pc, 'pc'),
        ...this.transformClass(this.widePc, 'wide-pc'),
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
    //  gutter: 0, // 间隙
   };
  },
  methods: {
    // 转译css样式
    transformClass (obj, suffix='') {
        if (!obj) return [];

        let classArr = [];
        if (obj.span) {
          classArr.push(`wd-col${suffix ? `-${suffix}`: ''}-${obj.span}`);
        }

        if (obj.offset) {
          classArr.push(`wd-col${suffix ? `-${suffix}`: ''}-offset-${obj.offset}`);
        }
        return classArr;
      }

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

  // @media (max-width: 576px) {
  //   $class: 'wd-col-phone-';
  //   @for $n from 1 through 24 {
  //     &.#{$class}#{$n} {
  //       width: calc($n / 24) * 100%; 
  //     }
  //   }

  //   $class: 'wd-col-phone-offset-';
  //   @for $n from 1 through 24 {
  //     &.#{$class}#{$n} {
  //       margin-left: calc($n / 24) * 100%; 
  //     }
  //   }
  // }
  @media (min-width: 577px) {
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
  @media (min-width: 769px) {
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
  @media (min-width: 993px){
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
