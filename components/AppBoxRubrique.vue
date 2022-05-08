<template>
  <div class="box">
    <AppImage
      :src="`https://ba-api.lpnt.fr/images/personne/${rubrique.img}`"
      :fullname="rubrique.fullname"
      rounded
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
    // TODO : Check Marjane Satrapi case and Mark Millar
    getShorterProfession() {
      const professions = this.rubrique.profession
      if (professions) {
        const arrayProfessions = professions.split(', ')
        if (arrayProfessions.length > 1) {
          return `${arrayProfessions[0]} et autres ...`
        } else {
          return arrayProfessions[0]
        }
      } else {
        return 'Non renseigné'
      }
    },
  },
}
</script>
