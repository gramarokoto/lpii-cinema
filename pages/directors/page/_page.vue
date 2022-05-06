<template>
  <section class="home">
    <div v-if="rubriques" class="columns is-multiline">
      <div
        v-for="rubrique in rubriques"
        :key="rubrique.id"
        class="column is-one-fifth gap"
      >
        <AppBoxRubrique :rubrique="rubrique" />
      </div>
    </div>
    <Pagination
      :currentPage="currentPageProps"
      :total="allRubriquesLength"
      :perPage="pageSize"
      :type="type"
    />
  </section>
</template>

<script>
import AppBoxRubrique from '../../../components/AppBoxRubrique.vue'
import Pagination from '../../../components/Pagination.vue'

export default {
  components: { AppBoxRubrique, Pagination },
  computed: {
    currentPageProps() {
      return this.currentPage
    },
  },
  async asyncData({ store, route }) {
    return await store.getters['getRubriques']({
      type: 'directors',
      route,
    })
  },
  data() {
    return {
      type: 'directors',
    }
  },
}
</script>

<style lang="scss">
.box {
  height: 350px;
  overflow: hidden;
}
</style>
