import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex);
const state={
  token:localStorage.getItem('token')?localStorage.getItem('token'):''
};
const actions={
  saveLogin({commit},token){
    commit('SAVELOGIN',token);
  }
};
const mutations={
  SAVELOGIN(state,token){
    state.token=token;
    localStorage.setItem('token',token);
  }
};
export default new Vuex.Store({
  state,
  actions,
  mutations
})

