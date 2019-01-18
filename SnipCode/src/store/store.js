import Vuex from 'vuex'
import Vue from 'vue';
import axios from 'axios';

Vue.use(Vuex);
export default new Vuex.Store({
  state: {
    snippetContent: ''
  },
  getters: {
    snippetByHash: state => hash => {
      return axios.get("http://localhost:5000/api/snippet/" + hash);
    }
  },
  mutations: {
    updateSnippetContent: (state, newContent) => {
      state.snippetContent = newContent;
    }
  },
  actions: {
    updateSnippetContent: async ({
      commit
    }, {hash, newContent}) => {
      const data = JSON.stringify({
        hash: hash,
        newContent: newContent
      });

      console.log(newContent);

      axios.put("http://localhost:5000/api/snippet/", data, {
        headers: {
          'Content-Type': 'application/json',
        }
      });
      await commit('updateSnippetContent', newContent);
    }
  }
})
