<template>
    <div class="footer flex">
        <div class="footer__content flex container">
            <a href="https://github.com/1SolPi1">Made by Solpi</a>
            <span>&copy; 2020</span>
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
        justify-content: space-between;
    }

    a {
        color: white;
        font-size: 22px;
    }
}
</style>