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

export const getters = {
  getRubriques: (state) => (options) => {
    const { type, route } = options
    if (
      !type ||
      !['home', 'actors', 'directors', 'producteurs'].includes(type)
    ) {
      return
    }
    const allRubriques = state[type]
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
      const rubriques = allRubriques.slice(offset, offset + pageSize)
      return { rubriques, currentPage, pageSize, allRubriquesLength }
    } else {
      const rubriques = allRubriques.slice(0, 10)
      const currentPage = 1
      return { rubriques, currentPage, pageSize, allRubriquesLength }
    }
  },
}
