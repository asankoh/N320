import {createRouter, createWebHistory}  from 'vue-router';
import MemberView from '../views/MemberView.vue';

const routes = [
    {
        path:'/',
        name:'home',
        component: MemberView
    }
]

const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router;