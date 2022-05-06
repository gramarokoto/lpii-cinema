<template>
  <div class="box">
    <AppImage
      :src="`https://ba-api.lpnt.fr/images/personne/${rubrique.img}`"
      :rubrique="rubrique"
    />
    <p class="is-size-5 mt-2">
      {{ rubrique.fullname }}
    </p>
    <p class="is-size-6 mt-2 pb-2">
      {{ getShorterProfession }}
    </p>
  </div>
</template>

<script>
import AppImage from './AppImage.vue'
export default {
  name: 'AppBoxRubrique',
  props: {
    rubrique: {
      type: Object,
      required: true,
    },
  },
  components: { AppImage },
  computed: {
    getShorterProfession() {
      const professions = this.rubrique.profession
      const arrayProfessions = professions.split(', ')
      if (arrayProfessions.length > 1) {
        return `${arrayProfessions[0]} et autres ...`
      } else {
        return arrayProfessions[0]
      }
    },
  },
}
</script>
