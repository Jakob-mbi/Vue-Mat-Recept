<script setup lang="ts">
import Hero from '../components/Hero.vue';
import HomeCards from '../components/HomeCards.vue';
import RecipeList from '../components/RecipeList.vue';

</script>

<template>
  <Hero />
  <HomeCards />
  <RecipeList :limit="3" :showButton="true"/>

</template>


