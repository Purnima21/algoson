import Vue from 'vue'
import Vuex from 'vuex'

// Modulos
import User from "../modules/User";
import Post from "../modules/Post";

Vue.use(Vuex)

export const store = new Vuex.Store({
    modules: {
        User,
        Post
    }
})
