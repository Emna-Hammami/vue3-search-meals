<template>

    <div class="p-8 pb-0">
        <input type="text" class="rounded border-2 border-gray-200
        w-full bg-white" placeholder="Search for Meals" v-model="keyword"
        @change="serachMeals"/>
    </div>

    <!--div class="grid grid-cols-1 md:grid-cols-3 gap-5 p-8">
        <div v-for="meal of meals"
        :key="meal.idMeal" class="bg-white shadow rounded-xl">
        
        <router-link :to="{name: 'MealDetails', params:{id: meal.idMeal}}">
            <img :src="meal.strMealThumb" :alt="strMeal"
        class="rounded-t-xl w-full h-48 object-cover">
        </router-link>
       
        <h3 class="font-bold">{{ meal.strMeal }}</h3>
        <p class="mb-4">
            ghjglkrjekljyuizihtj
        </p>
        <div class="flex items-center justify-between">
            <YouTubeButton :href="meal.strYoutube">
                YouTube</YouTubeButton>


            <router-link to="/" class="px-3 py-2 rounded
            border-2 border-purple-600 bg-purple-500 text-white
            hover:bg-purple-600
            transition-colors"
            >View</router-link>
        </div>

        </div>

        <MealItem v-for="meal of meals" :key="meal.idMeal"
        :meal="meal"/>

    </div-->

    <Meals :meals="meals"/>

</template>

<script setup>
import { computed, onMounted, ref } from 'vue';
import { useRoute } from "vue-router";
import store from '../store';

import Meals from '../components/Meals.vue';


    const route=useRoute();

    const keyword=ref('');

    const meals = computed(()=>
    store.state.searchedMeals);


    function serachMeals() {
        if (keyword.value){
        store.dispatch('searchMeals', keyword.value)}
        else{
            store.commit('setSearchedMeals', keyword.value)
        }
    }

    onMounted(() => {
        keyword.value = route.params.name
        if (keyword.value){
            serachMeals()
        }
    })

</script>