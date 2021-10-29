<template>
  <v-expansion-panels>
    <v-expansion-panel
       v-for="item in heroes" :key="item.id">
      :key="i"
    >
      <v-expansion-panel-header>
        {{item.name}}
      </v-expansion-panel-header>
      <v-expansion-panel-content
      <v-for="stories in heroes.stories" :key="stories.id"
      > Listes des Film
       -{{stories.title}}
      </v-expansion-panel-content>
      <v-for="Comic in heroes.comic" :key="Comic.id"
      > Listes des Comics
       -{{Comic.title}}
      </v-expansion-panel-content>
    </v-expansion-panel>
  </v-expansion-panels>
</template>

<script lang="ts">
import axios from "axios";

export default {
  data() {
    return {
      heroes: [],
    };
  },
  methods: {
    async fetchHeroes() {
      this.heroes = await (await axios.get("http://localhost:3001/heroes")).data.data.results;
    },
  },
};
</script>
