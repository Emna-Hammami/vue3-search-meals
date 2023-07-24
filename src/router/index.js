import { createRouter, createWebHistory } from "vue-router";


import Home from '../views/Home.vue';

import DefaultLayout from '../components/DefaultLayout.vue';
import GuestLayout from '../components/GuestLayout.vue';
import Ingredients from '../views/Ingredients.vue';
import MealDetails from '../views/MealDetails.vue';
import SearchByIngredients from '../views/SearchByIngredients.vue';
import SearchByLetter from '../views/SearchByLetter.vue';
import SearchByName from '../views/SearchByName.vue';


const routes = [
  
  {
    path: "/",
    component: DefaultLayout,
    children: [
      {
        path: "/by-name/:name?",
        name: "byName",
        component: SearchByName,
      },
      {
        path: "/by-letter/:letter?",
        name: "byLetter",
        component: SearchByLetter,
      },
      {
        path: "/ingredients",
        name: "Ingredients",
        component: Ingredients,
      },
      {
        path: "/by-ingredient/:ingredient?",
        name: "byIngredient",
        component: SearchByIngredients,
      },
      {
        path: '/meal/:id',
        name:"MealDetails",
        component: MealDetails,
      },
      {
        path: "/",
        name: "home",
        component: Home,
      },
    ]
  },
  {
    path:'/guest',
    component: GuestLayout,
  }
  
 
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
