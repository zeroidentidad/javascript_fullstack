import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const store = new Vuex.Store({
    state: {
        count: 0
    },
    mutations: {
        increment(state, value) {
            state.count+=value
        }
    },
    getters: {
        getCount: (state) => (id)=> {
            return state.count*id
        }
    }
});

export default store;