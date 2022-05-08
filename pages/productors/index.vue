<template></template>

<script>
export default {
  beforeCreate() {
    this.$router.push({ name: 'productors-page-page', params: { page: 1 } })
  },
}
</script>
