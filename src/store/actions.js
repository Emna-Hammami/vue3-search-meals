export function searchMeals({ commit }, keyword){
    axiosClient.get(`search.php?s=${keyword}`)
    .then(({data})=> {
        //debugger;
        commit('setSearchedMeals', data.meals)
    })
}

import axiosClient from '../axiosClient';

export function searchMealsByLetter({ commit }, letter){
    axiosClient.get(`search.php?f=${letter}`)
    .then(({data})=> {
        //debugger;
        commit('setMealsByLetter', data.meals)
    })
}

export function searchMealsByIngredient({ commit }, ingredient){
    //debugger;
    axiosClient.get(`filter.php?i=${ingredient}`)
    .then(({data})=> {
        //debugger;
        commit('setMealsByIngredient', data.meals)
    })
}
