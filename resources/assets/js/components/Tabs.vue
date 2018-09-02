<template>
    <b-tabs>
        <b-tab v-for="(user,index) in userList" :title="user.name" :key="index">
            <tab :user="user"></tab>
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
        data: function () {
            return {
                userList: [
                    {
                        "name": "김지수"
                    },
                    {
                        "name": "신벼리"
                    },
                    {
                        "name": "김대훈"
                    },
                ]
            }
        }
    }
</script>

<style scoped>

</style>