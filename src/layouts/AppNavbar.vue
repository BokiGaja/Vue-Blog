<template>
    <nav class="navbar navbar-dark bg-dark">
        <form class="form-inline">
            <router-link :to="{name: 'posts'}" class="btn btn-outline-success" type="button" style="background-color: black">Posts</router-link>
            <router-link :to="{name: 'addPost'}" class="btn btn-outline-success" type="button" style="background-color: black">Add</router-link>
        </form>
    </nav>
</template>

<script>
    export default {

    }
</script>