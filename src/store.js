import Vue from 'vue'
import Vuex from 'vuex'
import firebase from 'fb'

Vue.use(Vuex)
export default new Vuex.Store({
  state: { user: null },

  mutations: {
    auth (state, user) { state.user = user }
  },

  actions: {
    async signIn ({ commit, dispatch }, { email, password }) {
      const { user } = await firebase.auth().signInWithEmailAndPassword(email, password)
      return commit('auth', user) || dispatch('updateToken').catch(err => console.error(err))
    },

    async updateToken ({ state }) {
      if (!state.user) return
      const { email, uid } = state.user

      const ref = firebase.firestore().collection('admins').doc(uid)
      const registrations = (await ref.get()).get('registrations') || []

      await firebase.messaging().requestPermission()
      const token = await firebase.messaging().getToken()
      if (!token || registrations.find(r => r.token === token)) return

      const r = { token, subscribedAt: Date.now(), userAgent: navigator.userAgent }
      await ref.update({ email, updatedAt: Date.now(), registrations: registrations.concat(r) })
    }
  }
})
