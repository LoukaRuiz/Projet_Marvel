<template>
  <v-expansion-panels>
    <v-expansion-panel
       v-for="storie in Stories" :key="storie.id">
      :key="i"
    >
      <v-expansion-panel-header>
        {{storie.title}}
      </v-expansion-panel-header>
      <v-expansion-panel-content
      <v-for="characters in Stories.characters" :key="characters.id"
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
      Stories: [],
    };
  },
  methods: {
    async fetchStories() {
      this.Stories = await (await axios.get("http://localhost:3001/stories")).data.data.results;
    },
  },
};
</script>
