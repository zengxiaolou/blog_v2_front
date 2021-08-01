<template>
  <div>
    <div style="margin-bottom: 15px;">
      Your roles: {{ role }}
    </div>
    Switch roles:
    <el-radio-group v-model="switchRoles">
      <el-radio label="editor" />
      <el-radio label="admin" />
    </el-radio-group>
  </div>
</template>

<script>
export default {
  name: 'SwitchRoles',
  computed: {
    roles() {
      return this.$store.getters.roles
    },
    switchRoles: {
      get() {
        return this.roles[0]
      },
      set(val) {
        this.$store.dispatch('user/changeRoles', val).then(() => {
          this.$emit('change')
        })
      }
    }
  }
}
</script>

<style lang="scss" scoped>

</style>
