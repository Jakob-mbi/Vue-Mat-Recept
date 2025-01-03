<script setup lang="ts">
import { RouterLink } from 'vue-router';
import {Recipe} from '@/types';
import { ref, onMounted } from 'vue';
import RecipeCard from './RecipeCard.vue';

defineProps(
    {
        limit:{
            type:Number,
            
        },
        showButton:{
            type:Boolean,
            default: false
        }
    }
);
const recipes = ref<Recipe[]>([]);

onMounted(async () => {
    try {
        const response = await fetch('http://localhost:5000/recipes');
        recipes.value = await response.json();
    } catch (error) {
        console.error('Error fetching recipes:', error);
    }
});
</script>
<template>
    <section class="bg-blue-50 px-4 py-10">
        <div class="container-xl lg:container m-auto">
            <h2 class="text-3xl font-bold text-green-500 mb-6 text-center">
                Browse Recipes
            </h2>
            <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
                <RecipeCard v-for="recepie in recipes.slice(0,limit || recipes.length)" :key="recepie.id" :recepie="recepie"/>

            </div>
        </div>
    </section>
    <section v-if="showButton" class="m-auto max-w-lg my-10 px-6">
      <RouterLink
        to="/recipes"
        class="block bg-black text-white text-center py-4 px-6 rounded-xl hover:bg-gray-700"
        >View All Recipes</RouterLink
      >
    </section>

</template>