<template>
  <i :class='`wd-icon-${name}`'></i>
</template>

<script>
export default {
  name: 'wd-icon',
  props: {
    name: {
      type: String,
      default: ''
    }
  }
}
</script>
<style lang="scss" scoped>

</style>