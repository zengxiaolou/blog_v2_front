<template>
  <div :class="classObj" class="app-wrapper">
    <navbar />
    <settings />
  </div>
</template>
<script>
import ResizeMixin from './mixin/ResizeHandler'
import { Navbar, Settings } from './components'
import { mapState } from 'vuex'
export default {
  name: 'Layout',
  components: { Navbar, Settings },
  mixins: [ResizeMixin],
  computed: {
    ...mapState({
      sidebar: state => state.app.sidebar,
      device: state => state.app.device
    }),
    classObj() {
      return {
        hideSidebar: !this.sidebar.opened,
        openSidebar: this.sidebar,
        withoutAnimation: this.sidebar.withoutAnimation,
        mobile: this.device === 'mobile'
      }
    }
  }
}
</script>

<style lang="scss" scoped>
  @import "~@/styles/mixin.scss";
  @import "~@/styles/variables.scss";

  .app-wrapper {
    @include clearfix;
    position: relative;
    height: 100%;
    width: 100%;
  }
</style>
