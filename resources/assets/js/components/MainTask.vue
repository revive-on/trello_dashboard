<template>
    <div>
        <b-card>
            <p class="card-text">{{task.name}}</p>
            <b-btn v-b-toggle="task.id" size="sm">내용보기...</b-btn>
            <b-collapse :id="task.id" class="mt-2">
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