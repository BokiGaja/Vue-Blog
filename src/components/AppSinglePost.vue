<template>
    <div class="container">
        <app-card :posts="posts">
            <router-link :to="{name: 'posts'}" class="btn btn-primary">Go back</router-link>
        </app-card>
        <div class="card" style="width: 18rem; height: 40px" v-for="comment in comments" :key="comment.id">
            <div class="card-text">
                <p class="card-text">{{ comment.text }}</p>
            </div>
        </div>
        <app-add-comment @commentAdded="storeComment"/>
    </div>
</template>

<script>
    import Card from './AppCard';
    import { postsService } from "../services/Posts";
    import AddComment from './AppAddComment'
    export default {
        data() {
            return {
                posts: [],
                comment: {
                    title: '',
                    text: ''
                },
                comments: []
            }
        },

        components: {
            appCard: Card,
            appAddComment: AddComment
        },

        methods: {
            storeComment(event) {
                postsService.addComment(event, this.posts[0].id);
                location.reload();
            }
        },

        async created() {
            const {data} = await postsService.get(this.$route.params.id);
            console.log(data);
            this.posts.push(data);
            this.comments = [...data.comments];
        }
    }
</script>