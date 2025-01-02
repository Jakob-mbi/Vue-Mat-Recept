import { createRouter, createWebHistory, type RouteRecordRaw  } from 'vue-router';

import HomeView from '../views/HomeView.vue';
import RecipesView from '@/views/RecipesView.vue';

const routes: Array<RouteRecordRaw> = [
    {
        path: '/',
        name: 'Home',
        component: HomeView
    },
    {
        path: '/recipes',
        name: 'Recipes',
        component: RecipesView
    },
    {
        path: '/recip/:id',
        name: 'Recipe',
        component: RecipesView
    }

];

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes
});

export default router;