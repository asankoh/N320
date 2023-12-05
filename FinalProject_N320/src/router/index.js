import {createRouter, createWebHistory } from "vue-router";
import MemberView from '../views/MemberView.vue';
import TeamView from '../views/TeamView.vue';
import SessionView from '../views/SessionView.vue';
import UserView from '../views/UserView.vue';

const routes =[
    {
        path: '/',
        name: 'home',
        component: MemberView
    },
    {
        path: '/user',
        name: 'user',
        component: TeamView
    }
]

//create router
const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router;