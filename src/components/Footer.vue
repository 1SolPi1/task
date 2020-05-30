<template>
    <div class="footer flex">
        <div class="footer__content flex container">
            FOoter
        </div>
    </div>
</template>

<script>
    export default {
        name: "Footer"
    }
</script>

<style lang="scss" scoped>
.footer {
    position: fixed;
    bottom: 0;

    width: 100%;

    color: #fff;

    height: 80px;
    background: $def-background;

    &__content {
        justify-content: flex-start;
    }
}
</style>