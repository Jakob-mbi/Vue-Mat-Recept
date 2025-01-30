<script setup lang="ts">
    import Logo from '../assets/img/logo.svg';
    import {RouterLink,useRoute} from 'vue-router';

    const isActiveLink = (routePath: string) => {
        const route = useRoute();
        return route.path === routePath;
    }
</script>

<template>
    

    <nav class="bg-white border-gray-200 dark:bg-gray-900">
        <div class="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
            <RouterLink to="/" class="flex items-center space-x-3 rtl:space-x-reverse">
                <img :src="Logo" class="h-10" alt="Logo" />
                <span class="self-center text-2xl font-semibold whitespace-nowrap text-green-700 dark:text-white">Food Recipe Genrator</span>
            </RouterLink>

            <div class="w-full block md:w-auto" id="navbar-default">
                <ul class="font-medium flex flex-col p-4 md:p-0 mt-4  md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
                    <li>
                        <RouterLink to="/" :class="[isActiveLink('/')?'text-green-900':'hover:text-green-700']">
                            Home</RouterLink>
                    </li>
                    <li>
                        <RouterLink to="/recipes" :class="[isActiveLink('/recipes')?'text-green-900':'hover:text-green-700']">
                            Recipes</RouterLink>
                    </li> 
                </ul>
            </div>
        </div>
    </nav>
</template>