<template>
  <section class="home">
    <div v-if="rubriques">
      {{ rubriques }}
    </div>
    <pagination
      :currentPage="currentPageProps"
      :total="allRubriquesLength"
      :perPage="pageSize"
      @change="handlePaginationChange($event)"
    />
  </section>
</template>

<script>
export default {
  async asyncData({ store, route }) {
    const { state } = store
    const allRubriques = state.home
    const allRubriquesLength = allRubriques.length
    const pageSize = 10
    const totalPages = Math.ceil(allRubriquesLength.length / pageSize)
    const params = route.params
    if ('page' in params) {
      let currentPage = +params.page
      if (currentPage < 1) {
        currentPage = 1
      } else if (currentPage > totalPages) {
        const errorMessage = 'Page introuvable'
        return { errorMessage }
      }
      const offset = (currentPage - 1) * pageSize
      const rubriques = state.home.slice(offset, offset + pageSize)
      return { rubriques, currentPage, pageSize, allRubriquesLength }
    } else {
      const rubriques = state.home.slice(0, 10)
      const currentPage = 1
      return { rubriques, currentPage, pageSize, allRubriquesLength }
    }
  },
  computed: {
    currentPageProps() {
      return this.currentPage
    },
  },
  methods: {
    async handlePaginationChange(page) {
      this.currentPage = page
      this.$router.push({ name: 'home-page-page', params: { page: page } })
    },
  },
}
</script>
