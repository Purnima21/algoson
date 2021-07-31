<template>
  <div class="container-fluid text-center mt-5">

    <div class="row">
      <div class="col-12 table-responsive">

        <div class="text-right">
          <a
            href="#"
            @click.stop="getAllUsers"
            class="btn-reload"
          >
            <i class="ti-reload"></i>
          </a>
        </div>

        <table class="table table-sm table-hover">
          <thead class="thead-vue">
            <tr>
              <th scope="col">#</th>
              <th scope="col">Name</th>
              <th scope="col">UserName</th>
              <th scope="col">Email</th>
            </tr>
          </thead>
          <tbody>
            <tr
              v-for="(user, index) in users"
              :key="index"
            >
              <th>{{user.id}}</th>
              <td>{{user.name}}</td>
              <td>{{user.username}}</td>
              <td>{{user.email}}</td>
              <td>
                <button
                  type="button"
                  class="btn btn-secondary btn-sm"
                  @click.stop="_setSelectedUser(user, 'view')"
                >View</button>
              </td>
            </tr>

            <tr v-if="users.length == 0">
              <td colspan="100">No hay Informacion...</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>

  </div>
</template>

<script>
//import { mapActions, mapState, mapMutations, mapGetters } from 'vuex'
import { mapState, mapActions, mapMutations } from 'vuex'

export default {
  computed: {
    ...mapState('User', [
      'users'
    ])
  },
  methods: {
    ...mapActions('User', [
      'getAllUsers',
    ]),
    ...mapMutations('User', [
      'setSelectedUser',
      'setAction'
    ]),
    //
    async _setSelectedUser (user) {
      this.$router.push({ path: `/posts/${user.id}` })
    }
  },
  created () {
    this.getAllUsers()
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