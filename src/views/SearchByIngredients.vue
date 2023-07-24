<template>

    <!--div class="p-8">
        <h1 class="text-4xl font-bold mb-4">Ingredients</h1>
        <router-link :to="{name: 'byIngredient', params:{ingredient: ingredient.idIngredient}}" 
        v-for="ingredient of ingredients" :key="ingredient.idIngredient"
        class="bg-white rounded p-3 mb-3 shadow block">

        <pre>{{ ingredient }}</pre>
            <h3 class="text-2xl font-bold mb-2">{{ ingredient.strIngredient }}</h3>
            <p>{{ ingredient.strDescription }}</p>
        </router-link>
    </div-->

    <Meals :meals="meals"/>

</template>

<script setup>
import { computed, onMounted } from 'vue';

import { useRoute } from "vue-router";
import Meals from '../components/Meals.vue';
import store from '../store';

const meals = computed(() => store.state.mealsByIngredient);
const route = useRoute();

onMounted(() =>{
   
   store.dispatch('searchMealsByIngredient', route.params.ingredient)
})


/*const ingredients = ref([])


onMounted(() => {
    axiosClient.get("list.php?i=list")
        .then(({data}) =>{
            //debugger;
            ingredients.value=data.meals;

        })
    
})*/
</script>