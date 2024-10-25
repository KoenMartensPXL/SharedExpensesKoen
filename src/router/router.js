import { createRouter, createWebHistory } from 'vue-router';
import LoginForm from '../components/Login.vue';
import RegisterForm from '../components/Register.vue';
import HomePage from '../views/HomePage.vue';
import CreateGroup from '../components/GroupCreate.vue';
import JoinGroup from '../components/GroupJoin.vue';
import ViewGroups from '../components/GroupView.vue';

const routes = [
    {
        path: '/',
        redirect: '/login',
    },
    {
        path: '/login',
        component: LoginForm,
    },
    {
        path: '/register',
        component: RegisterForm,
    },
    {
        path: '/home',
        component: HomePage,
        meta: { requiresAuth: true }
    },
    {
        path: '/create-group',
        component: CreateGroup,
        meta: { requiresAuth: true }
    },
    {
        path: '/join-group',
        component: JoinGroup,
        meta: { requiresAuth: true }
    },
    {
        path: '/view-groups',
        component: ViewGroups,
        meta: { requiresAuth: true }
    },
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

router.beforeEach((to, from, next) => {
    const token = localStorage.getItem('token');

    if (to.matched.some(record => record.meta.requiresAuth)) {
        if (!token) {
            next({
                path: '/login',
            });
        } else {
            next();
        }
    } else {
        next();
    }
});

export default router;
