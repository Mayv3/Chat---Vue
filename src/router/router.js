import {createRouter, createWebHashHistory} from "vue-router";

import Home from '../pages/Home.vue';
import Chat from '../pages/Chat.vue';
import Login from '../pages/Login.vue';
import Register from '../pages/Register.vue';

const routes = [ 
    {path: '/',name: 'home', component: Home},
    {path: '/chat',name: 'chat', component: Chat},
    {path: '/login',name: 'login', component: Login},
    {path: '/register',name: 'register', component: Register},
]

const router = createRouter({
    routes,
    history : createWebHashHistory()
})

export default router;