<script setup lang="ts">
import recepieData from '../../public/recipes.json';
import { RecipesData, Recipe} from '@/types';
import { ref } from 'vue';
import RecipeCard from './RecipeCard.vue';

const recipes = ref<Recipe[]>(recepieData);
console.log(recipes.value);
</script>
<template>
    <section class="bg-blue-50 px-4 py-10">
        <div class="container-xl lg:container m-auto">
            <h2 class="text-3xl font-bold text-green-500 mb-6 text-center">
                Browse Recipes
            </h2>
            <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
                <RecipeCard v-for="recepie in recipes.recipes" :key="recepie.id" :recepie="recepie"/>

            </div>
        </div>
    </section>

</template>