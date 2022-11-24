import { LocalStorage } from 'quasar';
import { createStore } from 'vuex';

const store = createStore({
  state: {
    user: {},
    authenticated: false,
  },
  getters: {
    authenticated(state) {
      return state.authenticated;
    },
    user(state) {
      return state.user;
    },
  },
  mutations: {
    SET_AUTHENTICATED(state, value) {
      state.authenticated = value;
    },
    SET_USER(state, value) {
      state.user = value;
    },
  },
  actions: {
    login({ commit, state }, data) {
      commit('SET_USER', data.user);
      commit('SET_AUTHENTICATED', true);
      LocalStorage.set('access_token', data.token);
    },
    logout({ commit }) {
      commit('SET_USER', {});
      commit('SET_AUTHENTICATED', false);
      LocalStorage.remove('access_token');
    },
    checkAuth({ commit, state }) {
      commit;
    },
  },
});

export default store;
