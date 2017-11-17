import types from '../types.js';
import axios from 'axios';


const state = {
  seller: {}
};
const getters = {
  seller(state) {
    return state.seller;
  }
};
const actions = {
  getSeller({commit, state}) {
    axios.get("/data.json").then(function (data) {
      commit(types.GET_SELLER, data);
    });
  }
};
const mutations = {
  [types.GET_SELLER](state, data) {
    state.seller = data.data.seller;
  }
};

export default {
  state,
  getters,
  actions,
  mutations
};
