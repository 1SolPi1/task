<template>
    <div class="header flex">
        <div class="header__content flex container">
            <span class="title">MyTaskApp</span>
            <button class="add__task" @click="openModal({name: 'Add'})">+</button>
        </div>
    </div>
</template>

<script>
    import { mapActions } from 'vuex';

    export default {
        name: "Header",

        methods: {
            ...mapActions('modal', {
                openModal: 'open_modal',
            }),
        },
    }
</script>

<style lang="scss" scoped>
.header{
    width: 100%;
    height: 80px;

    justify-content: flex-start;

    color: #fff;

    background: $def-background;

    &__content {
        justify-content: space-between;
    }
}

.title {
    font-size: 24px;
    font-weight: bolder;
}

.add__task {
    width: 40px;
    height: 40px;

    border-radius: 50%;

    cursor: pointer;

    border: 2px solid white;

    outline: none;

    background: transparent;

    color: white;

    font-size: 30px;
}
</style>