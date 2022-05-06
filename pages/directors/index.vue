<template></template>

<script>
export default {
  beforeCreate() {
    // TODO : use middleware checking path == directors
    this.$router.push({ name: 'directors-page-page', params: { page: 1 } })
  },
}
</script>
