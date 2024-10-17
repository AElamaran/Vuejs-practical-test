// router/index.js
import { createRouter, createWebHistory } from 'vue-router';
import Login from '../pages/Login.vue';
import Register from '../pages/Register.vue';
import ForgotPassword from '../pages/ForgotPassword.vue';
import Home from '../pages/Home.vue'; // Assuming you create a Home.vue
import Task from '../pages/Task.vue';
import Categories from '../pages/Category.vue';

const routes = [
  { path: '/', component: Login },
  { path: '/register', component: Register },
  { path: '/forgot-password', component: ForgotPassword },
  {
    path: '/home',
    component: Home,
    children: [
      { path: '', component: Task }, // Default child route
      { path: 'tasks', component: Task }, // Route for Task page
      { path: 'categories', component: Categories }, // Route for Categories page
    ],
  },
];

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
});

export default router;
