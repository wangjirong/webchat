import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)
const User = {
    SET_USER: "SET_USER",
    GET_USER: "GET_USER",
}
export default new Vuex.Store({
    state: {
        user: {},
        friends:{
            online_friends:[],

        }
    },
    getters: {
        [User.GET_USER]: state => state.user
    },
    mutations: {
        [User.SET_USER]: (state, user) => {
            if (user) state.user = user;
            else state.user = null;
        },
    },
    actions: {
        setUser: ({
                      commit
                  }, user) => {
            commit(User.SET_USER, user)
        },
    },
    modules: {}
})
