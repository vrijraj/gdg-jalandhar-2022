import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    drawer: false,
    items: [
      {
        text: "Home",
        to: "/",
        icon: "mdi-home-outline",
        meta: {
          showToolbar: true,
          showBottomNav: true,
        },
      },
      {
        text: "Team",
        to: "/team",
        icon: "mdi-account-group-outline",
        meta: {
          showToolbar: true,
          showBottomNav: true,
        },
      },
      {
        text: "Events",
        to: "/events",
        icon: "mdi-newspaper-variant-outline",
        meta: {
          showToolbar: true,
          showBottomNav: true,
        },
      },
      {
        text: "About",
        to: "/about",
        icon: "mdi-information-outline",
        meta: {
          showToolbar: true,
          showBottomNav: true,
        },
      },
      
      {
        text: "FAQ",
        to: "/faq",
        icon: "mdi-star-outline",
        meta: {
          showToolbar: true,
          showBottomNav: false,
        },
      }
    ]
  },
  getters:{
    links: (state) => state.items,
  },
  mutations: {
    setDrawer: (state, payload) => (state.drawer = payload),
    toggleDrawer: (state) => (state.drawer = !state.drawer),
  },
  actions: {
  },
  modules: {
  }
})