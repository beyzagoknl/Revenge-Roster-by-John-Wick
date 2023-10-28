import { createPinia } from 'pinia'
import {createRouter, createWebHistory} from "vue-router";
import { createWebHashHistory } from 'vue-router';
import { useBodyStore } from "./stores/BodyStore";
import piniaPluginPersistedstate from 'pinia-plugin-persistedstate'


import { createApp } from 'vue'
import App from './App.vue'
import HomeView from "../src/views/HomeView.vue"
import DashboardView from "../src/views/DashboardView.vue"


const routes=[
    {
        path: '/',
        name:'home',
        component:HomeView

    },
    {
        path: '/dashboard',
        name: 'dashboard',
        component:DashboardView
 
      },


    ]
    
    export const router = createRouter({
        history: createWebHashHistory(),
        routes,
      });

     

      export default router;

      const pinia = createPinia()
pinia.use(piniaPluginPersistedstate)

      const app = createApp(App);
      app.use(pinia)
      app.use(router)
      app.mount('#app')