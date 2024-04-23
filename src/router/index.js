
import LoginPage from "../views/LoginPage.vue";
import WelcomePage from "../views/WelcomePage.vue";
import HomePage from "../views/HomePage.vue";


import { createRouter, createWebHistory } from 'vue-router';
//import Home from '../views/Home.vue';

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/',
      name: 'Welcome',
      component: WelcomePage
    },
    {
      path: '/login',
      name: 'Login',
      component: LoginPage
    },
    {
      path: '/homepage',
      name: 'Homepage',
      component: HomePage
    },
  ]
});

export default router;
