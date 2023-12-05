import {createRouter, createWebHistory } from "vue-router";
import SessionView from '../views/SessionView.vue';
import UserView from '../views/UserView.vue';

const routes =[
    {
        path: '/',
        name: 'home',
        component: SessionView
    },
    {
        path: '/user',
        name: 'user',
        component: UserView
    }
]

//create router
const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router;