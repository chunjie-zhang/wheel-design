<template>
  <i :class='`wd-icon-${name}`'></i>
</template>

<script>
export default {
  props: {
    name: {
      type: String,
      default: ''
    }
  }
}
</script>
<style lang="scss">

</style>