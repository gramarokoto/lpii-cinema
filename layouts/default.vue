<template>
  <div>
    <b-navbar>
      <template #brand>
        <b-navbar-item tag="router-link" :to="{ path: '/' }">
          <img
            src="https://raw.githubusercontent.com/buefy/buefy/dev/static/img/buefy-logo.png"
            alt="Lightweight UI components for Vue.js based on Bulma"
          />
        </b-navbar-item>
      </template>
      <template #start>
        <b-navbar-item tag="router-link" :to="{ path: '/' }">
          Home
        </b-navbar-item>
        <b-navbar-item tag="router-link" :to="{ path: '/actors' }">
          Actors
        </b-navbar-item>
        <b-navbar-item tag="router-link" :to="{ path: '/directors' }">
          Directors
        </b-navbar-item>
        <b-navbar-item tag="router-link" :to="{ path: '/productors' }">
          Productors
        </b-navbar-item>
      </template>
      <template #end>
        <b-navbar-item tag="div">
          <AppSearchbar />
        </b-navbar-item>
      </template>
    </b-navbar>
    <section class="main-content columns">
      <div class="container column is-10">
        <Nuxt />
      </div>
    </section>
  </div>
</template>

<script>
import AppSearchbar from '../components/AppSearchbar.vue'
export default {
  name: 'DefaultLayout',
  data() {
    return {
      items: [
        {
          title: 'Home',
          to: { path: '/' },
        },
        {
          title: 'Actors',
          to: { path: '/actors' },
        },
        {
          title: 'Directors',
          to: { path: '/directors' },
        },
      ],
    }
  },
  components: { AppSearchbar },
}
</script>

<style>
.menu-list {
  display: flex;
}
</style>
