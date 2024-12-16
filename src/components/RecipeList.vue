<script setup lang="ts">
import recepieData from '../../public/recipes.json';
import { RecipesData, Recipe} from '@/types';
import { ref } from 'vue';

const recipes = ref<Recipe[]>(recepieData);
console.log(recipes.value);
</script>
<template>
    Recipe List
</template>