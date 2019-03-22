import VueRouter from 'vue-router';
import AppPosts from './components/AppPosts';
import AppSinglePost from './components/AppSinglePost';
import AppAddPost from './components/AppAddPost'

const routes = [
    { path: '/edit/:id', name: 'editPost', component: AppAddPost},
    { path: '/posts/:id', name: 'showPost', component: AppSinglePost},
    { path: '/add', name: 'addPost', component: AppAddPost},
    { path: '/posts', name: 'posts', component: AppPosts},
];

export const router = new VueRouter({
    mode: 'history',
    routes
});