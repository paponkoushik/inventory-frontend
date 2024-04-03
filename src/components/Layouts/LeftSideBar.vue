<template>
  <div id="app" v-if="store.getters['Auth/authenticated']" class="main-left-sidebar">
    <div class="topbar">
      <div class="container-fluid">
        <div class="row">
          <div class="col">
            <div class="d-flex align-items-center">
              <img src="../../assets/logo.png" alt="Logo" style="max-height: 40px;">
              <h3 class="ml-2 mb-0">Admin Dashboard</h3>
            </div>
          </div>
          <div class="col text-right">
            <button class="btn btn-danger" @click="logout">Logout</button>
          </div>
        </div>
      </div>
    </div>

    <div class="sidebar">
      <ul class="nav flex-column">
        <li class="nav-item" v-for="(item, index) in sidebarItems" :key="index">
          <router-link :to="item.link" class="nav-link">
            <i :class="item.icon"></i>
            {{ item.title }}
          </router-link>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import {mapActions} from "vuex";

export default {
  data() {
    return {
      sidebarItems: [
        { title: 'Inventory', link: '/inventory', icon: 'fas fa-warehouse' },
        { title: 'Item', link: '/item', icon: 'fas fa-box' },
      ]
    };
  },
  computed: {
    store() {
      return this.$store;
    },
  },
  methods: {
    ...mapActions({
      logoutAction: 'Auth/logout'
    }),

    logout() {
      this.logoutAction().then(() => {
        this.$router.replace({
          name: 'login'
        })
      });
    }
  }
};
</script>

<style>
.topbar {
  background-color: #343a40;
  color: #fff;
  padding: 10px 0;
}

.topbar h3 {
  margin: 0;
}

.sidebar {
  width: 250px;
  background-color: #343a40;
  color: #fff;
  height: 100%;
  position: fixed;
  top: 60px; /* Adjust this value based on your top bar height */
  left: 0;
  overflow-y: auto;
}

.content {
  margin-left: 250px;
  padding: 20px;
}

.nav-link {
  color: #fff;
}

.nav-link i {
  margin-right: 10px;
}
</style>