<template>
    <form @submit.prevent="addPost" style="width: 400px; margin: 30px auto">
        <div class="form-group">
            <label for="title">Title</label>
            <input
                    type="text"
                    id="title"
                    class="form-control"
                    placeholder="Enter title"
                    v-model="post.title"
                    minlength="2"
                    required
            >
        </div>
        <div class="form-group">
            <label for="textarea">Text</label>
            <div class="form-group">
                <textarea
                        class="form-control"
                        id="textarea"
                        rows="3"
                        v-model="post.text"
                        placeholder="Text"
                        maxlength="300"
                        required
                />
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
                post: {
                    title: '',
                    text: ''
                }
            }
        },

        methods: {
            addPost() {
                if (this.$route.params.id) {
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
            }
        }
    }
</script>