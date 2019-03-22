<template>
    <app-card :posts="posts" slot-scope="postProps">
        <div slot-scope="postProps">
            <router-link
                    class="btn btn-primary"
                    type="button"
                    :to="{name: 'showPost', params: {id: postProps.post.id}}"
            >View post</router-link>
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

        async created() {
            const { data } = await postsService.getAll();
            this.posts = data;
        }
    }
</script>