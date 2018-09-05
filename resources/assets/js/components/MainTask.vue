<template>
    <div>
        <b-card>
            <p class="card-text">{{task.name}}</p>
            <b-btn v-b-toggle.collapse1_inner size="sm">내용보기...</b-btn>
            <b-collapse id=collapse1_inner class="mt-2">
                <b-card>{{task.desc}}</b-card>
            </b-collapse>
        </b-card>
    </div>
</template>

<script>
    export default {
        name: "main-task",
        props: {
            task: Object
        },
    }
</script>

<style scoped>

</style>