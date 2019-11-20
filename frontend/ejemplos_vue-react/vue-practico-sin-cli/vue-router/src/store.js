import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const obj1 = {
    namespaced: true, //cuando se tienen props con mismo nombre en otra parte
    state: {
        count: 0
    },
    mutations: {
        increment(state) {
            state.count++
        }
    },
    getters: {
        getCount: (state) => {
            return state.count
        }
    },
    actions: {
        increment(context, value) {
            setTimeout(() => {
                context.commit('increment', value)
            }, 2000);
            //context.getters.getCount(2)
            //context.state.count
        }
    }
}

const obj2 = {
    namespaced: true,    
    state: {
        count: 0,
        message: "Holas watahea"
    },
    getters: {
        getMessage: (state) => {
            return state.message
        }
    },    
}

const store = new Vuex.Store({
    modules: {
        a: obj1,
        b: obj2
    }
});

export default store;