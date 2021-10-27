<template>
<div>
 <div v-for="item in heroes" :key="item.message">
    {{ item.title }}
  </div>
  </div>

</template>

<script lang="ts">
import axios from 'axios'

export default {
data() {
    return {
      heroes: [],
    };
  },
  async created() {
   await this.fetchUsers()
  },
 methods: {
  async  fetchUsers() {
     this.heroes=await axios.get('http://localhost:3001/heroes')
         },
        
    } 
 
}

</script>
