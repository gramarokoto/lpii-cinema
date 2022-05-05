export const state = () => {
  return {
    home: null,
    actors: null,
    directors: null,
    productors: null,
  }
}

export const mutations = {
  SET_HOME(state, { persons }) {
    state.home = persons
  },
  SET_ACTORS(state, { persons }) {
    state.actors = persons
  },
  SET_DIRECTORS(state, { persons }) {
    state.directors = persons
  },
  SET_PRODUCTORS(state, { persons }) {
    state.productors = persons
  },
}

export const actions = {
  async nuxtServerInit({ commit }, { $axios }) {
    commit(
      'SET_HOME',
      await $axios.$get('https://ba-api.lpnt.fr/rubrique/home')
    )
    commit(
      'SET_ACTORS',
      await $axios.$get('https://ba-api.lpnt.fr/rubrique/acteurs')
    )
    commit(
      'SET_DIRECTORS',
      await $axios.$get('https://ba-api.lpnt.fr/rubrique/directeurs')
    )
    commit(
      'SET_PRODUCTORS',
      await $axios.$get('https://ba-api.lpnt.fr/rubrique/producteurs')
    )
  },
}
