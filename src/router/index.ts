import { createRouter, createWebHistory, type RouteRecordRaw  } from 'vue-router';

import HomeView from '../views/HomeView.vue';
import RecipesView from '@/views/RecipesView.vue';
import NotFoundView from '@/views/NotFoundView.vue';

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
    },
    {
        path: "/:catchAll(.*)",
        name: "NotFound",
        component: NotFoundView,
    },

];

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes
});

export default router;