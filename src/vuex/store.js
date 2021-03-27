import Vue from "vue"
import Vuex from "vuex"
import axios from "axios"

Vue.use(Vuex);

let store = new Vuex.Store({
  state:{
      products:[

      ]
  },
  mutations:{

  },
  actions:{
    GET_PRODUCTS_API({commit}){
        /*returm axios('http://localhost:3000/products',{
        method "GET"
        })*/
       

    }
  },
  getters:{
      PRODUCTS(state){
          return state.products;
      }
  }
});


export default store;