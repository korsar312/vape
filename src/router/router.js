import { createWebHistory, createRouter } from "vue-router";
import Main from '../Page/Main'
import Basket from '../Page/Basket'
import Catalogue_liq from "../Page/Catalogue_liq";
import Catalogue_snus from "../Page/Catalogue_snus";
import Catalogue_pods from "../Page/Catalogue_pods";

const routes = [
    {
        path: '/',
        name: 'main',
        component: Main,
    },
    {
        path: '/catalogue_liq',
        name: 'catalogue_liq',
        component: Catalogue_liq,
    },
    {
        path: '/catalogue_snus',
        name: 'catalogue_snus',
        component: Catalogue_snus,
    },
    {
        path: '/catalogue_pods',
        name: 'catalogue_pods',
        component: Catalogue_pods,
    },
    {
        path: '/basket',
        name: 'basket',
        component: Basket,
    },
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router




