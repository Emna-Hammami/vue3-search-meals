<template>
    <div class="flex flex-col p-8 ">
        <h1 class="text-4xl font-bold mb-4">Random Meals</h1>
        
    </div>

    <Meals :meals="meals" />
    
</template>

<script setup>
import { onMounted, ref } from 'vue';
import axiosClient from '../axiosClient.js';

import Meals from '../components/Meals.vue';

//const meals = computed(() => store.state.meals)

/*const ingredients = ref([])

onMounted(async() => {
    const response = await axiosClient.get('/list.php?i=list');
    console.log(response.data);
    ingredients.value=response.data
});*/
const meals = ref([]);

onMounted(async () => {
  for (let i = 0; i < 10; i++) {
    axiosClient
      .get(`random.php`)
      .then(({ data }) => meals.value.push(data.meals[0]));
  }
});


</script>