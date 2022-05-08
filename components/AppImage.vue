<template>
  <div>
    <div class="person-image" v-if="!error">
      <b-image
        :src="src"
        :alt="fullname"
        @error="
          ($event) => {
            $event.target.src = require('~/assets/nuxt-logo.png')
            error = true
          }
        "
        v-bind="$attrs"
        ratio="1by1"
      ></b-image>
    </div>
    <div class="person-no-image" v-else>
      <div class="person-no-image--text">{{ getUserInitial }}</div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'AppImage',
  props: {
    src: {
      type: String,
    },
    fullname: {
      type: String,
      required: true,
    },
  },
  data() {
    return {
      error: null,
    }
  },
  computed: {
    getUserInitial() {
      const userName = this.fullname
      const arrayNames = userName.split(' ')
      if (arrayNames.length > 1) {
        return arrayNames[0][0] + arrayNames[1][0]
      } else {
        return ''
      }
    },
  },
}
</script>

<style lang="scss">
@import '@/assets/style.scss';
.person-image {
  max-height: 300px;
  width: 200px;
}
.person-no-image {
  width: 200px;
  aspect-ratio: 1 / 1;
  background-color: $primary-light;
  border-radius: 50%;
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  justify-content: center;
  align-items: center;
  align-content: center;
}

.person-no-image--text {
  font-size: xx-large;
  color: white;
}
</style>
