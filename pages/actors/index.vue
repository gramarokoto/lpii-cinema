<template></template>

<script>
export default {
  beforeCreate() {
    this.$router.push({ name: 'actors-page-page', params: { page: 1 } })
  },
}
</script>
