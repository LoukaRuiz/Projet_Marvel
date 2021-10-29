<template>
  <v-app>
    <v-app-bar
      app
      color="primary"
      dark
    >
      <div class="d-flex align-center">
      <router-link to="/" tag="button">Heroes</router-link>
      <router-link to="/Comic" tag="button">Comic</router-link>
      <router-link to="/Storie" tag="button">Storie</router-link>
      </div>

      <v-spacer></v-spacer>

     
    </v-app-bar>

    <v-main>
      <router-view/>
    </v-main>
  </v-app>
</template>

<script>

export default {
  name: 'App',

  data: () => ({
    //
  })
}
</script>
