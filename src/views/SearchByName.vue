<template>

    <div class="p-8 pb-0">
        <input type="text" class="rounded border-2 border-gray-200
        w-full " placeholder="Search for Meals"
        @change="serachMeals"/>
    </div>

    <div class="grid grid-cols-1 md:grid-cols-3 gap-5 p-8">
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
            <a :href="meal.strYoutube" 
            target="_blank" class="px-3 py-2 rounded
            border-2 border-red-600 bg-red-500 text-white
            hover:bg-red-600
            transition-colors">YouTube</a>

            <!--router-link to="/" class="px-3 py-2 rounded
            border-2 border-purple-600 bg-purple-500 text-white
            hover:bg-purple-600
            transition-colors"
            >View</!--router-link-->
        </div>

        </div>
    </div>

</template>

<script setup>
import { computed, onMounted, ref } from 'vue';
import { useRoute } from "vue-router";
import store from '../store';

    const route=useRoute();

    const keyword=ref('');

    const meals = computed(()=>
    store.state.searchedMeals);


    function serachMeals() {
        store.dispatch('searchMeals', keyword.value)
    }

    onMounted(() => {
        keyword.value = route.params.name
        if (keyword.value){
            serachMeals()
        }
    })

</script>