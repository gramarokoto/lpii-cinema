<template>
  <section>
    <div v-if="errorMessage">
      {{ errorMessage }}
    </div>
    <div>
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
}
</script>
