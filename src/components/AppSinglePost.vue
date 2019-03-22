<template>
    <app-card :posts="posts" />
</template>

<script>
    import Card from './AppCard';
    import { postsService } from "../services/Posts";

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
            const {data} = await postsService.get(this.$route.params.id);
            this.posts.push(data)
        }
    }
</script>