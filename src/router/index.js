import Vue from 'vue'
import VueRouter from 'vue-router'
// import HomeView from '../views/HomeView.vue'
const TodosView = () => import(/* webpackChunkName: "todo" */ '@/views/TodosView.vue');
const CreateView = () => import(/* webpackChunkName: "todo" */ '@/views/CreateView.vue');
const EditView = () => import(/* webpackChunkName: "todo" */ '@/views/EditView.vue');

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'todos',
    component: TodosView,
  },
  {
    path: '/create',
    name: 'create-todo',
    component: CreateView
  },
  {
    path: '/edit/:id',
    name: 'get-todo',
    component: EditView
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
