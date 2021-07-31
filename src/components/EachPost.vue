<template>
  <div class="container-fluid text-center mt-5">

    <div class="row">
      <div class="col-12">
        <h1>Each Posts</h1>
        <div>
            <button 
                  type="button"
                  class="btn btn-primary btn-lg"
                  @click.stop="_setSelectedUser(post.userId)">Back</button>
          </div>
        <hr />
      </div>
      <div class="col-12">
          <div><b>user Id:</b> {{post.userId || ''}}</div>
          <div><b>ID:</b> {{post.id || ''}}</div>
          <div><b>Title:</b> {{post.title || ''}}</div>
          <div><b>Body:</b> {{post.body || ''}}</div>
      </div>
    </div>

  </div>
</template>

<script>
import { mapState, mapActions } from 'vuex'

export default {
  computed: {
    ...mapState('Post', [
      'post'
    ])
  },
  methods: {
    ...mapActions('Post', [
      'getPost',
    ]),
     async _setSelectedUser (user) {
      this.$router.push({ path: `/posts/${user}` })
    }
  },
  created () {
    this.getPost({postId: this.$route.params.id})
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
</style>