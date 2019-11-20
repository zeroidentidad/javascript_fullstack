import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const store = new Vuex.Store({
    state: {
        count: 0
    },
    mutations: {
        increment(state, value) {
            state.count += value
        }
    },
    getters: {
        getCount: (state) => (id)=> {
            return state.count*id
        }
    },
    actions: {
        increment(context, value){
            setTimeout(() => {
                context.commit('increment', value)
            }, 2000);
            //context.getters.getCount(2)
            //context.state.count
        }
    }
});

export default store;