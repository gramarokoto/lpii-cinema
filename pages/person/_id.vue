<template>
  <section>
    <div v-if="errorMessage">
      {{ errorMessage }}
    </div>
    <div class="box columns">
      <div class="column is-one-fifth">
        <AppImage
          :src="`https://ba-api.lpnt.fr/images/personne/${person.content.photo}`"
          :fullname="person.title"
          ratio="1by1"
        />
      </div>
      <div class="column">
        <h1 class="is-size-2">
          {{ person.title }}
        </h1>
        <div>
          {{ person.content.commentaire }}
        </div>
        <div>
          <a target="_blank" :href="person.content.url_dbpedia"
            >En savoir plus</a
          >
        </div>
      </div>
    </div>
    <!-- FIX : display bug when coming from click on app-rubrique -->
    <div class="box">
      <p class="is-size-3">Filmographie</p>
      <div class="columns is-multiline">
        <div
          v-for="movie in movies"
          :key="movie.imdb_id"
          class="column is-one-fifth film"
        >
          <b-image
            :src="`https://ba-api.lpnt.fr/images/film/${movie.content.pictures[0].content.name}`"
          />
          <p class="is-size-5 mt-4">
            {{ movie.title }}
          </p>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import AppImage from '../../components/AppImage.vue'
export default {
  // TODO : Add meta of the page for SEO
  async asyncData({ route, $axios }) {
    if ('id' in route.params) {
      let errorMessage = null
      let person = await $axios.$get(
        `https://ba-api.lpnt.fr/personne/${route.params.id}`
      )
      if (typeof person !== 'object') {
        errorMessage = 'Page non trouvable'
        person = null
      }
      return { person, errorMessage }
    }
  },
  components: { AppImage },
  computed: {
    movies() {
      return this.person.content.movies
    },
  },
}
</script>

<style>
.film {
  display: flex;
  flex-direction: column;
  flex-wrap: nowrap;
  justify-content: space-between;
  align-items: stretch;
  align-content: stretch;
}
</style>
