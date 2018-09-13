<template>
    <div>

        <div v-for="task in tasks">
            <main-task :task="task"></main-task>
        </div>
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
            user: Object,
            tasks: Array
        },
        data() {
            return {
            }
        },
        created: function () {

        }
    }
</script>

<style scoped>

</style>