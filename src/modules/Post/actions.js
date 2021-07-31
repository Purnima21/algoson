export function getUserPost ({ commit, dispatch }, { userId }) {
    dispatch('User/setSelectedUser', {userId: userId}, { root: true })
    fetch(`https://jsonplaceholder.typicode.com/posts?userId=${userId}`)
    .then(response => response.json())
    .then(posts =>commit('setUserPosts', posts))
}

export function getPost ({ commit }, { postId }) {
    fetch(`https://jsonplaceholder.typicode.com/posts/${postId}`)
    .then(response => response.json())
    .then(post =>commit('setPost', post))
}
