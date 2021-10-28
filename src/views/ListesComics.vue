<template>
  <div>
    <div v-for="item in heroes" :key="item.id">
      {{ item.title }}
    </div>
  </div>
</template>

<script lang="ts">
import axios from "axios";

export default {
  data() {
    return {
      heroes: [],
    };
  },
  async created() {
    await this.fetchComics();
  },
  methods: {
    async fetchComics() {
      this.heroes = await (await axios.get("http://localhost:3001/comics")).data.data.results;
    },
  },
};
</script>
