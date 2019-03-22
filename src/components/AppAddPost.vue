<template>
    <form @submit.prevent="addPost">
        <div class="form-group">
            <label for="title">Title</label>
            <input type="text" id="title" class="form-control" placeholder="Enter title" v-model="post.title">
        </div>
        <div class="form-group">
            <label for="textarea">Text</label>
            <div class="form-group">
                <textarea class="form-control" id="textarea" rows="3" v-model="post.text" placeholder="Text"/>
            </div>
        </div>
        <button type="submit" class="btn btn-primary">Submit</button>
        <button type="reset" class="btn btn-danger">Reset</button>
    </form>
</template>

<script>
    import { postsService } from "../services/Posts";

    export default {
        data() {
            return {
                editing: false,
                post: {
                    title: '',
                    text: ''
                }
            }
        },

        methods: {
            addPost() {
                if (this.editing) {
                    postsService.edit(this.post.id, this.post);
                    this.$router.push('/posts');
                } else {
                    postsService.createPost(this.post);
                    this.$router.push('/posts')
                }
            }

        },

        async created() {
            if (this.$route.params.id) {
                const {data} = await postsService.get(this.$route.params.id);
                this.post = data;
                console.log(this.post);
                this.editing = true;
            }
        }
    }
</script>