import { createWebHistory, createRouter } from "vue-router";
import Main from '../Page/Main'
import Basket from '../Page/Basket'
import Catalogue from "../Page/Catalogue";
import Search from "../Page/Search";
import Delivery from "../Page/Delivery";

const routes = [
    {
        path: '/',
        name: 'main',
        component: Main,
    },
    {
        path: '/catalogue/:categor',
        name: 'catalogue',
        component: Catalogue,
    },
    {
        path: '/search/:value',
        name: 'search',
        component: Search,
    },
    {
        path: '/basket',
        name: 'basket',
        component: Basket,
    },
    {
        path: '/delivery',
        name: 'delivery',
        component: Delivery,
    },
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router




