export const state = () => ({
    user: false,
    loggedIn:false
})

export const getters = {
    user(state) {
        return state.user
    },
    isAuthenticated(state) {
        return state.loggedIn;
    },

}
export const mutations = {
    // user add
    add(state, user) {
        // state.userData.assign(data)
        state.user = Object.assign({}, user)
        console.log(state);
    }

};