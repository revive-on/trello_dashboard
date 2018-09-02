<template>
    <div>
        <main-task></main-task>
    </div>
</template>

<script>
    import MainTask from './MainTask.vue';
    export default {
        name: "tab",
        components: {
            MainTask,
        },
        props: {
            user: Object
        }
    }
</script>

<style scoped>

</style>