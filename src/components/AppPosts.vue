<template>
    <app-card :posts="posts" slot-scope="postProps">
        <div slot-scope="postProps">
            <router-link
                    class="btn btn-primary"
                    type="button"
                    :to="{name: 'showPost', params: {id: postProps.post.id}}"
            >View post</router-link>
            <router-link
                    class="btn btn-danger"
                    type="button"
                    :to="{name: 'editPost', params: {id: postProps.post.id}}">Edit</router-link>
            <button class="btn btn-dark" @click="deletePost(postProps.post.id)">Delete post</button>
        </div>
    </app-card>
</template>

<script>
    import { postsService } from "../services/Posts";
    import Card from './AppCard'
    export default {
        data() {
            return {
                posts: []
            }
        },

        components: {
            appCard: Card
        },

        methods: {
            deletePost(id) {
                postsService.delete(id);
                this.posts.filter(post => post.id !== id);
            }
        },

        async created() {
            const { data } = await postsService.getAll();
            this.posts = data;
        }
    }
</script>