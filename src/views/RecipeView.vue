<script setup lang="ts">
  import type { Recipe } from './types';

  import { ref, onMounted,reactive } from 'vue';
  import { useRoute,RouterLink } from 'vue-router';

  const route = useRoute();

  const recipeID = route.params.id;
  

  const toggleFavourite = () => {
      favourite.value = !favourite.value;
  };


  const state:Recipe = reactive({
      recipe: { 
      } as Recipe
  });

  const favourite = ref(state.recipe.favourite);

  onMounted(async () => {
      try {
          const response = await await fetch(`http://localhost:5000/recipes/${recipeID}`);
          state.recipe = await response.json();
          console.log(state.recipe.servings);
      } catch (error) {
          console.error('Error fetching recipe:',error);
      } 
  });
</script>

<template>
     <section class="bg-green-50">
      <div class="container m-auto py-10 px-6">
        <div class="grid grid-cols-1 md:grid-cols-70/30 w-full gap-6">
          <main>
            <div
              class="bg-white p-6 rounded-lg shadow-md text-center md:text-left"
            >
              <div class="text-gray-500 mb-4">{{state.recipe.servings}} servings </div>
              <h1 class="text-3xl font-bold mb-4">{{state.recipe.name}}</h1>
              <div class="flex flex-col lg:flex-row mb-4 md:gap-4">
                <div class="text-orange-700 mb-3">
                  <i class="pi pi-stopwatch text-orange-700"></i>
                    Prep time: {{state.recipe.prep_time}}
                </div>
                <div class="text-orange-700 mb-3">
                  <i class="pi pi-stopwatch text-orange-700"></i>
                    Cook time: {{state.recipe.cook_time}}
                </div>
              </div>
              <i @click="toggleFavourite" :class="['pi',favourite?'pi-star-fill':'pi-star','mr-5' ,'text-xl']" ></i>
            </div>

            <div class="bg-white p-6 rounded-lg shadow-md mt-6">
              <h3 class="text-green-800 text-lg font-bold mb-6">
                Ingredients
              </h3>
                <ul v-for="(ingredients,index) in state.recipe.ingredients" :key="index">
                    <li class="mb-3">{{index + 1}}. {{ingredients.quantity}} {{ingredients.item }}</li>
                </ul>
              
              <h3 class="text-green-800 text-lg font-bold my-6">Instructions</h3>
                <ul v-for="(instruction,index) in state.recipe.instructions" :key="index">
                    <li class="mb-3">{{index + 1}}. {{instruction}}</li>
                </ul>
              
            </div>
          </main>

          <!-- <aside>
            <div class="bg-white p-6 rounded-lg shadow-md mt-6">
              <h3 class="text-xl font-bold mb-6">Manage Recipe</h3>
              <a
                href="add-job.html"
                class="bg-green-500 hover:bg-green-600 text-white text-center font-bold py-2 px-4 rounded-full w-full focus:outline-none focus:shadow-outline mt-4 block"
                >Edit Recipe</a
              >
              <button
                class="bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-4 rounded-full w-full focus:outline-none focus:shadow-outline mt-4 block"
              >
                Delete Recipe
              </button>
            </div>
          </aside> -->
        </div>
      </div>
    </section>
</template>