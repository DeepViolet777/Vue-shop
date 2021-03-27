module.exports = {
    css: {
        loaderOptions: {
            sass:{
                data: `
                @import "@/style/style.scss";
                @import "@/style/variables.scss";
                `
            }
        }

    }
}