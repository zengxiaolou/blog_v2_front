<template>
  <div class="app-logo">
    <a href="/">
      <svg-icon icon-class="stack" class-name="logo" />
      <span class="logo-title">Mess Stack</span>
    </a>
  </div>
</template>

<script>
export default {
  name: 'Logo'
}

</script>

<style lang="scss" scoped>
.app-logo {
  margin-left: 16px;
  display: inline-block;
  float: left;
  font-size: 18px;
  line-height: 50px;
}
.logo {
  font-size: 30px;
  color: #409EFF;
}
.logo-title {
  margin-left: 10px;
}
</style>
