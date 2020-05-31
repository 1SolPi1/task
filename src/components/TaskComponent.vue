<template>
    <div class="task" @click="openDetailTask">
        <div class="task__header flex">
            <span class="task__slug">#Task-{{ task.id + 1 }}</span>
            <span class="task__time">{{ task.date }}</span>
        </div>

        <div class="task__main flex">
            <span class="task__name">{{ task.name }}</span>
        </div>

        <div class="task__footer flex">
            <span class="task__category">{{ task.category }}</span>
            <span class="task__type">{{ task.personal }}</span>
        </div>
    </div>
</template>

<script>
    import { mapActions } from 'vuex';

    export default {
        name: "TaskComponent",

        props: {
            task: {
                type: Object,
                default: () => ({})
            }
        },

        methods: {
            ...mapActions('modal', {
                openModal: 'open_modal',
            }),

            openDetailTask() {
                this.openModal({
                    name: 'Detail',
                    payload: this.task
                })
            }
        },
    }
</script>

<style lang="scss" scoped>
.task {
    width: 350px;
    height: 200px;

    margin-bottom: 20px;

    border-radius: 10px;

    border: 1px solid grey;

    cursor: pointer;

    padding: 10px;

    &__header {
        justify-content: space-between;
    }

    &__slug {
        color: #5a5a5a;
        font-size: 12px;
    }

    &__time {
        color: #5a5a5a;
        font-size: 12px;
    }

    &__main {
        height: 80%;
    }

    &__name {
        color: #000;
        font-size: 20px;
    }

    &__footer {
        justify-content: space-between;
    }

    &__category {
        color: #5a5a5a;
        font-size: 14px;
    }

    &__type {
        color: #5a5a5a;
        font-size: 14px;
    }
}
</style>