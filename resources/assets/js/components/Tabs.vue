<template>
    <b-tabs>
        <b-tab v-for="user in userList" :title="user.name" :key="user.trelloId">
            <tab :user="user" :tasks="tasks[user.trelloId]"></tab>
        </b-tab>
    </b-tabs>
</template>

<script>
    import Tab from './Tab.vue';

    export default {
        name: "tabs",
        components: {
            Tab,
        },
        data() {
            return {
                customFieldId: '',
                userList: [
                    {
                        "name": "김지수",
                        "trelloId": "user19272453"
                    },
                    {
                        "name": "신벼리",
                        "trelloId": "soyagok11"
                    },
                    {
                        "name": "김대훈",
                        "trelloId": "velmont"
                    },
                ],
                tasks: []
            }
        },
        created() {
            let self = this;
            let ids = [];
            self.userList.forEach(
                function addId(value) {
                    ids.push(value.trelloId);
                }
            );
            axios.post('/api/trello/filter', {
                memberNames: ids
            }).then(function (response) {
                self.tasks = response.data;
            });
        },
    }
</script>

<style scoped>

</style>