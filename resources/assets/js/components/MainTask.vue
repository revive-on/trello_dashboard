<template>
    <div>
        <div class="card">
             <div class="card-body">
                 <p class="card-text"><span class="badge badge-info">ISSUE-{{task.idShort}}</span> {{task.name}}</p>
                 <p class="cart-text">Start date : {{task.start}}<br/>
                     Due date : {{task.due}}</p>
                 <button type="button" data-toggle="collapse" class="btn btn-sm btn-secondary" :data-target="task.id" aria-expanded="false" aria-controls="task.id">내용보기...</button>
             </div>
            <div class="collapse mt-2" :id="task.id" v-model="showDesc[task.id]">
                <div class="card card-body">{{task.desc}}</div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "main-task",
        data() {
            return {}
        },
        props: {
            task: Object
        },
        computed: {}
    }
</script>

<style scoped>

</style>