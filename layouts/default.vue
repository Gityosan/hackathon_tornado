<template>
  <v-app>
    <v-app-bar class="rounded-xl" fixed app hide-on-scroll>
      <v-app-bar-title>Plarch</v-app-bar-title>
    </v-app-bar>
    <v-main>
      <v-container>
        <Nuxt />
      </v-container>
    </v-main>
    <v-bottom-navigation class="rounded-xl" grow shift color="primary">
      <v-btn><span>Home</span><v-icon>fas fa-home</v-icon></v-btn>
      <v-btn><span>Search</span><v-icon>fas fa-search</v-icon></v-btn>
      <v-btn><span>Contact</span><v-icon>far fa-handshake</v-icon></v-btn>
      <v-btn><span>Setting</span><v-icon>far fa-user</v-icon></v-btn>
    </v-bottom-navigation>
  </v-app>
</template>

<script>
  export default {
    data() {
      return {
        clipped: false,
        drawer: false,
        fixed: false,
        items: [
          {
            icon: 'mdi-apps',
            title: 'Welcome',
            to: '/'
          },
          {
            icon: 'mdi-chart-bubble',
            title: 'Inspire',
            to: '/inspire'
          }
        ],
        miniVariant: false,
        right: true,
        rightDrawer: false,
        title: 'Vuetify.js'
      }
    }
  }
</script>
