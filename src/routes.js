import VueRouter from 'vue-router';
import AppPosts from './components/AppPosts';

const routes = [
    { path: '/posts', name: 'posts', component: AppPosts},
];

export const router = new VueRouter({
    mode: 'history',
    routes
});