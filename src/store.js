import Vue from 'vue'
import Vuex from 'vuex'
import firebase from 'fb'

Vue.use(Vuex)
export default new Vuex.Store({
  state: {
    user: null,
    token: null
  },

  mutations: {
    auth (state, user) { state.user = user },
    token (state, token) { }
  },

  actions: {
    async updateToken ({ state, commit }) {
      if (!state.user) return
      const { uid, email } = state.user

      const token = await firebase.messaging().getToken()
      if (!token) return console.error('noo token is null')
      commit('token', token)

      const ref = firebase.firestore().collection('admins').doc(uid)
      const registrations = (await ref.get()).get('registrations') || []
      if (registrations.find(r => r.token === token)) return

      await ref.update({
        email,
        updatedAt: Date.now(),
        registrations: registrations.concat({
          token,
          subscribedAt: Date.now(),
          userAgent: navigator.userAgent
        })
      })
    }
  }
})
