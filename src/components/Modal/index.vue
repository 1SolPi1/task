<template>
    <transition name="modal">
        <div v-if="showModal" @click.self="close" class="modal">
            <span class="close_button" @click="close">X</span>
            <div @click.self="close" class="modal__content">
                <component :is="current" :payload="payload" @close="close" />
            </div>
        </div>
    </transition>
</template>

<script>
    import { mapGetters, mapMutations } from 'vuex';
    export default {
        name: 'Modal',
        components: {
            Add: () => import('./components/Add'),
            Detail: () => import('./components/Detail'),
        },
        methods: {
            ...mapMutations('modal', {
                close: 'CLOSE_MODAL',
            }),
        },
        computed: {
            ...mapGetters('modal', {
                current: 'CURRENT',
                showModal: 'SHOW_MODAL',
                payload: 'MODAL_PAYLOAD',
            }),
        },
    };
</script>

<style lang="scss" scoped>
    .modal {
        position: fixed;
        top: 0;
        right: 0;
        bottom: 0;
        left: 0;
        z-index: 1000;

        display: flex;
        align-items: center;
        justify-content: center;

        background-color: rgba(58, 58, 58, 0.3);

        &__content {
            display: flex;
            flex: 1;
            justify-content: center;
        }
    }

    .modal-enter,
    .modal-leave-to {
        background: transparent;

        .modal__content {
            transform: scale(0);
        }
    }

    .modal-enter-active,
    .modal-leave-active {
        transition: all 0.3s;

        .modal__content {
            transition: all 0.3s ease-out;
        }
    }
    .close_button {
        position: fixed;
        top: 3px;
        right: 3px;
        z-index: 1001;
        cursor: pointer;
        color: white;
        display: none;
        @media (max-width: 800px) {
            display: none;
        }
    }
</style>
