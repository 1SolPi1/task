<template>
    <div class="main flex">
        <div class="main__content container flex">
            <TaskComponent v-for="task in list" :key="task.id" :task="task"/>
        </div>
    </div>
</template>

<script>
    import TaskComponent from "./TaskComponent";

    export default {
        name: "Main",
        components: {TaskComponent},

        data: () => ({
           list: []
        }),

        created() {
            this.$socket.emit('getAll', '')

            this.sockets.listener.subscribe('task', (data) => {
                this.list = data
            });
        },
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