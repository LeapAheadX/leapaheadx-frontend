export default {
    state: {
      isLoggedIn: false
    },
    mutations: {
      login(state) {
        state.isLoggedIn = true
      },
      logout(state) {
        state.isLoggedIn = false
      }
    }
  }