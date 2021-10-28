<template>
  <div>
  <table class="table table-hover">
      <thead>
        <tr>
         
          <th>
              Name
            </button>
          </th>
          <th>description</th>
          <th>Modifer</th>
         <th> 
        
          </th>
          <th />
          <th />
        </tr>
      </thead>
      <tbody>
        <tr
          v-for="item in heroes" :key="item.id">
          <td>{{ item.name }}</td>
          <td>{{ item.description }}</td>
          <td>{{ item.modified }}</td>

          </td>
        </tr>
      </tbody>
    </table>
    
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
    await this.fetchHeroes();
  },
  methods: {
    async fetchHeroes() {
      this.heroes = await (await axios.get("http://localhost:3001/heroes")).data.data.results;
    },
  },
};
</script>
