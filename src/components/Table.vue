<template>
  <v-data-table
    dense
    :headers="headers"
    :items="heroes"
    item-key="name"
    class="elevation-1"
    
  ></v-data-table>
</template>
<script>
import axios from "axios";
import Vuex from 'vuex';
  export default {
  async created() {
    await this.fetchHeroes();
  },
    data: () => ({
      headers: [
        {
          text: 'Nom',
          align: 'start',
          sortable: false,
          value: 'name',
        },
        { text: 'description', value: 'description' },
        { text: 'modifier', value: 'modified' },
      ],
      heroes: [],   

    }),
    computed:{
    getData(){
return store.state.marvelData;
    }
    },
    
  methods: {
    async fetchHeroes() {
      this.heroes = await (await axios.get("http://localhost:3001/heroes")).data.data.results;
    },
   async redirectToDetail(hero){
   store.commit("setMarvelData",hero)
    router.replace("heroes")

    }
  },
  l
  }
</script>