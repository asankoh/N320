import {createRouter, createWebHistory}  from 'vue-router';
import MemberView from '../views/MemberView.vue';
import TeamView from '../views/TeamView.vue';

const routes = [
    {
        path:'/',
        name:'home',
        component: MemberView
    },
    {
        path: '/teams',
        name: "teams",
        component: TeamView
    }
]

const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router;