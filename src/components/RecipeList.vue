<script setup lang="ts">
import recepieData from '../../public/recipes.json';
import { RecipesData} from '@/types';
import { ref } from 'vue';
import RecipeCard from './RecipeCard.vue';

defineProps(
    {
        limit:{
            type:Number,
            default:3
        },
        showButton:{
            type:Boolean,
            default: false
        }
    }
);
const recipes = ref<RecipesData>(recepieData);
</script>
<template>
    <section class="bg-blue-50 px-4 py-10">
        <div class="container-xl lg:container m-auto">
            <h2 class="text-3xl font-bold text-green-500 mb-6 text-center">
                Browse Recipes
            </h2>
            <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
                <RecipeCard v-for="recepie in recipes.recipes.slice(0,limit || recipes.recipes.length)" :key="recepie.id" :recepie="recepie"/>

            </div>
        </div>
    </section>
    <section v-if="showButton" class="m-auto max-w-lg my-10 px-6">
      <a
        href="/recipes"
        class="block bg-black text-white text-center py-4 px-6 rounded-xl hover:bg-gray-700"
        >View All Recipes</a
      >
    </section>

</template>