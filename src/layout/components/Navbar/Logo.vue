<template>
  <div class="components-container">
    <a href="/">
      <svg-icon icon-class="lock" />
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
.components-container {
  height: 50px;
  line-height: 50px;
  text-align: center;
}
.logo {
  width: 30px;
}
.logo-title {
  margin-left: 10px;
}

.test {
  height: 85px;
  width: 100px;
  font-size: 30px;
  color: #24292e;
}
</style>
