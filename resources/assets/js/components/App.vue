<template>
    <div id="app">
        <app-dash></app-dash>
    </div>
</template>

<script>
    import AppDash from 'va/App.vue';

    export default {
        components: {
            Tabs, 'app-dash': AppDash,
        },
        methods: {},

    }
</script>
<style>
    #app {
        margin-left: 1em;
    }

    .heading h1 {
        margin-bottom: 0;
    }
</style>