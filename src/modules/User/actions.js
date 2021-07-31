export function getAllUsers ({ commit, dispatch }, {selectedUser}) {
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => response.json())
    .then(users => {
        commit('setAllUsers', users)
        if(selectedUser) {
            dispatch('User/setSelectedUser', {userId: selectedUser}, { root: true })

        }
    })
}

export function setSelectedUser ({commit, dispatch, rootState}, { userId }) {
    const user = rootState.User.users.find(each => each.id == userId)
    if(user) {
        commit('setSelectedUserData', user)
    } else {
        dispatch('User/getAllUsers', {selectedUser: userId}, { root: true })
    }
}