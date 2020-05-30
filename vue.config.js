module.exports = {
    css: {
        loaderOptions: {
            sass: {
                prependData: `
                    @import "@/assets/style.scss";
                    @import "@/assets/variables.scss";
                    @import "@/assets/reset.scss";
                `,
            },
        },
    },
};