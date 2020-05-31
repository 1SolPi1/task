import Vue from 'vue'
import Vuex from 'vuex'

import CRUD from "../api/CRUD";

import modal from "../modules/modal";

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    modal,
  },

  state: {
    tasks: []
  },
  mutations: {
    setTasks: (state, data) => {
      state.tasks = data;
    }
  },
  actions: {
    getAllTasks: async ({ commit }) => {
      const { data } = await CRUD.getAllTasks();

      commit('setTasks', data.tasks);
    },

    addTask: ({ dispatch }, data) => {
      console.log(data)

      CRUD.addTask(JSON.stringify(data)).then(()=>{
        dispatch('getAllTasks');
      })
    },

    editTask: ({ dispatch }, data) => {
      console.log(data)

      CRUD.editTask(JSON.stringify(data)).then(()=>{
        dispatch('getAllTasks');
      })
    },
  },
})
