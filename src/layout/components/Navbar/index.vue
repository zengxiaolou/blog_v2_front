<template>
  <div class="navbar">
    <logo />
    <div class="right-menu">
      <template v-if="device!=='mobile'">
        <header-search id="header-search" class="right-menu-item" />
        <screen-full id="screen_full" class="right-menu-item hover-effect" />
        <el-tooltip effect="dark" content="Global Size" placement="bottom">
          <size-select id="size-select" class="right-menu-item hover-effect" />
        </el-tooltip>
      </template>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import Logo from './Logo'
import HeaderSearch from '@/components/HeaderSearch'
import ScreenFull from '@/components/Screenfull'
import SizeSelect from '@/components/SizeSelect'

export default {
  name: 'Navbar',
  components: { Logo, HeaderSearch, ScreenFull, SizeSelect },
  computed: {
    ...mapGetters([
      'device'
    ])
  }
}
</script>

<style lang="scss" scoped>
.navbar{
  height: 50px;
  overflow: hidden;
  position: relative;
  background: #fff;
  box-shadow: 0 1px 4px rgba(0, 21, 41, 0.08);

  .right-menu {
    float: right;
    height: 100%;
    line-height: 50px;

    &:focus{
      outline: none;
    }

    .right-menu-item {
      display: inline-block;
      padding: 0 8px;
      height: 100%;
      font-size: 18px;
      color: #5a5e66;
      vertical-align: text-bottom;

      &.hover-effect {
        cursor: pointer;
        transition: background .3s;

        &:hover {
          background: rgba(0, 0, 0, .025);
        }
      }
    }
  }
}
</style>
