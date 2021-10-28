import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    marvelData: {},
  },
  mutations: {
    addProductToOrder(state, product) {
      state.order.push(product);
    }
  },
  actions: {
    async getAllRestaurants(context) {
      await axios
        .get("/api/restaurants")
        .then(response => {
          context.commit("setRestaurants", response.data);
        })
        .catch(function (error) {
          return Promise.reject(error)
        });
    }
  }
})