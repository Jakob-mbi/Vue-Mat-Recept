<script setup>
import Card from '@/components/Card.vue';
</script>

<template>
   <section class="py-4">
      <div class="container-xl lg:container m-auto">
        <div class="grid grid-cols-1 md:grid-cols-2 gap-4 p-4 rounded-lg">
            <Card>
                <h2 class="text-2xl font-bold">Looking for Recipes</h2>
                <p class="mt-2 mb-4">
                    Browse our Recipes to find the perfect meal for you
                </p>
                <a
                href="Recipes.html"
                class="inline-block bg-black text-white rounded-lg px-4 py-2 hover:bg-gray-700"
                >
                    Browse Recipes
                </a>
            </Card>
            <Card bg="bg-green-100">
                <h2 class="text-2xl font-bold">Share Recipes</h2>
                <p class="mt-2 mb-4">
                    Share your recipes with the world 
                </p>
                <a
                href="add-Recipe.html"
                class="inline-block bg-green-500 text-white rounded-lg px-4 py-2 hover:bg-green-600"
                >
                    Add Recipe
                </a>
            </Card>
        </div>
      </div>
    </section>
</template>