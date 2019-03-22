import VueRouter from 'vue-router';
import AppPosts from './components/AppPosts';
import AppSinglePost from './components/AppSinglePost'

const routes = [
    { path: '/posts', name: 'posts', component: AppPosts},
    { path: '/posts/:id', name: 'showPost', component: AppSinglePost},
];

export const router = new VueRouter({
    mode: 'history',
    routes
});