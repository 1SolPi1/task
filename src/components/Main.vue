<template>
    <div class="main flex">
        <div class="main__content container flex">
            <TaskComponent v-for="task in tasks" :key="task.id" :task="task"/>
        </div>
    </div>
</template>

<script>
    import TaskComponent from "./TaskComponent";

    import { mapActions, mapState } from 'vuex';
    export default {
        name: "Main",
        components: {TaskComponent},

        computed: {
            ...mapState(['tasks'])
        },

        methods: {
            ...mapActions(["getAllTasks"])
        },
        mounted() {
            this.getAllTasks()
        }
    }
</script>

<style lang="scss" scoped>
.main {
    padding: 10px 0 80px;

    &__content {
        flex-direction: row;
        justify-content: space-between;

        flex-wrap: wrap;
    }
}
</style>