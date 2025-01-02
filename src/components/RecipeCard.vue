<script setup lang="ts">
import {ref, computed} from 'vue';
import type { Recipe } from './types';
import { RouterLink } from 'vue-router';


const props = defineProps({
    recepie:{
        type:Object as () => Recipe,
        required:true
    }
});
const showFullIngredients = ref(false);
const toggleIngredients = () => {
    showFullIngredients.value = !showFullIngredients.value;
};
const truncatedIngredients = computed(() => {
    let ingredientsIndex = props.recepie.ingredients;
    if(!showFullIngredients.value){
        ingredientsIndex = ingredientsIndex.slice(0,3);
    }
    return ingredientsIndex;
});

</script>

<template>
    <div class="bg-white rounded-xl shadow-md relative m-5">
        <div class="p-4">
            <div class="mb-6">
                <div class="text-gray-600 my-2">{{ props.recepie.servings }} Servings</div>
                <h3 class="text-xl font-bold">{{ props.recepie.name }}</h3>
            </div>

            
            <div class="mb-5">
                <h3 class="text-green-500 mb-2">{{ props.recepie.ingredients.length}} Ingredients</h3>
                <ul v-for="(ingredients,index) in truncatedIngredients" :key="index">
                    <li>{{index + 1}}. {{ingredients.quantity}} {{ingredients.item }}</li>
                </ul>
                <button @click="toggleIngredients" class="text-green-500 hover:text-green-600 mt-5">
                    {{ showFullIngredients ? 'Show less' : 'Show more'}}
                   
                </button>
            </div>
            
            
            
            <div class="border border-gray-100 mb-5"></div>

            <div class="flex flex-col lg:flex-row mb-4 justify-between">
                <div class="text-orange-700 mb-3">
                <i class="pi pi-stopwatch text-orange-700"></i>
                    Prep time: {{ props.recepie.prep_time }}
                </div>
                <div class="text-orange-700 mb-3">
                <i class="pi pi-stopwatch text-orange-700"></i>
                    Cook time: {{ props.recepie.cook_time}}
                </div>

            </div>
            <RouterLink
            :to="'/recipe/' + props.recepie.id"
            class="h-[36px] bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded-lg text-center text-sm">
                Read instructions
            </RouterLink>
        </div>
    </div>
</template>