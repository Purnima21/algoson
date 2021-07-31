<template>
  <div class="container-fluid text-center mt-5">

    <div class="row">
      <div class="col-12">
        <h1>Posts</h1>
        <div>
          <button 
            type="button"
            class="btn btn-primary btn-lg"
            @click.stop="_goToHome()">Go To User</button>
          </div>
      </div>
      <div class="col-12 name">
        <div class="col-12">
          <h1>Name: {{selectedUser.name}}</h1>
        </div>
      </div>
      <div v-for="(post, index) in posts" :key="index" class="col-12">
          <div><b>ID:</b> {{post.id}}</div>
          <div><b>Title:</b> {{post.title}}</div>
          <div><b>Body:</b> {{post.body}}</div>
          <div>
            <button 
                  type="button"
                  class="btn btn-secondary btn-sm"
                  @click.stop="_setSelectedPost(post.id)">View More</button>
          </div>
          <hr />
      </div>
    </div>

  </div>
</template>

<script>
import { mapState, mapActions, mapMutations } from 'vuex'

export default {
  computed: {
    ...mapState('Post', [
      'posts'
    ]),
     ...mapState('User', [
      'selectedUser'
    ])
  },
  methods: {
    ...mapActions('Post', [
      'getUserPost',
    ]),
    ...mapMutations('Post', [
      'setUserPosts',
    ]),
    async _setSelectedPost (postId) {
      this.$router.push({ path: `/each-post/${postId}` })
    },
    async _goToHome () {
      this.$router.push({ path: `/` })
    }
  },
  created () {
    this.getUserPost({userId: this.$route.params.id})
  }
}
</script>

<style scoped>
.thead-vue {
  background: #35495e !important;
  color: #fff;
}

.btn-reload {
  text-decoration: none;
}

.btn-reload .ti-reload {
  font-weight: bold;
  font-size: 24px;
}

.name {
  margin-top: 50px;
  margin-bottom: 50px;
  border-bottom: 1px solid;
}
</style>