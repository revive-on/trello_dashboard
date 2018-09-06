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
            user: Object
        },
        data() {
            return {
                tasks: []
            }
        },
        created: function () {
            let self = this;
            axios.get('/api/trello/filter/'+self.user.trelloId).then(function (response) {
                self.tasks = response.data;
                console.log(self.tasks);
            })
        }
    }
</script>

<style scoped>

</style>