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
}
</script>

<style>
.menu-list {
  display: flex;
}
</style>
