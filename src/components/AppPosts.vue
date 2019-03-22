<template>
    <app-card :posts="posts"/>
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

        async created() {
            const { data } = await postsService.getAll();
            this.posts = data;
        }
    }
</script>