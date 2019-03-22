<template>
    <div class="card text-center">
        <div v-for="post in posts" :key="post.id">
        <div class="card-body">
            <div class="row"></div>
            <h5 class="card-title">{{ post.title }}</h5>
            <slot :post="post"></slot>
            <p class="card-text">{{ post.text }}</p>
        </div>
        <div class="card-footer text-muted">
            Created at: {{ post.createdAt }}
        </div>
        </div>
    </div>
</template>

<script>
    export default {
        props: ['posts']
    }
</script>