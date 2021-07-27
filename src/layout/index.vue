<template>
  <div :class="classObj" class="app-wrapper">
    <navbar />
    <div v-if="device==='mobile'&&sidebar.opened" class="drawer-bg" @click="handleClickOutside" />
    <sidebar class="sidebar-container" />
    <right-panel>
      <settings />
    </right-panel>
  </div>
</template>
<script>
import RightPanel from '@/components/RightPanel'
import ResizeMixin from './mixin/ResizeHandler'
import { Navbar, Settings, Sidebar } from './components'
import { mapState } from 'vuex'
export default {
  name: 'Layout',
  components: { Navbar, Settings, RightPanel, Sidebar },
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
  },
  methods: {
    handleClickOutside() {
      this.$store.dispatch('app/closeSideBar', { withoutAnimation: false })
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
