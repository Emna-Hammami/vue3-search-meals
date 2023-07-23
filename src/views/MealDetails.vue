<template>
    <div class="max-w-[800px] mx-auto p-8">

        <!--pre>{{ meal }}</!--pre-->
        <h1 class="text-5xl font-bold mb-5">{{ meal.strMeal }}</h1>
        <img :src="meal.strMealThumb" :alt="meal.strMeal"
        class="max-w-[100%]">

        <div class="grid grid-cols-1 sm:grid-cols-3 text-lg py-2">
            <div>
                <strong class="font-bold">Category:</strong>
                {{ meal.strCategory }}
            </div>
            <div>
                <strong class="font-bold">Area:</strong>
                {{ meal.strArea }}
            </div>
            <div>
                <strong class="font-bold">Tags:</strong>
                {{ meal.strTags }}
            </div>
        </div>

        <div class="my-3">{{ meal.strInstructions }}</div>

        <div class="grid grid-cols-1 sm:grid-cols-2">
            <div>
                <h2 class="text-2xl font-semibold mb-2">Ingredients</h2>
                <ul>
                    <template v-for="(elt, index) of new Array(20)">
                        <li v-if="meal[`strIngredient${index + 1}`]">
                           {{ index + 1 }}. {{ meal[`strIngredient${index + 1}`] }}
                        </li>
                    </template>
                </ul>
            </div>

            <div>
                <h2 class="text-2xl font-semibold mb-2">Measures</h2>
                <ul>
                    <template v-for="(elt, index) of new Array(20)">
                        <li v-if="meal[`strMeasure${index + 1}`]">
                           {{ index + 1 }}. {{ meal[`strMeasure${index + 1}`] }}
                        </li>
                    </template>
                </ul>
            </div>
            <div class="mt-4">
                <YouTubeButton :href="meal.strYoutube">YouTube</YouTubeButton>

                <a :href="meal.strSource" 
            target="_blank" class="px-3 py-2 rounded
            border-2 border-indigo-500 bg-indigo-400 text-white
            hover:bg-indigo-500 ml-3
            transition-colors">View Original Source</a>
            </div>


        </div>


    </div>
</template>

<script setup>
import { onMounted, ref } from 'vue';
import { useRoute } from 'vue-router';
import axiosClient from '../axiosClient';

import YouTubeButton from '../components/YouTubeButton.vue';

const meal = ref({})
const route = useRoute();

onMounted(() => {
    axiosClient.get(`lookup.php?i=${route.params.id}`)
        .then(({data}) =>{
            //debugger;
            meal.value=data.meals[0] || {}
        })
})

</script>