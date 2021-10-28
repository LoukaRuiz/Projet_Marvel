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
    await this.fetchUsers();
  },
  methods: {
    async fetchUsers() {
      this.heroes = await (await axios.get("http://localhost:3001/stories")).data.data.results;
    },
  },
};
</script>
