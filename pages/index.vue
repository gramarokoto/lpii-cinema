<template>
  <section class="home">
    <div v-if="rubriques">
      {{ rubriques }}
    </div>
    <pagination></pagination>
  </section>
</template>

<script>
export default {
  async asyncData({ store, route }) {
    const { state } = store
    const allRubriques = state.home
    const pageSize = 10
    const totalPages = Math.ceil(allRubriques.length / pageSize)
    const query = route.query
    if ('page' in query) {
      let currentPage = +query.page
      if (currentPage < 1) {
        currentPage = 1
      } else if (currentPage > totalPages) {
        const errorMessage = 'Page introuvable'
        return { errorMessage }
      }
      const offset = (currentPage - 1) * pageSize
      console.log(offset)
      const rubriques = state.home.slice(offset, offset + pageSize)
      return { rubriques }
    } else {
      const rubriques = state.home.slice(0, 10)
      return { rubriques }
    }
  },
}
</script>
