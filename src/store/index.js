import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const savedLists = localStorage.getItem('trello-lists');

const store = new Vuex.Store({
  state: {
    lists: savedLists ? JSON.parse(savedLists)
      : [
          {
            tite: 'Backlog',
            cards: [
              { body: 'English' },
              { body: 'Mathematics'},
            ]
          },
          {
            tite: 'Todo',
            cards: [
              { body: 'Sience' },
            ]
          },
          {
            tite: 'Doing',
            cards: []
          },
        ]
  },
  mutations: {
    addlist(state, payload) {
      state.lists.push({ title: payload.title, cards: [] })
    }
  },
  actions: {
    addlist(context, payload) {
      context.commit('addlist', payload)
    },
  },
  getters: {
  },
})

store.subscribe((mutations, state) => {
  localStorage.setItem('trello-lists', JSON.stringify(state.lists))
});

export default store;