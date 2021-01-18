import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router';
// import Home from '/@pages/Products/index.vue';
import Home from "@pages/Products/index.vue";
const routes: Array<RouteRecordRaw> = [
    {
        path: '/',
        name: 'product',
        component: Home
    }, {
        path: '/shoppingCart',
        name: 'shoppingCart',
        component: import(/* webpackChunkName: "shoppingCart" */ '@pages/ShoppingCart/index.vue'),
    }
];

const router = createRouter({
    history: createWebHistory(),
    routes
});

export default router;