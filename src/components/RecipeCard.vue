<script setup lang="ts">
import { defineProps} from 'vue';
import { Recipe } from './types';

const props = defineProps<{
    recepie:Recipe;
}>();

</script>

<template>
    <div class="bg-white rounded-xl shadow-md relative m-5">
        <div class="p-4">
            <div class="mb-6">
                <div class="text-gray-600 my-2">{{ props.recepie.servings }}</div>
                <h3 class="text-xl font-bold">{{ props.recepie.name }}</h3>
            </div>

       
            <div class="mb-5">
                <ul v-for="instructions in props.recepie.instructions" :key="props.recepie.id">
                    <li>{{ instructions }}</li>
                </ul>
            </div>
            
            

            <div class="border border-gray-100 mb-5"></div>

            <div class="flex flex-col lg:flex-row justify-between mb-4">
         
            </div>
        </div>
    </div>
</template>