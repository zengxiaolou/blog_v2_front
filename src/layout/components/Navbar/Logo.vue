<template>
  <div class="components-container">
    <a href="">
      <el-image class="logo" :src="require('@/icons/svg/stack.png')" />
      <span>Mess Stack</span>
    </a>
  </div>
</template>

<script>
export default {
  name: 'Logo'
}
</script>

<style lang="scss" scoped>
.logo {
  width: 30px;
}
</style>
