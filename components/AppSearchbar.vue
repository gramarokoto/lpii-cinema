<template>
  <section>
    <b-field v-if="datas">
      <b-autocomplete
        rounded
        v-model="name"
        :data="datas"
        field="fullname"
        placeholder="Chercher une personne"
        icon="magnify"
        clearable
        @select="
          (option) => {
            if (option && option.id) {
              $router.push({ name: 'person-id', params: { id: option.id } })
            }
          }
        "
      >
        <template #empty>No results found</template>
      </b-autocomplete>
    </b-field>
  </section>
</template>

<script>
export default {
  data() {
    return {
      name: '',
      selected: null,
    }
  },
  computed: {
    datas() {
      const { home, actors, directors, productors } = this.$store.state
      let datas = [...home, ...actors, ...directors, ...productors]

      // NOTE : Solution from https://dev.to/phibya/comment/1hpe7 to remove duplicate
      datas = Array.from(
        datas.reduce((p, c) => p.set(c.fullname, c), new Map()).values()
      )

      return datas.filter((option) => {
        return (
          option.fullname
            .toString()
            .toLowerCase()
            .indexOf(this.name.toLowerCase()) >= 0
        )
      })
    },
  },
}
</script>
