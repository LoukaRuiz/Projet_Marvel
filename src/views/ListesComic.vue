<template>
  <v-expansion-panels>
    <v-expansion-panel
       v-for="comic in Comics" :key="comic.id">
      :key="i"
    >
      <v-expansion-panel-header>
        {{comic.title}}
      </v-expansion-panel-header>
      <v-expansion-panel-content
      <v-for="characters in heroes.characters" :key="characters.id"
      > Listes des personnages
       -{{characters.name}}
       -{{characters.description}}
      </v-expansion-panel-content>
    </v-expansion-panel>
  </v-expansion-panels>
</template>

<script lang="ts">
import axios from "axios";

export default {
  data() {
    return {
      Comics: [],
    };
  },
  methods: {
    async fetchComics() {
      this.Comics = await (await axios.get("http://localhost:3001/comics")).data.data.results;
    },
  },
};
</script>
