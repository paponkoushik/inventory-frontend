import Login from "../components/Auth/Login";
import store from "../store/index"
import Register from "../components/Auth/Register.vue";
import Inventories from "../components/Inventories/Inventories.vue";
import EditInventory from "../components/Inventories/EditInventory.vue";
import AddInventory from "../components/Inventories/AddInventory.vue";

export const routes = [
  {
    path: '/',
    name: 'login',
    component: Login,
    beforeEnter: (to, from, next) => {
      if (store.getters['Auth/authenticated']) {
        return next({
          name: 'Inventories'
        });
      }
      next();
    }
  },
  {
    path: '/register',
    name: 'register',
    component: Register,
    beforeEnter: (to, from, next) => {
      if (store.getters['Auth/authenticated']) {
        return next({
          name: 'home'
        });
      }
      next();
    }
  },

  {
    path: '/inventories',
    name: 'inventories',
    component: Inventories,
    beforeEnter: (to, from, next) => {
      if (!store.getters['Auth/authenticated']) {
        return next({
          name: 'login'
        });
      }
      next();
    }
  },
  {
    path: '/add-inventory',
    name: 'add_inventory',
    component: AddInventory,
    beforeEnter: (to, from, next) => {
      if (!store.getters['Auth/authenticated']) {
        return next({
          name: 'login'
        });
      }
      next();
    }
  },
  {
    path: '/edit-inventory/:id',
    name: 'edit_inventory',
    component: EditInventory ,
    beforeEnter: (to, from, next) => {
      if (!store.getters['Auth/authenticated']) {
        return next({
          name: 'login'
        });
      }
      next();
    }
  },
]