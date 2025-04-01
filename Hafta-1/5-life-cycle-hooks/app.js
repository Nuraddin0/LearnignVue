const app = Vue.createApp({
    data() {
        return {
            title: 'Test Basligi',
            itemList: [],
        }
    },
    beforeCreate() {
        console.log("beforeCreate Calisti....")
    },
    created() {
        console.log("created Calisti....")
        setTimeout(() => {
            this.itemList = [1,2,3,4,5,6,7,8,9,10]
        }, 2000)
    },
    beforeMount() {
        console.log("beforeMount Calisti....")
    },
    mounted() {
        console.log("mounted Calisti....")
    },
    beforeUpdate() {
        console.log("beforeUpdate Calisti....")
    },
    updated() {
        console.log("updated Calisti....")
    },
    beforeUnmount() {
        console.log("beforeUnmount Calisti....")
    },
    unmounted() {
        console.log("unmounted Calisti....")
    },
});

app.mount("#app");


setTimeout(() => {
    app.unmount();
}, 5000)    // 5 saniye sonra unmount edilecek.