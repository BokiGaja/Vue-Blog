<template>
    <form @submit.prevent="addComment" style="margin-top: 50px">
        <div class="form-group">
            <label for="textarea">Comment</label>
            <div class="form-group">
                <textarea
                        class="form-control"
                        id="textarea"
                        rows="3"
                        v-model="comment.text"
                        placeholder="Text"
                        required
                />
            </div>
        </div>
        <button type="submit" class="btn btn-primary">Submit</button>
        <button type="reset" class="btn btn-danger">Reset</button>
    </form>
</template>

<script>
    export default {
        data() {
            return {
                comment: {
                    text: ''
                }
            }
        },

        methods: {
            addComment() {
                this.$emit('commentAdded', {...this.comment})
            }
        }
    }
</script>