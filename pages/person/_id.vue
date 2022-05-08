<template>
  <section>
    <div v-if="errorMessage">
      {{ errorMessage }}
    </div>
    <div>
      {{ person.title }}
    </div>
  </section>
</template>

<script>
export default {
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
}
</script>
