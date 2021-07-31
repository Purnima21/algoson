export function getAllUsers ({ commit, dispatch }, selectedUserId) {
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => response.json())
    .then(users => {
        commit('setAllUsers', users)
        if(selectedUserId) {
            dispatch('User/setSelectedUser', {userId: selectedUserId}, { root: true })

        }
    })
}

export function setSelectedUser ({commit, dispatch, rootState}, { userId }) {
    const user = rootState.User.users.find(each => each.id == userId)
    if(user) {
        commit('setSelectedUserData', user)
    } else {
        dispatch('User/getAllUsers', userId, { root: true })
    }
}