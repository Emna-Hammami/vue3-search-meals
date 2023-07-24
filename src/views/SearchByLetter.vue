<template>

        <div class="flex gap-2 mt-2 justify-center">
            <!--router-link :to="{name: 'byLetter', params: {letter}}" 
            v-for="letter of letters"
            :key="letter">
                {{ letter }}
            </!--router-link-->
            <div v-for="letter of letters.split('')" :key="letter">
                <router-link :to="{ name: 'byLetter', params: { letter } }">
                    {{ letter }}</router-link>
              </div>
        </div>

        <!--pre>{{ meals }}</!--pre-->
        <!--div class="grid grid-cols-1 md:grid-cols-3 gap-5 p-8">
            <MealItem v-for="meal of meals" :key="meal.idMeal"
        :meal="meal"/>
        </!--div-->

        <Meals :meals="meals"/>
   

</template>

<script setup>
import { computed } from "@vue/reactivity";
import { onMounted, watch } from "vue";
import { useRoute } from "vue-router"; // import the router instance and alias it
import store from '../store';

import Meals from '../components/Meals.vue';


const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const meals = computed (() => store.state.mealsByLetter);
const route = useRoute();

watch(route, () =>{
    store.dispatch('searchMealsByLetter', route.params.letter)
})


onMounted(() =>{
   
        store.dispatch('searchMealsByLetter', route.params.letter)
})

</script>