<template>
  <div :class="{'has-log': showLogo}" />
</template>

<script>
export default {
  name: 'Sidebar',
  computed: {
    showLogo() {
      return this.$store.state.settings.sidebarLogo
    }
  }
}
</script>

<style lang="scss" scoped>

</style>
