<template>
    <div class="flex flex-col p-8 ">
       <div>
        <input type="text" class="rounded border-2 border-gray-200
        w-full " placeholder="Search for Meals"/>
       </div>

        <div class="flex gap-2 mt-2 justify-center">
            <!--router-link :to="{name: 'byLetter', params: {letter}}" 
            v-for="letter of letters.split('')"
            :key="letter">
                {{ letter }}
            </router-link-->
            <div v-for="letter of letters.split('')" :key="letter">
                <router-link :to="{ name: 'byLetter', params: { letter } }">
                    {{ letter }}</router-link>
              </div>
        </div>
    </div>
    
</template>

<script setup>
import { onMounted, ref } from 'vue';
import axiosClient from '../axiosClient.js';

//const meals = computed(() => store.state.meals)
const letters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
const ingredients = ref([])

onMounted(async() => {
    const response = await axiosClient.get('/list.php?i=list');
    console.log(response.data);
    ingredients.value=response.data
});


</script>