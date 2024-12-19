<script setup lang="ts">
import { defineProps} from 'vue';
import { Recipe } from './types';
import 'primeicons/primeicons.css'

const props = defineProps<{
    recepie:Recipe;
}>();

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
                <ul v-for="(ingredients,index) in props.recepie.ingredients" :key="index">
                    <li>{{index + 1}}. {{ingredients.quantity}} {{ingredients.item }}</li>
                </ul>
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
            to=""
            class="h-[36px] bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded-lg text-center text-sm">
                Read instructions
            </RouterLink>
        </div>
    </div>
</template>