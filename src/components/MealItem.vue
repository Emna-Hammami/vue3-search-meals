<template>
    <div  class="bg-white shadow rounded-xl">
        
        <router-link :to="{name: 'MealDetails', params:{id: meal.idMeal}}">
            <img :src="meal.strMealThumb" :alt="meal.strMeal"
        class="rounded-t-xl w-full h-48 object-cover">
        </router-link>
       
        <h3 class="font-bold">{{ meal.strMeal }}</h3>
        
        <div class="flex items-center justify-between">
            <YouTubeButton :href="meal.strYoutube">
                YouTube</YouTubeButton>


            <!--router-link to="/" class="px-3 py-2 rounded
            border-2 border-purple-600 bg-purple-500 text-white
            hover:bg-purple-600
            transition-colors"
            >View</Y!--router-link-->
        </div>
    </div>
</template>

<script setup>
import { defineProps } from 'vue';

import YouTubeButton from './YouTubeButton.vue';

const { meal } = defineProps({
    meal:{
        required: true,
        type: Object
    }
})
</script>