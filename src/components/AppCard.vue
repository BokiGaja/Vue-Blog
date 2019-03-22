<template>
    <div class="container">
        <div class="card text-center" v-for="post in posts" :key="post.id" style="width: 400px; margin: 20px auto">
            <div>
                <div class="card-body">
                    <div class="row"></div>
                    <h5 class="card-title">{{ post.title }}</h5>
                    <slot :post="post"></slot>
                    <p class="card-text">{{ post.text }}</p>
                </div>
                <div class="card-footer text-muted">
                    Created at: {{ post.createdAt | formatDate | diffForHumans}}
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import { formatDate } from "../mixins/DateMixin";
    export default {
        props: ['posts'],

        mixins: [formatDate],

    }
</script>